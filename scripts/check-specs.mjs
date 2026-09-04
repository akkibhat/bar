/**
 * Three checks that the specs cannot fail quietly.
 *
 * The book's prose restates numbers that live in the specs, and nothing
 * links the two, so a spec can move and a sentence goes wrong with no
 * error anywhere. This script catches the three cases that are cheap to
 * state exactly:
 *
 *   1. A family's `ratio` must agree with its archetype's spec. Four of
 *      the six did not when this was written.
 *   2. A spec's `method` and its `note` must not contradict each other
 *      about how the drink is made - "Shake and strain" in one field and
 *      "built in the glass" in the other is a real bug this found.
 *   3. A chapter that counts its own drinks must count them right. Three
 *      standfirsts were wrong the moment ten specs were added.
 *
 * It loads the chapter modules the same way chapters-out does, so it
 * reads the typed data directly and needs no parsing of its own.
 *
 *   npm run check:specs
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(import.meta.dirname, '..');
const CHAPTERS_DIR = path.join(ROOT, 'lib', 'content', 'chapters');

const { FAMILIES } = await import(
  pathToFileURL(path.join(ROOT, 'lib', 'content', 'families.ts')).href
);

const specs = new Map();
const chapters = [];
for (const name of fs.readdirSync(CHAPTERS_DIR)) {
  if (!name.endsWith('.ts')) continue;
  const mod = await import(pathToFileURL(path.join(CHAPTERS_DIR, name)).href);
  for (const value of Object.values(mod)) {
    if (!Array.isArray(value)) continue;
    for (const chapter of value) {
      chapters.push(chapter);
      for (const block of chapter.body ?? []) {
        if (block.kind === 'spec') specs.set(block.spec.name, block.spec);
      }
    }
  }
}

const failures = [];

/* ------------------------------------------------------------------ *
 * 1. Family ratio against the archetype
 *
 * A ratio is read as the spirit's share against the next two roles, in
 * the order the spec lists them. Ratios written in prose - "Varies", a
 * range, "anywhere from" - are skipped, which is the opt-out: a family
 * that cannot be reduced to three numbers says so in words.
 * ------------------------------------------------------------------ */
/* ml for the measures the specs write in words. Deliberately explicit
   and deliberately short: a bar spoon of sugar dissolves to about 7.5 ml
   of syrup, which is the house convention the Daiquiri sets. Anything
   not here - 'Top', 'To taste', 'Rinse', a cube - is not a measure. */
const UNITS = [
  [/(\d+(?:\.\d+)?)\s*ml\b/, 1],
  [/(\d+(?:\.\d+)?)\s*bar spoons?\b/, 7.5],
  [/(\d+(?:\.\d+)?)\s*tsp\b/, 5],
];

function mlOf(line) {
  for (const [re, factor] of UNITS) {
    const m = re.exec(line.amount ?? '');
    if (m) return Number(m[1]) * factor;
  }
  return null;
}

function parseRatio(text) {
  if (/varies|anywhere|from|to\s+\d/i.test(text)) return null;
  const m = /(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)/.exec(text);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
}

for (const family of FAMILIES) {
  const want = parseRatio(family.ratio ?? '');
  if (!want) continue;
  /* The archetype, or the first member with a spec - the Sidecar family
     is named for a drink the book does not carry. */
  const spec = specs.get(family.archetype)
    ?? family.members.map((m) => specs.get(m)).find(Boolean);
  if (!spec) continue;
  const ml = spec.spec.map(mlOf).filter((n) => n !== null).slice(0, 3);
  if (ml.length < 3) continue;
  const got = ml.map((n) => n / ml[1]);
  const norm = want.map((n) => n / want[1]);
  const off = got.some((g, i) => Math.abs(g - norm[i]) > 0.35);
  if (off) {
    failures.push(
      `family '${family.slug}' says ${family.ratio} but its archetype ${family.archetype} pours ` +
        `${ml.join(' : ')} (${got.map((n) => n.toFixed(2)).join(' : ')})`,
    );
  }
}

/* ------------------------------------------------------------------ *
 * 2. Method against note
 *
 * A small vocabulary of method words. If the note uses one that the
 * method field does not, and the method field uses a different one,
 * the two disagree about how the drink is made.
 * ------------------------------------------------------------------ */
const WORDS = [
  ['shake', /\bshak(e|en|ing)\b/i],
  ['stir', /\bstir(red|ring)?\b/i],
  /* "built in the glass" is a method; "built on tea" and "the historic
     build" are not, so the word has to be followed by where. */
  ['build', /\bbuil[dt] (in|over) (the|a) glass\b/i],
  ['muddle', /\bmuddl(e|ed|ing)\b/i],
  ['layer', /\blayer(ed)?\b/i],
  ['roll', /\broll(ed|ing)?\b/i],
];

for (const spec of specs.values()) {
  if (!spec.note) continue;
  const inMethod = WORDS.filter(([, re]) => re.test(spec.method)).map(([w]) => w);
  const inNote = WORDS.filter(([, re]) => re.test(spec.note)).map(([w]) => w);
  /* The note may explain the method or mention another drink's; only a
     note that names a method the field lacks, while the field names one
     the note lacks, is a contradiction. Stir/build are one gesture. */
  const same = (a, b) => a === b || (['stir', 'build'].includes(a) && ['stir', 'build'].includes(b));
  const noteOnly = inNote.filter((w) => !inMethod.some((m) => same(m, w)));
  const methodOnly = inMethod.filter((w) => !inNote.some((n) => same(n, w)));
  if (noteOnly.length && methodOnly.length) {
    failures.push(
      `${spec.name}: method says "${spec.method}" but the note says ${noteOnly.join('/')}`,
    );
  }
}

/* ------------------------------------------------------------------ *
 * 3. A chapter that counts its own drinks
 *
 * Standfirsts say things like "Eleven drinks off one template". Adding a
 * spec does not update that sentence, and three of them were wrong the
 * moment ten drinks went in. The standalone pages avoid this by
 * interpolating - `${GLASSES.length} glasses` - but a chapter standfirst
 * is data that also round-trips to Markdown by hand, so it cannot.
 *
 * Only a number immediately before "drink" or "spec" is checked, which
 * keeps it away from the many other numbers in this book.
 * ------------------------------------------------------------------ */
const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

const asNumber = (token) => {
  const i = NUMBER_WORDS.indexOf(token.toLowerCase());
  return i !== -1 ? i : Number(token);
};

const COUNTS = new RegExp(
  `\\b(\\d+|${NUMBER_WORDS.join('|')})\\s+(?:more\\s+)?(?:drinks?|specs?)\\b`,
  'gi',
);

for (const chapter of chapters) {
  const total = (chapter.body ?? []).filter((b) => b.kind === 'spec').length;
  if (total === 0) continue;
  /* The standfirst, and the paragraph that opens the chapter - the two
     places a chapter introduces itself by size. */
  const opener = (chapter.body ?? []).find((b) => b.kind === 'p')?.text ?? '';
  for (const [where, text] of [['standfirst', chapter.standfirst ?? ''], ['opening', opener]]) {
    for (const m of text.matchAll(COUNTS)) {
      const said = asNumber(m[1]);
      if (Number.isFinite(said) && said !== total) {
        failures.push(
          `ch${chapter.n} ${chapter.title}: ${where} says "${m[0]}" but the chapter has ${total}`,
        );
      }
    }
  }
}

if (failures.length) {
  console.error(`check:specs - ${failures.length} problem(s)`);
  for (const f of failures) console.error('  ' + f);
  process.exit(1);
}
console.log(`check:specs - ${specs.size} specs, ${FAMILIES.length} families, no contradictions`);

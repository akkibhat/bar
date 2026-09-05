/**
 * Four checks that the specs cannot fail quietly.
 *
 * The book's prose restates numbers that live in the specs, and nothing
 * links the two, so a spec can move and a sentence goes wrong with no
 * error anywhere. This script catches the four cases that are cheap to
 * state exactly:
 *
 *   1. A family's `ratio` must agree with its archetype's spec. Four of
 *      the six did not when this was written.
 *   2. A spec's `method` and its `note` must not contradict each other
 *      about how the drink is made - "Shake and strain" in one field and
 *      "built in the glass" in the other is a real bug this found.
 *   3. A chapter that counts its own drinks must count them right. Three
 *      standfirsts were wrong the moment ten specs were added.
 *   4. The README and the roadmap must count the book right too. They
 *      restate the same totals as prose and drift the same way, with
 *      nobody reading them again once written.
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
 * 3. Prose that counts something the data already knows
 *
 * The book says "thirty-five recipes" and "Seventeen glasses" in places
 * nothing keeps up to date. Adding ten specs broke chapter 17, which
 * said twenty-five three times, and the first version of this check
 * missed it because chapter 17 holds no specs of its own.
 *
 * So the nouns are named explicitly rather than guessed at. This is
 * deliberately a short list: only counts that are derivable from data
 * are worth checking, and the book is full of "four elements" and "two
 * things" that a checker has no business reading.
 *
 * The standalone pages avoid the problem entirely by interpolating -
 * `${GLASSES.length} glasses` - but a chapter standfirst is data that
 * also round-trips to Markdown by hand, so failing loudly is the next
 * best thing.
 * ------------------------------------------------------------------ */
const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

/**
 * The tens, for the compounds. Held apart from NUMBER_WORDS because
 * that list is indexed by its own position and "thirty" is not the
 * thirtieth entry in it.
 */
const TENS = {
  twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90,
};

/**
 * A written number as a number, or NaN if it is not one.
 *
 * Compounds are split rather than looked up, since listing every
 * "thirty-seven" would be eighty entries to keep in step. Without this
 * they matched the pattern and then fell to NaN, which the callers
 * skip - so every compound in the book went unchecked, quietly.
 */
const asNumber = (token) => {
  const word = token.toLowerCase();

  const dash = word.indexOf("-");
  if (dash !== -1) {
    const tens = TENS[word.slice(0, dash)];
    const units = NUMBER_WORDS.indexOf(word.slice(dash + 1));
    return tens !== undefined && units > 0 ? tens + units : NaN;
  }

  if (TENS[word] !== undefined) return TENS[word];
  const i = NUMBER_WORDS.indexOf(word);
  return i !== -1 ? i : Number(token);
};

const { GLASSES } = await import(pathToFileURL(path.join(ROOT, 'lib', 'glassware.ts')).href);

/* Compounds first, so "twenty-five" is not read as the "five" inside it. */
const NUM = `(?:\\d+|(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)-\\w+|${NUMBER_WORDS.join('|')})`;

/**
 * A counted noun, what it should equal, and where to look.
 *
 * `scope: 'book'` means anywhere in any chapter. `scope: 'own'` means
 * the number describes the chapter it sits in, so it is compared with
 * that chapter's own spec count and only in chapters that have specs.
 */
const REGISTRY = [
  { noun: 'recipes?|specs?', expect: () => specs.size, scope: 'book' },
  { noun: 'glasses', expect: () => GLASSES.length, scope: 'book' },
  { noun: 'families', expect: () => FAMILIES.length, scope: 'book' },
  { noun: 'drinks?', expect: (c) => c.body.filter((b) => b.kind === 'spec').length, scope: 'own' },
];

for (const chapter of chapters) {
  const ownSpecs = (chapter.body ?? []).filter((b) => b.kind === 'spec').length;
  const places = [['standfirst', chapter.standfirst ?? '']];
  for (const b of chapter.body ?? [])
    places.push([b.kind, b.text ?? (b.items ?? []).join('  ')]);

  for (const entry of REGISTRY) {
    if (entry.scope === 'own' && ownSpecs === 0) continue;
    const want = entry.expect(chapter);
    const re = new RegExp(`\\b(${NUM})\\s+(?:more\\s+)?(${entry.noun})\\b`, 'gi');
    for (const [where, text] of places) {
      for (const m of String(text).matchAll(re)) {
        const said = asNumber(m[1]);
        if (Number.isFinite(said) && said !== want) {
          failures.push(
            `ch${chapter.n} ${chapter.title}: ${where} says "${m[0]}" but there are ${want}`,
          );
        }
      }
    }
  }
}

/**
 * The same check against the README and the roadmap.
 *
 * Those two restate the book's numbers as prose - "Thirty-seven chapters"
 * - and drift the same way a standfirst does, with nobody reading them
 * again once they are written. The README had gone stale on two counts
 * before this existed.
 *
 * Only nouns whose total is a fact about the whole book are checked here,
 * so the per-chapter entries in REGISTRY are skipped.
 */
const DOCS = ['README.md', 'ROADMAP.md'];
const DOC_COUNTS = [
  { noun: 'chapters', want: chapters.length },
  { noun: 'recipes?|specs?', want: specs.size },
  { noun: 'families', want: FAMILIES.length },
];

for (const file of DOCS) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) continue;
  const text = fs.readFileSync(full, 'utf8');

  for (const { noun, want } of DOC_COUNTS) {
    const re = new RegExp(String.raw`\b(${NUM})\s+(?:more\s+)?(${noun})\b`, 'gi');
    for (const m of text.matchAll(re)) {
      const said = asNumber(m[1]);
      if (Number.isFinite(said) && said !== want) {
        failures.push(`${file}: says "${m[0]}" but there are ${want}`);
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

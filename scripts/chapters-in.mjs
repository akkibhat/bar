/**
 * Write `_workings/chapters/` back into the chapter files.
 *
 *   npm run chapters:in -- --dry-run   # say what would change
 *   npm run chapters:in                # do it
 *
 * The other half of `chapters-out.mjs`. Edit the prose in
 * `_workings/chapters/`, run this, and the strings in
 * `lib/content/chapters/` are updated in place. Nothing is retyped, so
 * nothing is mistyped.
 *
 * Every chapter is its own Markdown file, and all of them are read on
 * each run. Editing one and leaving the rest alone is the normal case:
 * unchanged blocks are matched, found identical and skipped.
 *
 * HOW IT KNOWS WHAT TO REPLACE
 *
 * It loads the chapters as they stand, so for any anchor it has both
 * sides: the string the source holds now, and the string the Markdown
 * says it should hold. Knowing the old text is the whole trick - without
 * it an edited paragraph could be recognised as changed but not placed.
 *
 * HOW IT IS KEPT SAFE
 *
 * It never rewrites a file wholesale. For each changed block it builds
 * the exact literal the source currently holds, checks that literal
 * appears once and only once in the file, and swaps it. A block whose
 * text has not changed is not touched, so the diff is only ever the
 * edits.
 *
 * If an anchor has gone missing, or a literal is not found, or is found
 * more than once, that block is reported and skipped rather than guessed
 * at. The failure mode is doing nothing, which is recoverable; writing a
 * paragraph into the wrong chapter is not.
 *
 * A LIST THAT CHANGES LENGTH
 *
 * Item-by-item swapping cannot express "five bullets became four", so
 * when the count differs the whole `items` array is rewritten in place.
 * The block stays where it is; only its contents change.
 *
 * WHAT IT WILL NOT TOUCH
 *
 * Anything the exporter marked READ-ONLY - specs and tools. A spec holds
 * more fields than the export shows, so importing one back would drop
 * the ones it cannot see; a tool is a component reference. Adding and
 * deleting blocks is not supported either: both renumber everything
 * after them, and getting that wrong moves prose between chapters. Do
 * those in TypeScript.
 *
 * TABLES
 *
 * Tables do come back in. Edit the cells freely; keep the pipes, the
 * header and the |---| line. Adding or removing a COLUMN is refused,
 * because a column is structure and the source array would have to
 * change shape - but adding, removing and rewriting rows all work.
 *
 * APOSTROPHES
 *
 * The chapter files are single-quoted TypeScript strings. An apostrophe
 * typed in the Markdown is escaped on the way in, so it can never break
 * a build. Backslashes are escaped first, or escaping the apostrophes
 * would then corrupt them.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  parse,
  textOf,
  itemsOf,
  tableOf,
  quoteOf,
} from './chapters-md.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC_DIR = path.join(ROOT, '_workings', 'chapters');
const CHAPTERS_DIR = path.join(ROOT, 'lib', 'content', 'chapters');
const DRY = process.argv.includes('--dry-run');

/* Every chapter is its own file, and all of them are read on each run.
   Editing one and leaving the rest alone is the normal case: the others
   are matched, found identical, and skipped. They are read in name
   order, which is reading order, so the report comes out in the order
   the book does. */
const markdown = fs.existsSync(SRC_DIR)
  ? fs.readdirSync(SRC_DIR).filter((n) => n.endsWith('.md')).sort()
  : [];

if (!markdown.length) {
  console.error(
    `nothing in ${path.relative(ROOT, SRC_DIR).replace(/\\/g, '/')}/ - run "npm run chapters:out" first`,
  );
  process.exit(1);
}

/* ------------------------------------------------------------------ *
 * The chapters as they stand
 * ------------------------------------------------------------------ */

const files = new Map();
const chapters = new Map();

for (const name of fs.readdirSync(CHAPTERS_DIR)) {
  if (!name.endsWith('.ts')) continue;
  const full = path.join(CHAPTERS_DIR, name);
  files.set(name, fs.readFileSync(full, 'utf8'));

  const mod = await import(pathToFileURL(full).href);
  for (const value of Object.values(mod)) {
    if (!Array.isArray(value)) continue;
    for (const c of value) chapters.set(c.slug, { chapter: c, file: name });
  }
}

/* ------------------------------------------------------------------ *
 * Reading the Markdown
 * ------------------------------------------------------------------ */

/**
 * A table as it is written in the source: the `head` line and the `rows`
 * array together, as one literal.
 *
 * Together, because apart they are not unique - the glassware chapter
 * has four tables sharing the header `['Glass', 'Holds', 'What goes in
 * it']`, and swapping on that alone would rewrite the wrong one.
 */
function tableLiteral(head, rows, nl, pad) {
  const arr = (xs) => `[${xs.map((x) => `'${lit(x)}'`).join(', ')}]`;
  return (
    `head: ${arr(head)},${nl}${pad.slice(2)}rows: [${nl}` +
    rows.map((r) => `${pad}${arr(r)},`).join(nl) +
    `${nl}${pad.slice(2)}]`
  );
}

/* ------------------------------------------------------------------ *
 * Applying
 * ------------------------------------------------------------------ */

/** A string as it appears inside a single-quoted TypeScript literal. */
const lit = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/**
 * How an array is laid out in a given file: the newline it uses and the
 * indentation its items sit at, read off the first item rather than
 * assumed. A checkout on Windows is CRLF, and nesting depth varies.
 * Falls back to the house style if the first item cannot be located.
 */
function shapeOf(text, firstItem) {
  const nl = text.includes('\r\n') ? '\r\n' : '\n';
  const at = text.indexOf(`'${lit(firstItem)}',`);
  if (at === -1) return { nl, pad: '          ' };
  const pad = text.slice(text.lastIndexOf('\n', at) + 1, at);
  return { nl, pad: pad && /^ +$/.test(pad) ? pad : '          ' };
}

const changes = [];
const skips = [];
let unchanged = 0;
let readOnly = 0;

/**
 * Queue one literal swap, having checked the old one is findable and
 * unique. Everything that can refuse to happen refuses here.
 */
function swap(file, oldText, newText, label) {
  if (oldText === newText) {
    unchanged += 1;
    return;
  }
  const needle = `'${lit(oldText)}'`;
  const text = files.get(file);
  const first = text.indexOf(needle);
  if (first === -1) {
    skips.push(`${label} - the current text is not in ${file} as a plain literal`);
    return;
  }
  if (text.indexOf(needle, first + 1) !== -1) {
    skips.push(`${label} - that exact string appears more than once in ${file}`);
    return;
  }
  changes.push({ file, needle, replacement: `'${lit(newText)}'`, label });
}

const parsed = markdown.flatMap((name) =>
  parse(fs.readFileSync(path.join(SRC_DIR, name), 'utf8')),
);

for (const block of parsed) {
  const label = `${block.slug}:${block.index}:${block.kind}`;

  if (block.extra.startsWith('READ-ONLY')) {
    readOnly += 1;
    continue;
  }
  if (block.index === 'new') {
    skips.push(`${label} - adding blocks is not supported; add it in TypeScript`);
    continue;
  }

  const found = chapters.get(block.slug);
  if (!found) {
    skips.push(`${label} - no chapter has this slug`);
    continue;
  }
  const { chapter, file } = found;

  if (block.index === 'standfirst') {
    const next = textOf(block);
    if (next) swap(file, chapter.standfirst, next, label);
    else skips.push(`${label} - empty`);
    continue;
  }

  const old = chapter.body[Number(block.index)];
  if (!old) {
    skips.push(`${label} - no block at that index; re-export`);
    continue;
  }
  if (old.kind !== block.kind) {
    skips.push(`${label} - anchor says ${block.kind}, source has ${old.kind}; re-export`);
    continue;
  }

  switch (block.kind) {
    case 'p':
    case 'h':
    case 'descriptors':
    case 'note':
    case 'unsure': {
      const next = textOf(block);
      if (next === null) skips.push(`${label} - empty`);
      else swap(file, old.text, next, label);

      /* A note's title rides on the anchor line rather than sitting in
         the body, so it has to be swapped separately. Without this an
         edited title looks applied - the Markdown holds it, and nothing
         is reported - and then the next export quietly writes the old
         one back over it. */
      if (block.extra.startsWith('TITLE ') && old.title) {
        const title = block.extra.slice('TITLE '.length).trim();
        if (title) swap(file, old.title, title, `${label} title`);
        else skips.push(`${label} - title emptied; put it back or drop it in TypeScript`);
      }
      break;
    }

    case 'list':
    case 'steps': {
      const next = itemsOf(block);
      if (!next.length) {
        skips.push(`${label} - no items`);
        break;
      }
      if (next.length !== old.items.length) {
        /* The count changed, so there is no item-to-item pairing.
           Rewrite the whole array as one literal instead, built to match
           the file as it is actually laid out rather than as it ought to
           be: its own newline, its own indentation. Assuming either
           means the array is simply never found, and the edit is
           reported unmatchable for a reason nobody could guess at. */
        const text = files.get(file);
        const { nl, pad } = shapeOf(text, old.items[0]);
        const arr = (items) =>
          `[${nl}${items.map((i) => `${pad}'${lit(i)}',`).join(nl)}${nl}${pad.slice(2)}]`;
        const oldArr = arr(old.items);
        const newArr = arr(next);
        if (!text.includes(oldArr)) {
          skips.push(
            `${label} - ${old.items.length} items became ${next.length}, and the array could not be matched to rewrite whole`,
          );
        } else {
          changes.push({
            file,
            needle: oldArr,
            replacement: newArr,
            label: `${label} (${old.items.length} -> ${next.length} items)`,
          });
        }
        break;
      }
      next.forEach((n, i) => swap(file, old.items[i], n, `${label}[${i}]`));
      break;
    }

    case 'table': {
      const next = tableOf(block);
      if (!next) {
        skips.push(`${label} - could not read that as a table; keep the header and the |---| line`);
        break;
      }
      if (next.head.length !== old.head.length) {
        skips.push(
          `${label} - the header has ${next.head.length} columns, the source has ${old.head.length}; adding or removing a column is a TypeScript job`,
        );
        break;
      }
      const bad = next.rows.findIndex((r) => r.length !== next.head.length);
      if (bad !== -1) {
        skips.push(
          `${label} - row ${bad + 1} has ${next.rows[bad].length} cells and the header has ${next.head.length}; a stray or missing | does this`,
        );
        break;
      }

      /* Cells are short and repeat - "Yes", "30 ml" - so swapping them
         one at a time would not be safely unique. The head and rows go
         back as a single literal instead. */
      const text = files.get(file);
      const nl = text.includes('\r\n') ? '\r\n' : '\n';
      const pad = ['          ', '        ', '            '].find((p) =>
        text.includes(tableLiteral(old.head, old.rows, nl, p)),
      );
      if (!pad) {
        skips.push(`${label} - the table could not be matched in ${file} to rewrite`);
        break;
      }
      const oldLit = tableLiteral(old.head, old.rows, nl, pad);
      const newLit = tableLiteral(next.head, next.rows, nl, pad);
      if (oldLit === newLit) {
        unchanged += 1;
        break;
      }
      changes.push({
        file,
        needle: oldLit,
        replacement: newLit,
        label: `${label} (${old.rows.length} -> ${next.rows.length} rows)`,
      });
      break;
    }

    case 'quote': {
      const q = quoteOf(block);
      if (!q) skips.push(`${label} - no attribution line`);
      else {
        swap(file, old.text, q.text, `${label} text`);
        swap(file, old.cite, q.cite, `${label} cite`);
      }
      break;
    }

    default:
      readOnly += 1;
  }
}

/* ------------------------------------------------------------------ *
 * Write and report
 * ------------------------------------------------------------------ */

if (!DRY) {
  const touched = new Set();
  for (const c of changes) {
    files.set(c.file, files.get(c.file).replace(c.needle, c.replacement));
    touched.add(c.file);
  }
  for (const name of touched) {
    fs.writeFileSync(path.join(CHAPTERS_DIR, name), files.get(name), 'utf8');
  }
  if (touched.size) console.log(`rewrote ${[...touched].sort().join(', ')}\n`);
}

console.log(DRY ? 'dry run - nothing written\n' : '');
console.log(`  ${unchanged} unchanged`);
console.log(`  ${readOnly} read-only, ignored`);
console.log(`  ${changes.length} ${DRY ? 'would change' : 'changed'}`);
for (const c of changes.slice(0, 20)) console.log(`      ${c.label}`);
if (changes.length > 20) console.log(`      ... and ${changes.length - 20} more`);

if (skips.length) {
  console.log(`\n  ${skips.length} skipped:`);
  for (const s of skips.slice(0, 15)) console.log(`      ${s}`);
  if (skips.length > 15) console.log(`      ... and ${skips.length - 15} more`);
  console.log('\n  Nothing was guessed at. Fix the anchor or edit in TypeScript.');
}

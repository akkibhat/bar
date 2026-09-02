/**
 * Write the chapters out to Markdown for editing.
 *
 *   npm run chapters:out
 *
 * The prose lives as strings inside typed block arrays, which is the
 * right shape for the site and an awkward one to write in. So it comes
 * out to `_workings/chapters/`, gets edited there, and goes back in with
 * `npm run chapters:in`.
 *
 * ONE FILE PER CHAPTER
 *
 * Numbered by reading order so they sort the way the book does:
 * `07-rum.md`, `13-what-beer-is.md`. Thirty-seven small files rather
 * than one long one - you edit a chapter, not a book, and a diff on one
 * chapter is readable.
 *
 * WHAT THE ANCHORS ARE
 *
 * Every block is preceded by an HTML comment naming the chapter, the
 * block's index in that chapter's body, and its kind:
 *
 *     <!-- what-beer-is:4:p -->
 *
 * They do not render, and the importer finds its way home by them.
 * Leave them alone. Delete one and that block stops being editable;
 * change the index and an edit lands in the wrong place.
 *
 * WHAT IS READ-ONLY
 *
 * Drink specs and embedded tools export marked READ-ONLY and are ignored
 * on the way back in. A spec holds eight fields and this exports four of
 * them, so importing one back would drop the ice, the garnish and the
 * rest; a tool is a component reference with nothing in it to edit. Both
 * are done in TypeScript.
 *
 * Tables are NOT read-only. A table is `head` and `rows` of plain
 * strings, which is exactly what a Markdown table is, so it round-trips
 * with nothing to lose - and about a tenth of the writing in this book
 * lives inside one. Keep the pipes and the header line intact and the
 * importer handles the rest; it refuses anything whose columns stop
 * lining up.
 *
 * The chapter files are loaded rather than parsed: Node strips the types
 * and hands back the real arrays, so what is exported is exactly what
 * the site renders.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(ROOT, '_workings', 'chapters');
const CHAPTERS_DIR = path.join(ROOT, 'lib', 'content', 'chapters');

/* ------------------------------------------------------------------ *
 * Load
 * ------------------------------------------------------------------ */

const { PARTS } = await import(
  pathToFileURL(path.join(ROOT, 'lib', 'content', 'parts.ts')).href
);
const partOf = new Map(PARTS.map((p) => [p.slug, p]));

const chapters = [];
for (const name of fs.readdirSync(CHAPTERS_DIR)) {
  if (!name.endsWith('.ts')) continue;
  const mod = await import(pathToFileURL(path.join(CHAPTERS_DIR, name)).href);
  for (const value of Object.values(mod)) {
    if (Array.isArray(value)) chapters.push(...value);
  }
}
chapters.sort((a, b) => a.n - b.n);

/* ------------------------------------------------------------------ *
 * Rendering
 * ------------------------------------------------------------------ */

const anchor = (slug, i, kind, extra = '') =>
  `<!-- ${slug}:${i}:${kind}${extra ? ' ' + extra : ''} -->`;

let editable = 0;
let readOnly = 0;

function renderBlock(slug, i, b, out) {
  switch (b.kind) {
    case 'p':
      editable += 1;
      out.push(anchor(slug, i, 'p'), '', b.text, '');
      break;

    case 'h':
      editable += 1;
      out.push(anchor(slug, i, 'h'), '', `#### ${b.text}`, '');
      break;

    case 'descriptors':
      editable += 1;
      out.push(anchor(slug, i, 'descriptors'), '', `*${b.text}*`, '');
      break;

    case 'list':
    case 'steps':
      editable += 1;
      out.push(anchor(slug, i, b.kind), '');
      b.items.forEach((it, n) =>
        out.push(b.kind === 'steps' ? `${n + 1}. ${it}` : `- ${it}`),
      );
      out.push('');
      break;

    case 'note':
    case 'unsure':
      editable += 1;
      /* The title rides on the anchor rather than becoming a heading, so
         the block keeps its shape: one anchor, one quoted paragraph. */
      out.push(anchor(slug, i, b.kind, b.title ? `TITLE ${b.title}` : ''), '');
      out.push(`> ${b.text}`, '');
      break;

    case 'quote':
      editable += 1;
      out.push(anchor(slug, i, 'quote'), '', `> ${b.text}`, `> - ${b.cite}`, '');
      break;

    case 'table':
      editable += 1;
      out.push(anchor(slug, i, 'table'), '');
      out.push(`| ${b.head.join(' | ')} |`);
      out.push(`|${b.head.map(() => '---').join('|')}|`);
      b.rows.forEach((r) => out.push(`| ${r.join(' | ')} |`));
      out.push('');
      break;

    case 'spec':
      readOnly += 1;
      out.push(anchor(slug, i, 'spec', `READ-ONLY ${b.spec.name}`), '');
      out.push(`**${b.spec.name}** - ${b.spec.glass}, ${b.spec.method}`, '');
      b.spec.spec.forEach((line) =>
        out.push(`- ${line.amount ?? '-'} ${line.name}`),
      );
      out.push('');
      break;

    case 'tool':
      readOnly += 1;
      out.push(anchor(slug, i, 'tool', `READ-ONLY ${b.tool}`), '');
      break;

    default:
      throw new Error(`unhandled block kind "${b.kind}" in ${slug}`);
  }
}

/* ------------------------------------------------------------------ *
 * Write
 * ------------------------------------------------------------------ */

fs.mkdirSync(OUT_DIR, { recursive: true });

const before = new Set(
  fs.readdirSync(OUT_DIR).filter((n) => n.endsWith('.md')),
);
const written = new Set();

for (const c of chapters) {
  const part = partOf.get(c.part);
  const file = `${String(c.n).padStart(2, '0')}-${c.slug}.md`;

  const out = [
    `# ${c.title}`,
    '',
    `_Part ${part?.numeral ?? '?'} · ${part?.title ?? c.part} · \`${c.slug}\` · ${c.minutes} min_`,
    '',
    '_Leave the `<!-- anchors -->` alone; READ-ONLY blocks are ignored on the_',
    '_way back in. `npm run chapters:in -- --dry-run` to check, then without_',
    '_the flag to apply._',
    '',
    '---',
    '',
    anchor(c.slug, 'standfirst', 'standfirst'),
    '',
    `*${c.standfirst}*`,
    '',
  ];
  editable += 1;

  c.body.forEach((b, i) => renderBlock(c.slug, i, b, out));

  fs.writeFileSync(path.join(OUT_DIR, file), out.join('\n'), 'utf8');
  written.add(file);
}

const stale = [...before].filter((n) => !written.has(n));

const rel = path.relative(ROOT, OUT_DIR).replace(/\\/g, '/');
console.log(`wrote ${written.size} files to ${rel}/`);
console.log(`  ${editable} editable blocks, ${readOnly} read-only`);
if (stale.length) {
  /* Not deleted: a stale file may hold edits that were never imported,
     and losing someone's writing to a tidy-up is unforgivable. */
  console.log(`\n  ${stale.length} file(s) here no longer match a chapter:`);
  stale.forEach((n) => console.log(`      ${n}`));
  console.log('      left in place in case they hold unimported edits');
}

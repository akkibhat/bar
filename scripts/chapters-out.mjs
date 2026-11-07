/**
 * Write the chapters out to Markdown for editing.
 *
 *   npm run chapters:out
 *
 * One file per chapter in `_workings/chapters/`, numbered by reading
 * order (`07-rum.md`). Edit there, then bring it back with
 * `npm run chapters:in`.
 *
 * Every block is preceded by an anchor naming the chapter, the block's
 * index and its kind, which is how the importer finds its way home:
 *
 *     <!-- what-beer-is:4:p -->
 *
 * Specs and tools export marked READ-ONLY (a spec has more fields than
 * the export shows). Tables round-trip as Markdown tables. The chapter
 * files are loaded, not parsed: Node strips the types and hands back the
 * real arrays.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { pendingEdits } from './chapters-md.mjs';

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

/** Append one block's anchor and Markdown to `out`, counting editable and read-only blocks. */
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

/* ------------------------------------------------------------------ *
 * Refuse to overwrite unimported edits
 *
 * This script regenerates from the TypeScript, so anything written in
 * the Markdown and not yet imported is destroyed by it. That has
 * happened, and it cost four paragraphs. So before writing anything,
 * read every file that is already here and ask the importer's question
 * of it: does it say something the chapter does not? If so, stop -
 * nothing is written, and the run names what it found.
 *
 * --force overrides, for when the edits are known to be unwanted.
 * ------------------------------------------------------------------ */
const FORCE = process.argv.includes('--force');

if (!FORCE) {
  const bySlug = new Map(chapters.map((c) => [c.slug, c]));
  const blocked = [];

  for (const name of fs.readdirSync(OUT_DIR).filter((n) => n.endsWith('.md'))) {
    const md = fs.readFileSync(path.join(OUT_DIR, name), 'utf8');
    const slug = (md.match(/<!--\s+([a-z0-9-]+):/) || [])[1];
    const edits = pendingEdits(md, bySlug.get(slug));
    if (edits.length) blocked.push({ name, edits });
  }

  if (blocked.length) {
    const total = blocked.reduce((n, b) => n + b.edits.length, 0);
    console.error(
      `refusing to write: ${total} edit(s) in ${blocked.length} file(s) are not imported yet.`,
    );
    console.error('');
    for (const b of blocked) {
      console.error(`  ${b.name}`);
      for (const e of b.edits) console.error(`      ${e}`);
    }
    console.error('');
    console.error('  Run "npm run chapters:in" first, or');
    console.error('  "npm run chapters:out -- --force" to discard them.');
    console.error('  Nothing has been written.');
    process.exit(1);
  }
}

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

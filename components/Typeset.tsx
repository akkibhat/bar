import Link from 'next/link';
import type { Block } from '@/lib/schema';
import { emphasise } from '@/lib/emphasis';
import { headingsOf } from '@/lib/headings';
import { lookupFamily } from '@/lib/content/families';
import Rule from './Rule';
import Bench from './Bench';
import SpecSheet from './SpecSheet';

/**
 * Renders a chapter's body: an ordered list of blocks, each mapped to its
 * own presentation. Keeping this in one place means the authoring format
 * stays small and every chapter looks consistent.
 */
export default function ChapterBody({ body }: { body: Block[] }) {
  /* Headings are numbered here rather than in the block loop so the ids
     match what `BookIndex` links to - both derive them from the same
     function over the same body, which is the only way two components
     can agree on a slug without one of them guessing.
     
     Resolved into a lookup before rendering rather than counted inside
     the map: a counter reassigned from inside the callback is mutable
     state living across a render, which breaks if React replays the
     render and is flagged as such. */
  const ids = new Map<number, string>();
  const headings = headingsOf(body);
  let nth = 0;
  body.forEach((block, i) => {
    if (block.kind === 'h') {
      ids.set(i, headings[nth]?.id ?? '');
      nth += 1;
    }
  });

  return (
    <div className="prose-paper">
      {body.map((block, i) => (
        <BlockView key={i} block={block} id={ids.get(i)} />
      ))}
    </div>
  );
}

function BlockView({ block, id }: { block: Block; id?: string }) {
  switch (block.kind) {
    /* -------------------------------------------------------------- */
    case 'p':
      return <p>{emphasise(block.text)}</p>;

    /* -------------------------------------------------------------- */
    case 'h':
      return (
        <div className="mt-8 mb-3">
          {/* scroll-mt keeps the heading clear of the sticky bar when
              the index jumps to it; without it the target lands
              underneath the nav. */}
          <h2 id={id} className="display t-h2 mb-1 scroll-mt-24">
            {block.text}
          </h2>
          {/* Alternate the rule so repeated headings do not look stamped. */}
          <Rule variant="hair" width={200} />
        </div>
      );

    /* -------------------------------------------------------------- */
    case 'descriptors':
      return (
        <p className="italic" style={{ color: 'var(--ink-soft)' }}>
          {emphasise(block.text)}
        </p>
      );

    /* -------------------------------------------------------------- */
    case 'list':
      return (
        <ul className="my-5 space-y-2.5 max-w-[34rem]">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              {/* An ink dot rather than a bullet glyph. */}
              <span
                className="shrink-0 rounded-full mt-[0.62rem]"
                style={{ width: 5, height: 5, background: 'var(--accent-book)' }}
                aria-hidden="true"
              />
              <span>{emphasise(item)}</span>
            </li>
          ))}
        </ul>
      );

    /* -------------------------------------------------------------- */
    case 'steps':
      return (
        <ol className="my-5 space-y-3 max-w-[34rem]">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3.5">
              <span
                className="display shrink-0 t-h3 leading-none pt-0.5"
                style={{ color: 'var(--accent-book)', minWidth: '1.4rem' }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span>{emphasise(item)}</span>
            </li>
          ))}
        </ol>
      );

    /* -------------------------------------------------------------- */
    case 'note':
      return (
        <aside className="note-block my-6 px-5 py-4 max-w-[36rem]">
          {block.title && (
            <p className="display t-h3 mb-1" style={{ color: 'var(--accent-book)' }}>
              {block.title}
            </p>
          )}
          <p className="!mb-0 t-ui">{emphasise(block.text)}</p>
        </aside>
      );

    /* -------------------------------------------------------------- */
    case 'unsure':
      return (
        <aside className="unsure-block my-6 px-5 py-4 max-w-[36rem]">
          {/* The marker is always shown, with any title appended, so the
              signal cannot be lost behind a specific heading. */}
          <p className="label-ui mb-2" style={{ color: 'var(--caution)' }}>
            Still to do
            {block.title ? ` - ${block.title}` : ''}
          </p>
          <p className="!mb-0 t-ui" style={{ color: 'var(--ink)' }}>
            {emphasise(block.text)}
          </p>
        </aside>
      );

    /* -------------------------------------------------------------- */
    case 'quote':
      return (
        <blockquote
          className="my-8 pl-5 max-w-[36rem]"
          style={{ borderLeft: '2px solid var(--accent-book)' }}
        >
          <p
            className="display t-h3 leading-snug !mb-2"
            style={{ color: 'var(--accent-book)' }}
          >
            {block.text}
          </p>
          <cite className="label-ui not-italic">{block.cite}</cite>
        </blockquote>
      );

    /* -------------------------------------------------------------- */
    case 'table':
      return (
        <div className="my-6 max-w-[40rem] overflow-x-auto">
          <table className="ledger">
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{emphasise(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    /* -------------------------------------------------------------- */
    case 'spec': {
      const s = block.spec;
      const family = s.family ? lookupFamily(s.family) : undefined;

      return (
        <figure
          className="card my-7 px-5 py-5 max-w-[36rem]"
          style={{ ['--accent' as string]: 'var(--accent-shelf)' }}
        >
          <figcaption className="mb-3">
            <h3 className="display t-h2 leading-none mb-1">{s.name}</h3>
            <p
              className="label-ui"
              style={{ color: 'var(--ink-faint)', letterSpacing: '0.1em' }}
            >
              {[s.glass, s.ice === 'None' ? 'no ice' : s.ice, s.method]
                .filter(Boolean)
                .join(' · ')}
            </p>
          </figcaption>

          <SpecSheet lines={s.spec} />

          <p className="t-caption !mb-0" style={{ color: 'var(--ink-soft)' }}>
            <span className="label-ui" style={{ marginRight: '0.5rem' }}>
              Garnish
            </span>
            {s.garnish}
          </p>

          {/* The family link is what turns twenty-five recipes into six
              structures. It only renders where a drink has been placed in
              one, so the Bloody Mary does not get a false parent. */}
          {family && (
            <p className="t-caption mt-2 !mb-0">
              <span className="label-ui" style={{ marginRight: '0.5rem' }}>
                Family
              </span>
              <Link href="/families" style={{ color: 'var(--accent-shelf)' }}>
                {family.name}
              </Link>
              <span style={{ color: 'var(--ink-faint)' }}>
                {' '}
                · {family.formula}
              </span>
            </p>
          )}

          {s.note && (
            <p
              className="t-caption mt-3 !mb-0 italic"
              style={{ color: 'var(--ink-soft)' }}
            >
              {emphasise(s.note)}
            </p>
          )}
        </figure>
      );
    }

    /* -------------------------------------------------------------- */
    case 'tool':
      return <Bench tool={block.tool} only={block.only} />;

    /* -------------------------------------------------------------- */
    default:
      return null;
  }
}

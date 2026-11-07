'use client';

import Link from 'next/link';
import type { Chapter, Part } from '@/lib/schema';
import { useRead } from '@/lib/local';
import { PROGRESS_ENABLED } from '@/lib/site';

/**
 * The end of a chapter: previous and next, plus every chapter in the
 * current part with your place marked. Rows reuse the spec-sheet leaders,
 * the same device as the contents page and a drink's build.
 */
export default function ChapterFooter({
  slug,
  part,
  siblings,
  prev,
  next,
}: {
  slug: string;
  /** The part this chapter belongs to, for the heading. */
  part?: Part;
  /** Every chapter in that part, in order, including this one. */
  siblings: Chapter[];
  prev?: Chapter;
  next?: Chapter;
}) {
  const { progress, ready, toggleDone } = useRead();
  const done = PROGRESS_ENABLED && ready && progress.done.includes(slug);

  return (
    <footer className="mt-14">
      {PROGRESS_ENABLED && (
        <p className="label-ui mb-8 flex items-center gap-4">
          <span>{done ? 'Marked read' : 'Finished this one?'}</span>
          <button
            onClick={() => toggleDone(slug)}
            style={{ color: 'var(--accent-book)' }}
            suppressHydrationWarning
          >
            {done ? 'Undo' : 'Mark it read'}
          </button>
        </p>
      )}

      {/* ---- The rest of this part ------------------------------- */}
      {siblings.length > 1 && part && (
        <section className="mb-10">
          <div className="flex items-baseline gap-3">
            <span
              className="display t-h3 leading-none nums"
              style={{ color: 'var(--accent-book)' }}
            >
              {part.numeral}
            </span>
            <h2 className="label-ui" style={{ fontSize: 'var(--t-caption)' }}>
              {part.title}
            </h2>
          </div>

          <hr className="rule-double my-3" />

          <ul>
            {siblings.map((c) => {
              const here = c.slug === slug;
              return (
                <li key={c.slug}>
                  {here ? (
                    /* The current chapter is listed but not a link -
                       a link to the page you are standing on is a dead
                       control, and marking it is the whole point. */
                    <p className="spec__line" aria-current="page">
                      <span
                        className="spec__name"
                        style={{ color: 'var(--accent-book)' }}
                      >
                        <span className="chapter-no nums" aria-hidden="true">
                          {c.n}.
                        </span>
                        {c.title}
                      </span>
                      <span className="spec__leader" aria-hidden="true" />
                      <span
                        className="spec__amount"
                        style={{ color: 'var(--accent-book)' }}
                      >
                        you are here
                      </span>
                    </p>
                  ) : (
                    <Link
                      href={`/book/${c.slug}`}
                      className="spec__line"
                      style={{ textDecoration: 'none' }}
                    >
                      <span className="spec__name">
                        <span className="chapter-no nums" aria-hidden="true">
                          {c.n}.
                        </span>
                        {c.title}
                      </span>
                      <span className="spec__leader" aria-hidden="true" />
                      <span
                        className="spec__amount"
                        style={{ color: 'var(--ink-faint)' }}
                      >
                        {c.minutes} min
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* ---- Across the parts ------------------------------------ */}
      <nav
        className="flex flex-wrap gap-6 justify-between"
        aria-label="Chapter navigation"
        style={{ borderTop: '1px solid var(--rule)', paddingTop: '1.5rem' }}
      >
        {prev ? (
          <Link
            href={`/book/${prev.slug}`}
            className="flex-1 min-w-[12rem]"
            style={{ textDecoration: 'none' }}
          >
            <span className="label-ui block mb-1">← Previous</span>
            <span className="display t-h3 leading-tight block">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1 min-w-[12rem]" />
        )}

        {next ? (
          <Link
            href={`/book/${next.slug}`}
            className="flex-1 min-w-[12rem] text-right"
            style={{ textDecoration: 'none' }}
          >
            <span className="label-ui block mb-1">Next →</span>
            <span className="display t-h3 leading-tight block">
              {next.title}
            </span>
          </Link>
        ) : (
          /* The last chapter hands over to the other half rather than
             back to the contents. The book ends by pointing at what came
             out of it, which is the argument of the whole site. */
          <Link
            href="/backbar"
            className="flex-1 min-w-[12rem] text-right"
            style={{
              textDecoration: 'none',
              ['--accent' as string]: 'var(--accent-shelf)',
            }}
          >
            <span
              className="label-ui block mb-1"
              style={{ color: 'var(--accent)' }}
            >
              The end →
            </span>
            <span className="display t-h3 leading-tight block">
              See what came of it
            </span>
          </Link>
        )}
      </nav>

      <p
        className="label-ui mt-6 no-print"
        style={{ color: 'var(--ink-faint)' }}
      >
        ← and → move between chapters
      </p>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { PARTS } from '@/lib/content/parts';
import { inPart, type ContentsChapter } from '@/lib/contents';
import { useRead } from '@/lib/local';
import { PROGRESS_ENABLED } from '@/lib/site';

/**
 * The contents, set as the inside of a menu.
 *
 * Each part is a section: a numeral, a name in small caps, a rule, then
 * its chapters as ruled rows with the reading time hard right behind dot
 * leaders. It is the same device the spec sheets use, which is the point
 * - a menu runs one typographic idea through everything, and a site that
 * lists its drinks that way should list its sections that way too.
 *
 * There are no cards here. A card is a physical metaphor - something
 * tipped in, or pinned up - and it belongs to a notebook. This is
 * printed, so it is rules and space.
 */
export default function Contents({ contents }: { contents: ContentsChapter[] }) {
  const { progress, ready, resetProgress } = useRead();

  const done = PROGRESS_ENABLED && ready ? progress.done : [];
  const resume = contents.find((c) => !done.includes(c.slug)) ?? contents[0];
  const started = done.length > 0;

  return (
    <>
      {PROGRESS_ENABLED && started && (
        <p className="label-ui mb-8 flex items-center gap-4">
          <span>
            <span className="nums">{done.length}</span> of{' '}
            <span className="nums">{contents.length}</span> read
          </span>
          <Link
            href={`/book/${resume.slug}`}
            style={{ color: 'var(--accent-book)' }}
          >
            Continue →
          </Link>
          <button
            onClick={() => {
              if (confirm('Clear your reading progress?')) resetProgress();
            }}
            style={{ color: 'var(--ink-faint)' }}
          >
            Reset
          </button>
        </p>
      )}

      {PARTS.map((part) => {
        const chapters = inPart(contents, part.slug);

        return (
          <section key={part.slug} className="mb-12">
            {/* The part heading. The numeral is set large in the display
                face and sits beside the name rather than above it, the
                way a menu numbers a course. */}
            <div className="flex items-baseline gap-3">
              <span
                className="display t-h2 leading-none nums"
                style={{ color: 'var(--accent-book)' }}
              >
                {part.numeral}
              </span>
              <h2 className="label-ui" style={{ fontSize: 'var(--t-caption)' }}>
                {part.title}
              </h2>
            </div>

            <hr className="rule-double my-3" />

            <p
              className="t-base italic mb-4 max-w-[34rem]"
              style={{ color: 'var(--ink-soft)' }}
            >
              {part.blurb}
            </p>

            <ul>
              {chapters.map((c) => {
                const isDone = done.includes(c.slug);
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/book/${c.slug}`}
                      className="spec__line"
                      style={{ textDecoration: 'none' }}
                    >
                      <span
                        className="spec__name"
                        style={{
                          color: isDone ? 'var(--ink-faint)' : 'var(--ink)',
                        }}
                      >
                        {/* The number runs 1 to 37 across the whole book
                            rather than restarting inside each part, so it
                            says where you are in the thing as a whole. */}
                        <span className="chapter-no nums" aria-hidden="true">
                          {c.n}.
                        </span>
                        {c.title}
                      </span>
                      <span className="spec__leader" aria-hidden="true" />
                      <span
                        className="spec__amount"
                        style={{ color: 'var(--ink-faint)' }}
                        suppressHydrationWarning
                      >
                        {isDone ? 'read' : `${c.minutes} min`}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
}

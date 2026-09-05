'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PARTS } from '@/lib/content/parts';
import { chapterAt, inPart, type ContentsChapter } from '@/lib/contents';

/**
 * The contents, always on screen.
 *
 * Set as a printed index rather than as application navigation, which is
 * the whole difference between this and the wine site's rail. That one is
 * a sunk grey panel carrying a status dot against every chapter and a
 * progress meter over the top - furniture. This is the same paper as the
 * page, divided from it by one hairline, with the parts numbered in the
 * display face and the chapters set as plain small type. It reads as the
 * index printed inside a cover.
 *
 * It also does something that rail cannot: the chapter you are in expands
 * to show its own sub-headings, so the same column answers "what else is
 * in this book" and "what is in this chapter". The second question is the
 * one that bites on a long chapter, and it is why there is no separate
 * in-page jump list anywhere.
 *
 * Parts collapse. Thirty-seven chapters listed flat is a column you
 * scroll rather than read, and the answer a printed index uses is to show
 * the section you are in and let the rest sit closed until wanted.
 *
 * Below the breakpoint none of it is rendered - the fold-out in the top
 * bar covers narrow screens, where a persistent column would eat the
 * reading width it exists to serve.
 */
export default function BookIndex({ contents }: { contents: ContentsChapter[] }) {
  const pathname = usePathname();

  const currentSlug = pathname.startsWith('/book/')
    ? pathname.slice('/book/'.length)
    : null;
  const current = chapterAt(contents, currentSlug ?? undefined);
  const headings = current ? current.headings : [];

  /**
   * Which sections the reader has explicitly opened or closed.
   *
   * Only the overrides are stored, not the full open/closed state. The
   * default is derived from where you are - the part you are reading is
   * open - and this component does not remount between chapters, so
   * storing the resolved state would freeze it on whichever part you
   * happened to land on first.
   */
  const [override, setOverride] = useState<Record<string, boolean>>({});

  const isOpen = (key: string, fallback: boolean) => override[key] ?? fallback;
  const toggle = (key: string, now: boolean) =>
    setOverride((o) => ({ ...o, [key]: !now }));

  return (
    <nav className="book-index" aria-label="Contents">
      <div className="book-index__inner">
        <Link
          href="/book"
          className="label-ui block mb-4"
          style={{
            color:
              pathname === '/book' ? 'var(--accent-book)' : 'var(--ink-soft)',
          }}
        >
          Contents
        </Link>

        {PARTS.map((part) => {
          const open = isOpen(part.slug, part.slug === current?.part);
          return (
            <section key={part.slug} className="mb-4">
              <button
                className="book-index__head"
                aria-expanded={open}
                onClick={() => toggle(part.slug, open)}
              >
                <span
                  className="display leading-none nums"
                  style={{
                    color: 'var(--accent-book)',
                    fontSize: 'var(--t-ui)',
                  }}
                >
                  {part.numeral}
                </span>
                <span
                  className="label-ui text-left"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.13em' }}
                >
                  {part.title}
                </span>
                <span className="book-index__mark" aria-hidden="true">
                  {open ? '−' : '+'}
                </span>
              </button>
              <hr className="rule-hair mb-1.5" />

              {open && (
                <ul>
                  {inPart(contents, part.slug).map((c) => {
                    const here = c.slug === currentSlug;
                    return (
                      <li key={c.slug}>
                        <Link
                          href={`/book/${c.slug}`}
                          aria-current={here ? 'page' : undefined}
                          className="book-index__chapter"
                          style={{
                            color: here
                              ? 'var(--accent-book)'
                              : 'var(--ink-soft)',
                          }}
                        >
                          <span className="chapter-no nums" aria-hidden="true">
                            {c.n}.
                          </span>
                          {c.title}
                        </Link>

                        {/* The chapter you are in opens to show its own
                            sections. Nothing else does, so the column
                            stays a contents rather than becoming a tree. */}
                        {here && headings.length > 0 && (
                          <ul className="book-index__sections">
                            {headings.map((h) => (
                              <li key={h.id}>
                                <a
                                  href={`#${h.id}`}
                                  className="book-index__section"
                                >
                                  {h.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          );
        })}

        {/* ---- The tools ---------------------------------------- */}
        {(() => {
          const open = isOpen('tools', false);
          return (
            <section className="mb-6">
              <button
                className="book-index__head"
                aria-expanded={open}
                onClick={() => toggle('tools', open)}
              >
                <span
                  className="label-ui text-left"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.13em' }}
                >
                  Behind the bar
                </span>
                {/* The parts name themselves - "The classics" needs no
                    gloss. This one does not, so shut it says how many
                    things are inside rather than nothing at all. The
                    column is 15rem, so it is a count and not a sentence. */}
                <span className="book-index__hint">{TOOLS.length} tools</span>
                <span className="book-index__mark" aria-hidden="true">
                  {open ? '−' : '+'}
                </span>
              </button>
              <hr className="rule-hair mb-1.5" />

              {open && (
                <>
                  <p
                    className="t-micro mb-2"
                    style={{
                      color: 'var(--ink-faint)',
                      fontFamily: 'var(--font-ui)',
                      lineHeight: 1.4,
                    }}
                  >
                    Calculators and references, for working something out
                    rather than reading about it.
                  </p>
                  <ul>
                    {TOOLS.map((t) => (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          aria-current={
                            pathname === t.href ? 'page' : undefined
                          }
                          className="book-index__chapter"
                          style={{
                            color:
                              pathname === t.href
                                ? 'var(--accent-book)'
                                : 'var(--ink-soft)',
                          }}
                        >
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          );
        })()}
      </div>
    </nav>
  );
}

/** The standalone tools, listed under the book they belong to. */
const TOOLS: { href: string; label: string }[] = [
  { href: '/families', label: 'Cocktail families' },
  { href: '/ratio', label: 'Balance calculator' },
  { href: '/dilution', label: 'Strength and dilution' },
  { href: '/spirits', label: 'Spirit explorer' },
  { href: '/glassware', label: 'Glassware' },
  { href: '/glossary', label: 'Glossary' },
];

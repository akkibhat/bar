'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PARTS } from '@/lib/content/parts';
import { chaptersInPart, findChapter } from '@/lib/content/course';
import { headingsOf } from '@/lib/headings';

/**
 * The contents, always on screen.
 *
 * Set as a printed index rather than as application navigation, which is
 * the whole difference between this and the wine site's rail. That one is
 * a sunk grey panel carrying a status dot against every chapter and a
 * progress meter over the top - furniture. This is the same paper as the
 * page, divided from it by one hairline, with the parts numbered in the
 * display face and the chapters set as a plain ruled list. It reads as
 * the index printed inside a cover.
 *
 * It also does something that rail cannot: the chapter you are in expands
 * to show its own sub-headings, so the same column answers "what else is
 * in this book" and "what is in this chapter". That second question is
 * the one that actually bites on a long chapter, and it is why there is
 * no separate in-page jump list anywhere.
 *
 * Below the breakpoint it is not rendered at all - the fold-out in the
 * top bar covers narrow screens, where a persistent column would eat the
 * reading width it exists to serve.
 */
export default function BookIndex() {
  const pathname = usePathname();

  const currentSlug = pathname.startsWith('/book/')
    ? pathname.slice('/book/'.length)
    : null;
  const current = currentSlug ? findChapter(currentSlug) : undefined;
  const headings = current ? headingsOf(current.body) : [];

  return (
    <nav className="book-index" aria-label="Contents">
      <div className="book-index__inner">
        <Link
          href="/book"
          className="label-ui block mb-4"
          style={{
            color: pathname === '/book' ? 'var(--accent-book)' : 'var(--ink-soft)',
          }}
        >
          Contents
        </Link>

        {PARTS.map((part) => (
          <section key={part.slug} className="mb-5">
            <p className="flex items-baseline gap-2 mb-1">
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
                className="label-ui"
                style={{ fontSize: '0.7rem', letterSpacing: '0.13em' }}
              >
                {part.title}
              </span>
            </p>
            <hr className="rule-hair mb-1.5" />

            <ul>
              {chaptersInPart(part.slug).map((c) => {
                const here = c.slug === currentSlug;
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/book/${c.slug}`}
                      aria-current={here ? 'page' : undefined}
                      className="book-index__chapter"
                      style={{
                        color: here ? 'var(--accent-book)' : 'var(--ink-soft)',
                      }}
                    >
                      {c.title}
                    </Link>

                    {/* The chapter you are in opens to show its own
                        sections. Nothing else does, so the column stays
                        a contents rather than becoming a tree. */}
                    {here && headings.length > 0 && (
                      <ul className="book-index__sections">
                        {headings.map((h) => (
                          <li key={h.id}>
                            <a href={`#${h.id}`} className="book-index__section">
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
          </section>
        ))}

        <p className="label-ui mb-2" style={{ fontSize: '0.7rem' }}>
          Behind the bar
        </p>
        <hr className="rule-hair mb-1.5" />
        <ul className="mb-6">
          {TOOLS.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                aria-current={pathname === t.href ? 'page' : undefined}
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
      </div>
    </nav>
  );
}

/** The standalone tools, listed under the book they belong to. */
const TOOLS: { href: string; label: string }[] = [
  { href: '/families', label: 'Cocktail families' },
  { href: '/ratio', label: 'Balance calculator' },
  { href: '/dilution', label: 'Dilution and ice' },
  { href: '/units', label: 'Standard drinks' },
  { href: '/spirits', label: 'Spirit explorer' },
  { href: '/glassware', label: 'Glassware' },
  { href: '/glossary', label: 'Glossary' },
];

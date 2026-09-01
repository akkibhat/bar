'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoMark } from './Logo';
import { PARTS } from '@/lib/content/parts';
import { chaptersInPart } from '@/lib/content/course';
import { SECTIONS } from '@/lib/config';
import { useTheme } from '@/lib/storage';

/**
 * The bar across the top, and the contents that fold out of it.
 *
 * There is no sidebar anywhere on this site, which is the main structural
 * decision here. A permanent rail listing 37 chapters is how a reference
 * work presents itself, and it means every page is 16rem narrower than it
 * needs to be for the sake of navigation nobody is using while reading.
 *
 * A menu does not work that way. It is folded, you open it, you find the
 * section, you close it again. So the whole contents lives behind one
 * control and drops as a full-width panel over the page - three columns
 * of parts, the way the inside spread of a menu is set - and the reading
 * column underneath gets the full width of the page.
 */

const LINKS = [
  { href: SECTIONS.book.href, label: 'Barbook', variant: 'book' as const },
  { href: SECTIONS.shelf.href, label: 'Backbar', variant: 'shelf' as const },
];

export default function BarNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Escape puts the panel away, the same as clicking off it. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  /* Navigating closes it too, and that is done on click rather than by
     watching the pathname: reacting to a route change with setState
     costs a second render pass on every page in the site. */
  const close = () => setOpen(false);

  return (
    <>
      <nav
        aria-label="Sections"
        className="sunk sticky top-0 z-30"
        style={{
          borderBottom: '1px solid var(--rule)',
          height: 'var(--nav-h)',
        }}
      >
        <div className="mx-auto max-w-[58rem] px-6 sm:px-10 h-full flex items-center gap-1">
          {/* The mark alone is the way home. The wordmark beside it would
              be a third name in a row that already has two. */}
          <Link
            href="/"
            aria-label="Home"
            aria-current={pathname === '/' ? 'page' : undefined}
            className="mr-3 flex items-center"
            style={{ opacity: pathname === '/' ? 1 : 0.75 }}
          >
            <LogoMark size={22} variant="shelf" />
          </Link>

          {LINKS.map((l) => {
            const active = pathname.startsWith(l.href);
            const accent =
              l.variant === 'shelf'
                ? SECTIONS.shelf.accent
                : SECTIONS.book.accent;

            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className="px-3 py-1.5"
                style={{
                  color: active ? 'var(--ink)' : 'var(--ink-soft)',
                  borderBottom: active
                    ? `2px solid ${accent}`
                    : '2px solid transparent',
                }}
              >
                <span
                  className="wordmark"
                  style={{ fontSize: 'var(--t-ui)', color: 'inherit' }}
                >
                  {l.variant === 'book' ? (
                    <>
                      Bar<span style={{ color: accent }}>book</span>
                    </>
                  ) : (
                    <>
                      <span style={{ color: accent }}>Back</span>bar
                    </>
                  )}
                </span>
              </Link>
            );
          })}

          <div className="ml-auto flex items-center gap-1">
            <ThemeToggle />
            <button
              className="label-ui px-3 py-2"
              aria-expanded={open}
              aria-controls="contents-panel"
              onClick={() => setOpen((v) => !v)}
              style={{ color: open ? 'var(--ink)' : 'var(--ink-soft)' }}
            >
              {open ? 'Close' : 'Contents'}
            </button>
          </div>
        </div>
      </nav>

      {/* ---- The fold-out ---------------------------------------- */}
      {open && (
        <>
          {/* A scrim rather than a click-catcher on the panel itself, so
              a click anywhere off the contents puts it away. */}
          <div
            className="fixed inset-0 z-20"
            style={{ background: 'var(--paper)', opacity: 0.85 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="contents-panel"
            className="sunk fixed left-0 right-0 z-30 overflow-y-auto"
            style={{
              top: 'var(--nav-h)',
              maxHeight: 'calc(100vh - var(--nav-h))',
              borderBottom: '1px solid var(--rule-strong)',
            }}
          >
            <div className="mx-auto max-w-[58rem] px-6 sm:px-10 py-8">
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
                {PARTS.map((part) => (
                  <section
                    key={part.slug}
                    className="mb-7 break-inside-avoid"
                  >
                    <p className="flex items-baseline gap-2 mb-1.5">
                      <span
                        className="display t-h3 leading-none nums"
                        style={{ color: 'var(--accent-book)' }}
                      >
                        {part.numeral}
                      </span>
                      <span className="label-ui">{part.title}</span>
                    </p>
                    <hr className="rule-hair mb-2" />
                    <ul>
                      {chaptersInPart(part.slug).map((c) => {
                        const active = pathname === `/book/${c.slug}`;
                        return (
                          <li key={c.slug}>
                            <Link
                              href={`/book/${c.slug}`}
                              onClick={close}
                              className="block py-0.5 t-caption"
                              style={{
                                color: active
                                  ? 'var(--accent-book)'
                                  : 'var(--ink-soft)',
                              }}
                            >
                              {c.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}

                <section className="mb-7 break-inside-avoid">
                  <p className="label-ui mb-1.5">Behind the bar</p>
                  <hr className="rule-hair mb-2" />
                  <ul>
                    {TOOLS.map((t) => (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          onClick={close}
                          className="block py-0.5 t-caption"
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
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/**
 * The standalone tools. All book-side: things you look up while reading
 * or while working out a drink, as opposed to Backbar, which is a
 * finished list rather than a workbench.
 */
const TOOLS: { href: string; label: string }[] = [
  { href: '/families', label: 'Cocktail families' },
  { href: '/ratio', label: 'Balance calculator' },
  { href: '/dilution', label: 'Dilution and ice' },
  { href: '/units', label: 'Standard drinks' },
  { href: '/spirits', label: 'Spirit explorer' },
  { href: '/glassware', label: 'Glassware' },
  { href: '/glossary', label: 'Glossary' },
];

/**
 * Light/dark switch. Writes the choice to localStorage and stamps it on
 * the root element; the inline script in the layout replays it on the
 * next load before paint.
 *
 * Set as a symbol rather than a word because it sits in a row of two
 * wordmarks and a label, and a fourth piece of text there reads as a
 * fourth destination.
 */
function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="px-2 py-2 t-ui"
      style={{ color: 'var(--ink-faint)', lineHeight: 1 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      suppressHydrationWarning
    >
      {theme === 'dark' ? '☾' : '☀'}
    </button>
  );
}

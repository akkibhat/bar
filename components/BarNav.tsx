'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlassMark, HomeMark } from './Mark';

import { PARTS } from '@/lib/content/parts';
import { inPart, type ContentsChapter } from '@/lib/contents';
import { HALVES } from '@/lib/site';
import Lights from './Lights';

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

/** Rendered height of the marks beside the wordmarks. */
const MARK_SIZE = 15;

/**
 * How far each mark drops from where the flex row's baseline alignment
 * leaves it. Two different rules, because the two shapes are different
 * objects and want different things from a line of type.
 *
 * The book is a spread: its pages rise towards their outer edges, so the
 * top of its ink box is two thin flares and its body is the band between
 * the inner edges. That band is centred on the capitals, the way a
 * lowercase-height ornament would be.
 *
 * The glass is a standing object. It has a foot, and a foot belongs on
 * the line the type stands on - so its base sits on the baseline rather
 * than being centred on anything.
 *
 * Both measured in the browser against the wordmark's real ink, taken
 * from font metrics rather than the line box. In em so they survive the
 * type scale moving.
 */
const MARK_OFFSET: Record<'book' | 'shelf', string> = {
  book: '0.041em',
  shelf: '0.065em',
};

export default function BarNav({ contents }: { contents: ContentsChapter[] }) {
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
          {/* An icon rather than the word "Home": the row already has two
              wordmarks, and a third word reads as a third section. */}
          <Link
            href="/"
            aria-label="Home"
            aria-current={pathname === '/' ? 'page' : undefined}
            className="nav-home mr-3 flex items-center px-1 py-1.5"
            style={{ color: pathname === '/' ? 'var(--ink)' : 'var(--ink-soft)' }}
          >
            <HomeMark size={20} />
          </Link>

          {HALVES.map((l) => {
            const active = pathname.startsWith(l.at);
            const accent = l.accent;

            return (
              <Link
                key={l.id}
                href={l.at}
                aria-current={active ? 'page' : undefined}
                className="nav-half px-3 py-1.5"
                style={{
                  color: active ? 'var(--ink)' : 'var(--ink-soft)',
                  borderBottom: active
                    ? `2px solid ${accent}`
                    : '2px solid transparent',
                }}
              >
                {/* The mark takes the half's own accent. Aligned on the
                    wordmark's baseline rather than centred on the line
                    box: the glass is bottom-heavy and the didone has
                    long descenders, so centring the two boxes leaves
                    the mark visibly high. */}
                <span
                  className="nav-mark"
                  style={{
                    ['--logo-glass' as string]: accent,
                    ['--logo-pour' as string]: accent,
                    ['--mark-offset' as string]: MARK_OFFSET[l.id],
                  }}
                >
                  <GlassMark size={MARK_SIZE} variant={l.id} decorative />
                </span>
                <span
                  className="wordmark"
                  style={{ fontSize: 'var(--t-ui)', color: 'inherit' }}
                >
                  {l.id === 'book' ? (
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
            <Lights />
            {/* Hidden where the index column is on screen - two copies
                of the same contents, one of them behind a click, is a
                choice nobody needs to make. */}
            <button
              className="label-ui px-3 py-2 lg:hidden"
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
                      {inPart(contents, part.slug).map((c) => {
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
  { href: '/dilution', label: 'Strength and dilution' },
  { href: '/spirits', label: 'Spirit explorer' },
  { href: '/glassware', label: 'Glassware' },
  { href: '/glossary', label: 'Glossary' },
];


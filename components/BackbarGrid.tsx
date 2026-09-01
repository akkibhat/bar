'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  SHELF,
  ingredientLine,
  shelfOf,
  shelves,
  tags,
  tagsOf,
} from '@/lib/backbar';

/**
 * The shelf, set as a menu rather than as a grid of cards.
 *
 * This is the page where the two sites diverge most. A cellar is a
 * collection and is looked at, so the wine site draws its bottles as a
 * wall of photographs. A bar list is read top to bottom, in order, with
 * the name leading and the base spirit hard right - so this is one
 * column of ruled rows, and no picture at all.
 *
 * That is also the honest presentation of the underlying data: there is
 * no photograph of any of these drinks, and a card grid built around an
 * absent image is a layout waiting for content that does not exist.
 *
 * Filtering is client-side over a committed snapshot. At this size the
 * whole shelf is a few kilobytes of already-loaded data, so a network
 * round trip to narrow eight drinks would be slower and less reliable
 * than doing it here.
 */
export default function BackbarGrid() {
  const [shelf, setShelf] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const allShelves = useMemo(() => shelves(), []);
  const allTags = useMemo(() => tags(), []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();

    return SHELF.filter((d) => {
      if (shelf && shelfOf(d) !== shelf) return false;
      if (tag && !tagsOf(d).includes(tag)) return false;
      if (!q) return true;
      /* Searching the spec as well as the name is the point: the common
         question is "what can I make with X", not "what is X called". */
      return (
        d.name.toLowerCase().includes(q) ||
        (d.description ?? '').toLowerCase().includes(q) ||
        d.spec.some((line) => line.name.toLowerCase().includes(q))
      );
    });
  }, [shelf, tag, query]);

  const filtered = Boolean(shelf || tag || query.trim());

  return (
    <>
      {/* ---- Filters, set as one line of small caps -------------- */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-3">
        <span className="label-ui" style={{ minWidth: '3rem' }}>
          Base
        </span>
        <FilterLink on={shelf === null} onClick={() => setShelf(null)}>
          All
        </FilterLink>
        {allShelves.map((s) => (
          <FilterLink
            key={s.name}
            on={shelf === s.name}
            onClick={() => setShelf(shelf === s.name ? null : s.name)}
          >
            {s.name}
          </FilterLink>
        ))}
      </div>

      {allTags.length > 0 && (
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-4">
          <span className="label-ui" style={{ minWidth: '3rem' }}>
            Tag
          </span>
          {allTags.map((t) => (
            <FilterLink
              key={t.name}
              on={tag === t.name}
              onClick={() => setTag(tag === t.name ? null : t.name)}
            >
              {t.name}
            </FilterLink>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-end gap-3 mb-8">
        <label className="flex-1 min-w-[14rem] max-w-[20rem]">
          <span className="label-ui block mb-1">Find</span>
          <input
            type="search"
            className="ink-input"
            value={query}
            placeholder="A name, or something in it"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        {filtered && (
          <button
            className="label-ui pb-2"
            style={{ color: 'var(--accent-shelf)' }}
            onClick={() => {
              setShelf(null);
              setTag(null);
              setQuery('');
            }}
          >
            Clear
          </button>
        )}
      </div>

      <hr className="rule-double mb-2" />

      {/* ---- The list ------------------------------------------- */}
      {shown.length === 0 ? (
        <p className="t-base py-6" style={{ color: 'var(--ink-soft)' }}>
          Nothing matches that. Clear the filters to see the whole shelf.
        </p>
      ) : (
        <ul>
          {shown.map((drink) => (
            <li key={drink.id}>
              <Link
                href={`/backbar/${drink.slug}`}
                className="block py-5"
                style={{
                  borderBottom: '1px solid var(--rule)',
                  textDecoration: 'none',
                }}
              >
                {/* Name left, base spirit hard right behind leaders -
                    the same shape as a line of a drink's own spec. */}
                <span className="flex items-baseline gap-2">
                  <span className="display t-h3 leading-none">
                    {drink.name}
                  </span>
                  <span className="spec__leader" aria-hidden="true" />
                  <span
                    className="label-ui shrink-0"
                    style={{ color: 'var(--accent-shelf)' }}
                  >
                    {shelfOf(drink)}
                  </span>
                </span>

                {drink.description && (
                  <span
                    className="block t-base italic leading-relaxed mt-2 max-w-[36rem]"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    {drink.description}
                  </span>
                )}

                <span
                  className="block t-caption mt-2"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  {ingredientLine(drink)}
                  {drink.abv !== undefined && (
                    <span className="nums"> · {drink.abv}%</span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/**
 * One filter.
 *
 * Set as underlined text rather than as a chip. A row of pills is the
 * most recognisably "web app" thing a page can have on it, and this one
 * is trying to look printed - so the selected state is a rule under the
 * word, the way a menu marks something.
 */
function FilterLink({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className="t-caption"
      style={{
        color: on ? 'var(--accent-shelf)' : 'var(--ink-soft)',
        borderBottom: on
          ? '1px solid var(--accent-shelf)'
          : '1px solid transparent',
        paddingBottom: '1px',
      }}
    >
      {children}
    </button>
  );
}

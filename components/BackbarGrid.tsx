'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  IBA_SHELF,
  MINE,
  ingredientLine,
  shelfOf,
  families,
  shelves,
  tags,
  tagsOf,
  type ShelfEntry,
} from '@/lib/backbar';
import { IBA_CATEGORIES, IBA_LISTS, type IbaCategory } from '@/lib/iba';

/**
 * The shelf, set as a menu: one column of ruled rows, name leading and the
 * base spirit hard right, with no pictures (no drink has a photograph).
 *
 * My drinks show by default; a switch shows the official IBA list, with its
 * three categories as a second filter row. Filtering is client-side over
 * the committed data. IBA drinks the book writes up link to their page
 * here; the rest link out to the IBA's own page.
 */
export default function BackbarGrid() {
  const [origin, setOrigin] = useState<'mine' | 'iba'>('mine');
  const [category, setCategory] = useState<IbaCategory | null>(null);
  const [shelf, setShelf] = useState<string | null>(null);
  const [family, setFamily] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  /* The list under the filters: mine, or the IBA classics narrowed to a
     category. Base and tag rows are built from this list, so they never
     offer a button nothing on screen would match. */
  const list = useMemo(() => {
    if (origin === 'mine') return MINE;
    return category ? IBA_SHELF.filter((d) => d.iba?.category === category) : IBA_SHELF;
  }, [origin, category]);

  const allShelves = useMemo(() => shelves(list), [list]);
  const allFamilies = useMemo(() => families(list), [list]);
  const allTags = useMemo(() => tags(list), [list]);

  /* The Base filter is hidden on the IBA list.
     Base comes from the first line of a build, and we hold no build for
     the four fifths of the official list the book has not written up -
     those rows would all land on "Other" and every base button would
     quietly drop about eighty drinks. A filter that silently hides most
     of what it is filtering is worse than no filter, and the alternative
     - showing it with a caveat - asks the reader to remember a rule while
     they use the control. So Base belongs to my own shelf, where every
     drink has one. */
  const showBase = origin === 'mine';

  /* The narrower filters (base, family, tag) sit behind one line until
     asked for, or until one of them is in use, so the shelf itself - not
     four rows of options - is what a reader meets first. */
  const [more, setMore] = useState(false);
  const narrowing = Boolean(shelf || family || tag);
  const showFamily = origin === 'mine' && allFamilies.length > 1;

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();

    return list.filter((d) => {
      if (shelf && shelfOf(d) !== shelf) return false;
      if (family && d.family !== family) return false;
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
  }, [list, shelf, family, tag, query]);

  const filtered = Boolean(category || shelf || family || tag || query.trim());

  /* Switching lists drops the narrower filters, since a base or a tag
     chosen on one list may not exist on the other. */
  const switchTo = (next: 'mine' | 'iba') => {
    setOrigin(next);
    setCategory(null);
    setShelf(null);
    setFamily(null);
    setTag(null);
  };

  return (
    <>
      {/* ---- Which list ------------------------------------------ */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-3">
        <span className="label-ui" style={{ minWidth: '3rem' }}>
          Shelf
        </span>
        <FilterLink on={origin === 'mine'} onClick={() => switchTo('mine')}>
          Mine
        </FilterLink>
        <FilterLink on={origin === 'iba'} onClick={() => switchTo('iba')}>
          IBA
        </FilterLink>
      </div>

      {origin === 'iba' && (
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-3">
          <span className="label-ui" style={{ minWidth: '3rem' }}>
            Category
          </span>
          <FilterLink on={category === null} onClick={() => setCategory(null)}>
            All
          </FilterLink>
          {IBA_CATEGORIES.map((c) => (
            <FilterLink
              key={c}
              on={category === c}
              onClick={() => setCategory(category === c ? null : c)}
            >
              {IBA_LISTS[c].label}
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
              setCategory(null);
              setShelf(null);
              setFamily(null);
              setTag(null);
              setQuery('');
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* ---- Base, family and tag, over the list that is up -------- */}
      <button
        className="pick mb-3"
        aria-expanded={more || narrowing}
        onClick={() => setMore(!more)}
      >
        {more || narrowing ? 'Fewer filters' : 'Narrow by base, family or tag'}
      </button>

      {(more || narrowing) && (
        <div>
      {/* ---- Base and tag, over the list that is up ---------------- */}
      {showBase && (
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
      )}

      {showFamily && (
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-3">
          <span className="label-ui" style={{ minWidth: '3rem' }}>
            Family
          </span>
          <FilterLink on={family === null} onClick={() => setFamily(null)}>
            All
          </FilterLink>
          {allFamilies.map((f) => (
            <FilterLink
              key={f.slug}
              on={family === f.slug}
              onClick={() => setFamily(family === f.slug ? null : f.slug)}
            >
              {f.name}
            </FilterLink>
          ))}
        </div>
      )}

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

        </div>
      )}

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
              <ShelfRow drink={drink} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/**
 * One row of the list: a name, a value hard right behind leaders, and a
 * caption underneath.
 *
 * The hard-right slot is the base spirit on my shelf, and the IBA category
 * on the IBA list for every row (most IBA rows have no build to read a base
 * from). A link-only row sets its name in soft ink and captions it
 * iba-world.com, which marks it as an outbound link without a badge.
 */
function ShelfRow({ drink }: { drink: ShelfEntry }) {
  const style = {
    borderBottom: '1px solid var(--rule)',
    textDecoration: 'none',
  } as const;

  const right = drink.iba
    ? IBA_LISTS[drink.iba.category].short
    : shelfOf(drink);

  const body = (
    <>
      <span className="flex items-baseline gap-2">
        <span
          className="display t-h3 leading-none"
          style={drink.linkOnly ? { color: 'var(--ink-soft)' } : undefined}
        >
          {drink.name}
        </span>
        <span className="spec__leader" aria-hidden="true" />
        <span
          className="label-ui shrink-0"
          style={{ color: 'var(--accent-shelf)' }}
        >
          {right}
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
        {drink.linkOnly ? (
          'iba-world.com'
        ) : (
          <>
            {ingredientLine(drink)}
            {drink.abv !== undefined && (
              <span className="nums"> · {drink.abv}%</span>
            )}
          </>
        )}
      </span>
    </>
  );

  /* A plain anchor rather than a Next link, since there is nothing here
     to prefetch and nothing of ours to route to. */
  if (drink.linkOnly) {
    return (
      <a href={drink.ibaUrl} className="block py-5" style={style}>
        {body}
      </a>
    );
  }

  return (
    <Link href={`/backbar/${drink.slug}`} className="block py-5" style={style}>
      {body}
    </Link>
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
      className="t-ui"
      style={{
        minHeight: '2.75rem',
        display: 'inline-flex',
        alignItems: 'center',
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

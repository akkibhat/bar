'use client';

import { useMemo, useState } from 'react';
import { CATEGORY_LABEL, SPIRITS } from '@/lib/spirits';
import type { Spirit, SpiritCategory } from '@/lib/schema';

type Sort = 'name' | 'sweetness' | 'intensity' | 'abv';

const WOOD_LABEL: Record<Spirit['wood'], string> = {
  always: 'Always aged',
  sometimes: 'Sometimes aged',
  never: 'Never aged',
};

/**
 * The spirit explorer: filter the back bar by shelf, sort by name,
 * sweetness, intensity or ABV. `only` locks the category and hides the
 * filter, so a chapter can embed it narrowed to its own shelf.
 */
export default function SpiritExplorer({ only }: { only?: string }) {
  const [category, setCategory] = useState<SpiritCategory | 'all'>(
    (only as SpiritCategory) ?? 'all',
  );
  const [sort, setSort] = useState<Sort>('name');
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  /* Only the categories actually present get a chip, so the filter row
     cannot offer a shelf that returns nothing. */
  const categories = useMemo(() => {
    const present = new Set(SPIRITS.map((s) => s.category));
    return (Object.keys(CATEGORY_LABEL) as SpiritCategory[]).filter((c) =>
      present.has(c),
    );
  }, []);

  const shown = useMemo(() => {
    const list = SPIRITS.filter(
      (s) => category === 'all' || s.category === category,
    );

    return [...list].sort((a, b) => {
      switch (sort) {
        case 'sweetness':
          return b.sweetness - a.sweetness || a.name.localeCompare(b.name);
        case 'intensity':
          return b.intensity - a.intensity || a.name.localeCompare(b.name);
        case 'abv':
          return b.abv[0] - a.abv[0] || a.name.localeCompare(b.name);
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [category, sort]);

  return (
    <div className="my-7">
      {!only && (
        <div className="pick-row">
          <button
            className="pick"
            aria-pressed={category === 'all'}
            onClick={() => setCategory('all')}
          >
            Everything <span className="nums pick__count">({SPIRITS.length})</span>
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className="pick"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {CATEGORY_LABEL[c]}{' '}
              <span className="nums pick__count">
                ({SPIRITS.filter((s) => s.category === c).length})
              </span>
            </button>
          ))}
        </div>
      )}

      <div className="pick-row">
        <span className="pick-label">Sort</span>
        {(
          [
            ['name', 'Name'],
            ['sweetness', 'Sweetest'],
            ['intensity', 'Loudest'],
            ['abv', 'Strongest'],
          ] as [Sort, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            className="pick"
            aria-pressed={sort === id}
            onClick={() => setSort(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* A ledger, not a grid of cards: one ruled row per bottle, the name
          hard left, its measures in fixed columns to the right so the eye
          can run down a column and compare. Opening a row prints the note
          underneath it, the way a footnote hangs from its line. */}
      <ul className="rows">
        {shown.map((s) => {
          const isOpen = openSlug === s.slug;
          return (
            <li key={s.slug} className="rows__item">
              <button
                className="rows__line"
                aria-expanded={isOpen}
                onClick={() => setOpenSlug(isOpen ? null : s.slug)}
              >
                <span className="rows__name">{s.name}</span>
                <span className="rows__shelf" style={{ color: 'var(--accent-book)' }}>
                  {CATEGORY_LABEL[s.category]}
                </span>
                <span className="rows__abv nums">
                  {s.abv[0] === s.abv[1]
                    ? `${s.abv[0]}%`
                    : `${s.abv[0]}\u2013${s.abv[1]}%`}
                </span>
                <span className="rows__wood">{WOOD_LABEL[s.wood]}</span>
                <Meter label="Sweet" value={s.sweetness} />
                <Meter label="Loud" value={s.intensity} />
              </button>

              {isOpen && (
                <div className="rows__open">
                  <p className="t-base mb-2">{s.note}</p>
                  <p className="t-caption mb-2" style={{ color: 'var(--ink-soft)' }}>
                    {s.notes.join(' \u00b7 ')}
                  </p>
                  <p className="t-caption" style={{ color: 'var(--ink-soft)' }}>
                    <span className="label-ui" style={{ marginRight: '0.4rem' }}>
                      Drink it
                    </span>
                    {s.drinkIt}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** A five-pip bar for one of the judgement scales. */
function Meter({ label, value }: { label: string; value: number }) {
  return (
    <span className="rows__meter">
      <span className="label-ui" style={{ letterSpacing: '0.08em' }}>
        {label}
      </span>
      <span className="meter" role="img" aria-label={`${label} ${value} of 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={i <= value ? 'on' : ''} />
        ))}
      </span>
    </span>
  );
}

'use client';

import { useMemo, useState } from 'react';
import { CATEGORY_LABEL, SPIRITS } from '@/lib/spirits';
import type { Spirit, SpiritCategory } from '@/lib/schema';

/**
 * The spirit explorer.
 *
 * Filter the back bar by shelf and by whether wood is involved, sort by
 * how sweet or how assertive each one runs. It is a way of asking "what
 * else behaves like this" rather than a catalogue, which is why sorting
 * is on the two judgement scales rather than alphabetical.
 *
 * `only` locks the category filter and hides the control, so a chapter
 * can embed the explorer already narrowed to its own shelf.
 */

type Sort = 'name' | 'sweetness' | 'intensity' | 'abv';

const WOOD_LABEL: Record<Spirit['wood'], string> = {
  always: 'Always aged',
  sometimes: 'Sometimes aged',
  never: 'Never aged',
};

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
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            className="chip"
            aria-pressed={category === 'all'}
            onClick={() => setCategory('all')}
          >
            Everything <span className="nums">· {SPIRITS.length}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className="chip"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {CATEGORY_LABEL[c]}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-baseline gap-2 mb-4">
        <span className="label-ui">Sort</span>
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
            className="chip"
            aria-pressed={sort === id}
            onClick={() => setSort(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {shown.map((s) => {
          const isOpen = openSlug === s.slug;
          return (
            <li key={s.slug}>
              <button
                className="card w-full text-left px-4 py-3 h-full"
                aria-expanded={isOpen}
                onClick={() => setOpenSlug(isOpen ? null : s.slug)}
              >
                <span className="flex items-baseline justify-between gap-2">
                  <span className="t-base leading-tight">{s.name}</span>
                  <span
                    className="label-ui shrink-0"
                    style={{ color: 'var(--accent-book)' }}
                  >
                    {CATEGORY_LABEL[s.category]}
                  </span>
                </span>

                <span
                  className="block t-caption mt-0.5 nums"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  {s.abv[0] === s.abv[1]
                    ? `${s.abv[0]}%`
                    : `${s.abv[0]}–${s.abv[1]}%`}{' '}
                  · {WOOD_LABEL[s.wood]}
                </span>

                <span className="flex gap-4 mt-2">
                  <Meter label="Sweet" value={s.sweetness} />
                  <Meter label="Loud" value={s.intensity} />
                </span>

                {isOpen && (
                  <span
                    className="block mt-3 pt-3"
                    style={{ borderTop: '1px solid var(--rule)' }}
                  >
                    <span className="block t-base mb-2">{s.note}</span>
                    <span className="flex flex-wrap gap-1.5 mb-2">
                      {s.notes.map((n) => (
                        <span
                          key={n}
                          className="t-caption px-2 py-0.5 rounded-full"
                          style={{
                            border: '1px solid var(--rule-strong)',
                            color: 'var(--ink-soft)',
                          }}
                        >
                          {n}
                        </span>
                      ))}
                    </span>
                    <span className="block t-caption" style={{ color: 'var(--ink-soft)' }}>
                      <span className="label-ui" style={{ marginRight: '0.4rem' }}>
                        Drink it
                      </span>
                      {s.drinkIt}
                    </span>
                  </span>
                )}
              </button>
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
    <span className="flex items-center gap-1.5">
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

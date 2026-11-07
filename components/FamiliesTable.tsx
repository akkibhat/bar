'use client';

import { useState } from 'react';
import { FAMILIES } from '@/lib/content/families';

/**
 * The six root structures, as an expandable list.
 *
 * Collapsed it is a formula per family, which is the thing worth
 * memorising. Expanded it gives the ratio, what the family is for, and
 * which drinks in the book belong to it - so the same component works as
 * a glance and as a reference.
 *
 * Open state is a single slug rather than a set: these are alternatives
 * to compare, and having several open at once turns the page into a wall
 * and loses the comparison.
 */
export default function FamiliesTable() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ul className="rows max-w-[40rem]">
      {FAMILIES.map((f) => {
        const isOpen = open === f.slug;
        return (
          <li key={f.slug} className="rows__item">
            <button
              className="fam__line"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : f.slug)}
            >
              <span className="flex items-baseline justify-between gap-3">
                <span className="display t-h3 leading-none">{f.name}</span>
                <span
                  className="t-caption shrink-0"
                  style={{ color: 'var(--accent-shelf)' }}
                >
                  {f.formula}
                </span>
              </span>

              {isOpen && (
                <span className="rows__open block pt-1">
                  <span
                    className="block t-base mb-3"
                    style={{ color: 'var(--ink)' }}
                  >
                    {f.about}
                  </span>

                  <span className="grid sm:grid-cols-2 gap-3">
                    <Fact label="Starts at" value={f.ratio ?? '–'} />
                    <Fact label="Method" value={f.method} />
                  </span>

                  <span className="block mt-3">
                    <span className="label-ui block mb-1">In this book</span>
                    <span className="t-caption" style={{ color: 'var(--ink-soft)' }}>
                      {f.members.join(' · ')}
                    </span>
                  </span>
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/** A small label over a value, used for each family's facts. */
function Fact({ label, value }: { label: string; value: string }) {
  return (
    <span className="block">
      <span className="label-ui block mb-0.5">{label}</span>
      <span className="t-caption nums" style={{ color: 'var(--ink-soft)' }}>
        {value}
      </span>
    </span>
  );
}

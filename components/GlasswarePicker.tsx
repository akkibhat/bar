'use client';

import { useState } from 'react';
import { GLASSES, SERVE_LABEL, type Serve } from '@/lib/glassware';

/**
 * Which glass.
 *
 * Filters on how the drink is served, because that is the thing you know
 * first - long, short, up - and every other property of the glass follows
 * from it.
 */
const SERVES: Serve[] = ['up', 'short', 'long', 'hot', 'shot'];

export default function GlasswarePicker() {
  const [serve, setServe] = useState<Serve | 'all'>('all');

  const shown = GLASSES.filter((g) => serve === 'all' || g.serve === serve);

  return (
    <div className="my-7">
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          className="chip"
          aria-pressed={serve === 'all'}
          onClick={() => setServe('all')}
        >
          Everything <span className="nums">· {GLASSES.length}</span>
        </button>
        {SERVES.map((s) => (
          <button
            key={s}
            className="chip"
            aria-pressed={serve === s}
            onClick={() => setServe(s)}
          >
            {SERVE_LABEL[s]}
          </button>
        ))}
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {shown.map((g) => (
          <li key={g.slug} className="card px-4 py-3">
            <p className="flex items-baseline justify-between gap-2">
              <span className="t-base leading-tight">{g.name}</span>
              <span
                className="t-caption nums shrink-0"
                style={{ color: 'var(--ink-faint)' }}
              >
                {g.holds[0] === g.holds[1]
                  ? `${g.holds[0]} ml`
                  : `${g.holds[0]}–${g.holds[1]} ml`}
              </span>
            </p>
            <p className="t-caption mt-1" style={{ color: 'var(--ink-soft)' }}>
              {g.why}
            </p>
            <p className="t-caption mt-1.5" style={{ color: 'var(--ink-faint)' }}>
              {g.drinks.join(' · ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

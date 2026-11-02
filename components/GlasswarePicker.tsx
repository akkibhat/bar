'use client';

import { useState } from 'react';
import { GLASSES, SERVE_LABEL, type Serve } from '@/lib/glassware';
import Link from 'next/link';
import GlassShape from './GlassShape';
import type { DrinkLink } from '@/lib/drinkLinks';

/**
 * Which glass.
 *
 * Filters on how the drink is served, because that is the thing you know
 * first - long, short, up - and every other property of the glass follows
 * from it.
 */
const SERVES: Serve[] = ['up', 'short', 'long', 'hot', 'shot'];

export default function GlasswarePicker({
  links = {},
}: {
  /** Drink name to destination, for the names that have somewhere to go. */
  links?: Record<string, DrinkLink>;
}) {
  const [serve, setServe] = useState<Serve | 'all'>('all');

  const shown = GLASSES.filter((g) => serve === 'all' || g.serve === serve);

  return (
    <div className="my-7">
      <div className="pick-row">
        <button
          className="pick"
          aria-pressed={serve === 'all'}
          onClick={() => setServe('all')}
        >
          Everything <span className="nums pick__count">({GLASSES.length})</span>
        </button>
        {SERVES.map((s) => (
          <button
            key={s}
            className="pick"
            aria-pressed={serve === s}
            onClick={() => setServe(s)}
          >
            {SERVE_LABEL[s]}{' '}
            <span className="nums pick__count">
              ({GLASSES.filter((g) => g.serve === s).length})
            </span>
          </button>
        ))}
      </div>

      {/* A specimen sheet: each glass drawn large on its own ruled cell,
          the way a catalogue plate shows a shape, with the name and
          capacity on a dot leader beside it. Matching a shape against
          what is in your hand is the whole question, so the shape leads. */}
      <ul className="plates">
        {shown.map((g) => (
          <li key={g.slug} className="plates__item">
            <GlassShape glass={g} size={118} />
            <div className="min-w-0">
              <p className="spec__line" style={{ padding: 0 }}>
                <span className="display t-h3 leading-tight">{g.name}</span>
                <span className="spec__leader" aria-hidden="true" />
                <span className="spec__amount">
                  {g.holds[0] === g.holds[1]
                    ? `${g.holds[0]} ml`
                    : `${g.holds[0]}\u2013${g.holds[1]} ml`}
                </span>
              </p>
              <p className="t-caption mt-1" style={{ color: 'var(--ink-soft)' }}>
                {g.why}
              </p>
              <p className="t-caption mt-1.5" style={{ color: 'var(--ink-faint)' }}>
                {g.drinks.map((d, i) => (
                  <span key={d}>
                    {i > 0 && ' \u00b7 '}
                    {links[d] ? (
                      links[d].external ? (
                        <a
                          href={links[d].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="drink-link drink-link--ext"
                          data-tip="The IBA's page for this one. The book hasn't written it up."
                        >
                          {d}
                          <span aria-hidden="true">{' \u2197'}</span>
                          <span className="sr-only"> (opens the IBA&rsquo;s site)</span>
                        </a>
                      ) : (
                        <Link href={links[d].href} className="drink-link">
                          {d}
                        </Link>
                      )
                    ) : (
                      d
                    )}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

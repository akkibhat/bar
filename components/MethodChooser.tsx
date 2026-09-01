'use client';

import { useState } from 'react';

/**
 * Shake or stir.
 *
 * The rule is one line long - if anything in the glass is cloudy, shake
 * it; if everything is clear and alcoholic, stir it - but it is easier to
 * believe once you have poked at it, so this asks about the build and
 * gives the answer with the reason attached.
 *
 * Deliberately not a decision tree with branches. There is one question
 * that matters and several that only look like they do, and a tree would
 * imply otherwise.
 */

const INGREDIENTS = [
  { id: 'citrus', label: 'Citrus juice', cloudy: true },
  { id: 'juice', label: 'Other juice', cloudy: true },
  { id: 'syrup', label: 'Syrup', cloudy: true },
  { id: 'egg', label: 'Egg or aquafaba', cloudy: true },
  { id: 'cream', label: 'Cream or dairy', cloudy: true },
  { id: 'spirit', label: 'Spirits only', cloudy: false },
  { id: 'vermouth', label: 'Vermouth or fortified wine', cloudy: false },
  { id: 'liqueur', label: 'Clear liqueur', cloudy: false },
] as const;

export default function MethodChooser() {
  const [picked, setPicked] = useState<string[]>(['spirit', 'vermouth']);

  const toggle = (id: string) =>
    setPicked((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    );

  const cloudy = INGREDIENTS.filter(
    (i) => picked.includes(i.id) && i.cloudy,
  );
  const hasEgg = picked.includes('egg');
  const empty = picked.length === 0;

  return (
    <div className="card my-7 px-5 py-5 max-w-[36rem]">
      <p className="label-ui mb-3">Shake or stir</p>
      <p className="t-caption mb-3" style={{ color: 'var(--ink-soft)' }}>
        What is going in?
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {INGREDIENTS.map((i) => (
          <button
            key={i.id}
            className="chip"
            aria-pressed={picked.includes(i.id)}
            onClick={() => toggle(i.id)}
          >
            {i.label}
          </button>
        ))}
      </div>

      <div className="pt-4" style={{ borderTop: '1px solid var(--rule)' }}>
        {empty ? (
          <p className="t-base" style={{ color: 'var(--ink-faint)' }}>
            Pick something and the answer appears.
          </p>
        ) : (
          <>
            <p className="display t-h2 leading-none mb-2">
              {cloudy.length > 0 ? 'Shake it' : 'Stir it'}
            </p>
            <p className="t-base">
              {cloudy.length > 0 ? (
                <>
                  {cloudy.map((c) => c.label.toLowerCase()).join(' and ')} will
                  not go clear, so there is nothing to lose by shaking and a
                  texture to gain. Eight to twelve seconds, hard.
                </>
              ) : (
                <>
                  Everything here is clear and alcoholic. Shaking would cloud
                  it and chip ice into it, so stir instead - about thirty
                  seconds over cubed ice.
                </>
              )}
            </p>
            {hasEgg && (
              <p className="t-caption mt-2" style={{ color: 'var(--caution)' }}>
                With egg or aquafaba, dry shake first - without ice - then add
                ice and shake again.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

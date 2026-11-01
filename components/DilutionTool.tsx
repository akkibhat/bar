'use client';

import { useMemo, useState } from 'react';

/**
 * What ice does to a drink.
 *
 * Takes the volume and strength of a drink as built and reports what it
 * becomes once it has been chilled, because chilling and dilution are the
 * same event and a spec that ignores the water is describing a drink
 * nobody drinks.
 *
 * The dilution figures are typical ranges rather than a formula. There is
 * a published model for this - dilution rises with starting strength,
 * since a stronger drink has further to fall before it reaches the same
 * temperature - but it needs the finishing temperature as an input, and
 * a tool that asks a reader for the temperature of their shaker is not a
 * useful tool. These are the standard working numbers instead, and they
 * are labelled as such.
 */

const METHODS = [
  {
    id: 'stir',
    label: 'Stirred',
    dilution: 0.22,
    hint: '20–25%. Around 30 seconds in a mixing glass with cubed ice.',
  },
  {
    id: 'shake',
    label: 'Shaken',
    dilution: 0.27,
    hint: '25–30%. Harder and faster than stirring, so more ice melts.',
  },
  {
    id: 'build',
    label: 'Built over ice',
    dilution: 0.12,
    hint: '10–15% at the point of serving, and it climbs as you drink it.',
  },
  {
    id: 'batch',
    label: 'Batched, no ice',
    dilution: 0,
    hint: 'None at all - which is the trap. Add the water yourself.',
  },
] as const;

type MethodId = (typeof METHODS)[number]['id'];

export default function DilutionTool() {
  const [volume, setVolume] = useState(90);
  const [abv, setAbv] = useState(30);
  const [method, setMethod] = useState<MethodId>('stir');

  const chosen = METHODS.find((m) => m.id === method) ?? METHODS[0];

  const result = useMemo(() => {
    const water = volume * chosen.dilution;
    const finalVolume = volume + water;
    /* The alcohol itself does not change; only what it is diluted into,
       so the finished strength is a straight volume ratio. */
    const finalAbv = finalVolume ? (volume * abv) / finalVolume : 0;
    return { water, finalVolume, finalAbv };
  }, [volume, abv, chosen]);

  return (
    <div className="tool-sheet my-7 max-w-[36rem]">

      <label className="block mb-3">
        <span className="flex items-baseline justify-between mb-1">
          <span className="label-ui">Built volume</span>
          <span className="t-caption nums" style={{ color: 'var(--ink-soft)' }}>
            {volume} ml
          </span>
        </span>
        <input
          type="range"
          className="ink-range"
          min={30}
          max={300}
          step={5}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </label>

      <label className="block mb-4">
        <span className="flex items-baseline justify-between mb-1">
          <span className="label-ui">Strength as built</span>
          <span className="t-caption nums" style={{ color: 'var(--ink-soft)' }}>
            {abv}%
          </span>
        </span>
        <input
          type="range"
          className="ink-range"
          min={5}
          max={50}
          step={1}
          value={abv}
          onChange={(e) => setAbv(Number(e.target.value))}
        />
      </label>

      <div className="pick-row mb-4">
        {METHODS.map((m) => (
          <button
            key={m.id}
            className="pick"
            aria-pressed={method === m.id}
            onClick={() => setMethod(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="pt-4" style={{ borderTop: '1px solid var(--rule)' }}>
        <ul className="spec" style={{ marginBottom: 'var(--s-md)' }}>
          <Line label="Water in" value={`${Math.round(result.water)} ml`} />
          <Line label="Finished" value={`${Math.round(result.finalVolume)} ml`} />
          <Line label="Strength" value={`${result.finalAbv.toFixed(1)}%`} />
        </ul>

        <p className="t-caption" style={{ color: 'var(--ink-soft)' }}>
          {chosen.hint}
        </p>

        {method === 'batch' && (
          <p className="t-caption mt-2" style={{ color: 'var(--caution)' }}>
            A batch poured straight over ice has never been diluted, so it
            lands harsh. Add about{' '}
            <span className="nums">{Math.round(volume * 0.22)} ml</span> of
            water per <span className="nums">{volume} ml</span> of batch and
            chill it before serving.
          </p>
        )}
      </div>
    </div>
  );
}

/** One printed line of the result: the label, a leader, the figure. */
function Line({ label, value }: { label: string; value: string }) {
  return (
    <li className="spec__line">
      <span className="spec__name">{label}</span>
      <span className="spec__leader" aria-hidden="true" />
      <span className="spec__amount nums">{value}</span>
    </li>
  );
}

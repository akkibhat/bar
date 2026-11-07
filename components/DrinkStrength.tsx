'use client';

import { useMemo, useState } from 'react';

/*
 * A New Zealand standard drink is 10 g of pure alcohol:
 *
 *     grams = volume_ml x (abv / 100) x 0.789   (ethanol density, g/ml)
 *     standard drinks = grams / 10
 *
 * 30 ml at 40% is 0.95 standard drinks, the usual sanity check.
 */

const ETHANOL_DENSITY = 0.789; // g/ml
const NZ_STANDARD_DRINK_G = 10;

type Line = { id: number; name: string; volume: number; abv: number };

/** A sensible drink to open on: a Negroni, which is three equal pours. */
const INITIAL: Line[] = [
  { id: 1, name: 'Gin', volume: 30, abv: 40 },
  { id: 2, name: 'Campari', volume: 30, abv: 25 },
  { id: 3, name: 'Sweet vermouth', volume: 30, abv: 16 },
];

/**
 * Strength and standard drinks: add each pour as a volume and an ABV, and
 * it reports the combined strength and standard drinks before and after
 * the water the ice adds.
 */
export default function DrinkStrength() {
  const [lines, setLines] = useState<Line[]>(INITIAL);
  const [dilution, setDilution] = useState(22);

  const totals = useMemo(() => {
    const volume = lines.reduce((sum, l) => sum + l.volume, 0);
    /* Pure alcohol is additive; percentages are not, which is why this
       sums millilitres of ethanol rather than averaging the strengths. */
    const alcoholMl = lines.reduce(
      (sum, l) => sum + (l.volume * l.abv) / 100,
      0,
    );

    const neatAbv = volume ? (alcoholMl / volume) * 100 : 0;
    const withWater = volume * (1 + dilution / 100);
    const servedAbv = withWater ? (alcoholMl / withWater) * 100 : 0;
    const grams = alcoholMl * ETHANOL_DENSITY;

    return {
      volume,
      neatAbv,
      servedVolume: withWater,
      servedAbv,
      standardDrinks: grams / NZ_STANDARD_DRINK_G,
    };
  }, [lines, dilution]);

  /* Change some fields on one line. */
  const update = (id: number, patch: Partial<Line>) =>
    setLines((cur) => cur.map((l) => (l.id === id ? { ...l, ...patch } : l)));

  /* Drop one line. */
  const remove = (id: number) =>
    setLines((cur) => cur.filter((l) => l.id !== id));

  /* Add an unnamed 15 ml, 20% line with the next free id. */
  const add = () =>
    setLines((cur) => [
      ...cur,
      {
        id: Math.max(0, ...cur.map((l) => l.id)) + 1,
        name: '',
        volume: 15,
        abv: 20,
      },
    ]);

  return (
    <div className="card my-7 px-5 py-5 max-w-[36rem]">
      <p className="label-ui mb-3">Strength and standard drinks</p>

      <div className="space-y-2 mb-4">
        {lines.map((line) => (
          <div key={line.id} className="flex items-center gap-2">
            <input
              className="ink-input flex-1 min-w-0"
              value={line.name}
              placeholder="Ingredient"
              aria-label="Ingredient name"
              onChange={(e) => update(line.id, { name: e.target.value })}
            />
            <NumberField
              value={line.volume}
              suffix="ml"
              label={`Volume of ${line.name || 'ingredient'}`}
              onChange={(v) => update(line.id, { volume: v })}
            />
            <NumberField
              value={line.abv}
              suffix="%"
              label={`Strength of ${line.name || 'ingredient'}`}
              onChange={(v) => update(line.id, { abv: v })}
            />
            <button
              className="label-ui px-1.5 shrink-0"
              style={{ color: 'var(--ink-faint)' }}
              aria-label={`Remove ${line.name || 'ingredient'}`}
              onClick={() => remove(line.id)}
              disabled={lines.length === 1}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button className="btn mb-4" onClick={add}>
        Add an ingredient
      </button>

      <label className="block mb-4">
        <span className="flex items-baseline justify-between mb-1">
          <span className="label-ui">Dilution from ice</span>
          <span className="t-caption nums" style={{ color: 'var(--ink-soft)' }}>
            {dilution}%
          </span>
        </span>
        <input
          type="range"
          className="ink-range"
          min={0}
          max={40}
          step={1}
          value={dilution}
          onChange={(e) => setDilution(Number(e.target.value))}
        />
      </label>

      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
        style={{ borderTop: '1px solid var(--rule)' }}
      >
        <Figure
          label="As built"
          value={`${totals.neatAbv.toFixed(1)}%`}
          sub={`${Math.round(totals.volume)} ml`}
        />
        <Figure
          label="As served"
          value={`${totals.servedAbv.toFixed(1)}%`}
          sub={`${Math.round(totals.servedVolume)} ml`}
          accent
        />
        <Figure
          label="Standard drinks"
          value={totals.standardDrinks.toFixed(2)}
          sub="10 g each"
        />
        <Figure
          label="Pure alcohol"
          value={`${(totals.standardDrinks * NZ_STANDARD_DRINK_G).toFixed(1)} g`}
          sub="in the glass"
        />
      </div>

      <p className="t-caption mt-3" style={{ color: 'var(--ink-faint)' }}>
        A standard drink in New Zealand is 10 g of pure alcohol. Dilution
        changes the strength but not the number of standard drinks - the
        alcohol is all still there.
      </p>
    </div>
  );
}

/** A small numeric input with its unit shown after it. */
function NumberField({
  value,
  suffix,
  label,
  onChange,
}: {
  value: number;
  suffix: string;
  label: string;
  onChange: (n: number) => void;
}) {
  return (
    <span className="flex items-baseline gap-1 shrink-0">
      <input
        type="number"
        className="ink-input nums text-right"
        style={{ width: '3.4rem' }}
        value={value}
        min={0}
        aria-label={label}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
      />
      <span className="t-caption" style={{ color: 'var(--ink-faint)' }}>
        {suffix}
      </span>
    </span>
  );
}

/** One result figure: a label, a big value and a small line under it. */
function Figure({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="label-ui mb-0.5">{label}</p>
      <p
        className="display t-h3 leading-none nums"
        style={{ color: accent ? 'var(--accent-book)' : 'var(--ink)' }}
      >
        {value}
      </p>
      <p className="t-caption nums" style={{ color: 'var(--ink-faint)' }}>
        {sub}
      </p>
    </div>
  );
}

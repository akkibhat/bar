'use client';

import { useMemo, useState } from 'react';

/**
 * The balance calculator.
 *
 * Takes a spirit, a citrus and a sweetener in millilitres and reports the
 * ratio between them, then says which of the known templates it is
 * nearest and how far off it sits.
 *
 * The judgement is deliberately loose. There is no correct ratio - a
 * drier palate genuinely wants less sugar - so the tool names the
 * template a spec is closest to rather than marking it right or wrong.
 * The only thing it will actually warn about is a drink far enough
 * outside every template to be a mistake rather than a preference.
 */

type Template = {
  name: string;
  /** Parts, against a citrus of 1. */
  spirit: number;
  citrus: number;
  sweet: number;
  note: string;
};

/** The templates worth measuring against, as parts of spirit. */
const TEMPLATES: Template[] = [
  {
    name: 'Classic sour',
    spirit: 2,
    citrus: 1,
    sweet: 1,
    note: 'The workbook default. Daiquiri, Margarita, Whiskey Sour.',
  },
  {
    name: 'Dry sour',
    spirit: 2,
    citrus: 1,
    sweet: 0.75,
    note: 'A quarter less sugar. Sharper and more spirit-forward.',
  },
  {
    name: 'Equal parts',
    spirit: 1,
    citrus: 1,
    sweet: 1,
    note: 'Kamikaze, and the shape of most simple liqueur sours.',
  },
];

export default function RatioTool() {
  const [spirit, setSpirit] = useState(60);
  const [citrus, setCitrus] = useState(30);
  const [sweet, setSweet] = useState(30);

  const result = useMemo(() => {
    if (citrus === 0 && sweet === 0) return null;

    /* Normalise everything against the citrus, since that is the part
       that varies least across the templates and makes the clearest
       denominator to read a ratio from. */
    const base = citrus || 1;
    const parts = {
      spirit: spirit / base,
      citrus: 1,
      sweet: sweet / base,
    };

    /* Nearest template by summed absolute difference on the two axes
       that actually move. A plain Euclidean distance would work as well;
       this is easier to explain in a sentence. */
    let nearest = TEMPLATES[0];
    let best = Infinity;
    for (const t of TEMPLATES) {
      const d =
        Math.abs(parts.spirit - t.spirit / t.citrus) +
        Math.abs(parts.sweet - t.sweet / t.citrus);
      if (d < best) {
        best = d;
        nearest = t;
      }
    }

    const total = spirit + citrus + sweet;
    /* Sugar as a share of the whole is the number that predicts whether
       a drink reads as cloying, and it travels better between recipes
       than a ratio does. */
    const sweetShare = total ? (sweet / total) * 100 : 0;

    return { parts, nearest, distance: best, total, sweetShare };
  }, [spirit, citrus, sweet]);

  /** Round to one decimal, then drop a trailing ".0". */
  const fmt = (n: number) =>
    (Math.round(n * 10) / 10).toFixed(1).replace(/\.0$/, '');

  return (
    <div className="card my-7 px-5 py-5 max-w-[36rem]">
      <p className="label-ui mb-3">Balance calculator</p>

      <Slider label="Spirit" value={spirit} onChange={setSpirit} max={90} />
      <Slider label="Citrus" value={citrus} onChange={setCitrus} max={60} />
      <Slider label="Sweetener" value={sweet} onChange={setSweet} max={60} />

      {result && (
        <div
          className="mt-5 pt-4"
          style={{ borderTop: '1px solid var(--rule)' }}
        >
          <p className="display t-h2 leading-none mb-1 nums">
            {fmt(result.parts.spirit)} : {fmt(result.parts.citrus)} :{' '}
            {fmt(result.parts.sweet)}
          </p>
          <p className="t-caption mb-3" style={{ color: 'var(--ink-faint)' }}>
            spirit : citrus : sweet &middot;{' '}
            <span className="nums">{result.total} ml</span> before ice
          </p>

          <p className="t-base">
            Closest to <strong>{result.nearest.name}</strong>.{' '}
            <span style={{ color: 'var(--ink-soft)' }}>
              {result.nearest.note}
            </span>
          </p>

          {/* Only flags a drink well outside every template. Inside that,
              the difference is taste rather than error. */}
          {result.distance > 0.6 && (
            <p className="t-caption mt-2" style={{ color: 'var(--caution)' }}>
              That is some way off any of the usual templates. Worth tasting
              before you commit to it.
            </p>
          )}

          <p className="t-caption mt-2" style={{ color: 'var(--ink-soft)' }}>
            Sugar is{' '}
            <span className="nums">{Math.round(result.sweetShare)}%</span> of
            the build.{' '}
            {result.sweetShare > 30
              ? 'High — expect it to read sweet.'
              : result.sweetShare < 15
                ? 'Low — expect it to read sharp.'
                : 'In the usual range.'}
          </p>
        </div>
      )}
    </div>
  );
}

/** One labelled millilitre slider with its value shown alongside. */
function Slider({
  label,
  value,
  onChange,
  max,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  max: number;
}) {
  return (
    <label className="block mb-3">
      <span className="flex items-baseline justify-between mb-1">
        <span className="label-ui">{label}</span>
        <span className="t-caption nums" style={{ color: 'var(--ink-soft)' }}>
          {value} ml
        </span>
      </span>
      <input
        type="range"
        className="ink-range"
        min={0}
        max={max}
        step={2.5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

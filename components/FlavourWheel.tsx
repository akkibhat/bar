'use client';

import { useState } from 'react';
import { FLAVOURS } from '@/lib/flavours';

const SIZE = 260;
const CENTRE = SIZE / 2;
const OUTER = 118;
const INNER = 46;

/**
 * One wedge as a path, from `from` to `to` in degrees clockwise from
 * twelve o'clock. Drawn as an annulus segment: out along one radius,
 * round the outer arc, back down the next radius, round the inner arc.
 */
function wedge(from: number, to: number): string {
  /* Degrees from twelve o'clock to radians from three o'clock. */
  const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;
  /* The point at radius `r` and angle `deg`. */
  const pt = (r: number, deg: number) => [
    CENTRE + r * Math.cos(rad(deg)),
    CENTRE + r * Math.sin(rad(deg)),
  ];

  const [x1, y1] = pt(OUTER, from);
  const [x2, y2] = pt(OUTER, to);
  const [x3, y3] = pt(INNER, to);
  const [x4, y4] = pt(INNER, from);
  const large = to - from > 180 ? 1 : 0;

  return [
    `M${x1.toFixed(2)},${y1.toFixed(2)}`,
    `A${OUTER},${OUTER} 0 ${large} 1 ${x2.toFixed(2)},${y2.toFixed(2)}`,
    `L${x3.toFixed(2)},${y3.toFixed(2)}`,
    `A${INNER},${INNER} 0 ${large} 0 ${x4.toFixed(2)},${y4.toFixed(2)}`,
    'Z',
  ].join(' ');
}

/**
 * The flavour wheel: six family wedges drawn in SVG. Selecting one shows
 * what the family signals and the descriptors under it.
 */
export default function FlavourWheel() {
  const [active, setActive] = useState<string | null>(null);
  const step = 360 / FLAVOURS.length;
  const shown = FLAVOURS.find((f) => f.slug === active);

  return (
    <div className="card my-7 px-5 py-5 max-w-[36rem]">
      <p className="label-ui mb-3">Flavour wheel</p>

      <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="shrink-0"
          role="group"
          aria-label="Flavour families"
        >
          {FLAVOURS.map((f, i) => {
            const isActive = active === f.slug;
            return (
              <path
                key={f.slug}
                d={wedge(i * step + 1, (i + 1) * step - 1)}
                fill={f.colour}
                opacity={active && !isActive ? 0.32 : 1}
                stroke="var(--paper-raised)"
                strokeWidth={2}
                style={{ cursor: 'pointer', transition: 'opacity var(--m-quick) var(--ease)' }}
                onClick={() => setActive(isActive ? null : f.slug)}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={f.name}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(isActive ? null : f.slug);
                  }
                }}
              />
            );
          })}

          {/* The hub carries the selected family's name, so the wheel
              labels itself without six labels fighting for room. */}
          <text
            x={CENTRE}
            y={CENTRE}
            textAnchor="middle"
            dominantBaseline="central"
            className="display"
            style={{
              fontSize: shown ? 15 : 13,
              fill: 'var(--ink-soft)',
            }}
          >
            {shown ? shown.name.split(' ')[0] : 'Pick one'}
          </text>
        </svg>

        <div className="min-w-0 flex-1">
          {shown ? (
            <>
              <p className="display t-h3 leading-none mb-2">{shown.name}</p>
              <p className="t-base mb-3">{shown.meaning}</p>
              <div className="flex flex-wrap gap-1.5">
                {shown.descriptors.map((d) => (
                  <span
                    key={d}
                    className="t-caption px-2 py-0.5 rounded-full"
                    style={{
                      background: shown.colour,
                      color: 'var(--flavour-label)',
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <p className="t-base" style={{ color: 'var(--ink-soft)' }}>
              Place what you are smelling in a family first, then reach for a
              specific word. Getting to &ldquo;wood&rdquo; is a judgement most
              people can make; getting to &ldquo;toasted oak with a little
              coconut&rdquo; is a different skill and it comes second.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

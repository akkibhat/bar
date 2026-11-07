'use client';

import { useState } from 'react';
import Figure from './Figure';

type Owner = 'diageo' | 'pernod' | 'lvmh';

type Shape =
  | 'gin'         /* straight sides, sharp shoulder */
  | 'apothecary'  /* rounded shoulder, stub neck - the vodka shape */
  | 'flask'       /* wide body pinched at the waist */
  | 'squared'     /* angular, slope-shouldered - the whisky shape */
  | 'highland'    /* tall and slim, long neck */
  | 'islay'       /* short and stout */
  | 'squat'       /* wide low body, long narrow neck */
  | 'cream'       /* bulged body, rounded all over */
  | 'cylinder'    /* straight tube, flat top */
  | 'bulb'        /* heavy base tapering upward */
  | 'cognac'      /* broad base, curved shoulder, tapering neck */
  | 'champagne'   /* sloped shoulder, foil */
  | 'flute'       /* tall sloped shoulder, no waist */
  | 'stubby';     /* beer */

type Bottle = { lines: [string, string?]; shape: Shape; kind: string };

const ROWS: { owner: Owner; name: string; base: string; bottles: Bottle[] }[] = [
  {
    owner: 'diageo',
    name: 'Diageo',
    base: 'London',
    bottles: [
      { lines: ['Gordon’s'], shape: 'gin', kind: 'gin' },
      { lines: ['Smirnoff'], shape: 'apothecary', kind: 'vodka' },
      { lines: ['Captain', 'Morgan'], shape: 'flask', kind: 'rum' },
      { lines: ['Johnnie', 'Walker'], shape: 'squared', kind: 'whisky' },
      { lines: ['Talisker'], shape: 'islay', kind: 'whisky' },
      { lines: ['Don Julio'], shape: 'squat', kind: 'tequila' },
      { lines: ['Baileys'], shape: 'cream', kind: 'liqueur' },
      { lines: ['Guinness'], shape: 'stubby', kind: 'beer' },
    ],
  },
  {
    owner: 'pernod',
    name: 'Pernod Ricard',
    base: 'Paris',
    bottles: [
      { lines: ['Beefeater'], shape: 'gin', kind: 'gin' },
      { lines: ['Absolut'], shape: 'apothecary', kind: 'vodka' },
      { lines: ['Havana', 'Club'], shape: 'highland', kind: 'rum' },
      { lines: ['Jameson'], shape: 'squared', kind: 'whiskey' },
      { lines: ['Chivas', 'Regal'], shape: 'bulb', kind: 'whisky' },
      { lines: ['Malibu'], shape: 'cylinder', kind: 'liqueur' },
      { lines: ['Kahlúa'], shape: 'cream', kind: 'liqueur' },
      { lines: ['Brancott', 'Estate'], shape: 'flute', kind: 'wine' },
    ],
  },
  {
    owner: 'lvmh',
    name: 'LVMH',
    base: 'Paris',
    bottles: [
      { lines: ['Belvedere'], shape: 'highland', kind: 'vodka' },
      { lines: ['Ardbeg'], shape: 'islay', kind: 'whisky' },
      { lines: ['Glenmorangie'], shape: 'highland', kind: 'whisky' },
      { lines: ['Hennessy'], shape: 'cognac', kind: 'cognac' },
      { lines: ['Moët &', 'Chandon'], shape: 'champagne', kind: 'champagne' },
      { lines: ['Veuve', 'Clicquot'], shape: 'champagne', kind: 'champagne' },
      { lines: ['Dom', 'Pérignon'], shape: 'champagne', kind: 'champagne' },
      { lines: ['Cloudy Bay'], shape: 'flute', kind: 'wine' },
    ],
  },
];

const LEFT = 58;
const SLOT = 86;
const SHELVES = [156, 336, 516];

/**
 * One bottle as a single path: body, neck and cap as subpaths so a single
 * fill colours the lot. Anchored at bottom-centre on the shelf line.
 * `label` is where the paper label sits up the body.
 */
const SHAPES: Record<Shape, { path: (x: number, b: number) => string; label: number }> = {
  gin: {
    path: (x, b) =>
      `M${x - 15} ${b} v-56 q0-4 3-7 l6-7 h12 l6 7 q3 3 3 7 v56 z M${x - 5} ${b - 70} v-16 h10 v16 z M${x - 7} ${b - 86} h14 v-6 h-14 z`,
    label: 34,
  },
  apothecary: {
    path: (x, b) =>
      `M${x - 15} ${b} v-48 q0-14 15-16 q15 2 15 16 v48 z M${x - 5} ${b - 64} v-10 h10 v10 z M${x - 8} ${b - 74} h16 v-7 h-16 z`,
    label: 30,
  },
  flask: {
    path: (x, b) =>
      `M${x - 17} ${b} v-30 q0-12 6-18 q-4 -6 -4 -12 q0-10 15-12 q15 2 15 12 q0 6 -4 12 q6 6 6 18 v30 z M${x - 5} ${b - 72} v-12 h10 v12 z M${x - 7} ${b - 84} h14 v-6 h-14 z`,
    label: 22,
  },
  squared: {
    path: (x, b) =>
      `M${x - 17} ${b} v-52 l5-11 h24 l5 11 v52 z M${x - 5} ${b - 63} v-15 h10 v15 z M${x - 7} ${b - 78} h14 v-6 h-14 z`,
    label: 30,
  },
  highland: {
    path: (x, b) =>
      `M${x - 12} ${b} v-58 q0-8 4-12 h16 q4 4 4 12 v58 z M${x - 4} ${b - 70} v-26 h8 v26 z M${x - 6} ${b - 96} h12 v-6 h-12 z`,
    label: 32,
  },
  islay: {
    path: (x, b) =>
      `M${x - 16} ${b} v-38 q0-8 5-12 h22 q5 4 5 12 v38 z M${x - 5} ${b - 50} v-13 h10 v13 z M${x - 7} ${b - 63} h14 v-6 h-14 z`,
    label: 22,
  },
  squat: {
    path: (x, b) =>
      `M${x - 18} ${b} v-26 q0-10 8-13 h20 q8 3 8 13 v26 z M${x - 4} ${b - 39} v-34 h8 v34 z M${x - 7} ${b - 73} h14 v-7 h-14 z`,
    label: 18,
  },
  cream: {
    path: (x, b) =>
      `M${x - 16} ${b} v-32 q0-20 16-22 q16 2 16 22 v32 z M${x - 5} ${b - 54} v-11 h10 v11 z M${x - 8} ${b - 65} h16 v-7 h-16 z`,
    label: 24,
  },
  cylinder: {
    path: (x, b) =>
      `M${x - 13} ${b} v-64 h26 v64 z M${x - 5} ${b - 64} v-9 h10 v9 z M${x - 8} ${b - 73} h16 v-6 h-16 z`,
    label: 34,
  },
  bulb: {
    path: (x, b) =>
      `M${x - 18} ${b} v-20 q0-16 7-24 q3-4 3-10 h16 q0 6 3 10 q7 8 7 24 v20 z M${x - 5} ${b - 58} v-12 h10 v12 z M${x - 7} ${b - 70} h14 v-6 h-14 z`,
    label: 16,
  },
  cognac: {
    path: (x, b) =>
      `M${x - 19} ${b} v-18 q0-22 10-30 q4-4 4-10 h10 q0 6 4 10 q10 8 10 30 v18 z M${x - 4} ${b - 60} v-16 h8 v16 z M${x - 7} ${b - 76} h14 v-6 h-14 z`,
    label: 15,
  },
  champagne: {
    path: (x, b) =>
      `M${x - 16} ${b} v-38 q0-18 10-28 v-16 h12 v16 q10 10 10 28 v38 z M${x - 6} ${b - 82} h12 v-9 h-12 z`,
    label: 24,
  },
  flute: {
    path: (x, b) =>
      `M${x - 13} ${b} v-48 q0-14 8-22 v-18 h10 v18 q8 8 8 22 v48 z M${x - 5} ${b - 88} h10 v-6 h-10 z`,
    label: 28,
  },
  stubby: {
    path: (x, b) =>
      `M${x - 14} ${b} v-30 q0-10 7-14 v-12 h14 v12 q7 4 7 14 v30 z M${x - 8} ${b - 56} h16 v-5 h-16 z`,
    label: 18,
  },
};

/**
 * Who owns the shelf: three rows, one company each, every row ordered like
 * a speed rail, so each company reads as owning a whole rail.
 *
 * Silhouettes are per bottle (shapes only, no logos) so the shelf is
 * recognisable by outline. Bottles start blank; the control colours them
 * and names the owner, so recognition comes before the reveal.
 */
export default function BrandsFigure() {
  const [revealed, setRevealed] = useState(false);

  return (
    <Figure
      title="Who owns the shelf"
      caption="Each row is one company, laid out the way a speed rail is: gin, vodka, rum, whisky, tequila, liqueur, then whatever else they own."
      control={
        <button
          type="button"
          className="figure-replay label-ui"
          aria-pressed={revealed}
          onClick={() => setRevealed((v) => !v)}
        >
          {revealed ? 'Hide the owners' : 'Show the owners'}
        </button>
      }
    >
      <svg
        viewBox="0 0 720 566"
        role="img"
        aria-label={
          revealed
            ? 'Three shelves of familiar bottles, one row per company: Diageo, Pernod Ricard and LVMH.'
            : 'Three shelves of familiar bottles, eight to a row.'
        }
        className={`shelf${revealed ? ' revealed' : ''}`}
      >
        {ROWS.map((row, r) => {
          const b = SHELVES[r];
          return (
            <g key={row.owner} data-owner={row.owner}>
              {/* who the row belongs to - only once asked */}
              <g className="shelf-owner">
                <rect className="shelf-body" x="12" y={b - 138} width="14" height="14" rx="2" />
                <text className="fig-name" x="34" y={b - 126}>{row.name}</text>
                <text className="fig-t" x={34 + row.name.length * 10 + 12} y={b - 126}>
                  {row.base}
                </text>
              </g>

              <path d={`M12 ${b} H708`} stroke="var(--rule-strong)" strokeWidth="2" fill="none" />
              <path d={`M12 ${b + 4} H708`} stroke="var(--rule)" strokeWidth="1" fill="none" />

              {row.bottles.map((bottle, i) => {
                const x = LEFT + i * SLOT;
                const shape = SHAPES[bottle.shape];
                return (
                  <g key={bottle.lines.join(' ')}>
                    <title>{`${bottle.lines.join(' ')} - ${bottle.kind}`}</title>
                    <path className="shelf-body" d={shape.path(x, b)} />
                    <rect
                      className="shelf-label"
                      x={x - 9}
                      y={b - shape.label - 11}
                      width="18"
                      height="13"
                      rx="1"
                    />
                    <text className="shelf-name" x={x} y={b + 21}>{bottle.lines[0]}</text>
                    {bottle.lines[1] && (
                      <text className="shelf-name" x={x} y={b + 35}>{bottle.lines[1]}</text>
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { glassPath } from './GlassShape';

/**
 * The front door, built around the millilitre.
 *
 * Every spec in this book is a list of measures, so the page is a measure:
 * a graduated scale runs down the left edge, and the glass beside the
 * headline is filled with a real drink's build, one layer for each
 * ingredient that is measured in millilitres. Pick another drink and it
 * refills with that one's own ingredients.
 *
 * The glass is a schematic, not a scale drawing, and says so. What is
 * true to the data: the layers are in the order and the proportions of
 * the spec, the glass is the one the drink is served in, and the level is
 * the built volume against what that glass holds. What is approximate:
 * the heights are corrected for the shape of the bowl (a cone fills
 * faster at the top than at the point), not measured from a real glass.
 *
 * An ingredient measured in anything but millilitres (a double shot, a
 * dash, a pinch) is listed under the glass as text and not drawn, rather
 * than being given a volume it was never given.
 *
 * Its palette is fixed on purpose: dark with amber, whatever the site's
 * light or dark setting, because it is the front door and not a page of
 * the book. It carries its own small header and no theme switch.
 */

export type DoorDrink = {
  slug: string;
  name: string;
  /** Slug of the glass in lib/glassware, which picks the outline. */
  glass: string;
  glassName: string;
  method: string;
  ml: number;
  /** What that glass holds, in ml: the build is shown against it. */
  capacity: number;
  spec: { name: string; amount: string | null }[];
};

export type DoorPart = {
  numeral: string;
  title: string;
  count: number;
  href: string;
};

/* The part of each glass that holds liquid, in the 40 x 64 drawing the
   glassware picker uses, and how fast it fills: the exponent turns a
   share of the volume into a share of the height. A straight-sided glass
   is linear; a cone is the cube root of it. */
const BOWL: Record<string, { d: string; top: number; bottom: number; exp: number }> = {
  martini: { d: 'M7 12 H33 L20 33 Z', top: 12, bottom: 33, exp: 1 / 3 },
  coupe: { d: 'M8 15 C8 31 32 31 32 15 Z', top: 15, bottom: 27, exp: 0.45 },
  highball: { d: 'M11 14 L12 58 H28 L29 14 Z', top: 14, bottom: 58, exp: 1 },
};

/**
 * A colour for an ingredient, from its name. More specific names come
 * first ("cherry syrup" before "syrup"). Anything unrecognised takes the
 * next colour from the fallback list, so a new drink still draws.
 */
const COLOURS: [string, string][] = [
  ['cherry', '#a8323f'],
  ['cassis', '#5a1a3a'],
  ['port', '#8a2a38'],
  ['espresso', '#5a3a22'],
  ['coffee', '#5a3a22'],
  ['butterscotch', '#c98a3f'],
  ['ginger beer', '#d9a63b'],
  ['rum', '#9a5a2b'],
  ['limoncello', '#f1de52'],
  ['prosecco', '#f0e1a0'],
  ['champagne', '#f0e1a0'],
  ['peach', '#f2b27a'],
  ['apple', '#d9b25a'],
  ['orange', '#f0a640'],
  ['lime', '#c6d77a'],
  ['lemon', '#f1e68a'],
  ['italicus', '#c8d27a'],
  ['mezcal', '#d6b878'],
  ['tequila', '#e6d8a8'],
  ['gin', '#dfe6e0'],
  ['vodka', '#e9e2cf'],
  ['soda', '#cfe3ea'],
  ['syrup', '#e8d9b5'],
];
const FALLBACK = ['#d8b48a', '#b9805a', '#e3c9a0', '#a56a48'];

function colourFor(name: string, i: number): string {
  const n = name.toLowerCase();
  return COLOURS.find(([k]) => n.includes(k))?.[1] ?? FALLBACK[i % FALLBACK.length];
}

/** "45 ml" -> 45. Null for a measure that is not in millilitres. */
function mlOf(amount: string | null): number | null {
  const m = amount?.match(/^(\d+(?:\.\d+)?)\s*ml$/i);
  return m ? Number(m[1]) : null;
}

/** The scale down the left edge: a tick every 10 ml, a label every 50. */
const TICKS = Array.from({ length: 31 }, (_, i) => i * 10);

export default function MeasureDoor({
  drinks,
  parts,
  chapterCount,
  copyright,
}: {
  drinks: DoorDrink[];
  parts: DoorPart[];
  chapterCount: number;
  /** The copyright line, resolved on the server (it reads the clock). */
  copyright: string;
}) {
  const [picked, setPicked] = useState(drinks[0].slug);
  const drink = drinks.find((d) => d.slug === picked) ?? drinks[0];

  /* The measured lines, bottom of the glass first, each with the colour
     it is drawn in and the cumulative volume under its top edge. */
  const measured = drink.spec
    .map((s, i) => ({ ...s, ml: mlOf(s.amount), colour: colourFor(s.name, i) }))
    .filter((s): s is typeof s & { ml: number } => s.ml !== null);
  const unmeasured = drink.spec.filter((s) => mlOf(s.amount) === null);

  const bowl = BOWL[drink.glass] ?? BOWL.coupe;
  const height = bowl.bottom - bowl.top;
  const yAt = (volume: number) =>
    bowl.bottom - height * Math.min(1, volume / drink.capacity) ** bowl.exp;

  /* Each layer starts where the ones under it end. Summed from the
     earlier lines each time, rather than carried in a variable that is
     reassigned during render. */
  const layers = measured.map((s, i) => {
    const from = measured.slice(0, i).reduce((sum, m) => sum + m.ml, 0);
    return { ...s, y0: yAt(from), y1: yAt(from + s.ml) };
  });

  return (
    <div className="door2">
      {/* ---- Header ----------------------------------------------- */}
      <header className="door2__bar">
        <span className="door2__name">Akki&rsquo;s Bar</span>
        <nav aria-label="Sections">
          <Link href="/book">Barbook</Link>
          <Link href="/backbar">Backbar</Link>
        </nav>
      </header>

      {/* ---- The measure ------------------------------------------ */}
      <section className="door2__hero">
        <div className="door2__scale" aria-hidden="true">
          {TICKS.map((t) => (
            <i
              key={t}
              className={t % 50 === 0 ? 'is-major' : undefined}
              style={{ top: `${(t / 300) * 100}%` }}
            >
              {t % 50 === 0 && <b>{t} ml</b>}
            </i>
          ))}
        </div>

        <div className="door2__copy">
          <h1 className="door2__h1">
            Everything behind a bar, <em>to the ml.</em>
          </h1>
          <p className="door2__lead">
            A cocktail course in {chapterCount} chapters, and {drinks.length}{' '}
            drinks I made up, with every measure.
          </p>
          <div className="door2__actions">
            <Link href="/book" className="door2__btn door2__btn--fill">
              Read Barbook
            </Link>
            <Link href="/backbar" className="door2__btn">
              Open Backbar
            </Link>
          </div>

          <p className="door2__try">See a build in the glass</p>
          <ul className="door2__picks">
            {drinks.map((d) => (
              <li key={d.slug}>
                <button
                  onClick={() => setPicked(d.slug)}
                  aria-pressed={d.slug === picked}
                  className="door2__pick"
                >
                  {d.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <figure
          className="door2__glass"
          aria-label={`${drink.name}, built in a ${drink.glassName.toLowerCase()} glass: ${measured
            .map((s) => `${s.name} ${s.ml} ml`)
            .join(', ')}`}
        >
          <figcaption className="door2__cap">
            <span className="door2__drink">{drink.name}</span>
            <span className="door2__vol">
              {Math.round(drink.ml)} ml &middot; {drink.method.toLowerCase()} &middot;{' '}
              {drink.glassName.toLowerCase()}
            </span>
          </figcaption>

          {/* key on the drink so the layers rise again when it changes */}
          <svg viewBox="0 0 40 64" className="door2__svg" aria-hidden="true" key={drink.slug}>
            <defs>
              <clipPath id="door2-bowl">
                <path d={bowl.d} />
              </clipPath>
            </defs>
            <g clipPath="url(#door2-bowl)">
              {layers.map((l, i) => (
                <rect
                  key={l.name + i}
                  x="0"
                  width="40"
                  y={l.y1}
                  height={Math.max(0, l.y0 - l.y1)}
                  fill={l.colour}
                  className="door2__layer"
                  style={{ animationDelay: `${i * 90}ms` }}
                />
              ))}
            </g>
            <path
              d={glassPath(drink.glass) ?? bowl.d}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ul className="door2__legend">
            {[...layers].reverse().map((l) => (
              <li key={l.name}>
                <i style={{ background: l.colour }} />
                {l.name} <span>{l.ml} ml</span>
              </li>
            ))}
            {unmeasured.map((s) => (
              <li key={s.name} className="is-text">
                <i />
                {s.name} <span>{s.amount ?? ''}</span>
              </li>
            ))}
          </ul>
          <p className="door2__note">
            A schematic, not to scale.{' '}
            <Link href={`/backbar/${drink.slug}`}>Open the full spec</Link>
          </p>
        </figure>
      </section>

      {/* ---- The two halves, as lists ----------------------------- */}
      <section className="door2__lists">
        <div className="door2__list">
          <h2>
            <Link href="/book">Barbook</Link>
          </h2>
          <p>
            {chapterCount} chapters in {parts.length} parts, from how every spirit is made to
            how a bar is served.
          </p>
          <ul>
            {parts.map((p) => (
              <li key={p.title}>
                <Link href={p.href}>
                  <span>
                    {p.numeral}&ensp;{p.title}
                  </span>
                  <span className="door2__dots" aria-hidden="true" />
                  <span className="door2__amt">{p.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="door2__list door2__list--shelf">
          <h2>
            <Link href="/backbar">Backbar</Link>
          </h2>
          <p>The drinks I have made up, with every build in millilitres.</p>
          <ul>
            {drinks.map((d) => (
              <li key={d.slug}>
                <Link href={`/backbar/${d.slug}`}>
                  <span>{d.name}</span>
                  <span className="door2__dots" aria-hidden="true" />
                  <span className="door2__amt">{Math.round(d.ml)} ml</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="door2__foot">
        <span>{copyright}</span>
      </footer>
    </div>
  );
}

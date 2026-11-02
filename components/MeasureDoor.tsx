'use client';

import { useState } from 'react';
import Link from 'next/link';
import BuildGlass from './BuildGlass';

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

  const measuredText = drink.spec
    .filter((s) => /ml$/i.test(s.amount ?? ''))
    .map((s) => `${s.name} ${s.amount}`)
    .join(', ');

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
          aria-label={`${drink.name}, built in a ${drink.glassName.toLowerCase()} glass: ${measuredText}`}
        >
          <figcaption className="door2__cap">
            <span className="door2__drink">{drink.name}</span>
            <span className="door2__vol">
              {Math.round(drink.ml)} ml &middot; {drink.method.toLowerCase()} &middot;{' '}
              {drink.glassName.toLowerCase()}
            </span>
          </figcaption>
          <BuildGlass
            spec={drink.spec}
            glassSlug={drink.glass}
            capacity={drink.capacity}
            drinkKey={drink.slug}
            className="door2__bglass"
            scale
          />
          <p className="door2__note">
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

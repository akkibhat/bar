/**
 * Drawing a drink's build as a glass filled in layers.
 *
 * One layer for each ingredient measured in millilitres, in the order of
 * the spec, in the glass the drink is served in. It is a schematic and
 * says so wherever it is shown. What it states truthfully: the order and
 * the proportions of the measured lines, the glass, and the built volume
 * against what that glass holds. What it only approximates: the heights
 * are corrected for the shape of the bowl (a cone fills faster at the top
 * than at the point), not measured from a real glass.
 *
 * An ingredient measured in anything but millilitres (a double shot, a
 * dash, a pinch) is not drawn: it is listed as text, rather than being
 * given a volume it was never given.
 *
 * Shared by the front door and the drink pages, so the two cannot show the
 * same drink differently.
 */

import { GLASSES } from './glassware';

/** The slug the glass drawings use, for the name Bar Assistant records. */
export function glassSlugFor(name: string | undefined): string {
  switch (name) {
    case 'Cocktail':
      return 'martini';
    case 'Highball':
      return 'highball';
    default:
      return 'coupe';
  }
}

/** What a glass holds, in ml: the middle of the range the glassware page gives. */
export function capacityOf(slug: string): number {
  const g = GLASSES.find((x) => x.slug === slug);
  return g ? (g.holds[0] + g.holds[1]) / 2 : 180;
}

/* The part of each glass that holds liquid, in the 40 x 64 drawing the
   glassware picker uses, and how fast it fills: the exponent turns a
   share of the volume into a share of the height. A straight-sided glass
   is linear; a cone is the cube root of it. */
export const BOWL: Record<string, { d: string; top: number; bottom: number; exp: number }> = {
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

export function colourFor(name: string, i: number): string {
  const n = name.toLowerCase();
  return COLOURS.find(([k]) => n.includes(k))?.[1] ?? FALLBACK[i % FALLBACK.length];
}

/** "45 ml" -> 45. Null for a measure that is not in millilitres. */
export function mlOf(amount: string | null | undefined): number | null {
  const m = amount?.match(/^(\d+(?:\.\d+)?)\s*ml$/i);
  return m ? Number(m[1]) : null;
}

/** Height in the 40 x 64 drawing that a given volume reaches in this glass. */
export function yAtFor(glassSlug: string, capacity: number) {
  const bowl = BOWL[glassSlug] ?? BOWL.coupe;
  const height = bowl.bottom - bowl.top;
  return (volume: number) =>
    bowl.bottom - height * Math.min(1, volume / capacity) ** bowl.exp;
}

export type BuildLayer = { name: string; ml: number; colour: string; y0: number; y1: number };

/** Everything the drawing needs: the layers, bottom first, and what is left as text. */
export function buildOf(
  spec: { name: string; amount: string | null }[],
  glassSlug: string,
  capacity: number,
) {
  const bowl = BOWL[glassSlug] ?? BOWL.coupe;
  const height = bowl.bottom - bowl.top;
  const yAt = (volume: number) =>
    bowl.bottom - height * Math.min(1, volume / capacity) ** bowl.exp;

  const measured = spec
    .map((s, i) => ({ name: s.name, ml: mlOf(s.amount), colour: colourFor(s.name, i) }))
    .filter((s): s is { name: string; ml: number; colour: string } => s.ml !== null);

  /* Each layer starts where the ones under it end, summed from the earlier
     lines each time rather than carried in a reassigned variable. */
  const layers: BuildLayer[] = measured.map((s, i) => {
    const from = measured.slice(0, i).reduce((sum, m) => sum + m.ml, 0);
    return { ...s, y0: yAt(from), y1: yAt(from + s.ml) };
  });

  const unmeasured = spec.filter((s) => mlOf(s.amount) === null);
  return { bowl, layers, unmeasured };
}

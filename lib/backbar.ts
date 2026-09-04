import {
  PULLED_AT,
  SHELF,
  type ShelfDrink,
  type ShelfSpecLine,
} from './content/backbar-snapshot';
import { CLASSICS } from './content/chapters/classics';
import type { IbaCategory } from './iba';

/**
 * Reading the shelf.
 *
 * The shelf holds two kinds of drink. Mine are pulled from Bar Assistant
 * into a committed snapshot and are never touched here - nothing in this
 * file rewrites a name, reorders a spec or adjusts a measure. The IBA
 * classics come from the book's own spec sheets in Part VIII, adapted
 * onto the same shape so one grid and one drink page serve both; the
 * book is where those specs were settled, so it stays the only copy.
 *
 * Everything here is pure derivation, so the Backbar pages render
 * statically with no client JavaScript beyond the grid's own filtering.
 */

export { PULLED_AT, SHELF };
export type { ShelfDrink, ShelfSpecLine };

/* ===================================================================== *
 * The two lists
 * ===================================================================== */

/** A drink on the shelf, and which list it came from. */
export type ShelfEntry = ShelfDrink & {
  origin: 'mine' | 'iba';
  /** Set on the IBA classics: the list, and the IBA's name if it differs. */
  iba?: { category: IbaCategory; name?: string };
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** My own, exactly as pulled. */
export const MINE: ShelfEntry[] = SHELF.map((d) => ({ ...d, origin: 'mine' }));

/**
 * The IBA classics, from the book's specs.
 *
 * Only specs the book has placed on the IBA list come through - the
 * Kamikaze, the Contessa and the B52 stay in the book alone. The spec's
 * note becomes the description, since that is what it is: one line on
 * why the drink is worth knowing. Ids sit far above anything Bar
 * Assistant hands out, and a slug that would collide with one of mine
 * takes an `iba-` prefix rather than shadowing it.
 */
export const IBA_SHELF: ShelfEntry[] = CLASSICS.flatMap((chapter) => chapter.body)
  .flatMap((block) => (block.kind === 'spec' && block.spec.iba ? [block.spec] : []))
  .map((spec, i) => {
    const bare = slugify(spec.name);
    const taken = MINE.some((d) => d.slug === bare || d.rawSlug === bare);
    const firstMeasured = spec.spec.find((line) => !line.optional);
    return {
      id: 900000 + i,
      slug: taken ? `iba-${bare}` : bare,
      name: spec.name,
      description: spec.note,
      steps: [spec.method],
      garnish: spec.garnish,
      glass: spec.glass,
      method: spec.method,
      base: firstMeasured?.name,
      tags: [],
      spec: spec.spec.map((line) => ({
        name: line.name,
        amount: line.amount ?? null,
        optional: line.optional,
        substitutes: line.substitutes,
      })),
      origin: 'iba',
      iba: spec.iba,
    };
  });

/** Everything on the shelf, mine first. */
export const ALL: ShelfEntry[] = [...MINE, ...IBA_SHELF];

/* ===================================================================== *
 * Shelves
 * ===================================================================== */

/**
 * The base ingredient as Bar Assistant records it is specific - "Vanilla
 * Vodka", "Tequila Blanco", "Spiced Rum" - which is right on a recipe and
 * wrong on a filter, where it would produce a row of one-drink buttons.
 *
 * So bases are grouped onto the shelf a bottle actually lives on. Matched
 * on a substring of the lowercased name, longest pattern first, so
 * "spiced rum" does not lose to a shorter accidental match.
 */
const SHELF_PATTERNS: [RegExp, string][] = [
  [/mezcal/, 'Mezcal'],
  [/tequila/, 'Tequila'],
  [/vodka/, 'Vodka'],
  [/\bgin\b/, 'Gin'],
  [/rum|cacha[cç]a/, 'Rum'],
  [/whisk|bourbon|scotch|rye/, 'Whisky'],
  [/brandy|cognac|pisco|calvados/, 'Brandy'],
  [/limoncello|liqueur|schnapps|amaretto|curacao|cointreau|menthe|cacao|kahl/, 'Liqueur'],
  [/vermouth|sherry|port|campari|aperol/, 'Aperitif'],
];

/** Which shelf a drink sits on, from its base ingredient. */
export function shelfOf(drink: ShelfDrink): string {
  const base = (drink.base ?? '').toLowerCase();
  for (const [pattern, label] of SHELF_PATTERNS) {
    if (pattern.test(base)) return label;
  }
  return 'Other';
}

/** Every shelf present in a list, with a count, ordered by how many are on it. */
export function shelves(drinks: ShelfDrink[] = ALL): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const drink of drinks) {
    const name = shelfOf(drink);
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/* ===================================================================== *
 * Tags
 * ===================================================================== */

/**
 * Tags worth showing.
 *
 * Bar Assistant tags every one of mine "original", which is true and
 * therefore says nothing - a filter where every drink matches is not a
 * filter. Tags that duplicate the shelf are dropped for the same reason:
 * a "Tequila" tag on the only tequila drink adds a second control that
 * does exactly what the first one does.
 *
 * `DP` is a private working note rather than anything a reader needs.
 */
const HIDDEN_TAGS = new Set(['original', 'dp']);

/** The tags on one drink, minus the noise. */
export function tagsOf(drink: ShelfDrink): string[] {
  const shelf = shelfOf(drink).toLowerCase();
  return drink.tags.filter((t) => {
    const lower = t.toLowerCase();
    return !HIDDEN_TAGS.has(lower) && lower !== shelf;
  });
}

/** Every visible tag across a list, with counts, most common first. */
export function tags(drinks: ShelfDrink[] = ALL): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const drink of drinks) {
    for (const tag of tagsOf(drink)) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/* ===================================================================== *
 * Lookup
 * ===================================================================== */

/**
 * Find one drink by the slug in the URL.
 *
 * Accepts the clean slug, Bar Assistant's raw slug with its "-N" revision
 * suffix, or the numeric id - so a link shared before the suffix was
 * being stripped, or from the old site, still resolves rather than 404s.
 */
export function lookupDrink(param: string): ShelfEntry | undefined {
  return ALL.find(
    (d) => d.slug === param || d.rawSlug === param || String(d.id) === param,
  );
}

/* ===================================================================== *
 * Display
 * ===================================================================== */

/** The line of detail under a drink's name. */
export function summaryLine(drink: ShelfDrink): string {
  return [drink.method, drink.glass, shelfOf(drink)]
    .filter(Boolean)
    .join(' · ');
}

/**
 * The measures in a build, as one line.
 *
 * Used where a full spec sheet would be too much - a card, or a preview -
 * and deliberately names ingredients without measures, since the shape of
 * a drink is what a glance is for.
 */
export function ingredientLine(drink: ShelfDrink): string {
  return drink.spec
    .filter((line) => !line.optional)
    .map((line) => line.name)
    .join(', ');
}

/**
 * Total volume of a build, in millilitres, where every line is measured
 * in them. Returns undefined as soon as anything is not - a dash, a
 * "top", a double shot - because a partial total is worse than none.
 */
export function builtVolume(drink: ShelfDrink): number | undefined {
  let total = 0;
  for (const line of drink.spec) {
    if (line.optional) continue;
    const match = /^([\d.]+)\s*ml$/i.exec(line.amount ?? '');
    if (!match) return undefined;
    total += Number(match[1]);
  }
  return total || undefined;
}

import {
  PULLED_AT,
  SHELF,
  type ShelfDrink,
  type ShelfSpecLine,
} from './content/backbar-snapshot';

/**
 * Reading the shelf.
 *
 * Everything here is pure derivation over a committed snapshot, so the
 * Backbar pages render statically with no client JavaScript beyond the
 * grid's own filtering.
 *
 * The recipes themselves are never touched. Nothing in this file
 * rewrites a name, reorders a spec or adjusts a measure - it groups,
 * filters and labels, and that is the whole remit.
 */

export { PULLED_AT, SHELF };
export type { ShelfDrink, ShelfSpecLine };

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
  [/limoncello|liqueur|schnapps|amaretto|curacao|cointreau/, 'Liqueur'],
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

/** Every shelf present, with a count, ordered by how many are on it. */
export function shelves(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const drink of SHELF) {
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
 * The book tags every one of these "original", which is true and
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

/** Every visible tag across the shelf, with counts, most common first. */
export function tags(): { name: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const drink of SHELF) {
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
export function lookupDrink(param: string): ShelfDrink | undefined {
  return SHELF.find(
    (d) =>
      d.slug === param || d.rawSlug === param || String(d.id) === param,
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

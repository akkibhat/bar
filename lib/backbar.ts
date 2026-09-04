import {
  PULLED_AT,
  SHELF,
  type ShelfDrink,
  type ShelfSpecLine,
} from './content/backbar-snapshot';
import { CLASSICS } from './content/chapters/classics';
import { IBA_LIST, IBA_PULLED_AT } from './content/iba-list';
import type { IbaCategory } from './iba';

/**
 * Reading the shelf.
 *
 * The shelf holds two kinds of drink. Mine are pulled from Bar Assistant
 * into a committed snapshot and are never touched here - nothing in this
 * file rewrites a name, reorders a spec or adjusts a measure. The IBA
 * side is the official list as pulled from the IBA's own site, joined to
 * the book's spec sheets in Part VIII: where the book has written a
 * drink up, the row carries that spec and gets a page here; where it has
 * not, the row is a name, a list and a link out, because the IBA's
 * recipes are theirs and are not copied into this repo.
 *
 * Everything here is pure derivation, so the Backbar pages render
 * statically with no client JavaScript beyond the grid's own filtering.
 */

export { PULLED_AT, SHELF, IBA_PULLED_AT };
export type { ShelfDrink, ShelfSpecLine };

/* ===================================================================== *
 * The two lists
 * ===================================================================== */

/** A drink on the shelf, and which list it came from. */
export type ShelfEntry = ShelfDrink & {
  origin: 'mine' | 'iba';
  /** Set on every IBA row: the list, and the IBA's name if it differs. */
  iba?: { category: IbaCategory; name?: string };
  /**
   * The IBA's own page for this drink. On every IBA row, written up or
   * not, since the citation is worth having either way.
   */
  ibaUrl?: string;
  /**
   * Set where the book has not written the drink up. There is no page at
   * /backbar/<slug> for these, so the row links to `ibaUrl` instead - we
   * hold the name, the list and the address and nothing else.
   */
  linkOnly?: boolean;
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** My own, exactly as pulled. */
export const MINE: ShelfEntry[] = SHELF.map((d) => ({ ...d, origin: 'mine' }));

/**
 * The book's IBA spec sheets, keyed by the name the IBA lists them
 * under.
 *
 * Three drinks the book names one way are on the official list under
 * another - Tom Collins as John Collins, Martini as Dry Martini, Brandy
 * Alexander as Alexander - and the Corpse Reviver takes a `#2` there. The
 * specs already record the IBA's name in `spec.iba.name`, so keying on
 * that and falling back to the book's own name is what makes those four
 * join. Slugified on both sides so punctuation and case do not decide it.
 */
const BOOK_SPECS = new Map(
  CLASSICS.flatMap((chapter) => chapter.body)
    .flatMap((block) => (block.kind === 'spec' && block.spec.iba ? [block.spec] : []))
    .map((spec) => [slugify(spec.iba?.name ?? spec.name), spec] as const),
);

/**
 * The official IBA list, joined to the book.
 *
 * The pulled list drives the order and the count, and the IBA's own
 * category wins over the book's - they publish the list, so a
 * disagreement means the book is out of date rather than that they are.
 *
 * A joined row gets the book's spec and a page of its own. An unjoined
 * one gets a name, a category and a link out, and nothing more: no
 * measures, no method, no description, because none of that is ours to
 * hold. Ids sit far above anything Bar Assistant hands out, and a slug
 * that would collide with one of mine takes an `iba-` prefix rather than
 * shadowing it.
 */
const IBA_JOINED: ShelfEntry[] = IBA_LIST.map((entry, i) => {
  const spec = BOOK_SPECS.get(slugify(entry.name));
  const id = 900000 + i;

  if (!spec) {
    return {
      id,
      slug: entry.slug,
      name: entry.name,
      steps: [],
      tags: [],
      spec: [],
      origin: 'iba',
      iba: { category: entry.category },
      ibaUrl: entry.url,
      linkOnly: true,
    };
  }

  const bare = slugify(spec.name);
  const taken = MINE.some((d) => d.slug === bare || d.rawSlug === bare);
  const firstMeasured = spec.spec.find((line) => !line.optional);
  return {
    id,
    slug: taken ? `iba-${bare}` : bare,
    name: spec.name,
    /* The spec's note becomes the description, since that is what it is:
       one line on why the drink is worth knowing. */
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
    iba: { category: entry.category, name: spec.iba?.name },
    ibaUrl: entry.url,
  };
});

/**
 * Alphabetical by the name on the row.
 *
 * The pull arrives sorted by the IBA's name, which is right in the data
 * file and wrong on the page for the four drinks the book names its own
 * way - Alexander is shown as Brandy Alexander, so it belongs under B,
 * not sitting first under A. A list a reader scans should be in the
 * order of the words they can see.
 */
export const IBA_SHELF: ShelfEntry[] = [...IBA_JOINED].sort((a, b) =>
  a.name.localeCompare(b.name, 'en'),
);

/**
 * How the join went, so a mismatch is visible rather than swallowed.
 *
 * `missing` is the case worth watching: a spec the book has written up
 * as an IBA drink that no longer appears on the official list, which
 * means the IBA has renamed or dropped it and the book needs a look.
 */
export const IBA_JOIN = {
  pulled: IBA_LIST.length,
  written: IBA_SHELF.filter((d) => !d.linkOnly).length,
  linkOnly: IBA_SHELF.filter((d) => d.linkOnly).length,
  missing: [...BOOK_SPECS.entries()]
    .filter(([key]) => !IBA_LIST.some((e) => slugify(e.name) === key))
    .map(([, spec]) => spec.name),
};

/* Said once, at load, and only outside a production build - the shelf
   should not shout in a reader's console about the book's bookkeeping. */
if (process.env.NODE_ENV !== 'production' && IBA_JOIN.missing.length > 0) {
  console.warn(
    `[backbar] ${IBA_JOIN.missing.length} book spec(s) marked IBA but not on ` +
      `the pulled list: ${IBA_JOIN.missing.join(', ')}. ` +
      'Re-run npm run pull:iba, then check whether the IBA renamed or ' +
      'dropped them.',
  );
}

/** Everything on the shelf, mine first. */
export const ALL: ShelfEntry[] = [...MINE, ...IBA_SHELF];

/** Everything with a page of its own, which is everything but the
    link-only IBA rows. Used for routing and for pre-rendering. */
export const PAGED: ShelfEntry[] = ALL.filter((d) => !d.linkOnly);

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
 *
 * Searches only the drinks with a page. The link-only IBA rows carry the
 * IBA's slug, and serving one here would render a drink page with an
 * empty build on it.
 */
export function lookupDrink(param: string): ShelfEntry | undefined {
  return PAGED.find(
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

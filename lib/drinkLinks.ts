import { CHAPTERS } from './content/book';
import { ALL, PAGED } from './backbar';
import { headingsOf, specAnchor } from './headings';

/**
 * Where a drink named as a plain string (in the glassware picker, say) can
 * be found on this site, best destination first:
 *
 *   1. a Backbar page;
 *   2. a spec sheet inside a book chapter;
 *   3. the IBA's own page (an external link);
 *   4. a chapter sub-heading about the thing named;
 *   5. a chapter whose title is the name.
 *
 * No match means no link. Matching ignores case, punctuation and "&"
 * versus "and".
 */

/** Case, accents, punctuation and spacing flattened away; "&" read as "and". */
function key(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '');
}

/** Where a name leads, and whether that is off this site. */
export type DrinkLink = { href: string; external?: boolean };

const table = new Map<string, DrinkLink>();

/* Lowest priority first, so a higher-priority source overwrites it. */
for (const chapter of CHAPTERS) {
  table.set(key(chapter.title), { href: `/book/${chapter.slug}` });
}
for (const chapter of CHAPTERS) {
  for (const h of headingsOf(chapter.body)) {
    table.set(key(h.text), { href: `/book/${chapter.slug}#${h.id}` });
  }
}
/* The IBA's own page for the official-list drinks the book has not
   written up. Only the link-only rows: the others have a page here. */
for (const drink of ALL) {
  if (drink.linkOnly && drink.ibaUrl) {
    table.set(key(drink.name), { href: drink.ibaUrl, external: true });
  }
}
for (const chapter of CHAPTERS) {
  for (const block of chapter.body) {
    if (block.kind !== 'spec') continue;
    const link = { href: `/book/${chapter.slug}#${specAnchor(block.spec.name)}` };
    table.set(key(block.spec.name), link);
    if (block.spec.iba?.name) table.set(key(block.spec.iba.name), link);
  }
}
/* PAGED lists mine before the IBA's, and where both have a "Espresso
   Martini" the reader means mine, so a name already claimed by an earlier
   shelf entry is not taken over by a later one. */
const claimed = new Set<string>();
for (const drink of PAGED) {
  const k = key(drink.name);
  if (claimed.has(k)) continue;
  claimed.add(k);
  table.set(k, { href: `/backbar/${drink.slug}` });
}

/**
 * Names a list uses that are the same drink under a different name in
 * the destination. The IBA lists "Spritz" and the glassware list says
 * "Aperol Spritz", which is the drink in everyone's hand; neither is
 * wrong, so the lookup is told they are the same rather than either list
 * being rewritten to suit it.
 */
const ALIASES: Record<string, string> = {
  'Aperol Spritz': 'Spritz',
};

/** The best destination for a drink name, or undefined if there is none. */
export function drinkHref(name: string): DrinkLink | undefined {
  return table.get(key(name)) ?? table.get(key(ALIASES[name] ?? ''));
}

/** Resolve many names at once, keeping only the ones that have somewhere to go. */
export function drinkLinks(names: string[]): Record<string, DrinkLink> {
  const out: Record<string, DrinkLink> = {};
  for (const n of names) {
    const link = drinkHref(n);
    if (link) out[n] = link;
  }
  return out;
}

import { CHAPTERS } from './content/book';
import { PAGED } from './backbar';
import { headingsOf, specAnchor } from './headings';

/**
 * Where a drink named in prose can be found on this site.
 *
 * Several lists name drinks as plain strings (the glassware picker, for
 * one), and a reader who sees "Cosmopolitan" wants to open it. This turns
 * a name into the best place to send them, in order of how complete the
 * destination is:
 *
 *   1. a Backbar page, which has the full build, method and glass;
 *   2. a spec sheet inside a book chapter, for the drinks the book writes
 *      up but the shelf has no page for (the link jumps to the sheet);
 *   3. a sub-heading in a chapter that is about the thing named, such as
 *      "Irish coffee" or "Mulled wine";
 *   4. a chapter whose own title is the name.
 *
 * Names that match none of these get no link rather than a wrong one, so
 * "Cognac and aged spirits, neat" stays plain text. Matching ignores case,
 * punctuation and "&" versus "and", because the lists and the headings
 * were written separately and disagree on those.
 */

/** Case, punctuation and spacing flattened away; "&" read as "and". */
function key(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '');
}

const table = new Map<string, string>();

/* Lowest priority first, so a higher-priority source overwrites it. */
for (const chapter of CHAPTERS) {
  table.set(key(chapter.title), `/book/${chapter.slug}`);
}
for (const chapter of CHAPTERS) {
  for (const h of headingsOf(chapter.body)) {
    table.set(key(h.text), `/book/${chapter.slug}#${h.id}`);
  }
}
for (const chapter of CHAPTERS) {
  for (const block of chapter.body) {
    if (block.kind !== 'spec') continue;
    const href = `/book/${chapter.slug}#${specAnchor(block.spec.name)}`;
    table.set(key(block.spec.name), href);
    if (block.spec.iba?.name) table.set(key(block.spec.iba.name), href);
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
  table.set(k, `/backbar/${drink.slug}`);
}

/** The best destination for a drink name, or undefined if there is none. */
export function drinkHref(name: string): string | undefined {
  return table.get(key(name));
}

/** Resolve many names at once, keeping only the ones that have somewhere to go. */
export function drinkLinks(names: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const n of names) {
    const href = drinkHref(n);
    if (href) out[n] = href;
  }
  return out;
}

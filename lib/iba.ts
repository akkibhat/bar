/**
 * The IBA official list, as a reference.
 *
 * The book sends the reader to the IBA's own pages rather than restating
 * them: a drink's page there, under the name the IBA lists it by, and the
 * list it sits on. These are the three lists and the two URL shapes, kept
 * in one place so the book's spec sheets and the shelf agree.
 */

export type IbaCategory = 'unforgettables' | 'contemporary' | 'new-era';

/**
 * The IBA's three lists, as they name them, and where they live.
 *
 * `short` is the same name with the article and the noun dropped, for
 * the places a label sits in a narrow column rather than in a sentence.
 */
export const IBA_LISTS: Record<
  IbaCategory,
  { label: string; short: string; url: string }
> = {
  unforgettables: {
    label: 'The Unforgettables',
    short: 'Unforgettable',
    url: 'https://iba-world.com/cocktails/the-unforgettables/',
  },
  contemporary: {
    label: 'The Contemporary Classics',
    short: 'Contemporary',
    url: 'https://iba-world.com/cocktails/contemporary-classics/',
  },
  'new-era': {
    label: 'The New Era',
    short: 'New Era',
    url: 'https://iba-world.com/cocktails/new-era/',
  },
};

/** The three, in the order the IBA presents them. */
export const IBA_CATEGORIES: IbaCategory[] = ['unforgettables', 'contemporary', 'new-era'];

/** The IBA's own page for a drink, from the name it lists it under. */
export function ibaUrl(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `https://iba-world.com/iba-cocktail/${slug}/`;
}

import type { Family } from '../types';

/**
 * The six root structures almost every classic turns out to be.
 *
 * Sorted by what holds the drink together rather than by which spirit is
 * in it. A Negroni and a Boulevardier are the same drink, and no
 * ingredient-based sorting will ever say so.
 *
 * The framework is the one set out in *Cocktail Codex*, which has become
 * the standard way of teaching drink structure. It is not mine and it was
 * not on the course; it is here because nothing else explains the
 * workbook's own recipe list as well as it does.
 *
 * `members` lists drinks that appear elsewhere in this book, so the
 * families page doubles as a cross-reference into Part VIII.
 */
export const FAMILIES: Family[] = [
  {
    slug: 'old-fashioned',
    name: 'Old Fashioned',
    formula: 'Spirit + sugar + bitters',
    ratio: '60 spirit : 1 tsp sugar : 2 dashes bitters',
    about:
      'The oldest structure and the plainest: a spirit, made slightly sweet, given an edge with bitters, and diluted with ice. Nothing here hides the base, so it only works with a spirit worth tasting. This is what the 1806 definition described.',
    archetype: 'Old Fashioned',
    members: ['Old Fashioned', 'Sazerac', 'Rum Old Fashioned'],
    method: 'Build and stir over ice',
  },
  {
    slug: 'martini',
    name: 'Martini',
    formula: 'Spirit + aromatised wine',
    ratio: 'Anywhere from 5:1 to 2:1, spirit to vermouth',
    about:
      'Spirit and fortified wine, and nothing else but a garnish. The wine brings botanical complexity and drops the strength a little without adding sugar or acid. Swap the spirit and swap the vermouth and you get most of the spirit-forward canon.',
    archetype: 'Martini',
    members: ['Martini', 'Manhattan', 'Rob Roy', 'Negroni', 'Boulevardier', 'Contessa'],
    method: 'Stir and strain',
  },
  {
    slug: 'daiquiri',
    name: 'Daiquiri',
    formula: 'Spirit + citrus + sweetener',
    ratio: '2 : 1 : 1, or 2 : 1 : 0.75 for something drier',
    about:
      'The sour. The most productive structure in the book and the one the ratio chapter is about - citrus for freshness, sugar to hold the acid level, spirit underneath. Shaken, because citrus and sugar need the aeration.',
    archetype: 'Daiquiri',
    members: ['Daiquiri', 'Whiskey Sour', 'Gimlet', 'Pisco Sour', 'Clover Club', 'Tom Collins'],
    method: 'Shake and strain',
  },
  {
    slug: 'sidecar',
    name: 'Sidecar',
    formula: 'Spirit + liqueur + citrus',
    ratio: '2 : 1 : 1, adjusted to how sweet the liqueur is',
    about:
      'A sour where a liqueur does the sweetening, so the sugar arrives carrying flavour. The family people miss, because it looks like a Daiquiri on the page. If a recipe has both citrus and a liqueur and no syrup, it is this.',
    archetype: 'Sidecar',
    members: ['Sidecar', 'Margarita', 'Cosmopolitan', 'White Lady', 'Kamikaze', 'Corpse Reviver No 2'],
    method: 'Shake and strain',
  },
  {
    slug: 'highball',
    name: 'Highball',
    formula: 'Spirit + a non-alcoholic lengthener',
    ratio: '1 : 2 to 1 : 4, spirit to mixer',
    about:
      'A spirit made long with something fizzy. The simplest structure and the hardest to do well, because there is nothing to hide behind: it is carbonation, temperature and ratio. Everything depends on cold glass, cold mixer and enough ice.',
    archetype: 'Whisky Highball',
    members: ['Gin & Tonic', 'Cuba Libre', 'Moscow Mule', 'Dark & Stormy', 'Americano'],
    method: 'Build in the glass',
  },
  {
    slug: 'flip',
    name: 'Flip',
    formula: 'Spirit + sugar + something rich',
    ratio: 'Varies; richness is the point, not a proportion',
    about:
      'The texture family: egg, cream, dairy or a fortified wine giving the drink body rather than flavour. Dessert territory, and the structure behind most of what a bar serves after the plates have gone.',
    archetype: 'Flip',
    members: ['Brandy Alexander', 'Grasshopper', 'Espresso Martini', 'White Russian'],
    method: 'Shake hard, often with a dry shake first',
  },
];

/** Look up one family by slug. */
export function findFamily(slug: string): Family | undefined {
  return FAMILIES.find((f) => f.slug === slug);
}

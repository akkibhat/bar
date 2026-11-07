import type { Family } from '../schema';

/**
 * The six root structures behind almost every classic, sorted by what
 * holds the drink together rather than by spirit. The framework is the one
 * from *Cocktail Codex*.
 *
 * `members` lists drinks that appear elsewhere in the book, so the
 * families page doubles as a cross-reference into Part VIII.
 */
export const FAMILIES: Family[] = [
  {
    slug: 'old-fashioned',
    name: 'Old Fashioned',
    formula: 'Spirit + sugar + bitters',
    ratio: '60 ml spirit to a sugar cube and two dashes of bitters; the IBA says 45',
    about:
      'The oldest structure and the plainest: a spirit, made slightly sweet, given an edge with bitters, and diluted with ice. Nothing here hides the base, so it only works with a spirit worth tasting. This is what the 1806 definition described.',
    archetype: 'Old Fashioned',
    members: ['Old Fashioned', 'Sazerac', 'Champagne Cocktail', 'Rum Old Fashioned'],
    method: 'Build and stir over ice',
  },
  {
    slug: 'martini',
    name: 'Martini',
    formula: 'Spirit + aromatised wine',
    ratio: 'Anywhere from 6 : 1 to 2 : 1, spirit to vermouth; 4 : 1 is the common wet pour',
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
    ratio: 'Around 2 : 1 : 1, though the drinks range from the Whiskey Sour at 1.8 : 1 : 0.8 to the Daiquiri at 3 : 1 : 0.75',
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
    ratio: 'Roughly 1.5 : 1 : 1 to 3 : 1 : 2, depending on how sweet the liqueur is',
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
    members: ['Brandy Alexander', 'Grasshopper', 'Espresso Martini', 'Irish Coffee', 'Pina Colada', 'White Russian'],
    method: 'Shake hard, often with a dry shake first',
  },
];

/** Look up one family by slug. */
export function lookupFamily(slug: string): Family | undefined {
  return FAMILIES.find((f) => f.slug === slug);
}

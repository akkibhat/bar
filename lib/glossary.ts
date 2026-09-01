import type { GlossaryCategory, GlossaryTerm } from './schema';

/**
 * The glossary.
 *
 * Every term here is one that appears in the book and would stop a reader
 * who had not met it. Definitions are one or two sentences - if a term
 * needs more than that it has a chapter instead, and the entry points at
 * it.
 *
 * `seeAlso` is a slug list rather than free text so the links cannot rot
 * silently: a typo produces a missing entry the search can surface,
 * rather than a dead phrase in prose.
 */
export const GLOSSARY: GlossaryTerm[] = [
  /* ---- Technique -------------------------------------------------- */
  {
    slug: 'build',
    term: 'Build',
    category: 'technique',
    definition:
      'To assemble a drink in the glass it is served in, usually over ice, rather than mixing it elsewhere and straining it in.',
    seeAlso: ['shake', 'stir'],
  },
  {
    slug: 'dry-shake',
    term: 'Dry shake',
    category: 'technique',
    definition:
      'Shaking without ice before shaking with it. Lets egg white or aquafaba foam properly, since the proteins denature far better warm.',
    seeAlso: ['shake', 'aquafaba'],
  },
  {
    slug: 'double-strain',
    term: 'Double strain',
    category: 'technique',
    definition:
      'Straining through a fine sieve as well as the shaker\'s own strainer, to catch ice chips, pulp and citrus seeds.',
    seeAlso: ['hawthorne', 'fine-strainer'],
  },
  {
    slug: 'layer',
    term: 'Layer',
    category: 'technique',
    definition:
      'To float ingredients on one another in visible bands, working from the sweetest and heaviest upward, pouring each over the back of a bar spoon.',
    seeAlso: ['bar-spoon'],
  },
  {
    slug: 'muddle',
    term: 'Muddle',
    category: 'technique',
    definition:
      'To press fruit or herbs to release their juice and oil. Fruit takes real pressure; herbs take almost none, and grinding mint makes it bitter.',
    seeAlso: ['muddler'],
  },
  {
    slug: 'rinse',
    term: 'Rinse',
    category: 'technique',
    definition:
      'Coating the inside of a glass with a small amount of a strong ingredient - usually absinthe - and discarding the excess, so it seasons the drink by aroma alone.',
  },
  {
    slug: 'shake',
    term: 'Shake',
    category: 'technique',
    definition:
      'To combine, chill, dilute and aerate in one action, for 8–12 seconds. Used for anything cloudy: citrus, juice, syrup, cream or egg.',
    seeAlso: ['stir', 'dilution'],
  },
  {
    slug: 'stir',
    term: 'Stir',
    category: 'technique',
    definition:
      'To chill and dilute without aerating, in a mixing glass over cubed ice. Used for drinks made only of spirits, where clarity is part of the point.',
    seeAlso: ['shake', 'mixing-glass'],
  },
  {
    slug: 'twist',
    term: 'Twist',
    category: 'technique',
    definition:
      'A strip of citrus peel, pinched skin-side down over the drink so its oil sprays across the surface, then usually dropped in.',
    seeAlso: ['garnish'],
  },

  /* ---- Tools ------------------------------------------------------ */
  {
    slug: 'bar-spoon',
    term: 'Bar spoon',
    category: 'tool',
    definition:
      'A long twisted-shaft spoon for stirring and layering. The bowl holds roughly 5 ml, so it doubles as a measure.',
    seeAlso: ['stir', 'layer'],
  },
  {
    slug: 'boston-shaker',
    term: 'Boston shaker',
    category: 'tool',
    definition:
      'Two tins, or a tin and a glass, that seal together under a knock. More capacity and faster than a three-piece cobbler, and it will not freeze shut.',
    seeAlso: ['shake', 'hawthorne'],
  },
  {
    slug: 'fine-strainer',
    term: 'Fine strainer',
    category: 'tool',
    definition:
      'A small conical sieve held under the shaker while pouring, to catch what the hawthorne lets through.',
    seeAlso: ['double-strain'],
  },
  {
    slug: 'hawthorne',
    term: 'Hawthorne strainer',
    category: 'tool',
    definition:
      'The strainer with a coiled spring round its edge. Sits on a shaker tin and holds back ice and fruit.',
    seeAlso: ['julep-strainer', 'double-strain'],
  },
  {
    slug: 'jigger',
    term: 'Jigger',
    category: 'tool',
    definition:
      'A two-sided measure. In millilitres the useful pairs are 30/15 and 45/22.5, which cover nearly every spec in this book.',
    seeAlso: ['dash', 'free-pour'],
  },
  {
    slug: 'julep-strainer',
    term: 'Julep strainer',
    category: 'tool',
    definition:
      'A perforated spoon-shaped strainer that sits inside a mixing glass. The stirred-drink counterpart to a hawthorne.',
    seeAlso: ['hawthorne', 'stir'],
  },
  {
    slug: 'mixing-glass',
    term: 'Mixing glass',
    category: 'tool',
    definition:
      'A heavy-based glass for stirring, wide enough for a bar spoon to travel round the inside without catching.',
    seeAlso: ['stir'],
  },
  {
    slug: 'muddler',
    term: 'Muddler',
    category: 'tool',
    definition:
      'A blunt pestle for pressing fruit and herbs. Flat-headed rather than toothed - teeth shred mint instead of pressing it.',
    seeAlso: ['muddle'],
  },
  {
    slug: 'speed-rail',
    term: 'Speed rail',
    category: 'tool',
    definition:
      'The trough of bottles directly in front of the bartender, holding the pours that make up most of a night, arranged the same way every shift.',
  },

  /* ---- Glassware -------------------------------------------------- */
  {
    slug: 'collins-glass',
    term: 'Collins glass',
    category: 'glass',
    definition:
      'A tall narrow glass of about 300–410 ml. Narrower than a highball, so a fizzy drink stays fizzy longer.',
    seeAlso: ['highball-glass'],
  },
  {
    slug: 'coupe',
    term: 'Coupe',
    category: 'glass',
    definition:
      'A shallow stemmed glass for drinks served up. Holds less than it looks and spills far less than a Martini glass.',
    seeAlso: ['up'],
  },
  {
    slug: 'highball-glass',
    term: 'Highball glass',
    category: 'glass',
    definition:
      'A tall straight glass of about 240–350 ml, for any long drink over ice.',
    seeAlso: ['collins-glass', 'long'],
  },
  {
    slug: 'rocks-glass',
    term: 'Rocks glass',
    category: 'glass',
    definition:
      'A short heavy-based tumbler, also called an Old Fashioned glass. For short drinks, spirits over ice, and anything served neat.',
    seeAlso: ['neat', 'on-the-rocks'],
  },

  /* ---- Ingredients ------------------------------------------------ */
  {
    slug: 'amaro',
    term: 'Amaro',
    category: 'ingredient',
    etymology: 'Italian for bitter; plural amari.',
    definition:
      'A bitter liqueur, sweetened and low enough in strength to pour by the measure rather than the dash. Campari and Aperol are the two most bars carry.',
    seeAlso: ['bitters'],
  },
  {
    slug: 'aquafaba',
    term: 'Aquafaba',
    category: 'ingredient',
    definition:
      'The liquid from a tin of chickpeas, used in place of egg white. About 20–25 ml stands in for one, with no allergen and no flavour of its own.',
    seeAlso: ['dry-shake'],
  },
  {
    slug: 'bitters',
    term: 'Bitters',
    category: 'ingredient',
    definition:
      'High-proof spirit infused with bark, root and botanicals until undrinkable alone, used in dashes. Gives sweet and sour something to push against.',
    seeAlso: ['amaro', 'dash'],
  },
  {
    slug: 'oleo-saccharum',
    term: 'Oleo saccharum',
    category: 'ingredient',
    etymology: 'Latin, roughly "oil sugar".',
    definition:
      'Citrus peels buried in sugar for a few hours. The sugar draws the oil out of the peel, giving an intense citrus syrup from fruit you were going to juice anyway.',
    seeAlso: ['simple-syrup'],
  },
  {
    slug: 'orgeat',
    term: 'Orgeat',
    category: 'ingredient',
    definition:
      'An almond syrup with orange flower water. What makes a Mai Tai taste like a Mai Tai.',
    seeAlso: ['simple-syrup'],
  },
  {
    slug: 'simple-syrup',
    term: 'Simple syrup',
    category: 'ingredient',
    definition:
      'Sugar dissolved in water, usually 1:1 by volume. Rich syrup is 2:1, twice as sweet per millilitre and thicker, so use about half as much.',
    seeAlso: ['oleo-saccharum', 'rich-syrup'],
  },
  {
    slug: 'rich-syrup',
    term: 'Rich syrup',
    category: 'ingredient',
    definition:
      'Two parts sugar to one part water. Sweeter, thicker and longer-keeping than simple syrup, because the sugar concentration itself preserves it.',
    seeAlso: ['simple-syrup'],
  },

  /* ---- Structure -------------------------------------------------- */
  {
    slug: 'balance',
    term: 'Balance',
    category: 'structure',
    definition:
      'The state in which no single element - sweet, sour, strong or bitter - arrives on its own. The only thing that decides whether a drink is good.',
    seeAlso: ['sour', 'dilution'],
  },
  {
    slug: 'dilution',
    term: 'Dilution',
    category: 'structure',
    definition:
      'The water a drink picks up from melting ice, normally 20–25% of the finished volume. Inseparable from chilling: the cold comes from the melting.',
    seeAlso: ['shake', 'stir', 'balance'],
  },
  {
    slug: 'highball',
    term: 'Highball',
    category: 'structure',
    definition:
      'A spirit lengthened with a non-alcoholic mixer over ice. Also one of the six root families.',
    seeAlso: ['long', 'highball-glass'],
  },
  {
    slug: 'sour',
    term: 'Sour',
    category: 'structure',
    definition:
      'The family of spirit, citrus and sweetener, usually around 2:1:1. The most productive structure there is - Daiquiri, Margarita, Whiskey Sour and most of Part VIII.',
    seeAlso: ['balance'],
  },
  {
    slug: 'spec',
    term: 'Spec',
    category: 'structure',
    definition:
      'A drink\'s written build: each ingredient with its measure, plus glass, ice, method and garnish.',
  },

  /* ---- Service ---------------------------------------------------- */
  {
    slug: 'garnish',
    term: 'Garnish',
    category: 'service',
    definition:
      'What finishes a drink. Not decoration: a twist sprays oil across the surface and changes what the first mouthful smells like.',
    seeAlso: ['twist'],
  },
  {
    slug: 'long',
    term: 'Long',
    category: 'service',
    definition:
      'Served in a tall glass, filled with ice, and lengthened with a mixer. The opposite of short.',
    seeAlso: ['short', 'highball-glass'],
  },
  {
    slug: 'neat',
    term: 'Neat',
    category: 'service',
    definition:
      'A spirit poured on its own at room temperature, with no ice at any stage. Not the same as up, which has been chilled.',
    seeAlso: ['up', 'on-the-rocks'],
  },
  {
    slug: 'on-the-rocks',
    term: 'On the rocks',
    category: 'service',
    definition: 'Poured over ice in a rocks glass.',
    seeAlso: ['neat', 'rocks-glass'],
  },
  {
    slug: 'short',
    term: 'Short',
    category: 'service',
    definition:
      'Served in a small glass, spirit-forward, with little or no mixer. Meant to be sipped.',
    seeAlso: ['long'],
  },
  {
    slug: 'up',
    term: 'Up',
    category: 'service',
    definition:
      'Chilled by shaking or stirring, then strained into a glass with no ice in it. Very cold, and not the same as neat.',
    seeAlso: ['neat', 'coupe'],
  },
  {
    slug: 'dressed',
    term: 'Dressed',
    category: 'service',
    definition:
      'Garnished and presented to the same standard as an alcoholic drink. Applies to soft drinks, and to a glass of water.',
    seeAlso: ['garnish'],
  },

  /* ---- Measures --------------------------------------------------- */
  {
    slug: 'dash',
    term: 'Dash',
    category: 'measure',
    definition:
      'One shake of a bitters bottle, roughly 0.8–1 ml. Small enough that precision does not matter and consistency does.',
    seeAlso: ['bitters', 'jigger'],
  },
  {
    slug: 'free-pour',
    term: 'Free pour',
    category: 'measure',
    definition:
      'Measuring by counting through a pour spout instead of using a jigger. A real skill, and the first thing to slip when a bar gets busy.',
    seeAlso: ['jigger'],
  },
  {
    slug: 'standard-drink',
    term: 'Standard drink',
    category: 'measure',
    definition:
      'In New Zealand, 10 g of pure alcohol. A 30 ml shot of 40% spirit is about 0.95 of one.',
  },
  {
    slug: 'abv',
    term: 'ABV',
    category: 'measure',
    etymology: 'Alcohol by volume.',
    definition:
      'The percentage of a liquid that is pure ethanol, by volume. Most spirits are bottled between 37.5% and 40%, having been diluted down from much stronger.',
    seeAlso: ['standard-drink', 'dilution'],
  },
];

/** How the categories are labelled and ordered in the glossary filter. */
export const CATEGORY_LABEL: Record<GlossaryCategory, string> = {
  technique: 'Technique',
  tool: 'Tools',
  glass: 'Glassware',
  ingredient: 'Ingredients',
  structure: 'Structure',
  service: 'Service',
  measure: 'Measures',
};

/** Look up one term by slug. */
export function lookupTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((t) => t.slug === slug);
}

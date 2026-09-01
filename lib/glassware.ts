/**
 * The glasses, as data.
 *
 * The glassware chapter sets these out as reading tables with capacities;
 * this is the same set keyed for the picker, which answers a different
 * question - "what should this go in" rather than "what is that called".
 *
 * `serve` is the axis the picker filters on, because that is what a
 * bartender actually knows first: the drink is long, or short, or served
 * up. Everything else follows from it.
 */
export type Serve = 'up' | 'short' | 'long' | 'hot' | 'shot';

export type Glass = {
  slug: string;
  name: string;
  serve: Serve;
  /** Capacity in millilitres, as a range. */
  holds: [number, number];
  /** Why this shape, in one line. */
  why: string;
  /** Drinks from this book that go in it. */
  drinks: string[];
};

export const SERVE_LABEL: Record<Serve, string> = {
  up: 'Served up',
  short: 'Short',
  long: 'Long',
  hot: 'Hot',
  shot: 'Shot',
};

export const GLASSES: Glass[] = [
  {
    slug: 'martini',
    name: 'Martini',
    serve: 'up',
    holds: [90, 300],
    why: 'A stem to keep your hand off it, and a wide surface that gives the aroma straight up.',
    drinks: ['Martini', 'Cosmopolitan', 'Espresso Martini', 'Grasshopper'],
  },
  {
    slug: 'coupe',
    name: 'Coupe',
    serve: 'up',
    holds: [150, 200],
    why: 'The same job as a Martini glass with a lower centre of gravity, so far less of it ends up on the floor.',
    drinks: ['Daiquiri', 'Whiskey Sour', 'Clover Club', 'Pisco Sour'],
  },
  {
    slug: 'margarita',
    name: 'Margarita',
    serve: 'up',
    holds: [250, 250],
    why: 'A wide rim, which is there to be salted.',
    drinks: ['Margarita'],
  },
  {
    slug: 'rocks',
    name: 'Old Fashioned',
    serve: 'short',
    holds: [200, 300],
    why: 'Heavy base, wide mouth. Takes one large cube and sits still while you muddle in it.',
    drinks: ['Old Fashioned', 'Negroni', 'Boulevardier', 'Caipirinha'],
  },
  {
    slug: 'snifter',
    name: 'Snifter',
    serve: 'short',
    holds: [250, 500],
    why: 'The bowl collects aroma and the stem keeps your hand from warming it - though cupping it deliberately is the point with a cognac.',
    drinks: ['Cognac and aged spirits, neat'],
  },
  {
    slug: 'highball',
    name: 'Highball',
    serve: 'long',
    holds: [240, 350],
    why: 'Tall and straight, so it takes a full load of ice and a mixer without crowding.',
    drinks: ['Gin & Tonic', 'Cuba Libre', 'Bloody Mary', 'Sex on the Beach'],
  },
  {
    slug: 'collins',
    name: 'Collins',
    serve: 'long',
    holds: [300, 410],
    why: 'Narrower than a highball, so there is less surface for the carbonation to escape from.',
    drinks: ['Tom Collins', 'Mojito'],
  },
  {
    slug: 'hurricane',
    name: 'Hurricane',
    serve: 'long',
    holds: [440, 440],
    why: 'Large and curved. Holds a blended drink and a lot of crushed ice.',
    drinks: ['Piña Colada'],
  },
  {
    slug: 'julep',
    name: 'Julep tin',
    serve: 'long',
    holds: [350, 350],
    why: 'Metal, so it frosts on the outside when packed with crushed ice, which is half the drink.',
    drinks: ['Mint Julep'],
  },
  {
    slug: 'mule',
    name: 'Mule mug',
    serve: 'long',
    holds: [350, 500],
    why: 'Copper, and it frosts the same way. The handle keeps your hand off the cold.',
    drinks: ['Moscow Mule'],
  },
  {
    slug: 'flute',
    name: 'Flute',
    serve: 'long',
    holds: [180, 300],
    why: 'Narrow and tall, so the bubbles have the smallest possible surface to escape through.',
    drinks: ['French 75', 'Mimosa', 'Bellini'],
  },
  {
    slug: 'wine',
    name: 'Wine glass',
    serve: 'long',
    holds: [300, 450],
    why: 'A big bowl for a spritz, and the right glass for an aged spirit if you have no snifter.',
    drinks: ['Aperol Spritz', 'Wine'],
  },
  {
    slug: 'toddy',
    name: 'Toddy',
    serve: 'hot',
    holds: [200, 300],
    why: 'Handled, and made of something that will not crack. Both non-negotiable when the drink is hot.',
    drinks: ['Irish Coffee', 'Hot Toddy', 'Mulled wine'],
  },
  {
    slug: 'shot',
    name: 'Shot',
    serve: 'shot',
    holds: [30, 60],
    why: 'Straight-sided and narrow, which is what makes layering possible.',
    drinks: ['B52'],
  },
];

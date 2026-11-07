import type { FlavourFamily } from './schema';

/**
 * The flavour wheel: six families and the descriptors under them, two
 * levels deep. Colours reference the flavour tokens in globals.css, which
 * work on both the light and dark ground.
 */
export const FLAVOURS: FlavourFamily[] = [
  {
    slug: 'fruit',
    name: 'Fruit',
    colour: 'var(--flavour-fruit)',
    meaning:
      'Usually from the raw material or from a cask that held wine. In an unaged spirit it is the base showing through; in an aged one it is often the sherry butt.',
    descriptors: [
      'Citrus peel',
      'Green apple',
      'Pear',
      'Stone fruit',
      'Dried fig',
      'Raisin',
      'Banana',
      'Red berry',
    ],
  },
  {
    slug: 'botanic',
    name: 'Botanical',
    colour: 'var(--flavour-botanic)',
    meaning:
      'Added deliberately. Anything in this family was put there by a recipe rather than by fermentation, which makes it the signature of gin and of the amari.',
    descriptors: [
      'Juniper',
      'Coriander seed',
      'Anise',
      'Mint',
      'Thyme',
      'Angelica',
      'Chamomile',
      'Rose',
    ],
  },
  {
    slug: 'wood',
    name: 'Wood',
    colour: 'var(--flavour-wood)',
    meaning:
      'All of it came out of a barrel. If you can taste vanilla or coconut, you are tasting oak rather than anything that was in the still.',
    descriptors: [
      'Vanilla',
      'Coconut',
      'Toasted oak',
      'Char',
      'Tannin',
      'Cedar',
      'Toffee',
    ],
  },
  {
    slug: 'spice',
    name: 'Spice',
    colour: 'var(--flavour-spice)',
    meaning:
      'Can arrive from either direction - rye grain brings pepper on its own, and a cask brings clove and cinnamon. Work out which before drawing a conclusion.',
    descriptors: [
      'Black pepper',
      'Clove',
      'Cinnamon',
      'Nutmeg',
      'Ginger',
      'Dill',
      'Liquorice',
    ],
  },
  {
    slug: 'sweet',
    name: 'Sweet',
    colour: 'var(--flavour-sweet)',
    meaning:
      'Either sugar that was added after distillation, or wood doing an impression of it. Almost no spirit is sweet as it leaves the still.',
    descriptors: [
      'Caramel',
      'Molasses',
      'Honey',
      'Maple',
      'Chocolate',
      'Cream',
      'Marzipan',
    ],
  },
  {
    slug: 'earth',
    name: 'Earth and smoke',
    colour: 'var(--flavour-earth)',
    meaning:
      'The base material or the fire it met. Peat smoke in Scotch and pit smoke in mezcal look alike on a wheel and arrive by completely different routes.',
    descriptors: [
      'Peat smoke',
      'Roasted agave',
      'Grain',
      'Leather',
      'Mineral',
      'Mushroom',
      'Tobacco',
    ],
  },
];

/** Look up one family by slug. */
export function lookupFlavour(slug: string): FlavourFamily | undefined {
  return FLAVOURS.find((f) => f.slug === slug);
}

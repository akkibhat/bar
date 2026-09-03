import type { Chapter } from '../../schema';

/**
 * Part IX - Past the syllabus.
 *
 * None of this was on the course, and rather than smuggle it into the
 * earlier parts as though it had been, it sits at the end under a heading
 * that says where it came from.
 *
 * The qualification is from October 2022. Three things have moved since:
 * batching went from a large-venue trick to something any bar does, the
 * zero-proof shelf stopped being an afterthought and became a category,
 * and clarification and fat-washing arrived from restaurant kitchens.
 * A book that stopped at the workbook would be missing all three.
 */
export const PAST_THE_SYLLABUS: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'batching',
    part: 'past-the-syllabus',
    n: 35,
    title: 'Batching and scaling',
    minutes: 5,
    standfirst:
      'Twelve drinks at once. The arithmetic, and the dilution everyone forgets.',
    body: [
      {
        kind: 'p',
        text: 'Recipes are written one drink at a time, which is right for learning them and wrong for having people over. Batching is how you make the same drink twenty times without standing at a shaker all evening.',
      },
      { kind: 'h', text: 'What batches and what doesn\'t' },
      {
        kind: 'list',
        items: [
          '**Batch the shelf-stable parts.** Spirits, liqueurs, syrups, bitters, vermouth. These keep, and a stirred drink batches almost perfectly.',
          '**Do not batch citrus more than a few hours ahead.** It dulls and browns. If a drink has fresh juice in it, batch everything else and add the juice on the night.',
          '**Never batch anything carbonated.** Add soda, tonic or sparkling wine at the moment of pouring.',
          '**Never batch egg or dairy.** They need the shake, and they won\'t keep.',
        ],
      },
      { kind: 'h', text: 'The part everyone forgets' },
      {
        kind: 'p',
        text: 'A batched drink poured straight from the bottle over ice hasn\'t been shaken or stirred, so it has never been diluted. It will be noticeably stronger and harsher than the same drink made properly, and the usual reaction is to blame the recipe.',
      },
      {
        kind: 'p',
        text: '**Add the water to the batch.** A stirred drink finishes around 20–25% water by volume, and a shaken one a little more. So for a stirred batch, add water equal to roughly a fifth of the spirit and chill the whole thing in the fridge or freezer. Then it pours straight over ice and tastes right.',
      },
      { kind: 'tool', tool: 'dilution' },
      {
        kind: 'note',
        title: 'A Negroni for twelve',
        text: '360 ml gin, 360 ml Campari, 360 ml sweet vermouth, plus about 220 ml water. That\'s 1.3 litres, which is twelve pours of just over 100 ml. Bottle it, keep it in the fridge, pour over a large cube and add the orange zest at the glass. Nobody can tell it was batched.',
      },
      {
        kind: 'p',
        text: 'Scale by ingredient rather than by drink: work out one drink in millilitres, multiply every line by the number of servings, then add the dilution at the end. Label the bottle with what\'s in it and the date, because in a week you won\'t remember.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'low-and-no',
    part: 'past-the-syllabus',
    n: 36,
    title: 'Low and no',
    minutes: 5,
    standfirst:
      'Zero-proof and low-ABV. What makes one work, and the bottles worth having.',
    body: [
      {
        kind: 'p',
        text: 'Non-alcoholic drinks used to get a page on cordial shelf life, if they got one at all. The single good instinct in that was that a soft drink should be **dressed** to the same standard as everything else. It has since become a category in its own right.',
      },
      {
        kind: 'p',
        text: 'Non-alcoholic drinks are one of the fastest-growing parts of the trade, and the useful detail is that the overwhelming majority of people buying them also buy alcohol. This isn\'t an abstinence category. It\'s people alternating, or driving, or not drinking tonight, and they resent being handed a lemonade.',
      },
      { kind: 'h', text: 'What makes a zero-proof drink work' },
      {
        kind: 'p',
        text: 'Alcohol does three things a soft drink has to replace: it carries aroma, it adds body, and it provides a slight burn that stops sweetness cloying. Miss all three and you\'ve made a cordial.',
      },
      {
        kind: 'list',
        items: [
          '**Acid.** The most important lever. Citrus, verjuice, or a splash of vinegar. Without it a zero-proof drink is flat and sweet.',
          '**Bitterness.** Strong tea, coffee, grapefruit, chinotto, or non-alcoholic aperitifs. This is what makes a drink read as adult.',
          '**Tannin and body.** Over-brewed black tea is the cheapest trick behind the bar and does a lot of the work.',
          '**Heat.** Ginger, chilli, pink peppercorn. Stands in for the alcohol\'s bite.',
          '**Salt.** A pinch, or a couple of drops of saline. Lifts everything, the same way it does in food.',
        ],
      },
      {
        kind: 'note',
        title: 'Build it like a cocktail',
        text: 'Same families, same ratios. A zero-proof sour is still 2 : 1 : 1. The two parts are just tea, or a distilled non-alcoholic spirit, instead of gin. Shake it, strain it, serve it in the same glass with the same garnish.',
      },
      { kind: 'h', text: 'The bottles' },
      {
        kind: 'p',
        text: 'There\'s now a real shelf of non-alcoholic spirits, aperitifs and even bitters. Quality varies enormously and price doesn\'t track it. They\'re worth having for the guest who wants the ritual of a Negroni without the alcohol, and they\'re not required. Tea, citrus and a good tonic will get most of the way there.',
      },
      {
        kind: 'unsure',
        title: 'Nothing zero-proof on the shelf yet',
        text: 'TODO: I haven\'t put a proper zero-proof drink on the shelf yet. Everything here is method rather than something I have made and served. Worth building one for Backbar and finding out which of these levers actually matters most.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'modern-technique-and-waste',
    part: 'past-the-syllabus',
    n: 37,
    title: 'Modern technique, and waste',
    minutes: 5,
    standfirst:
      'Fat-washing, clarification, and what a bar throws away.',
    body: [
      {
        kind: 'p',
        text: 'Two techniques arrived in bars from restaurant kitchens and are now common enough to belong in a book like this. Both are ways of changing a liquid\'s texture or flavour without changing what\'s written on the spec.',
      },
      { kind: 'h', text: 'Fat-washing' },
      {
        kind: 'p',
        text: 'Alcohol dissolves the flavour compounds in fat. So: melt a fat into a spirit - browned butter, bacon fat, toasted sesame oil, coconut - leave it to sit, then freeze it. The fat solidifies and lifts out, and what\'s left is a clear spirit tasting of it.',
      },
      {
        kind: 'steps',
        items: [
          'Combine roughly 30–50 ml of melted fat with 500 ml of spirit.',
          'Leave at room temperature for a few hours, stirring occasionally. Room temperature rather than warm, because heat drives off the top notes of the spirit you\'re trying to keep.',
          'Freeze overnight.',
          'Lift off the solid cap and strain through a coffee filter.',
        ],
      },
      {
        kind: 'p',
        text: 'A brown-butter bourbon Old Fashioned is the usual demonstration.',
      },
      { kind: 'h', text: 'Clarification' },
      {
        kind: 'p',
        text: 'Milk-washing turns a cloudy drink clear while softening its acidity. Add an acidic mixture to warm whole milk and the casein proteins curdle; as the curds form they trap the particles, tannins and colour that made the drink cloudy. Strain, and what comes through is clear and noticeably silkier.',
      },
      {
        kind: 'p',
        text: 'The result keeps far better than the drink it came from, which is why it pairs with batching: a clarified batch can be poured for weeks.',
      },
      { kind: 'h', text: 'Waste' },
      {
        kind: 'p',
        text: 'A bar juices a case of limes and bins the husks, cuts garnish and bins the offcuts, and pours away what doesn\'t get drunk. The volume adds up quickly.',
      },
      {
        kind: 'list',
        items: [
          '**Peels before juice.** Peel citrus for oleo saccharum first, then juice the naked fruit. Two ingredients from one lemon.',
          '**Husks after juice.** Spent halves still hold oil; they can be dehydrated and ground for a rimming salt.',
          '**Batch to a size that gets drunk.** The largest single source of waste is over-preparing.',
          '**Use the whole herb.** Mint stems have flavour; they go into a syrup rather than a bin.',
        ],
      },
      {
        kind: 'unsure',
        title: 'Neither of these have I done',
        text: 'TODO: I haven\'t fat-washed or clarified anything. Both descriptions are from reading rather than practice, and the quantities above are starting points other people use, not ones I have tested. Worth doing before either is recommended with any confidence.',
      },
      {
        kind: 'p',
        text: 'That\'s the end of the book. The other half of the site is what came out of it.',
      },
    ],
  },
];

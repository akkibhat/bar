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
        text: '360 ml gin, 360 ml Campari, 360 ml sweet vermouth, plus about 270 ml water. That\'s 1.35 litres, which is twelve pours of about 110 ml. Bottle it, keep it in the fridge, pour over a large cube and add the orange zest at the glass. Nobody can tell it was batched.',
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
          '**Acid.** The most important lever. Lemon or lime, or a splash of vinegar where you want the sourness without the citrus flavour. Without it a zero-proof drink is flat and sweet.',
          '**Bitterness.** Strong tea, coffee, grapefruit, chinotto, or non-alcoholic aperitifs. This is what makes a drink read as adult.',
          '**Tannin and body.** Over-brewed black tea is the cheapest trick behind the bar and does a lot of the work.',
          '**Heat.** Ginger, chilli, pink peppercorn, or a couple of dashes of Tabasco - which brings its own acid with it. Stands in for the bite the alcohol is not providing.',
          '**Salt.** A pinch, stirred in rather than sprinkled on top so it does not land on one mouthful. Bars that use it a lot keep a saline solution to dose it evenly, but that is a refinement rather than the point. Lifts everything, the same way it does in food.',
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
        kind: 'spec',
        spec: {
          name: 'Gumboot Sour',
          glass: 'Coupe',
          ice: 'None in the glass',
          method: 'Dry shake, then shake with ice and double strain',
          family: 'daiquiri',
          spec: [
            { name: 'Strong black tea, cold-brewed until tannic', amount: '60 ml' },
            { name: 'Lime juice', amount: '30 ml' },
            { name: 'Honey syrup, 3 : 1', amount: '30 ml' },
            { name: 'Non-alcoholic aromatic bitters', amount: '2 dash', substitutes: ['A pinch of salt, stirred in'] },
            { name: 'Fresh ginger, muddled', amount: '1 slice', substitutes: ['2 dashes Tabasco'] },
            { name: 'Aquafaba', amount: '15 ml' },
          ],
          garnish: 'As a Whiskey Sour',
          note: 'Gumboot tea is what New Zealand calls ordinary black tea, and the drink is built on a strong brew of it. Every lever from the list above is in here once. Make it three times, dropping the ginger and then the salt, and see which one you miss.',
        },
      },
      {
        kind: 'unsure',
        title: 'The Gumboot Sour is not built yet',
        text: 'The Gumboot Sour above is the recipe. TODO: build it, taste it three ways, and then put it on Backbar with the reason in the description - it would be the first drink there with one.',
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
        text: 'Two techniques arrived in bars from restaurant kitchens and are now common enough to belong in a book like this. Both are ways of changing a liquid\'s texture or flavour without changing what\'s written on the spec. I have not done either yet, so the quantities here are other people\'s - Dave Arnold\'s for the fat, the usual ratio for the milk - and not mine.',
      },
      { kind: 'h', text: 'Fat-washing' },
      {
        kind: 'p',
        text: 'Alcohol dissolves the flavour compounds in fat. So: melt a fat into a spirit - browned butter, bacon fat, toasted sesame oil, coconut - leave it to sit, then freeze it. The fat solidifies and lifts out, and what\'s left is a clear spirit tasting of it.',
      },
      {
        kind: 'steps',
        items: [
          'Melt the fat and stir it through the spirit. About 120 g per 750 ml for something strong like smoked bacon, about 240 g for butter, olive oil or anything mild.',
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
        text: 'Milk-washing turns a cloudy drink clear while softening its acidity. Pour the finished, acidic cocktail slowly into room-temperature milk - not the other way round - at about five parts drink to one part milk, and the casein proteins curdle; as the curds form they trap the particles, tannins and colour that made the drink cloudy. Strain, and what comes through is clear and noticeably silkier.',
      },
      {
        kind: 'p',
        text: 'The result keeps far better than the drink it came from, which is why it pairs with batching: a clarified batch can be poured for weeks. Directional freezing, the clear-ice trick from the ice chapter, is sometimes used the same way; I have not tried it.',
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
          '**Use the whole herb.** Mint stems have flavour; they can go into a syrup rather than a bin.',
        ],
      },
{
        kind: 'p',
        text: 'That\'s the end of the book. The other half of the site is what came out of it.',
      },
    ],
  },
];

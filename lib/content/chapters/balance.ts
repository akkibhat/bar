import type { Chapter } from '../../schema';

/**
 * Part IV - Balance and structure.
 *
 * The part the course did not have, and the reason this book exists in
 * the shape it does.
 *
 * The workbook teaches about twenty-five classics as a flat list of
 * specs to memorise. Every one of them is an instance of a smaller number
 * of structures, and the ratios inside them are not arbitrary. Nobody
 * said so. Once you can see the structure, the list stops being twenty-
 * five things to remember and becomes six things to understand, which is
 * the difference between following a recipe and being able to build one.
 *
 * All three chapters here are written from outside the qualification and
 * each says so.
 */
export const BALANCE: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'balance',
    part: 'balance',
    n: 16,
    title: 'Balance',
    minutes: 6,
    standfirst:
      'Sweet, sour, strong, bitter. The ratio to memorise, and how to fix a drink.',
    body: [
      {
        kind: 'p',
        text: 'A drink is balanced when no single element arrives on its own. Sweetness without acid is syrup; acid without sweetness is a mouthful of lemon juice; spirit without either is just a spirit. The skill isn\'t knowing recipes, it is knowing which direction to move when something is off.',
      },
      {
        kind: 'list',
        items: [
          '**Strong** - the base spirit. Sets the weight of the drink and how much of everything else it can carry.',
          '**Sweet** - syrup, liqueur, sugar. Softens acid and alcohol, and adds body: sugar makes a drink feel thicker as well as taste sweeter.',
          '**Sour** - citrus, almost always lemon or lime. Cuts sweetness, and is the main reason a drink tastes fresh.',
          '**Bitter** - bitters, amari, or the botanical edge in gin. Stops sweet and sour resolving into something flat, and gives the drink definition.',
        ],
      },
      { kind: 'h', text: 'The sour ratio' },
      {
        kind: 'p',
        text: 'The sour template is **2 : 1 : 1** - two parts spirit, one part citrus, one part sweetener. In mL that\'s 60 : 30 : 30, or the 45 : 22.5 : 22.5 that a smaller drink uses.',
      },
      {
        kind: 'p',
        text: 'Go back through the classic specs with that in your head and it\'s everywhere. The Daiquiri is roughly 60 rum, 20 lime, 20 sugar. The Margarita is 60 : 25 : 30. The Whiskey Sour is 45 : 25 : 20. The White Lady is 40 gin, 30 Cointreau, 20 lemon, where the Cointreau is doing the sweetening.',
      },
      {
        kind: 'note',
        title: 'The drier version',
        text: 'Plenty of modern bars run 2 : 1 : 0.75 instead - the same spirit and citrus with a quarter less sugar. It makes a sharper, more spirit-forward drink. If a sour tastes soft and sweet to you, that\'s the first thing to try, before touching anything else.',
      },
      { kind: 'tool', tool: 'ratio' },
      { kind: 'h', text: 'What moves the ratio' },
      {
        kind: 'p',
        text: 'The template is a starting point, not an answer. Four things push it around, and all four are reasons to taste rather than trust the numbers:',
      },
      {
        kind: 'list',
        items: [
          '**Which citrus.** Lime is sharper than lemon and needs slightly more sugar to sit level.',
          '**How ripe the fruit is.** Real citrus varies week to week. This alone is why bars taste every batch.',
          '**What the spirit brings.** An aged rum carries its own sweetness; a dry gin brings none, and wants more sugar than the same drink built on bourbon.',
          '**Whether something else is already sweet.** If a liqueur is doing the sweetening, the syrup usually comes out altogether.',
        ],
      },
      { kind: 'h', text: 'Fixing a drink' },
      {
        kind: 'table',
        head: ['It tastes', 'The problem is usually', 'Do this'],
        rows: [
          ['Harsh, hot', 'Under-diluted or under-sweetened', 'Shake or stir longer, or add 5 ml syrup'],
          ['Soft, dull', 'Not enough acid', 'Add 5 ml citrus before touching anything else'],
          ['Sickly', 'Too much sweet, or not enough bitter', 'Add citrus, or 2 dashes of bitters'],
          ['Thin, watery', 'Over-diluted, or under-built', 'Less shaking, colder ice, or more of everything but water'],
          ['Sharp but hollow', 'Acid without body', 'Add syrup - sugar carries weight, not just sweetness'],
        ],
      },
      {
        kind: 'note',
        title: 'Taste it before it goes out',
        text: 'A straw into the shaker before straining, or the back of a bar spoon. Every professional does it and no recipe tells you to. The recipe can\'t know how ripe your limes are.',
      },
],
  },

  /* ================================================================== */
  {
    slug: 'the-families',
    part: 'balance',
    n: 17,
    title: 'The six families',
    minutes: 6,
    standfirst:
      'Six structures that cover almost every drink here, and how to build on them.',
    body: [
      {
        kind: 'p',
        text: 'The classics chapter at the end of this book holds about twenty-five recipes. As a list, that\'s twenty-five things to remember. As structures, it\'s six, and the six cover far more than twenty-five drinks.',
      },
      {
        kind: 'p',
        text: 'The families are sorted by what holds the drink together, not by which spirit is in it. A Negroni and a Boulevardier are the same drink, and sorting by ingredient won\'t tell you that.',
      },
      { kind: 'tool', tool: 'families' },
      { kind: 'h', text: 'Reading the table' },
      {
        kind: 'p',
        text: 'Take the **Old Fashioned**: spirit, a little sugar, bitters, ice, a twist. Swap bourbon for aged rum and it\'s still an Old Fashioned. Swap the sugar for maple and you\'ve made a variation people put on menus.',
      },
      {
        kind: 'p',
        text: 'Take the **Martini**: spirit and aromatised wine, nothing else. Swap gin for whiskey and dry vermouth for sweet, and you have a Manhattan. Add Campari in equal parts and you have a Negroni. Those are three separate recipes and one idea.',
      },
      {
        kind: 'p',
        text: 'The **Sidecar** is the family people miss: spirit, liqueur, citrus. It looks like a sour, but the sweetening is coming from a liqueur, which brings flavour as well as sugar. A Margarita is a Sidecar. So is a Cosmopolitan, and so is a White Lady.',
      },
      { kind: 'tool', tool: 'sidecarFamily' },
      {
        kind: 'note',
        title: 'Where the six come from',
        text: 'This is the framework set out in *Cocktail Codex* by the Death & Co team, and it has become the standard way of teaching drink structure. I didn\'t invent it. It\'s here because it\'s the most useful single idea I have found on the subject.',
      },
      { kind: 'h', text: 'Building something new' },
      {
        kind: 'steps',
        items: [
          'Pick a family. Decide what shape of drink you want before you decide what goes in it.',
          'Choose the base spirit.',
          'Fill the other roles with things that belong beside it. The family says what the roles are.',
          'Build it at the family\'s standard ratio.',
          'Taste, and move one thing at a time.',
        ],
      },
      {
        kind: 'p',
        text: 'That\'s how most of what\'s on the Backbar shelf got made. The Black Magic Margarita is a Sidecar with cassis standing in for part of the orange liqueur; the Ginger Collins is a highball with a sour underneath it.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'syrups-and-house-ingredients',
    part: 'balance',
    n: 18,
    title: 'Syrups and house ingredients',
    minutes: 5,
    standfirst:
      'Simple syrup and the rest. What every recipe asks for and never explains.',
    body: [
      {
        kind: 'p',
        text: 'Sugar doesn\'t dissolve in a cold drink. Syrup exists to get around that: dissolve it in advance, in hot water, and it mixes in a shaker instead of sitting on the bottom of the glass.',
      },
      { kind: 'h', text: 'Simple syrup' },
      {
        kind: 'p',
        text: 'Sugar and water, warmed until clear. Two ratios are in common use:',
      },
      {
        kind: 'table',
        head: ['Ratio', 'Called', 'Behaves like'],
        rows: [
          ['1 : 1 by volume', 'Simple, or plain', 'What most recipes assume. Sweetens without adding much body.'],
          ['2 : 1 sugar to water', 'Rich', 'Twice the sweetness per millilitre and noticeably thicker. Use about half as much.'],
        ],
      },
      {
        kind: 'p',
        text: 'Rich syrup keeps longer, because the sugar concentration itself stops things growing in it, and it takes up half the fridge space. If a spec was written for 1 : 1 and you have rich, halve the quantity and add a splash of water back.',
      },
      {
        kind: 'note',
        title: 'It doesn\'t need a pot',
        text: 'Hot water and stirring is enough, and hot straight from a boiling tap is fine - water that arrives hot and gets stirred off the heat loses almost nothing. What concentrates a syrup is leaving it boiling on the heat, which drives water off and makes it stronger than the ratio you measured.',
      },
      { kind: 'h', text: 'The other syrups' },
      {
        kind: 'list',
        items: [
          '**Rich demerara** - 2 : 1 with demerara sugar. Molasses character. Goes into anything aged: Old Fashioned, tiki, rum drinks.',
          '**Honey syrup** - 3 : 1 honey to warm water, because neat honey seizes in a cold shaker.',
          '**Agave syrup** - 3 : 1 with warm water, like the honey. The default sweetener for tequila and mezcal drinks.',
          '**Grenadine** - pomegranate, not the red chemical sweetener sold under the name. Equal parts pomegranate juice and sugar, and much better than the bought one.',
          '**Orgeat** - almond and orange flower. Fiddly, and essential to a Mai Tai.',
          '**Oleo saccharum** - citrus peels buried in sugar for a few hours. The sugar draws the oil out of the peel and you get an intensely citrus syrup from fruit you were going to throw away.',
        ],
      },
      { kind: 'h', text: 'Keeping them' },
      {
        kind: 'p',
        text: 'Fridge, labelled, dated. A 1 : 1 syrup lasts about a month; a 2 : 1 keeps for several. A splash of high-proof vodka extends both. Anything with fresh fruit or dairy in it\'s a few days at most.',
      },
      {
        kind: 'note',
        title: 'Citrus is a house ingredient too',
        text: 'Juice oxidises fast. Lime is noticeably worse within four hours, lemon holds a little longer, and neither is any good the next day. Squeeze what a shift needs and no more. Doing it properly costs real time, and there\'s no way around it. (note that bars almost exclusively use bottled juice, unless super fancy cocktail bar)',
      },
      {
        kind: 'unsure',
        title: 'No spec here defines sugar syrup',
        text: 'Most specs call for sugar syrup and never define it, so this is written from outside.',
      },
    ],
  },
];

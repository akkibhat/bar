import type { Chapter } from '../../types';

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
      'Sweet, sour, strong, bitter. The four forces in every glass, and the ratio that resolves them.',
    body: [
      {
        kind: 'p',
        text: 'A drink is balanced when no single element arrives on its own. Sweetness without acid is syrup; acid without sweetness is a mouthful of lemon juice; spirit without either is just a spirit. The skill is not knowing recipes, it is knowing which direction to move when something is off.',
      },
      {
        kind: 'list',
        items: [
          '**Strong** — the base spirit. Sets the weight of the drink and how much of everything else it can carry.',
          '**Sweet** — syrup, liqueur, sugar. Softens acid and alcohol, and adds body: sugar makes a drink feel thicker as well as taste sweeter.',
          '**Sour** — citrus, almost always lemon or lime. Cuts sweetness, and is the single largest reason a drink tastes fresh.',
          '**Bitter** — bitters, amari, or the botanical edge in gin. Stops sweet and sour resolving into something flat and gives the drink a spine.',
        ],
      },
      { kind: 'h', text: 'The ratio worth memorising' },
      {
        kind: 'p',
        text: 'The sour template is **2 : 1 : 1** — two parts spirit, one part citrus, one part sweetener. In millilitres that is 60 : 30 : 30, or the 45 : 22.5 : 22.5 that a smaller drink uses.',
      },
      {
        kind: 'p',
        text: 'Go back through the workbook specs with that in your head and it is everywhere. The Daiquiri is 60 rum, 20 lime, 20 sugar — near enough. The Margarita is 60 : 25 : 30. The Whiskey Sour is 45 : 25 : 20. The White Lady is 40 gin, 30 Cointreau, 20 lemon, where the Cointreau is doing the sweetening. Same drink, four bottles.',
      },
      {
        kind: 'note',
        title: 'The drier version',
        text: 'Plenty of modern bars run 2 : 1 : 0.75 instead — the same spirit and citrus with a quarter less sugar. It makes a sharper, more spirit-forward drink. If a sour tastes flabby to you, that is the first thing to try, before touching anything else.',
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
          ['Flabby, dull', 'Not enough acid', 'Add 5 ml citrus before touching anything else'],
          ['Cloying', 'Too much sweet, or not enough bitter', 'Add citrus, or 2 dashes of bitters'],
          ['Thin, watery', 'Over-diluted, or under-built', 'Less shaking, colder ice, or more of everything but water'],
          ['Sharp but hollow', 'Acid without body', 'Add syrup — sugar carries weight, not just sweetness'],
        ],
      },
      {
        kind: 'note',
        title: 'Taste it before it goes out',
        text: 'A straw into the shaker before straining, or the back of a bar spoon. Every professional does it and no recipe tells you to. The recipe cannot know how ripe your limes are.',
      },
      {
        kind: 'unsure',
        title: 'Not from the course',
        text: 'None of this chapter was taught. It comes from the ratios sitting inside the workbook specs once you line them up, and from how balance is normally explained in bar training. It has held up every time I have used it, but it is a framework I went and found rather than one I was given.',
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
      'Almost every drink in this book is one of six structures wearing different bottles. Learn the six and the list stops needing memorising.',
    body: [
      {
        kind: 'p',
        text: 'The classics chapter at the end of this book holds about twenty-five recipes. Presented as a list, that is twenty-five things to remember. Presented as structures, it is six — and the six generate far more than twenty-five.',
      },
      {
        kind: 'p',
        text: 'The families are sorted by what holds the drink together, not by which spirit is in it. That is the move that makes them useful: a Negroni and a Boulevardier are the same drink, and no ingredient-based sorting will ever tell you that.',
      },
      { kind: 'tool', tool: 'families' },
      { kind: 'h', text: 'Reading the table' },
      {
        kind: 'p',
        text: 'Take the **Old Fashioned**: spirit, a little sugar, bitters, ice, a twist. Swap bourbon for aged rum and it is still an Old Fashioned. Swap the sugar for maple and you have made a variation people put on menus. The structure absorbs the change.',
      },
      {
        kind: 'p',
        text: 'Take the **Martini**: spirit and aromatised wine, nothing else. Swap gin for whiskey and dry vermouth for sweet, and you have a Manhattan. Add Campari in equal parts and you have a Negroni. Those are three separate entries in the workbook and one idea.',
      },
      {
        kind: 'p',
        text: 'The **Sidecar** is the family people miss: spirit, liqueur, citrus. It looks like a sour, but the sweetening is coming from a liqueur, which brings flavour as well as sugar. A Margarita is a Sidecar. So is a Cosmopolitan, and so is a White Lady.',
      },
      {
        kind: 'note',
        title: 'Where the six come from',
        text: 'This is the framework set out in *Cocktail Codex* by the Death & Co team, and it has become the standard way of teaching drink structure. I did not invent it and the course did not teach it. It is here because it is the most useful single idea I have found on the subject.',
      },
      { kind: 'h', text: 'Building something new' },
      {
        kind: 'steps',
        items: [
          'Pick a family — decide what shape of drink you want before you decide what goes in it.',
          'Choose the base spirit.',
          'Fill the other roles with things that belong beside it. The family says what the roles are.',
          'Build it at the family\'s standard ratio.',
          'Taste, and move one thing at a time.',
        ],
      },
      {
        kind: 'p',
        text: 'That is how most of what is on the Backbar shelf got made. The Black Magic Margarita is a Sidecar with cassis standing in for part of the orange liqueur; the Ginger Collins is a highball with a sour underneath it.',
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
      'Every recipe in the workbook calls for sugar syrup. None of them says what it is or how to make it.',
    body: [
      {
        kind: 'p',
        text: 'Sugar does not dissolve in a cold drink. That is the entire reason syrup exists — dissolve it in advance, in hot water, and it mixes in a shaker instead of sitting on the bottom of the glass.',
      },
      { kind: 'h', text: 'Simple syrup' },
      {
        kind: 'p',
        text: 'Sugar and water, warmed until clear. The ratio is a decision, not a given:',
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
        text: 'Rich syrup keeps longer, because the sugar concentration itself is what stops things growing in it, and it takes up half the fridge space. If a spec was written for 1 : 1 and you have rich, halve the quantity and add a splash of water back.',
      },
      {
        kind: 'note',
        title: 'It does not need boiling',
        text: 'Warm water and stirring is enough. Boiling drives off water, so the syrup ends up stronger than intended and the ratio you carefully measured is no longer the ratio you have.',
      },
      { kind: 'h', text: 'The others worth having' },
      {
        kind: 'list',
        items: [
          '**Rich demerara** — 2 : 1 with demerara sugar. Molasses character. Goes into anything aged: Old Fashioned, tiki, rum drinks.',
          '**Honey syrup** — 3 : 1 honey to warm water, because neat honey seizes in a cold shaker.',
          '**Agave syrup** — thin it the same way. The default sweetener for tequila and mezcal drinks.',
          '**Grenadine** — pomegranate, not the red chemical sweetener sold under the name. Equal parts pomegranate juice and sugar. Genuinely worth making.',
          '**Orgeat** — almond and orange flower. Fiddly, and the thing that makes a Mai Tai taste like a Mai Tai.',
          '**Oleo saccharum** — citrus peels buried in sugar for a few hours. The sugar draws the oil out of the peel and you get an intensely citrus syrup from fruit you were going to throw away.',
        ],
      },
      { kind: 'h', text: 'Keeping them' },
      {
        kind: 'p',
        text: 'Fridge, labelled, dated. A 1 : 1 syrup lasts about a month; a 2 : 1 keeps for several. A splash of high-proof vodka extends both. Anything with fresh fruit or dairy in it is a few days at most.',
      },
      {
        kind: 'note',
        title: 'Citrus is a house ingredient too',
        text: 'Juice oxidises fast. Lime is noticeably worse within four hours, lemon holds a little longer, and neither is any good the next day. Squeeze what a shift needs and no more — this is one of the few places where doing it properly costs real time and there is no way around it.',
      },
      {
        kind: 'unsure',
        title: 'Not from the course',
        text: 'The workbook calls for sugar syrup in most of its specs and never defines it, so this is written from outside. TODO: my note on clear ice — hot water, chilly bin, freeze 24 hours, carve — belongs in the ice chapter, but the same directional-freezing trick works for anything you want clear and I have not tested that.',
      },
    ],
  },
];

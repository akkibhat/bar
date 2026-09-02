import type { Chapter } from '../../schema';

/**
 * Part I - Foundations.
 *
 * Four chapters that install the vocabulary everything later depends on:
 * what the word cocktail covers, where the drink came from, how
 * every bottle on the back bar is made, and how to taste one so the rest
 * of the book has something to attach to.
 *
 * The tasting chapter is the odd one out - it was not on the course. It
 * sits here anyway, because the whole of Part II is descriptions of
 * flavour and there is no point reading those without a method for
 * checking them against a glass.
 */
export const FOUNDATIONS: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'what-a-cocktail-is',
    part: 'foundations',
    n: 1,
    title: 'What a cocktail is',
    minutes: 4,
    standfirst:
      'The definition, and the four parts a drink is built from.',
    body: [
      {
        kind: 'p',
        text: 'A cocktail is a mixed drink of two or more ingredients, served at any time, long or short. That is the definition I was given, and it is so wide it takes in a gin and tonic, a Negroni and a glass of orange juice with a dash of something in it. The word has been stretched for two hundred years and is not going to snap back now.',
      },
      {
        kind: 'p',
        text: 'The useful version is narrower. Almost every drink you would want to make is a **spirit base**, something to **sweeten**, something to **sharpen**, and something to **season**. Once you can see those four jobs in a recipe you can guess what an unfamiliar spec will taste like, and fix one that has come out wrong, because you know which of the four to move.',
      },
      {
        kind: 'note',
        title: 'The shape, in the order it gets built',
        text: 'Base spirit, then liqueur or syrup, then mixer or juice, then citrus and bitters. That is the running order I wrote in the margin during the first session and it has held up. It is roughly the order of expense and of volume, and it lets you taste as you go.',
      },
      { kind: 'h', text: 'Long, short, and the words in between' },
      {
        kind: 'p',
        text: 'A **short** drink is spirit-forward and served in a small glass - a Negroni, an Old Fashioned, a Martini. It is mostly alcohol and it is meant to be sipped. A **long** drink is the same idea diluted with a mixer and served over ice in a tall glass - a Collins, a mule, a highball.',
      },
      {
        kind: 'p',
        text: 'A **mocktail** is the same construction with the alcohol left out. The course treated it as an afterthought. That is no longer true, and it gets its own chapter later.',
      },
      { kind: 'h', text: 'What the definition leaves out' },
      {
        kind: 'p',
        text: 'Nothing in the definition mentions balance, and balance decides whether a drink is any good. Two bartenders can follow the same four-part shape and produce a drink you want another of and a drink you do not finish. That gap is what Part IV is about. It is the biggest thing missing from the course I took.',
      },
      {
        kind: 'quote',
        text: 'A stimulating liquor, composed of spirits of any kind, sugar, water, and bitters.',
        cite: 'The Balance and Columbian Repository, 13 May 1806',
      },
      {
        kind: 'p',
        text: 'That 1806 definition is the first in print, and it is the better of the two. Spirit, sugar, water, bitters - it names all four jobs, and the water is the part people forget, because it arrives on its own from the ice while you are shaking.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'a-short-history',
    part: 'foundations',
    n: 2,
    title: 'A short history',
    minutes: 4,
    standfirst:
      '1806 to now: the first definition, Prohibition, the lean years, the revival.',
    body: [
      {
        kind: 'p',
        text: 'The word turns up in print in 1806, in a New York paper called *The Balance and Columbian Repository*, answering a reader who had asked what a cock-tail was. The answer - spirits, sugar, water and bitters - describes an Old Fashioned. That drink is the original. Everything else is a variation on it.',
      },
      { kind: 'h', text: 'Prohibition, and what it did to the drinks' },
      {
        kind: 'p',
        text: 'American Prohibition ran from 1920 to 1933, and the usual story is that it killed the cocktail. It is closer to say it made cocktails worse and more popular at once. Drinking did not stop; it moved into speakeasies, where the spirit on hand was whatever could be produced quickly and quietly.',
      },
      {
        kind: 'p',
        text: 'That pushed the whole trade from whiskey towards gin, because gin needs no ageing - you can make something gin-shaped in days, where a bourbon needs years in wood. And it pushed recipes towards heavy juice and sugar, whose job was to bury the taste of what was underneath. A lot of drinks we now think of as classics were designed as camouflage.',
      },
      {
        kind: 'p',
        text: 'The other consequence was geographic. Bartenders who could not work in America went to Havana, London and Paris and kept working, which is why several drinks with American names were perfected somewhere else.',
      },
      { kind: 'h', text: 'The long bad patch' },
      {
        kind: 'p',
        text: 'Cocktails fell away through the late sixties and seventies, as other things competed for the same evening. The eighties brought them back, but with sour mix out of a gun and a lot of vodka standing in for gin, because vodka tastes of nothing, which is easy to sell.',
      },
      {
        kind: 'p',
        text: 'What turned it round was a return to fresh citrus, real ice and pre-Prohibition recipe books. That is roughly where it has stayed. A modern craft bar is, in method, a reconstruction of the 1890s with better refrigeration.',
      },
      {
        kind: 'unsure',
        title: 'Mine to write',
        text: 'TODO: the course notes stop at the 1980s and say nothing about New Zealand. Needs a paragraph on how drinking here went: the licensing changes, when cocktail bars turned up in Auckland and Wellington, and what a bar list looked like before that. I do not know this well enough to write it yet.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'ferment-to-still',
    part: 'foundations',
    n: 3,
    title: 'From ferment to still',
    minutes: 6,
    standfirst:
      'Sugar, ferment, distil, finish. Pot and column stills, and what happens after.',
    body: [
      {
        kind: 'p',
        text: 'Every spirit starts as something sugary and wet. Yeast eats the sugar and gives off alcohol and carbon dioxide, which gets you to roughly 8% - beer or wine, depending on what you started with. Distillation then concentrates that. It does not create alcohol; it separates what is already there.',
      },
      {
        kind: 'steps',
        items: [
          '**Raw material.** Grain, grape, cane, agave, potato, apple. If it has sugar in it, or starch that can be turned into sugar, it can be fermented.',
          '**Convert, if you have to.** Grain and agave hold their sugar as starch or inulin, which yeast cannot eat. Malting a barley, or roasting an agave, breaks that down into something it can.',
          '**Ferment.** Add yeast, wait. You land near 8% alcohol, because the yeast is eventually poisoned by what it has made.',
          '**Distil.** Heat the wash. Ethanol boils at 78.3°C and water at 100°C, so the vapour coming off is richer in alcohol than the liquid it left.',
        ],
      },
      {
        kind: 'p',
        text: 'One thing to hold on to: **every spirit leaves the still clear and dry.** Colour is wood, or caramel added afterwards. Sweetness is sugar added afterwards. A dark rum and a white rum can be the same distillate with different post-processing, and knowing that stops you paying for colour.',
      },
      { kind: 'h', text: 'Two kinds of still' },
      {
        kind: 'p',
        text: 'A **pot still** is a batch process: fill it, run it, empty it, start again. It is inefficient on purpose. A single pass gets you to around 25–30%, so most pot-distilled spirits go through twice, landing near 75% before dilution. Because the separation is imperfect, plenty of heavier compounds come across with the alcohol, and those are flavour. Pot stills make characterful spirits: single malt, cognac, aged rum.',
      },
      {
        kind: 'p',
        text: 'A **column still** runs continuously, with the wash fed in at the top and vapour rising through a stack of plates. Each plate is effectively another distillation, so one pass can reach 95%+. That is pure and correspondingly neutral. Column stills make vodka, most gin bases, and grain whisky.',
      },
      {
        kind: 'table',
        head: ['', 'Pot still', 'Column still'],
        rows: [
          ['Runs', 'One batch at a time', 'Continuously'],
          ['One pass gets to', '25–30%', 'Up to 96%'],
          ['Usual practice', 'Distil twice, to ~75%', 'One pass is enough'],
          ['Character', 'Carries flavour through', 'Strips flavour out'],
          ['Typically makes', 'Malt whisky, cognac, aged rum', 'Vodka, gin base, grain whisky'],
        ],
      },
      {
        kind: 'p',
        text: 'Most spirits are bottled somewhere between 37.5% and 40%, which means the distiller has added water - a lot of it. What you buy is a deliberate dilution of something much stronger.',
      },
      { kind: 'h', text: 'After the still' },
      {
        kind: 'list',
        items: [
          '**Maturation.** Time in wood. Takes colour, tannin, vanilla and spice out of the barrel and rounds off the harsh edges. Legally required for some categories, forbidden for others.',
          '**Colouring.** Caramel, usually E150a. Legal nearly everywhere and used more than labels admit - it makes batches match.',
          '**Sweetening.** Sugar or syrup. Common in rum and in anything calling itself a liqueur.',
          '**Dilution.** Pure water down to bottling strength.',
        ],
      },
      {
        kind: 'note',
        title: 'Who owns the shelf',
        text: 'Most of the back bar belongs to a handful of companies - Diageo, Pernod Ricard and LVMH between them own an enormous share of the brands you can name. Useful when a rep tells you a category is having a moment.',
      },
      { kind: 'tool', tool: 'abv' },
      {
        kind: 'unsure',
        title: 'Check against my notes',
        text: 'TODO: my margin note says bourbon is "distilled at 160 proof, barrelled at 125, no colouring added, new charred oak". Those are the US legal maxima rather than what any given distiller does. Confirm both before I state them as fact. The 57% corn figure I wrote down should probably be 51%, which is the number the standard uses.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'tasting-spirits',
    part: 'foundations',
    n: 4,
    title: 'Tasting spirits',
    minutes: 5,
    standfirst:
      'Not on the course. A method for tasting at 40%, and what to ask.',
    body: [
      {
        kind: 'p',
        text: 'Everything in Part II is a claim about how something tastes. You cannot check any of it without a way of tasting that gives the same answer twice, and at 40% alcohol that is harder than with wine, because the ethanol arrives first and burns the rest of the information off.',
      },
      { kind: 'h', text: 'The method' },
      {
        kind: 'steps',
        items: [
          'Use a glass that narrows at the top - a copita, a small wine glass, a snifter at a push. A tumbler throws everything straight up your nose at full strength.',
          'Pour a small measure and leave it a minute. Room temperature, not chilled: cold shuts down aroma, which is why vodka out of the freezer tastes of nothing.',
          'Look. Colour tells you about wood, and only about wood - and it can have come out of a caramel bottle, so it is the weakest signal on the page.',
          'Nose it with your mouth slightly open, holding the glass below your chin and bringing it up gently. Do not stick your nose in the glass. Short sniffs, then rest - the nose fatigues within seconds at this strength.',
          'Take a small sip and let it coat everything before you swallow. The first sip mostly registers as heat; that is normal, and the second and third sips are where the flavour is.',
          'Then add a few drops of water and go again. This is the step people skip. Water drops the strength, breaks the surface tension and releases aromatics the alcohol was holding down. A cask-strength whisky can change completely.',
        ],
      },
      { kind: 'tool', tool: 'flavourWheel' },
      { kind: 'h', text: 'What to ask' },
      {
        kind: 'p',
        text: 'Naming fruits is what everyone reaches for first, and it is the least useful. Better questions, in order:',
      },
      {
        kind: 'list',
        items: [
          '**How sweet is it?** Most spirits are technically dry. If it reads sweet, either sugar was added or wood is faking it with vanilla.',
          '**Where does the heat sit?** Front of the tongue, back of the throat, or all the way down. Rough heat usually means young.',
          '**Is there wood?** Vanilla, coconut, toffee, spice, smoke. All of it came out of a barrel, none of it out of the raw material.',
          '**How long does it last?** Count after swallowing. A spirit that vanishes at three seconds and one that is still going at twenty are different products.',
          '**Would it survive a mixer?** The practical question. Some bottles are for sipping and disappear in a highball; others only make sense mixed.',
        ],
      },
      {
        kind: 'note',
        title: 'Water and a reset',
        text: 'Still water at room temperature between pours, and stop at four or five spirits. Palate fatigue at this strength is fast and complete, and after the fifth you are recording your notes from memory rather than from the glass.',
      },
      {
        kind: 'unsure',
        title: 'Written from outside the course',
        text: 'This chapter is not from the workbook - the qualification never covered tasting method, only product facts. It is assembled from how spirits judging is normally run and from what carries over from wine tasting. Treat it as a working method rather than as something I was taught and examined on.',
      },
    ],
  },
];

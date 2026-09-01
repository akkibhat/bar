import type { Chapter } from '../../schema';

/**
 * Part VI - The kit.
 *
 * Three reference chapters, and the most directly transcribed part of the
 * book: the glassware and equipment worksheets were fill-in tables and I
 * filled them in during the course, so what is here is mostly my own
 * answers set as tables rather than as prose.
 *
 * Reference material wants to be scannable, so these chapters lean on
 * tables far more than the rest of the book does. Nobody reads a
 * glassware chapter start to finish; they look up one glass.
 */
export const KIT: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'glassware',
    part: 'kit',
    n: 23,
    title: 'Glassware',
    minutes: 5,
    standfirst:
      'Seventeen glasses and what goes in them. The shape is doing a job, not decorating one.',
    body: [
      {
        kind: 'p',
        text: 'A glass is chosen for three reasons: how much it holds, how much surface it exposes to the air, and whether your hand touches the drink. Everything below follows from those.',
      },
      {
        kind: 'note',
        title: 'Hold it by the stem',
        text: 'If it has a stem, hold the stem. If it does not, hold the bottom third. A hand wrapped round the bowl warms a drink that was chilled to almost freezing, and leaves prints on the one part of the service the guest looks at.',
      },
      { kind: 'h', text: 'Short and stemmed' },
      {
        kind: 'table',
        head: ['Glass', 'Holds', 'What goes in it'],
        rows: [
          ['**Martini** (cocktail)', '90–300 ml', 'Anything served up: Martini, Cosmopolitan, Espresso Martini'],
          ['**Coupe**', '150–200 ml', 'Anything served up. Shallower than a Martini and far less likely to spill'],
          ['**Margarita**', '250 ml', 'Margarita, and frozen drinks'],
          ['**Snifter / balloon**', '250–500 ml', 'Cognac, aged spirits neat. The bowl traps aroma; the stem keeps your hand off it'],
        ],
      },
      { kind: 'h', text: 'Short and heavy' },
      {
        kind: 'table',
        head: ['Glass', 'Holds', 'What goes in it'],
        rows: [
          ['**Old Fashioned** (rocks)', '200–300 ml', 'Old Fashioned, Negroni, spirits on the rocks. Heavy base, wide mouth'],
          ['**Shot**', '30–60 ml', 'Shots, and layered drinks like a B52'],
        ],
      },
      { kind: 'h', text: 'Long' },
      {
        kind: 'table',
        head: ['Glass', 'Holds', 'What goes in it'],
        rows: [
          ['**Highball**', '240–350 ml', 'Any long drink: G&T, Mojito, Tequila Sunrise, Cuba Libre'],
          ['**Collins**', '300–410 ml', 'The same, taller and narrower. Tom Collins, and anything you want to stay fizzy'],
          ['**Sling**', '350–400 ml', 'Singapore Sling, from Raffles in Singapore'],
          ['**Hurricane**', '440 ml', 'Piña Colada, and tall tropical drinks'],
          ['**Julep tin**', '350 ml', 'Mint Julep. Metal, so it frosts on the outside when packed with crushed ice'],
          ['**Mule mug**', '350–500 ml', 'Moscow Mule. Copper, and frosts the same way'],
          ['**Tiki mug**', 'Varies', 'Rum drinks, mostly Pacific in style'],
          ['**Mason jar**', 'Varies', 'Smoothies and mocktails. Not used much, and not by me'],
        ],
      },
      { kind: 'h', text: 'Wine, fizz and hot' },
      {
        kind: 'table',
        head: ['Glass', 'Holds', 'What goes in it'],
        rows: [
          ['**Flute**', '180–300 ml', 'Champagne, Mimosa, Bellini, French 75. Narrow, so the bubbles last'],
          ['**Wine glass**', '300–450 ml', 'Wine, spritzes, aged spirits'],
          ['**Toddy** (handled)', '200–300 ml', 'Hot cocktails: Irish Coffee, mulled wine, hot toddy. The handle is the point'],
        ],
      },
      {
        kind: 'note',
        title: 'Chilling a glass',
        text: 'Fill it with ice and water while you build the drink, then tip it out just before straining. Thirty seconds, and it keeps a drink served up cold for the length of time it takes to drink it. The freezer works too if you have the room.',
      },
      { kind: 'tool', tool: 'glassware' },
    ],
  },

  /* ================================================================== */
  {
    slug: 'tools',
    part: 'kit',
    n: 24,
    title: 'Tools',
    minutes: 5,
    standfirst:
      'What is on the mat, what each thing is for, and the short list worth owning first.',
    body: [
      {
        kind: 'p',
        text: 'A working station is small. Almost everything below fits within one arm\'s reach of where you stand, because every step you take during service is a step you take a few hundred times a night.',
      },
      { kind: 'h', text: 'Mixing' },
      {
        kind: 'table',
        head: ['Tool', 'For'],
        rows: [
          ['**Boston shaker**', 'Two tins, or a tin and a glass, that seal together. Shaking. More capacity and faster than a three-piece cobbler, and it will not freeze shut'],
          ['**Mixing glass**', 'Stirring. Heavy-based, wide enough for a bar spoon to travel round the inside'],
          ['**Bar spoon**', 'Stirring, layering, and measuring - the bowl is about 5 ml. The twisted shaft lets it turn in your fingers without moving your wrist'],
          ['**Muddler**', 'Pressing fruit and herbs. Flat-headed, not toothed - teeth shred mint'],
          ['**Blender**', 'Frozen drinks and whole fruit'],
        ],
      },
      { kind: 'h', text: 'Measuring and straining' },
      {
        kind: 'table',
        head: ['Tool', 'For'],
        rows: [
          ['**Jigger**', 'Measuring. 30/15 and 45/22.5 cover nearly everything in this book'],
          ['**Hawthorne strainer**', 'The one with the spring. Sits on a shaker tin and holds back ice and fruit'],
          ['**Julep strainer**', 'The perforated spoon. Sits inside a mixing glass, for stirred drinks'],
          ['**Fine sieve**', 'Double straining - held under the hawthorne to catch ice chips, pulp and citrus seeds'],
          ['**Pour spout**', 'Controls the flow off a bottle and keeps it consistent'],
        ],
      },
      { kind: 'h', text: 'Prep and the rest' },
      {
        kind: 'table',
        head: ['Tool', 'For'],
        rows: [
          ['**Citrus press**', 'Juicing to order. A hand press gets more out of a lime than a reamer and takes less time'],
          ['**Ice scoop**', 'Moving ice. Never scoop with the glass - a chipped glass in the ice well empties the whole well'],
          ['**Chopping board, knife, peeler**', 'Garnish. A Y-peeler takes a clean wide twist with almost no pith'],
          ['**Bar mat**', 'Catches spills and gives the tins somewhere to sit. Lift and rinse it during service, not after'],
        ],
      },
      {
        kind: 'note',
        title: 'If you are buying, buy these five first',
        text: 'Boston shaker, jigger, hawthorne strainer, bar spoon, citrus press. That is under a hundred dollars and it makes every drink in Part VIII. The mixing glass can be the empty half of the shaker until it annoys you.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'the-bar-itself',
    part: 'kit',
    n: 25,
    title: 'The bar itself',
    minutes: 4,
    standfirst:
      'Every bar is laid out slightly differently and they are all laid out on the same principle.',
    body: [
      {
        kind: 'p',
        text: 'A bar is a workstation designed around not moving. Anything used constantly is within reach without stepping; anything used occasionally is behind you. The layout differs between venues because the building does, but the rules underneath do not.',
      },
      {
        kind: 'list',
        items: [
          '**Glassware within reach of the station**, so making a drink never means walking.',
          '**Spirits on the back bar**, facing out. They are the display as well as the stock, and the ones you pour most sit in the speed rail in front of you instead.',
          '**Juices and perishables chilled and close.** Anything that goes in a drink cold has to be cold before it goes in.',
          '**Garnishes at hand and covered**, prepped for the shift.',
          '**Ice wells within reach of both hands.**',
          '**Everything tidy, constantly.** Not a virtue - a speed requirement. You cannot find things in a mess at eleven on a Friday.',
        ],
      },
      { kind: 'h', text: 'The speed rail' },
      {
        kind: 'p',
        text: 'The trough of bottles directly in front of the station holds the pours that make up most of the night: the house gin, vodka, rum, whisky, tequila, triple sec, and the two vermouths. They are arranged in the same order every shift, so your hand learns where they are and you stop looking.',
      },
      { kind: 'h', text: 'The barback' },
      {
        kind: 'p',
        text: 'The barback restocks, cuts garnish, hauls ice, changes kegs and clears glassware. It is the job that decides whether a bar can survive a rush, and on a busy night it is more physically demanding than making the drinks.',
      },
      {
        kind: 'note',
        title: 'Crushed ice needs planning',
        text: 'A Moscow Mule, a Julep, a Caipirinha and anything blended all want crushed ice, and crushing it to order in the middle of service does not work. Crush ahead and keep it in an insulated container.',
      },
      {
        kind: 'unsure',
        title: 'Mine to fill in',
        text: 'TODO: this chapter is the course\'s general principles and my own notes from one photographed station. It has no opening or closing procedure, no par levels, no stocktake, and no wastage sheet - all of which a real bar runs on. Worth writing if this book is ever meant to be useful to someone actually working a shift.',
      },
    ],
  },
];

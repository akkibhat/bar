import type { Chapter } from '../../schema';

/**
 * Part VII - Service.
 *
 * The half of the job that is about people rather than liquid. The
 * workbook was good on the mechanics - how a drink is asked for, how
 * garnish is prepped and stored, what makes a bartender worth employing -
 * and had one large hole in it, which is that it never mentioned the law.
 *
 * A hospitality qualification taught in New Zealand sits underneath the
 * Sale and Supply of Alcohol Act, and refusing service is a legal duty
 * rather than a judgement call. That gets its own chapter at the end.
 */
export const SERVICE: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'taking-the-order',
    part: 'service',
    n: 26,
    title: 'Taking the order',
    minutes: 4,
    standfirst:
      'Neat, up, on the rocks, short, long. What each asks for.',
    body: [
      {
        kind: 'p',
        text: 'Most guests order in a shorthand that\'s standard and almost never explained. Getting it right isn\'t being fussy, because "neat" and "straight up" are different drinks, and serving one for the other is a drink sent back.',
      },
      {
        kind: 'table',
        head: ['They say', 'Glass', 'Ice', 'You pour'],
        rows: [
          ['**Long**', 'Highball', 'Filled', 'Spirit first, then mixer'],
          ['**Short, on the rocks**', 'Rocks', 'Half to two-thirds full', 'Spirit first, splash of mixer'],
          ['**Neat**', 'Rocks', 'None', 'Spirit only, at room temperature'],
          ['**On the rocks**', 'Rocks', 'Glass filled with ice, 30 ml over it', 'Spirit only, poured over'],
          ['**Straight up** / **up**', 'Coupe or Martini', 'None in the glass', 'Chilled first, then strained in'],
          ['**Shot**', 'Shot', 'None', 'Spirit only, to the brim or the line'],
        ],
      },
      {
        kind: 'note',
        title: 'Up and neat aren\'t the same',
        text: '**Neat** is the spirit as it comes, at room temperature, no ice at any point. **Up** has been chilled - shaken or stirred with ice - then strained into a glass with no ice in it. One is warm, one is very cold, and both arrive without ice in the glass, which is why they get confused.',
      },
      { kind: 'h', text: 'Named mixed drinks' },
      {
        kind: 'p',
        text: 'A few spirit-and-mixer combinations have their own names. Most people will just ask for the spirit and the mixer, and that is fine - but the names turn up on menus and in older recipe books, so they are worth recognising. Rum and coke with a lime wedge is a **Cuba Libre**. Vodka and orange is a **Screwdriver**. Whisky and dry ginger is a **Highball**, in the narrow sense of the word.',
      },
      {
        kind: 'p',
        text: 'When the order is ambiguous, ask once and remember the answer. "Gin and tonic" doesn\'t say which gin, and a guest who wanted the good one and got the rail one won\'t order a second. The quickest way to ask is to offer the house pour by name and let them trade up: say which gin you would pour and see whether they want a different one.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'garnish',
    part: 'service',
    n: 27,
    title: 'Garnish',
    minutes: 5,
    standfirst:
      'The standard cuts, how to keep them, and what else works.',
    body: [
      {
        kind: 'p',
        text: 'A garnish is not decoration. A lemon twist is oil sprayed across the surface of the drink, and it changes what the first mouthful smells like, which is most of what it tastes like. Follow the spec: if a recipe says twist, a wedge is a different drink.',
      },
      { kind: 'h', text: 'The standard cuts' },
      {
        kind: 'table',
        head: ['Cut', 'From', 'Keeps'],
        rows: [
          ['**Lime squeeze**', 'One-sixth of a fresh lime', '1 day'],
          ['**Lemon squeeze**', 'One-eighth of a fresh lemon', '1 day'],
          ['**Orange wedge**', 'One-eighth of a fresh orange', '1 day'],
          ['**Flag**', 'Half an orange slice, usually with a cherry', '1 day'],
          ['**Twist**', 'A strip of peel, as little pith as possible', 'Cut to order'],
          ['**Cherry**', 'Maraschino, bright red', 'Kept submerged in its own liquid'],
        ],
      },
      { kind: 'tool', tool: 'cuts' },
      {
        kind: 'note',
        title: 'A twist is squeezed, not dropped',
        text: 'Hold the peel skin-side down over the glass and pinch it, so the oil sprays across the surface. Then wipe it round the rim and drop it in. Dropping it in without squeezing wastes the oil.',
      },
      { kind: 'tool', tool: 'twist' },
      { kind: 'h', text: 'Keeping it' },
      {
        kind: 'list',
        items: [
          'Cut fresh before each shift, and for each drink if there is time, which on a busy night there is not.',
          'Store cut fruit in a sealed container in the fridge.',
          'Store whole fruit cold, dry, dark, and off the floor.',
          'Never leave garnishes sitting submerged in water, because it leaches them and they go limp.',
          'To refresh, cover briefly with soda water and drain immediately.',
          'Refuse poor fruit. A soft or dried-out lime cannot be cut into anything worth putting on a glass.',
        ],
      },
      { kind: 'h', text: 'Beyond fruit' },
      {
        kind: 'p',
        text: 'Salt, pepper, Tabasco, Worcestershire sauce, Angostura, paprika, cinnamon, nutmeg, coffee beans, tea leaves, basil, mint, egg. A Bloody Mary uses half that list on its own.',
      },
      {
        kind: 'note',
        title: 'When a garnish is too much',
        text: 'A garnish that has to be dismantled before the guest can drink has gone wrong. If it doesn\'t add aroma, flavour or a clear signal about what the drink is, it\'s in the way.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'mixers-and-the-soft-side',
    part: 'service',
    n: 28,
    title: 'Mixers and the soft side',
    minutes: 4,
    standfirst:
      'Juice, dairy, soda. The shortest shelf life behind the bar.',
    body: [
      {
        kind: 'p',
        text: 'Everything on this page has a shelf life measured in days. It\'s the most likely part of the bar to spoil an otherwise good drink.',
      },
      { kind: 'h', text: 'Juice' },
      {
        kind: 'list',
        items: [
          '**Carton juice** - once opened, fridge, use within about a week; the printed date applies to the unopened carton. Bubbling or fizzing means it has started fermenting; that\'s the signal to bin it.',
          '**Fresh citrus** - squeeze as needed. Lime turns brown and dull within hours and is noticeably worse the same evening. Pre-squeeze only what a busy shift will use, in a labelled container.',
          '**Never mix old stock into new.** It drags the whole container down to the age of the oldest thing in it.',
        ],
      },
      { kind: 'h', text: 'Dairy' },
      {
        kind: 'p',
        text: 'Half and half - 50/50 milk and single cream - keeps about a week in the fridge once opened. An ice well is not a fridge, so anything sitting in one is good for the shift and no longer. Clotting is the obvious sign it has gone; the smell is the earlier one.',
      },
      { kind: 'h', text: 'Minerals and mixers' },
      {
        kind: 'p',
        text: 'Cola, lemonade, soda water, mineral water, tonic, ginger ale, ginger beer. **Check the fizz before service**, especially from large bottles, because a flat tonic is a wasted gin, and you can\'t tell by looking. Most busy bars run a soda gun instead, which takes the problem away - the gas is live at the nozzle, so there is no bottle sitting open going flat.',
      },
      {
        kind: 'p',
        text: 'Mixers must be cold before they go in. A cold mixer over ice stays fizzy; a room-temperature one foams up, goes flat, and melts the ice while it\'s doing it.',
      },
      { kind: 'h', text: 'Serving the soft drinks properly' },
      {
        kind: 'p',
        text: 'Non-alcoholic drinks are served long, in a tall glass, with ice, and garnished to the same standard as everything else. Even a glass of water should be **dressed**. Someone not drinking should not be able to tell from the glass in their hand, so lime or lemon goes in the soft drinks the same as it would in anything else.',
      },
      {
        kind: 'p',
        text: 'That matters more than it used to, and the zero-proof chapter in Part IX picks it up properly.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'being-the-bartender',
    part: 'service',
    n: 29,
    title: 'Being the bartender',
    minutes: 4,
    standfirst:
      '*Six qualities that make a bartender worth employing, and selling without being a salesman.*',
    body: [
      {
        kind: 'p',
        text: 'Six things make a bartender worth employing. None of them is about making drinks.',
      },
      {
        kind: 'list',
        items: [
          '**Memory.** Every drink on the list, plus who ordered what, plus which tab it goes on, plus the regulars\' names. You hold all of it for the length of a shift.',
          '**Calm under pressure.** Things go wrong at the busiest moment. Being visibly rattled spreads down the queue.',
          '**Friendly and outgoing.** A large part of the job is talking to people. It\'s also the selling half - nobody buys a second round from someone who seems to want them to leave.',
          '**Consistency.** Same drink, same way, every time, whether it\'s the first of the night or the last. This is the one that separates people.',
          '**Cleanliness.** The bar, the tools, the glassware, before, during and after. A health requirement, and the first thing a guest notices.',
          '**Trustworthiness.** You handle the till, the stock and the free pours. A bar has to be able to leave someone alone with all three.',
        ],
      },
      { kind: 'h', text: 'Selling without being a salesman' },
      {
        kind: 'p',
        text: 'About a third of people walking into a bar haven\'t decided what they want. That\'s not an opportunity to push the expensive bottle. Ask two questions and put the right drink in front of them, and they come back.',
      },
      {
        kind: 'list',
        items: [
          '**Upsell within the brand they already chose.** If someone asks for a gin and tonic, offering a gin they might like better is a service. Steering them to whatever carries the best margin isn\'t, and people can tell. How far you take it depends on the room: a local with regulars will take a better gin once you have told them why, once, and an upscale hotel bar or a cocktail bar can build a serve around it and charge for the story. The mistake is running one bar\'s approach in the other\'s room.',
          '**Stock local, and be able to say why.** Offering a New Zealand gin over an imported one is the one upsell nobody resents, because the reason is not the margin. Sea Lovers is the example: a marine gin - North Island kelp and Waiheke oyster shells over rosemary, lime and the usual juniper and spice - and it tastes like it, lime and rosemary first, then a savoury, faintly salty depth that most gins do not have. Made on Auckland\'s North Shore with the shells brought over from the island. That is a story the guest can repeat, which is what a good upsell is: not a more expensive drink, a more interesting one.',
          '**Signature serves.** One or two drinks that only this bar makes. They\'re what people describe to someone else later.',
          '**Seasonal serves.** Hot drinks in winter, long ones with crushed ice in summer. Often the same base spirit dressed differently, which costs nothing and reads as effort.',
        ],
      },
],
  },

  /* ================================================================== */
  {
    slug: 'serving-responsibly',
    part: 'service',
    n: 30,
    title: 'Serving responsibly',
    minutes: 5,
    standfirst:
      'Host responsibility in New Zealand, and what the law asks of you.',
    body: [
      {
        kind: 'p',
        text: 'Most of learning to tend a bar is about pouring drinks. The part that carries legal weight is about refusing them. In New Zealand that is not house policy or judgement - it is written into law, and it applies to the person holding the bottle as much as to the person holding the licence.',
      },
      {
        kind: 'p',
        text: 'In New Zealand the governing legislation is the **Sale and Supply of Alcohol Act 2012**. Anyone managing the sale or supply of alcohol on a licensed premises needs a **Licence Controller Qualification**, which covers the Act itself and host responsibility, and a Manager\'s Certificate issued by the local council on the strength of it.',
      },
      {
        kind: 'note',
        title: 'Auckland asks for more than the Act does',
        text: 'The Act sets a floor, and a council can ask for more on top of it. Auckland Council has started requiring bar and front-of-house staff to hold **ServeWise** certification - not only the duty manager. The Act only asks a qualification of whoever is managing the premises; this asks one of everybody pouring. Check what your own council asks for: it is not the same everywhere.',
      },
      { kind: 'h', text: 'What host responsibility asks' },
      {
        kind: 'list',
        items: [
          '**Do not serve anyone already intoxicated.** This is an offence, and it\'s the server\'s as well as the licensee\'s.',
          '**Do not serve minors.** The purchase age is 18, and acceptable identification is limited to a passport, a NZ driver licence, a Kiwi Access card, or a HANZ 18+ card.',
          '**Provide free drinking water**, low- and non-alcoholic options, and substantial food.',
          '**Help people get home.** Numbers for taxis, and not turning someone out of the door who plainly should not be driving.',
          '**Watch for the signs** - slurred speech, unsteadiness, repetition, becoming loud or argumentative, ordering rounds faster than the last ones are finished.',
        ],
      },
      {
        kind: 'note',
        title: 'Refusing early is easier than refusing late',
        text: 'Cutting someone off at the point they\'re visibly drunk is a confrontation. Slowing the pace two rounds earlier - water alongside, a longer drink, food offered - usually means the confrontation never happens. Everyone who has worked a bar knows it, and it almost never gets written down.',
      },
      {
        kind: 'note',
        title: 'Where this one comes from',
        text: 'This is the one chapter here not written up from a short course. I hold the Licence Controller Qualification and a Duty Manager\'s Certificate, so it comes from a qualification rather than from notes taken and checked afterwards. It is still not legal advice - the Act is the authority, and it changes.',
      },
    ],
  },
];

import type { Chapter } from '../../types';

/**
 * Part V - Technique.
 *
 * The workbook was strong here: seven methods, each with a clear purpose,
 * and a good page on what the perfect serve needs. What it did not have
 * was the reason underneath - it says shake when a drink has citrus and
 * stir when it does not, without saying why, which leaves you following a
 * rule rather than making a decision.
 *
 * So the methods chapter keeps the workbook's seven and the ice chapter
 * supplies the missing mechanism: chilling and dilution are the same
 * event, and every method is a different way of trading between them.
 */
export const TECHNIQUE: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'the-seven-methods',
    part: 'technique',
    n: 19,
    title: 'The seven methods',
    minutes: 6,
    standfirst:
      'Shake, stir, muddle, blend, build, layer, flame. What each is for, and the one rule that decides between the first two.',
    body: [
      {
        kind: 'p',
        text: 'Seven ways to combine a drink. Most recipes use one; a few use two. The choice is not stylistic — each method chills, dilutes and aerates by a different amount, and those are the three things that decide what lands in the glass.',
      },
      { kind: 'h', text: 'Shaking' },
      {
        kind: 'p',
        text: 'Hard, fast, and about 8–12 seconds. Shaking does four things at once: mixes ingredients of different densities, chills the drink almost to freezing, dilutes it, and beats air into it. That last one is why a shaken sour is cloudy and has a soft, slightly foamy texture.',
      },
      {
        kind: 'p',
        text: 'The rule: **shake anything that will not go clear.** Citrus, juice, cream, egg, syrup. Those need the aeration and the emulsification, and they are already opaque, so nothing is lost.',
      },
      { kind: 'h', text: 'Stirring' },
      {
        kind: 'p',
        text: 'Slow, smooth, in a mixing glass with cubed ice, using the back of a bar spoon. It chills and dilutes with almost no aeration and no clouding.',
      },
      {
        kind: 'p',
        text: 'The rule: **stir anything made only of spirits.** A Martini, a Manhattan, a Negroni. Clarity is part of what those drinks are, and shaking them puts air in and chips ice off, which makes them cloudy and watery at once.',
      },
      {
        kind: 'note',
        title: 'The whole decision, in one line',
        text: 'If everything in the glass is clear and alcoholic, stir it. If anything in it is cloudy — juice, cream, egg, syrup — shake it. There is no third case worth worrying about.',
      },
      { kind: 'tool', tool: 'method' },
      { kind: 'h', text: 'Muddling' },
      {
        kind: 'p',
        text: 'Pressing fruit or herbs to release what is in them, with a muddler, in the bottom of the glass or the shaker. Fruit takes real pressure. **Herbs do not** — mint should be pressed just enough to release its oil, and grinding it releases chlorophyll instead, which is bitter and tastes of lawn. A firm press and a twist is enough.',
      },
      { kind: 'h', text: 'Building' },
      {
        kind: 'p',
        text: 'Assembling in the glass it is served in, in order, usually over ice. Highballs and anything long. Spirit first, then mixer, so the pour of the mixer does the mixing.',
      },
      { kind: 'h', text: 'Layering' },
      {
        kind: 'p',
        text: 'Floating ingredients on each other so they stay in visible bands. It works on density, and density mostly tracks sugar: the sweetest goes in first, and each lighter layer is poured slowly over the back of a bar spoon held against the inside of the glass so it lands without breaking through.',
      },
      { kind: 'h', text: 'Blending' },
      {
        kind: 'p',
        text: 'For frozen drinks and for anything with whole fresh fruit in it. Use a measured amount of crushed ice rather than filling the jug, or the drink comes out as flavoured snow.',
      },
      { kind: 'h', text: 'Flaming' },
      {
        kind: 'p',
        text: 'Setting a high-proof spirit alight, which caramelises sugar and changes the aroma. It has one real use: flaming an orange twist over a drink changes what it smells like. The rest is theatre.',
      },
      {
        kind: 'note',
        title: 'If you are going to do it',
        text: 'Small quantity, warmed slightly so it lights, never poured from the bottle over an open flame, never handed to anyone while lit, and always put out before it reaches the guest. Nothing flammable above or beside it.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'ice',
    part: 'technique',
    n: 20,
    title: 'Ice',
    minutes: 5,
    standfirst:
      'The ingredient in most of the glass and the one nobody costs. Chilling and dilution are the same event.',
    body: [
      {
        kind: 'p',
        text: 'Ice is an ingredient, and by volume it is usually the largest one. It does two things at once, and they cannot be separated: **there is no chilling without dilution, and no dilution without chilling.**',
      },
      {
        kind: 'p',
        text: 'That is worth sitting with, because it kills a common instinct. You cannot shake a drink "just to chill it" and avoid watering it down. The cold *comes from* the ice melting — melting is what absorbs the heat. A shaken drink finishes around 20–25% water by volume, and that water is part of the recipe whether or not the recipe mentions it.',
      },
      { kind: 'tool', tool: 'dilution' },
      { kind: 'h', text: 'Size, and why it matters' },
      {
        kind: 'p',
        text: 'Surface area sets the rate. Lots of small pieces melt fast: quick chilling, quick dilution. One big piece melts slowly: slower to chill, and it holds a drink together far longer.',
      },
      {
        kind: 'list',
        items: [
          '**Cubes** — the default. Shaking, stirring, and filling a highball.',
          '**One large cube or sphere** — for a short drink you will hold for twenty minutes. Less surface area for the same cooling, so an Old Fashioned does not turn to water halfway down.',
          '**Crushed** — fast chilling and heavy dilution, wanted in a Julep, a Mojito, a Caipirinha and most tiki. Never in a shaker.',
        ],
      },
      {
        kind: 'note',
        title: 'Fill the glass',
        text: 'A half-filled highball melts faster than a full one, not slower. Less ice means each piece takes more heat, so it melts quicker and the drink is warm and watery inside ten minutes. More ice is less dilution. It is the least intuitive thing behind a bar, and among the most useful.',
      },
      { kind: 'h', text: 'Clear ice' },
      {
        kind: 'p',
        text: 'Cloudy ice is cloudy because of dissolved air and minerals that get trapped as water freezes inwards from every side at once. Clear ice is frozen *directionally* — from one side only — so the trapped air is pushed ahead of the freezing front and ends up in the last part to freeze, which you cut off.',
      },
      {
        kind: 'steps',
        items: [
          'Fill an insulated container — a chilly bin with the lid off works — with hot water. Hot rather than cold, because it holds less dissolved air to begin with.',
          'Put it in the freezer uncovered. The insulation on the sides and base forces it to freeze from the top down.',
          'Leave it about 24 hours, until roughly three-quarters frozen.',
          'Tip out the unfrozen water underneath, which is where all the cloudiness has gone, and carve the clear slab into cubes.',
        ],
      },
      {
        kind: 'p',
        text: 'It is entirely cosmetic and it looks very good. Clear ice does not melt meaningfully slower than cloudy ice of the same size, whatever people say — the difference is trapped air, not density.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'the-pour',
    part: 'technique',
    n: 21,
    title: 'The pour',
    minutes: 4,
    standfirst:
      'Measuring, and why the same drink twice is the whole job.',
    body: [
      {
        kind: 'p',
        text: 'Consistency separates a bar from a kitchen where someone is guessing. A guest who liked a drink last week is ordering the same drink, and the only way to give them one is to measure.',
      },
      { kind: 'h', text: 'Jiggers' },
      {
        kind: 'p',
        text: 'A jigger is a two-sided measure. New Zealand pours in millilitres, and the pairs worth owning are 30/15 and 45/22.5 — between them they cover almost every spec in this book, and the halves matter because a lot of recipes call for 22.5.',
      },
      {
        kind: 'p',
        text: 'Fill to the brim, not to somewhere near it. A jigger measured by eye at nine-tenths full is not a measure, and the error compounds across four ingredients.',
      },
      {
        kind: 'note',
        title: 'Free pouring',
        text: 'Counting through a pour spout is a real skill and takes months of practice with a measured bottle to build. It is also the first thing to go when a bar is busy, which is exactly when consistency matters most. Measure.',
      },
      { kind: 'h', text: 'The rest of the perfect serve' },
      {
        kind: 'p',
        text: 'The workbook lists five things and they are all correct:',
      },
      {
        kind: 'list',
        items: [
          '**The right glass**, cool and dry. Fill to the top two-thirds and hand it over by the base or stem.',
          '**Enough good ice.** Fill the glass. See the previous chapter.',
          '**An accurate pour.** Jigger, and pour in front of the guest with the label facing them.',
          '**Good, cold mixers.** A warm tonic ruins a good gin and there is nothing to be done about it afterwards.',
          '**A fresh garnish**, cut that shift.',
        ],
      },
      {
        kind: 'p',
        text: 'None of the five is difficult. All five going right at once, for every drink, on a busy night, is the job.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'texture',
    part: 'technique',
    n: 22,
    title: 'Texture: egg, aquafaba and dairy',
    minutes: 4,
    standfirst:
      'Egg white is in four recipes in this book. How to use it, and what to use instead.',
    body: [
      {
        kind: 'p',
        text: 'Egg white adds no flavour. What it adds is body and a dense white foam, from proteins unfolding under agitation and trapping air. It is the difference between a Whiskey Sour and a *good* Whiskey Sour, and the workbook lists it as optional without ever saying how to get it to work.',
      },
      { kind: 'h', text: 'The dry shake' },
      {
        kind: 'steps',
        items: [
          'Combine everything in the shaker **without ice** and shake hard for about ten seconds. No ice is the whole point: the proteins denature and foam far better warm, and ice would chill the mixture before the foam forms.',
          'Add ice and shake again, the normal way, to chill and dilute.',
          'Double strain into the glass — through the hawthorne and a fine sieve — to catch any chalaza.',
          'Let it settle for a few seconds. The foam separates and sits up on its own.',
        ],
      },
      {
        kind: 'note',
        title: 'Reverse dry shake',
        text: 'Shake with ice first, strain the ice out, then shake the drink again without it. Slightly more work and a denser, more stable foam. Worth it for a drink you are photographing or one you want to hold its head for ten minutes.',
      },
      { kind: 'h', text: 'Aquafaba' },
      {
        kind: 'p',
        text: 'The liquid from a tin of chickpeas. It foams almost identically, and about 20–25 ml stands in for one egg white. Vegan, no allergen, and it keeps in the fridge for several days. Rinse the tin liquid choice matters — use unsalted if you can, and it tastes of nothing in a finished drink.',
      },
      { kind: 'h', text: 'Safety, plainly' },
      {
        kind: 'p',
        text: 'Raw egg carries a small salmonella risk. Fresh, refrigerated, in-date eggs, cracked to order and never left sitting in a pre-batch. The risk is genuinely low, and it is not zero, and anyone pregnant, elderly, very young or immunocompromised should be given the aquafaba version without having to ask. Say "contains raw egg" when you put it down.',
      },
      {
        kind: 'p',
        text: '**Dairy** behaves differently: cream adds weight and coats the mouth rather than foaming, and it mutes everything else, which is why cream drinks are usually built on strong flavours like coffee, cacao or mint. Citrus and cream will curdle unless there is enough sugar and speed to hold them, which is why a Ramos Gin Fizz has a reputation.',
      },
      {
        kind: 'unsure',
        title: 'Not from the course',
        text: 'The workbook has egg white in four specs and my own margin note about aquafaba, but no technique for either. TODO: I have written 20–25 ml for aquafaba from general practice and have not measured it against a real egg white side by side. Test it before I state it as the conversion.',
      },
    ],
  },
];

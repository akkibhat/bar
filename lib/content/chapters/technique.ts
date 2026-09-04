import type { Chapter } from '../../schema';

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
      'Shake, stir, muddle, build, layer, blend, flame. What each is for.',
    body: [
      {
        kind: 'p',
        text: 'Seven ways to combine a drink. Most recipes use one; a few use two. The choice isn\'t stylistic, because each method chills, dilutes and aerates by a different amount, and those three decide how the drink comes out.',
      },
      { kind: 'h', text: 'Shaking' },
      {
        kind: 'p',
        text: 'Hard, fast, and about 8–12 seconds. Shaking does four things at the same time: mixes ingredients of different densities, chills the drink almost to freezing, dilutes it, and beats air into it. That last one is why a shaken sour is cloudy and has a soft, slightly foamy texture.',
      },
      {
        kind: 'p',
        text: 'The rule: **shake anything that won\'t go clear.** Citrus, juice, cream, egg, syrup. Those need the aeration and the emulsification, and they\'re already opaque, so nothing is lost.',
      },
      { kind: 'tool', tool: 'methodStep', only: 'shaking' },
      { kind: 'h', text: 'Stirring' },
      {
        kind: 'p',
        text: 'Slow, smooth, in a mixing glass with cubed ice, using the back of a bar spoon. It chills and dilutes with almost no aeration and no clouding.',
      },
      {
        kind: 'p',
        text: 'The rule: **stir anything made only of spirits.** A Martini, a Manhattan, a Negroni. Clarity is part of what those drinks are, and shaking them puts air in and chips ice off, which makes them cloudy and watery at the same time.',
      },
      { kind: 'tool', tool: 'methodStep', only: 'stirring' },
      {
        kind: 'note',
        title: 'Shake or stir',
        text: 'If everything in the glass is clear and alcoholic, stir it. If anything in it\'s cloudy - juice, cream, egg, syrup - shake it. There\'s no third case.',
      },
      { kind: 'tool', tool: 'method' },
      { kind: 'h', text: 'Muddling' },
      {
        kind: 'p',
        text: 'Pressing fruit or herbs to release what\'s in them, with a muddler, in the bottom of the glass or the shaker. Fruit takes real pressure. **Herbs don\'t** - mint should be pressed just enough to release its oil, and grinding it releases chlorophyll instead, which is bitter and grassy. A firm press and a twist is enough.',
      },
      { kind: 'tool', tool: 'methodStep', only: 'muddling' },
      { kind: 'h', text: 'Building' },
      {
        kind: 'p',
        text: 'Assembling in the glass it\'s served in, in order, usually over ice. Highballs and anything long. Spirit first, then mixer, so the pour of the mixer does the mixing.',
      },
      { kind: 'tool', tool: 'methodStep', only: 'building' },
      { kind: 'h', text: 'Layering' },
      {
        kind: 'p',
        text: 'Floating ingredients on each other so they stay in visible bands. It works on density, and density mostly tracks sugar: the sweetest goes in first, and each lighter layer is poured slowly over the back of a bar spoon held against the inside of the glass so it lands without breaking through.',
      },
      { kind: 'tool', tool: 'methodStep', only: 'layering' },
      { kind: 'h', text: 'Blending' },
      {
        kind: 'p',
        text: 'For frozen drinks and for anything with whole fresh fruit in it. Use a measured amount of crushed ice rather than filling the jug, or the drink comes out as flavoured snow.',
      },
      { kind: 'tool', tool: 'methodStep', only: 'blending' },
      { kind: 'h', text: 'Flaming' },
      {
        kind: 'p',
        text: 'Setting a high-proof spirit alight, which caramelises sugar and changes the aroma. It has one real use: flaming an orange twist over a drink changes the aroma. Beyond that it\'s display.',
      },
      { kind: 'tool', tool: 'methodStep', only: 'flaming' },
      {
        kind: 'note',
        title: 'If you\'re going to do it',
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
      'Size, dilution and clear ice. Chilling and watering down are one event.',
    body: [
      {
        kind: 'p',
        text: 'Ice is an ingredient, and by volume it\'s usually the largest one. It does two things at the same time, and they can\'t be separated: **there is no chilling without dilution, and no dilution without chilling.**',
      },
      {
        kind: 'p',
        text: 'That rules out a common instinct. You can\'t shake a drink "just to chill it" and avoid watering it down. The cold *comes from* the ice melting, because melting is what removes the heat. A shaken drink finishes at around a quarter water by volume, and that water is part of the recipe whether or not the recipe mentions it.',
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
          '**Cubes** - the default. Shaking, stirring, and filling a highball.',
          '**One large cube or sphere** - for a short drink you\'ll hold for twenty minutes. Less surface area for the same cooling, so an Old Fashioned doesn\'t turn to water halfway down.',
          '**Crushed** - fast chilling and heavy dilution, wanted in a Julep, a Mojito, a Caipirinha and most tiki. Never in a shaker. Cubes will do if it is all you have; the drink comes out a little warmer and stronger.',
        ],
      },
      {
        kind: 'note',
        title: 'Fill the glass',
        text: 'A half-filled highball melts faster than a full one, not slower. Less ice means each piece takes more heat, so it melts quicker and the drink is warm and watery inside ten minutes. More ice is less dilution. It\'s counter-intuitive and worth remembering.',
      },
      { kind: 'tool', tool: 'fillGlass' },
      { kind: 'h', text: 'Clear ice' },
      {
        kind: 'p',
        text: 'Cloudy ice is cloudy because of dissolved air and minerals that get trapped as water freezes inwards from all sides at the same time. Clear ice is frozen *directionally* - from one side only - so the trapped air is pushed ahead of the freezing front and ends up in the last part to freeze, which you cut off.',
      },
      {
        kind: 'steps',
        items: [
          'Fill an insulated container - a chilly bin with the lid off works - with hot water. Hot rather than cold, because it holds less dissolved air to begin with.',
          'Put it in the freezer uncovered. The insulation on the sides and base forces it to freeze from the top down.',
          'Leave it about 24 hours, until roughly three-quarters frozen.',
          'Tip out the unfrozen water underneath, which is where all the cloudiness has gone, and carve the clear slab into cubes.',
        ],
      },
      { kind: 'tool', tool: 'clearIce' },
      {
        kind: 'p',
        text: 'It\'s cosmetic, and it looks good. Clear ice doesn\'t melt meaningfully slower than cloudy ice of the same size, whatever people say. The difference is trapped air, not density.',
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
      'Jiggers, free pouring, and the rest of the perfect serve.',
    body: [
      {
        kind: 'p',
        text: 'Consistency is what separates a bar from guesswork. A guest who liked a drink last week is ordering the same drink, and the only way to give them one is to measure.',
      },
      { kind: 'h', text: 'Jiggers' },
      {
        kind: 'p',
        text: 'A jigger is a two-sided measure. New Zealand pours in millilitres, and the pairs worth owning are 30/15 and 60/30. Between them they cover almost every spec in this book.',
      },
      {
        kind: 'p',
        text: 'Fill to the brim, not to somewhere near it. A jigger measured by eye at nine-tenths full isn\'t a measure, and the error compounds across four ingredients.',
      },
      {
        kind: 'note',
        title: 'Free pouring',
        text: 'Counting through a pour spout is a real skill and takes months of practice with a measured bottle to build. It\'s also the first thing to go when a bar is busy, which is when consistency matters most. Use a jigger.',
      },
      { kind: 'h', text: 'The rest of the perfect serve' },
      {
        kind: 'p',
        text: 'Five things matter:',
      },
      {
        kind: 'list',
        items: [
          '**The right glass**, cool and dry. Fill to the top two-thirds and hand it over by the base or stem.',
          '**Enough good ice.** Fill the glass. See the previous chapter.',
          '**An accurate pour.** Jigger, and pour in front of the guest with the label facing them.',
          '**Good, cold mixers.** A warm tonic ruins a good gin and there\'s nothing to be done about it afterwards.',
          '**A fresh garnish**, cut that shift.',
        ],
      },
      {
        kind: 'p',
        text: 'None of the five is difficult. Doing all five for every drink on a busy night is.',
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
      'Egg white, the dry shake, aquafaba, and the safety side.',
    body: [
      {
        kind: 'p',
        text: 'Egg white adds no flavour. What it adds is body and a dense white foam, from proteins unfolding under agitation and trapping air. It\'s the difference between a Whiskey Sour and a *good* Whiskey Sour, and most recipes list it as optional without saying how to get it to work.',
      },
      { kind: 'h', text: 'The dry shake' },
      {
        kind: 'steps',
        items: [
          'Combine everything in the shaker **without ice** and shake hard for about ten seconds. No ice matters here: the proteins denature and foam far better warm, and ice would chill the mixture before the foam forms.',
          'Add ice and shake again, the normal way, to chill and dilute.',
          'Double strain into the glass - through the hawthorne and a fine sieve - to catch any chalaza.',
          'Let it settle for a few seconds. The foam separates and sits up on its own.',
        ],
      },
      { kind: 'tool', tool: 'dryShake' },
      {
        kind: 'note',
        title: 'Reverse dry shake',
        text: 'Shake with ice first, strain the ice out, then shake the drink again without it. Slightly more work and a denser, more stable foam. Worth it for a drink you\'re photographing or one you want to hold its head for ten minutes.',
      },
      { kind: 'h', text: 'Aquafaba' },
      {
        kind: 'p',
        text: 'The liquid from a tin of chickpeas. It foams almost identically. One large egg white is about 30 ml, and a straight one-for-one swap is the usual starting point; published practice runs from 22 ml up to a full 30. Vegan, no allergen, and it keeps in the fridge for several days. Use unsalted if you can; it tastes of nothing in a finished drink.',
      },
      {
        kind: 'note',
        title: 'The bottled foamers',
        text: 'There is a third option that is neither egg nor chickpea. Wonderfoam, Fee Foam and Ms Better\'s Miraculous Foamer are all extracts of quillaja - soap bark - which is a natural surfactant, and they work in drops rather than millilitres: three to six drops, or two or three dashes, depending on the bottle. One bottle does several hundred drinks and keeps about two years without refrigeration, so there is nothing to squeeze and nothing to keep cold. The foam is finer and more stable than egg white but brings none of the body, which is the trade. Worth having for the guest who cannot have egg.',
      },
      { kind: 'h', text: 'Safety, plainly' },
      {
        kind: 'p',
        text: 'Raw egg carries a small salmonella risk. Fresh, refrigerated, in-date eggs, cracked to order and never left sitting in a pre-batch. The risk is low but not zero. Anyone pregnant, elderly, very young or immunocompromised should be given the aquafaba version without having to ask. Say "contains raw egg" when you put it down.',
      },
      {
        kind: 'p',
        text: '**Dairy** behaves differently: cream adds weight and coats the mouth rather than foaming, and it mutes everything else, which is why cream drinks are usually built on strong flavours like coffee, cacao or mint. Citrus and cream will curdle unless there\'s enough sugar and speed to hold them, which is why a Ramos Gin Fizz has a reputation.',
      },
      {
        kind: 'unsure',
        title: 'The aquafaba conversion is untested',
        text: 'Three specs here use egg white, and I had a margin note about aquafaba, but no technique for either. The 20-25 ml I first wrote down was low: the published range is 22 to 30, and a one-for-one swap for a 30 ml egg white is the common recommendation. TODO: still worth measuring the two side by side, because the range is wide enough that someone has to pick a number.'
      },
    ],
  },
];

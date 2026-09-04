import type { Chapter } from '../../schema';

/**
 * Part VIII - The classics.
 *
 * The workbook's recipe tables, transcribed as specs. These are the one
 * part of the book that is close to a straight copy rather than a
 * rewrite, because a spec is a set of measurements and there is no honest
 * way to paraphrase 45 ml.
 *
 * What has changed is the grouping. The workbook filed these under "the
 * sours", "other classic cocktails" and "after dinner cocktails", which
 * put the Negroni and the Bloody Mary in the same bucket on the grounds
 * that neither is a sour. They are sorted here by the family from Part IV
 * instead, so each chapter is one structure and the pattern is visible
 * rather than asserted.
 *
 * Where my own margin notes disagreed with the printed spec, or where
 * common practice does, that is called out in the spec's own note rather
 * than silently corrected.
 */
export const CLASSICS: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'the-sours',
    part: 'classics',
    n: 31,
    title: 'The sours',
    minutes: 7,
    standfirst:
      'Spirit, citrus, sweet. Ten drinks off one template.',
    body: [
      {
        kind: 'p',
        text: 'Every recipe on this page is the Daiquiri family, or the Sidecar family where a liqueur is doing the sweetening. Read them together and the same three roles from Part IV are in nearly all of them, in ratios that are all slightly different. The structure is what repeats; the numbers are what a bar argues about. Where a recipe here differs from the IBA\'s official one, the sheet says so and gives theirs - the IBA list is the reference I would send anyone to first.',
      },
      {
        kind: 'spec',
        spec: {
          name: 'Tom Collins',
          glass: 'Collins',
          ice: 'Yes',
          method: 'Shake and strain, then top',
          family: 'daiquiri',
          iba: { category: 'unforgettables', name: 'John Collins' },
          spec: [
            { name: 'Gin', amount: '45 ml', substitutes: ['Vodka, for a John Collins'] },
            { name: 'Lemon juice', amount: '30 ml' },
            { name: 'White sugar', amount: '1.5 tsp', substitutes: ['10 ml sugar syrup'] },
            { name: 'Soda', amount: 'Top' },
          ],
          garnish: 'Lemon wedge',
          note: 'A sour lengthened with soda. How much soda depends on the glass and the ice, which is why it says top rather than a number. Swap the soda for nothing and add an egg white and it becomes a Gin Fizz.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Whiskey Sour',
          glass: 'Rocks, or coupe',
          ice: 'Yes, if served in a rocks glass',
          method: 'Shake and strain',
          family: 'daiquiri',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'Bourbon', amount: '45 ml', substitutes: ['Any spirit - the template holds'] },
            { name: 'Lemon juice', amount: '25 ml' },
            { name: 'Sugar syrup', amount: '20 ml' },
            { name: 'Egg white', amount: '1', optional: true, substitutes: ['30 ml aquafaba'] },
            { name: 'Angostura bitters', amount: '2 dash', optional: true },
          ],
          garnish: 'Lemon wedge',
          note: 'The bitters go in the shaker; the workbook also has them coating the rocks glass. With egg white, dry shake first - see the texture chapter.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Kamikaze',
          glass: 'Martini or coupe',
          ice: 'Up',
          method: 'Shake and strain',
          family: 'sidecar',
          spec: [
            { name: 'Vodka', amount: '30 ml' },
            { name: 'Cointreau', amount: '30 ml' },
            { name: 'Lime juice', amount: '30 ml' },
          ],
          garnish: 'Lime twist',
          note: 'Equal parts, and the plainest possible Sidecar. A Margarita is the same three roles with tequila in the base and less of everything but the spirit.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'White Lady',
          glass: 'Martini or coupe',
          ice: 'Up',
          method: 'Shake and strain',
          family: 'sidecar',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'Gin', amount: '40 ml' },
            { name: 'Triple sec', amount: '30 ml', substitutes: ['Cointreau'] },
            { name: 'Lemon juice', amount: '20 ml' },
          ],
          garnish: 'None',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Cosmopolitan',
          glass: 'Martini',
          ice: 'Up',
          method: 'Shake and double strain',
          family: 'sidecar',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Citrus vodka', amount: '40 ml' },
            { name: 'Cointreau', amount: '15 ml' },
            { name: 'Lime juice', amount: '15 ml' },
            { name: 'Cranberry juice', amount: '30 ml' },
          ],
          garnish: 'Orange or lemon zest sprayed over',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Margarita',
          glass: 'Martini with a salt rim, or coupe, or rocks',
          ice: 'Up, or over ice in a rocks glass',
          method: 'Shake and strain',
          family: 'sidecar',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Tequila, 100% agave', amount: '50 ml' },
            { name: 'Triple sec', amount: '20 ml', substitutes: ['Cointreau'] },
            { name: 'Lime juice', amount: '15 ml' },
          ],
          garnish: 'Salt rim and lime',
          note: 'The IBA pour: tequila-forward, drier, and worth it with good tequila. Most bars pour 45 tequila, 30 Cointreau, 15 lime, which is sweeter and juicier. Salt the rim before chilling the glass, not after - salt will not stick to a frosted rim. Rim only half, so the guest can choose.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Daiquiri',
          glass: 'Martini with a sugar rim',
          ice: 'Up',
          method: 'Shake and strain',
          family: 'daiquiri',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'White rum', amount: '60 ml', substitutes: ['Gin, for a Gimlet'] },
            { name: 'Lime juice', amount: '20 ml' },
            { name: 'White sugar', amount: '2 bar spoons', substitutes: ['15 ml sugar syrup'] },
          ],
          garnish: 'Lime twist',
          note: 'The family\'s namesake. Three ingredients and nowhere to hide, which is why it is the drink to judge a bar on. For a strawberry Daiquiri, or any other fruit, swap the sugar syrup for a fruit syrup and change nothing else.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Pisco Sour',
          glass: 'Coupe or cocktail',
          ice: 'Up',
          method: 'Shake and strain',
          family: 'daiquiri',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Pisco', amount: '60 ml' },
            { name: 'Lemon juice', amount: '30 ml' },
            { name: 'Sugar syrup', amount: '20 ml' },
            { name: 'Egg white', amount: '1' },
          ],
          garnish: 'A few drops of Amargo Chuncho on the foam - Angostura if that is what you have',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Corpse Reviver No 2',
          glass: 'Martini',
          ice: 'Up',
          method: 'Shake and double strain',
          family: 'sidecar',
          iba: { category: 'contemporary', name: 'Corpse Reviver #2' },
          spec: [
            { name: 'Absinthe', amount: '1 dash' },
            { name: 'Gin', amount: '30 ml' },
            { name: 'Cointreau', amount: '30 ml' },
            { name: 'Lillet Blanc', amount: '30 ml' },
            { name: 'Lemon juice', amount: '30 ml' },
          ],
          garnish: 'Orange zest',
          note: 'Four equal parts and a dash of absinthe in the shaker, and easier to drink than four equal parts of anything ought to be.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Clover Club',
          glass: 'Coupe',
          ice: 'Up',
          method: 'Dry shake, then shake and strain',
          family: 'daiquiri',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'Gin', amount: '45 ml' },
            { name: 'Lemon juice', amount: '15 ml' },
            { name: 'Raspberry syrup', amount: '15 ml' },
            { name: 'Lillet', amount: '10 ml', optional: true, substitutes: ['Dry vermouth'] },
            { name: 'Egg white', amount: '1' },
          ],
          garnish: 'Raspberries',
          note: 'Not printed in the workbook - this one is off my own notes from the session.',
        },
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'muddled-and-built',
    part: 'classics',
    n: 32,
    title: 'Muddled and built',
    minutes: 5,
    standfirst:
      'Four drinks built in the glass, two of them muddled over crushed ice.',
    body: [
      {
        kind: 'p',
        text: 'These are drinks built in the serving glass rather than made in a shaker and poured out. The two muddled ones use fresh fruit for the acid instead of juice, want crushed ice, and are better with the sugar added before the ice rather than after. The last two are assembled in the glass without muddling anything.',
      },
      {
        kind: 'note',
        title: 'Why crushed, and what to do without it',
        text: 'Crushed ice has far more surface area than cubes, so it chills faster and waters the drink down faster - and these are built in the glass with no shaker to do either. It also packs around muddled fruit and holds it under instead of letting it float. Cubes will do if crushed is what you have not got. The drink comes out warmer and stronger, so stir it longer and drink it sooner.',
      },
      {
        kind: 'spec',
        spec: {
          name: 'Caipirinha',
          glass: 'Rocks',
          ice: 'Crushed',
          method: 'Muddle and build',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Lime', amount: '1, in small wedges' },
            { name: 'White sugar', amount: '4 tsp', substitutes: ['20 ml sugar syrup'] },
            { name: 'Cachaça', amount: '60 ml' },
          ],
          garnish: 'Lime wedge, if you like',
          note: 'Pronounced ky-pee-REEN-ya. Muddle the lime and sugar first, then add ice and the cachaça. A caipiroska is the same drink with vodka, which is what most places outside Brazil actually pour. Either kind of fruit makes it a flavoured one: a fruit syrup goes in instead of the sugar, or fresh fruit is muddled in on top of it and its juice does the extra dilution.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Mojito',
          glass: 'Collins',
          ice: 'Crushed',
          method: 'Muddle, build and stir',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Lime wedges', amount: '4' },
            { name: 'Mint leaves, torn', amount: '6 good ones' },
            { name: 'White sugar', amount: '2 bar spoons', substitutes: ['15 ml sugar syrup'] },
            { name: 'White rum', amount: '60 ml' },
            { name: 'Soda', amount: 'Top', optional: true },
          ],
          garnish: 'Lime wedge and a sprig of mint',
          note: 'Press the mint, do not grind it. Fill with crushed ice, add the rum, then stir up from the bottom to lift the mint through. The IBA now replaces the muddled lime wedges with 20 ml of juice and 45 ml of rum; this is the older build, and the one this chapter is organised around.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Sex on the Beach',
          glass: 'Highball',
          ice: 'Yes',
          method: 'Build in the glass',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Vodka', amount: '40 ml' },
            { name: 'Peach schnapps', amount: '20 ml' },
            { name: 'Cranberry juice', amount: '40 ml' },
            { name: 'Orange juice', amount: '40 ml' },
          ],
          garnish: 'Orange slice',
          note: 'Off my own notes rather than the printed page.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Bloody Mary',
          glass: 'Highball, filled with ice',
          ice: 'Yes',
          method: 'Stir gently',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Vodka', amount: '45 ml' },
            { name: 'Tomato juice', amount: '90 ml' },
            { name: 'Lemon juice', amount: '15 ml' },
            { name: 'Tabasco', amount: 'To taste' },
            { name: 'Worcestershire sauce', amount: '2 dash' },
            { name: 'Celery salt and pepper', amount: 'To taste', substitutes: ['Salt'] },
          ],
          garnish: 'Celery, lemon, whatever else is going',
          note: 'Ask whether they want ice. Without it, a rocks glass. Stirred rather than shaken, so the tomato juice is not whipped to a froth.',
        },
      },
      {
        kind: 'note',
        title: 'This one got built',
        text: 'Butterfly pea flower changes colour with pH, so citrus turns it from blue to violet in the glass. That idea did get built: it\'s the Filthy Mistress on the shelf, where the lime does the work at the table.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'stirred-and-spirit-forward',
    part: 'classics',
    n: 33,
    title: 'Stirred and spirit-forward',
    minutes: 6,
    standfirst:
      'Spirit-forward, and mostly stirred. Six drinks, starting with the Old Fashioned.',
    body: [
      {
        kind: 'p',
        text: 'Everything here is clear and alcoholic, and everything here is stirred - except the Old Fashioned, which is built in the glass. Negroni, Contessa and Boulevardier are the same drink with one bottle swapped each time. Read them together and Part IV\'s families are easy to see.',
      },
      {
        kind: 'spec',
        spec: {
          name: 'Old Fashioned',
          glass: 'Rocks',
          ice: 'Yes, ideally one large cube',
          method: 'Muddle and build',
          family: 'old-fashioned',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'Bourbon', amount: '45 ml', substitutes: ['Rye'] },
            { name: 'Sugar cube', amount: '1' },
            { name: 'Angostura bitters', amount: 'Soak the cube' },
            { name: 'Water', amount: 'A few dashes' },
          ],
          garnish: 'Orange peel and a maraschino cherry',
          note: 'The oldest structure in the book, and the drink the 1806 definition was describing. The IBA says 45 and most bars I know pour 60. Sixty is a bigger drink with the same balance; pour it if the glass and the guest want it.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Martini',
          glass: 'Martini',
          ice: 'Up',
          method: 'Stir and strain',
          family: 'martini',
          iba: { category: 'unforgettables', name: 'Dry Martini' },
          spec: [
            { name: 'Gin', amount: '60 ml' },
            { name: 'Dry vermouth', amount: '10 ml' },
            { name: 'Olive brine', amount: 'A dash', optional: true, substitutes: ['For a Dirty Martini'] },
          ],
          garnish: 'Olive, or a lemon twist',
          note: 'The workbook calls this an English Martini. Everything depends on the vermouth being fresh - see the fortified wine chapter. The IBA pours 10 ml of vermouth, six to one; I pour 15, four to one - a touch wetter, and most people prefer it without knowing why. Dry means less vermouth, and this is already dry. Dirty means a bar spoon or two of olive brine, an olive in place of the twist, and a savoury drink instead of a clean one.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Manhattan',
          glass: 'Martini, or rocks',
          ice: 'Up, or over ice',
          method: 'Stir and strain',
          family: 'martini',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'Rye', amount: '50 ml', substitutes: ['Bourbon', 'Scotch, for a Rob Roy'] },
            { name: 'Sweet red vermouth', amount: '20 ml' },
            { name: 'Angostura bitters', amount: '1 dash' },
          ],
          garnish: 'A cocktail cherry - lemon zest for a Rob Roy',
          note: 'Normally up, in a coupe or cocktail glass. Some Americans take it in a rocks glass with ice, so check.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Negroni',
          glass: 'Rocks',
          ice: 'Yes',
          method: 'Stir and strain',
          family: 'martini',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'Gin', amount: '30 ml' },
            { name: 'Campari', amount: '30 ml' },
            { name: 'Sweet red vermouth', amount: '30 ml' },
          ],
          garnish: 'Orange zest',
          note: 'The Italian way is to build it over ice in a short tumbler, stir gently, and let it soften as the ice melts through a meal. Almost every bar does it in the mixing glass.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Contessa',
          glass: 'Rocks',
          ice: 'Yes',
          method: 'Stir and strain',
          family: 'martini',
          spec: [
            { name: 'Gin', amount: '30 ml' },
            { name: 'Aperol', amount: '30 ml' },
            { name: 'Dry white vermouth', amount: '30 ml' },
          ],
          garnish: 'Orange zest',
          note: 'A Negroni with the bitterness and the vermouth both lightened. The summer version.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Boulevardier',
          glass: 'Rocks',
          ice: 'Yes',
          method: 'Stir and strain',
          family: 'martini',
          iba: { category: 'unforgettables' },
          spec: [
            { name: 'Bourbon', amount: '30 ml' },
            { name: 'Campari', amount: '30 ml' },
            { name: 'Sweet red vermouth', amount: '30 ml' },
          ],
          garnish: 'Orange zest',
          note: 'A Negroni with whiskey instead of gin. Richer, and it takes the Campari better than people expect. The IBA pours 45 ml of bourbon, and plenty of bars do, because bourbon at 40 per cent gets lost against Campari in a way gin does not. Equal thirds follows the idea; 45 follows the bottle. Same ratio, different balance, which is the whole argument of Part IV.',
        },
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'after-dinner',
    part: 'classics',
    n: 34,
    title: 'After dinner',
    minutes: 4,
    standfirst:
      'Coffee, cream and chocolate. The Flip family, plus the B52.',
    body: [
      {
        kind: 'p',
        text: 'These come after the plates have gone. Three of the four are the Flip family - something rich giving the drink body rather than flavour - and all four are sweeter than anything else in this part.',
      },
      {
        kind: 'spec',
        spec: {
          name: 'Espresso Martini',
          glass: 'Martini',
          ice: 'Up',
          method: 'Shake and strain',
          family: 'flip',
          iba: { category: 'new-era' },
          spec: [
            { name: 'Vodka', amount: '50 ml' },
            { name: 'Espresso, fresh', amount: '1 shot' },
            { name: 'Kahlúa', amount: '30 ml' },
            { name: 'Sugar syrup', amount: '10 ml' },
          ],
          garnish: 'Three coffee beans',
          note: 'The espresso has to be fresh and hot going in - that is where the foam comes from. Cold coffee gives a flat drink with no head. My own version differs and always gets good reviews: a double espresso, 45 ml vodka infused with split vanilla pods, 15 ml butterscotch liqueur, 15 ml sugar syrup, no coffee liqueur.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Brandy Alexander',
          glass: 'Martini',
          ice: 'Up',
          method: 'Shake and strain',
          family: 'flip',
          iba: { category: 'unforgettables', name: 'Alexander' },
          spec: [
            { name: 'Cognac or brandy', amount: '30 ml' },
            { name: 'Crème de cacao, brown', amount: '30 ml' },
            { name: 'Cream', amount: '30 ml' },
          ],
          garnish: 'Grated nutmeg',
          note: 'Cognac is a specific brandy, from one place under one set of rules. Any brandy you have will make the drink.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Grasshopper',
          glass: 'Martini',
          ice: 'Up',
          method: 'Shake and strain',
          family: 'flip',
          iba: { category: 'contemporary' },
          spec: [
            { name: 'Crème de menthe', amount: '30 ml' },
            { name: 'Crème de cacao, white', amount: '30 ml' },
            { name: 'Cream', amount: '30 ml' },
          ],
          garnish: 'Chocolate powder',
          note: 'The IBA\'s 20 / 20 / 20 is the historic build. Thirty each is the modern single serve for a coupe or cocktail glass, and the same drink.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'B52',
          glass: 'Shot',
          ice: 'None',
          method: 'Layered',
          spec: [
            { name: 'Kahlúa', amount: 'One third' },
            { name: 'Baileys', amount: 'One third' },
            { name: 'Grand Marnier', amount: 'One third' },
          ],
          garnish: 'Set alight, briefly',
          note: 'Layered heaviest first: Kahlúa, then Baileys, then Grand Marnier, each poured slowly over the back of a bar spoon. The workbook lists them the other way up, which is the order you see them in the glass rather than the order they go in.',
        },
      },
      {
        kind: 'note',
        title: 'If you\'re lighting it',
        text: 'The Grand Marnier on top is what burns. Light it, let it go a few seconds, and put it out before it\'s handed over, because a hot glass rim burns lips, and there\'s no benefit to letting it burn longer.',
      },
    ],
  },
];

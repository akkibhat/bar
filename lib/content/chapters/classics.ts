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
      'Spirit, citrus, sweet. Nine drinks that are all the same drink, which is the point.',
    body: [
      {
        kind: 'p',
        text: 'Every recipe on this page is the Daiquiri family, or the Sidecar family where a liqueur is doing the sweetening. Read them together and the 2 : 1 : 1 from Part IV is visible in nearly all of them.',
      },
      {
        kind: 'spec',
        spec: {
          name: 'Tom Collins',
          glass: 'Collins',
          ice: 'Yes',
          method: 'Shake and strain, then top',
          family: 'daiquiri',
          spec: [
            { name: 'Gin', amount: '45 ml', substitutes: ['Vodka, for a John Collins'] },
            { name: 'Lemon juice', amount: '30 ml' },
            { name: 'White sugar', amount: '1.5 tsp', substitutes: ['10 ml sugar syrup'] },
            { name: 'Soda', amount: 'Top' },
          ],
          garnish: 'Lemon wedge',
          note: 'A sour lengthened with soda. Swap the soda for nothing and add an egg white and it becomes a Gin Fizz.',
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
          spec: [
            { name: 'Bourbon', amount: '45 ml', substitutes: ['Any spirit - the template holds'] },
            { name: 'Lemon juice', amount: '25 ml' },
            { name: 'Sugar syrup', amount: '20 ml' },
            { name: 'Egg white', amount: '1', optional: true, substitutes: ['20–25 ml aquafaba'] },
            { name: 'Angostura bitters', amount: '2 dash' },
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
          note: 'Equal parts, and the plainest possible Sidecar. Swap vodka for tequila and it is a Margarita.',
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
          spec: [
            { name: 'Gin', amount: '40 ml' },
            { name: 'Cointreau', amount: '30 ml' },
            { name: 'Lemon juice', amount: '20 ml' },
            { name: 'White sugar', amount: '1 bar spoon', substitutes: ['10 ml sugar syrup'] },
            { name: 'Egg white', amount: '1', optional: true },
          ],
          garnish: 'Lemon twist',
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
          spec: [
            { name: 'Citrus vodka', amount: '40 ml' },
            { name: 'Cointreau', amount: '15 ml' },
            { name: 'Lime juice', amount: '15 ml' },
            { name: 'Cranberry juice', amount: '30 ml' },
          ],
          garnish: 'Orange zest sprayed over, or a cherry',
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
          spec: [
            { name: 'Tequila', amount: '60 ml' },
            { name: 'Triple sec', amount: '30 ml', substitutes: ['Cointreau'] },
            { name: 'Lime juice', amount: '25 ml' },
          ],
          garnish: 'Salt rim and lime',
          note: 'Salt the rim before chilling the glass, not after - salt will not stick to a frosted rim. Rim only half, so the guest can choose.',
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
          spec: [
            { name: 'White rum', amount: '60 ml', substitutes: ['Gin, for a Gimlet'] },
            { name: 'Lime juice', amount: '20 ml' },
            { name: 'White sugar', amount: '2 bar spoons', substitutes: ['20 ml sugar syrup'] },
          ],
          garnish: 'Lime twist',
          note: 'The family\'s namesake. Three ingredients and nowhere to hide, which is why it is the drink to judge a bar on.',
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
          spec: [
            { name: 'Pisco', amount: '45 ml' },
            { name: 'Lemon juice', amount: '30 ml' },
            { name: 'Sugar syrup', amount: '20 ml' },
            { name: 'Egg white', amount: '1' },
          ],
          garnish: 'A few drops of Angostura on the foam',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Corpse Reviver No 2',
          glass: 'Martini, rinsed with absinthe',
          ice: 'Up',
          method: 'Shake and double strain',
          family: 'sidecar',
          spec: [
            { name: 'Absinthe', amount: 'Rinse', substitutes: ['Spritz the glass'] },
            { name: 'Gin', amount: '30 ml' },
            { name: 'Cointreau', amount: '30 ml' },
            { name: 'Lillet Blanc', amount: '30 ml' },
            { name: 'Lemon juice', amount: '30 ml' },
          ],
          garnish: 'Traditionally none, but a lemon zest is good',
          note: 'Four equal parts over an absinthe rinse, and easier to drink than four equal parts of anything ought to be.',
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
          spec: [
            { name: 'Gin', amount: '45 ml' },
            { name: 'Lemon juice', amount: '15 ml' },
            { name: 'Raspberry syrup', amount: '15 ml' },
            { name: 'Lillet', amount: '10 ml', optional: true },
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
      'Made in the glass, over crushed ice, with something pressed in the bottom of it.',
    body: [
      {
        kind: 'p',
        text: 'These are sours built in the serving glass rather than shaken, with fresh fruit doing the acid instead of juice. All three want crushed ice, and all three are better with the sugar added before the ice rather than after.',
      },
      {
        kind: 'spec',
        spec: {
          name: 'Caipirinha',
          glass: 'Rocks',
          ice: 'Crushed',
          method: 'Muddle and build',
          spec: [
            { name: 'Lime wedges', amount: '4' },
            { name: 'White sugar', amount: '2 bar spoons' },
            { name: 'Cachaça', amount: '60 ml' },
          ],
          garnish: 'Lime wedges',
          note: 'Pronounced ky-pee-REEN-ya. Muddle the limes and sugar first, then add ice and the cachaça.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Mojito',
          glass: 'Collins',
          ice: 'Crushed',
          method: 'Muddle, build and stir',
          spec: [
            { name: 'Lime wedges', amount: '4' },
            { name: 'Mint leaves, torn', amount: '6 good ones' },
            { name: 'White sugar', amount: '2 bar spoons' },
            { name: 'White rum', amount: '60 ml' },
            { name: 'Soda', amount: 'Top', optional: true },
          ],
          garnish: 'Lime wedge and a sprig of mint',
          note: 'Press the mint, do not grind it. Fill with crushed ice, add the rum, then stir up from the bottom to lift the mint through.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Raspberry Caipiroska',
          glass: 'Rocks',
          ice: 'Crushed',
          method: 'Muddle and build',
          spec: [
            { name: 'Lime wedges', amount: '4' },
            { name: 'Fresh raspberries', amount: '4' },
            { name: 'Brown sugar cubes', amount: '3' },
            { name: 'Vodka', amount: '40 ml' },
            { name: 'Chambord', amount: '20 ml' },
          ],
          garnish: 'Raspberries and lime',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Sex on the Beach',
          glass: 'Highball',
          ice: 'Yes',
          method: 'Build in the glass',
          spec: [
            { name: 'Vodka', amount: '40 ml' },
            { name: 'Peach schnapps', amount: '20 ml' },
            { name: 'Cranberry juice', amount: '40 ml' },
            { name: 'Orange juice', amount: '20 ml' },
          ],
          garnish: 'Orange slice',
          note: 'Off my own notes rather than the printed page. Orange juice goes in last so it sits on top and the drink arrives in two colours.',
        },
      },
      {
        kind: 'note',
        title: 'The margin note that went somewhere',
        text: 'My note against this page says butterfly pea flower changes colour with pH, so citrus turns it from blue to violet in the glass. That one did get built - it is the Filthy Mistress on the shelf, where the lime does the work at the table.',
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
      'No citrus, no shaking, nothing cloudy. The drinks where the spirit is the subject.',
    body: [
      {
        kind: 'p',
        text: 'Everything here is stirred, because everything here is clear and alcoholic. Negroni, Contessa and Boulevardier are the same drink with one bottle swapped each time. Read them together and the families stop being a theory.',
      },
      {
        kind: 'spec',
        spec: {
          name: 'Old Fashioned',
          glass: 'Rocks',
          ice: 'Yes, ideally one large cube',
          method: 'Muddle and build',
          family: 'old-fashioned',
          spec: [
            { name: 'Bourbon', amount: '45 ml', substitutes: ['Aged rum'] },
            { name: 'Sugar cube', amount: '1' },
            { name: 'Angostura bitters', amount: 'Soak the cube' },
            { name: 'Orange peel', amount: '1 piece' },
          ],
          garnish: 'Orange peel and a maraschino cherry',
          note: 'The oldest structure in the book, and the drink the 1806 definition was describing.',
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
          spec: [
            { name: 'Gin', amount: '60 ml' },
            { name: 'Dry vermouth', amount: '10 ml' },
            { name: 'Olive brine', amount: 'A dash', optional: true, substitutes: ['For a Dirty Martini'] },
          ],
          garnish: 'Olive, or a lemon twist',
          note: 'The workbook calls this an English Martini. Everything depends on the vermouth being fresh - see the fortified wine chapter.',
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
          spec: [
            { name: 'Bourbon', amount: '50 ml', substitutes: ['Scotch, for a Rob Roy'] },
            { name: 'Sweet red vermouth', amount: '20 ml' },
            { name: 'Angostura bitters', amount: '4 dash' },
          ],
          garnish: 'Cherries or orange zest - lemon for a Rob Roy',
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
          spec: [
            { name: 'Gin', amount: '30 ml' },
            { name: 'Campari', amount: '30 ml' },
            { name: 'Sweet red vermouth', amount: '30 ml' },
          ],
          garnish: 'Orange zest',
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
          spec: [
            { name: 'Bourbon', amount: '30 ml' },
            { name: 'Campari', amount: '30 ml' },
            { name: 'Sweet red vermouth', amount: '30 ml' },
          ],
          garnish: 'Orange zest',
          note: 'A Negroni with whiskey instead of gin. Richer, and it takes the Campari better than people expect.',
        },
      },
      {
        kind: 'spec',
        spec: {
          name: 'Bloody Mary',
          glass: 'Highball',
          ice: 'Yes',
          method: 'Shake and strain over fresh ice',
          spec: [
            { name: 'Vodka', amount: '60 ml' },
            { name: 'Tomato juice', amount: '90 ml' },
            { name: 'Lemon', amount: '1 squeeze' },
            { name: 'Fino sherry or port', amount: '1 dash' },
            { name: 'Tabasco', amount: 'To taste' },
            { name: 'Worcestershire sauce', amount: '1 dash' },
            { name: 'Salt and pepper', amount: 'To taste' },
          ],
          garnish: 'Celery, lemon, whatever else is going',
          note: 'The outlier on this page - not stirred, not clear, and not really a family. It is here because nothing else in the book is like it either.',
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
      'Rich, sweet and mostly dessert. The Flip family, plus one shot that gets set on fire.',
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
          spec: [
            { name: 'Vanilla vodka', amount: '50 ml' },
            { name: 'Espresso, fresh', amount: '50 ml' },
            { name: 'Kahlúa', amount: '30 ml' },
            { name: 'Sugar', amount: '1 tsp', optional: true },
          ],
          garnish: 'Three coffee beans',
          note: 'The espresso has to be fresh and hot going in - that is where the foam comes from. Cold coffee gives a flat drink with no head.',
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
          spec: [
            { name: 'Cognac or brandy', amount: '30 ml' },
            { name: 'Crème de cacao, brown', amount: '30 ml' },
            { name: 'Cream', amount: '30 ml' },
          ],
          garnish: 'Grated nutmeg',
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
          spec: [
            { name: 'Crème de menthe', amount: '30 ml' },
            { name: 'Crème de cacao, white', amount: '30 ml' },
            { name: 'Cream', amount: '30 ml' },
          ],
          garnish: 'Chocolate powder',
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
        title: 'If you are lighting it',
        text: 'The Grand Marnier on top is what burns. Light it, let it go a few seconds, and put it out before it is handed over - a hot glass rim burns lips, and the drink is not improved by being on fire for longer.',
      },
    ],
  },
];

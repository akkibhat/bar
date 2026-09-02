import type { Chapter } from '../../schema';

/**
 * Part III - Beer.
 *
 * None of this is from the cocktail workbook, which mentioned beer twice
 * and only as a mixer. It is here because a bar pours far more of it than
 * it pours cocktails, and because the vocabulary carries over:
 * malt, yeast and fermentation temperature explain most of what is on a
 * tap list, and they are the same three levers that decide what comes off
 * a still in Part I.
 *
 * Three chapters rather than a survey of styles. A style list is a
 * reference and goes stale; the mechanism does not.
 */
export const BEER: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'what-beer-is',
    part: 'beer',
    n: 13,
    title: 'What beer is',
    minutes: 5,
    standfirst:
      'Water, malt, hops, yeast, and what each one changes.',
    body: [
      {
        kind: 'p',
        text: 'Beer is fermented grain - nearly always malted barley - flavoured with hops. Four ingredients do nearly all of it, and each is a dial you can turn independently, which is why a handful of inputs produce hundreds of styles.',
      },
      {
        kind: 'list',
        items: [
          '**Water.** Mineral content changes how bitterness reads, which is why Burton pale ales are hoppy and Pilsen lagers are soft - the towns had different water long before anyone knew why it mattered.',
          '**Malt.** Barley, germinated then kilned. The kilning is the dial: pale malt gives bready sweetness, medium gives caramel and toffee, and roasted-to-black gives coffee and chocolate. **Malt is where beer colour comes from** - not from strength, and not from the yeast.',
          '**Hops.** The seasoning. Bitterness to balance malt sweetness, plus aroma. Boiled early they give bitterness and lose aroma; added late or after fermentation they give aroma and almost no bitterness. That timing split is most of what separates a bitter old-school IPA from a modern juicy one.',
          '**Yeast.** Eats the sugar, makes alcohol, and throws off flavour compounds while doing it. The biggest single difference between beers, and the subject of the next chapter.',
        ],
      },
      {
        kind: 'note',
        title: 'Colour is malt, not strength',
        text: 'A dark beer is not necessarily strong, heavy or high in alcohol. Guinness is about 4.2% - lighter than a lot of pale lagers. The colour came out of a kiln, and nothing else follows from it.',
      },
      { kind: 'h', text: 'How it is made' },
      {
        kind: 'steps',
        items: [
          '**Mash.** Crushed malt steeped in hot water so its starch converts to sugar. The sweet liquid drawn off is *wort*.',
          '**Boil.** Wort boiled with hops. Sterilises it, and sets the bitterness by how long the hops are in.',
          '**Ferment.** Cool, pitch yeast, wait. Days for a warm ale, weeks for a cold lager.',
          '**Condition.** Rest it so flavours settle and carbonation comes up, then filter or leave it hazy.',
        ],
      },
      {
        kind: 'p',
        text: 'Compare that to Part I and the shape is familiar. Beer is the fermented wash a grain whisky would be distilled from, stopped one step early and hopped. That is not a coincidence, and it is a useful way to connect the two.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'ale-and-lager',
    part: 'beer',
    n: 14,
    title: 'Ale and lager',
    minutes: 5,
    standfirst:
      'Two yeasts, two temperatures. Enough to place any beer on a tap list.',
    body: [
      {
        kind: 'p',
        text: 'The whole of beer divides in two, and the dividing line is which yeast and how cold. Everything else - colour, strength, hop character - cuts across both.',
      },
      {
        kind: 'table',
        head: ['', 'Ale', 'Lager'],
        rows: [
          ['Yeast works', 'Warm, 15–24°C', 'Cold, 7–13°C'],
          ['Ferments in', 'Days', 'Weeks'],
          ['Yeast settles', 'Top', 'Bottom'],
          ['Yeast character', 'Fruity, spicy, estery', 'Clean, restrained'],
          ['Reads as', 'Flavour from the yeast as well as the malt', 'Malt and hops, with the yeast out of the way'],
        ],
      },
      {
        kind: 'p',
        text: 'Warm yeast is more active: it throws off esters and phenols, which land as banana, pear, clove and pepper. Cold yeast works slowly and quietly and leaves very little of itself behind. That is why a lager tastes clean and a Belgian ale tastes of fruit nobody added.',
      },
      {
        kind: 'p',
        text: '*Lager* is German for "to store", which is the technique rather than a description of the beer. Lagering is cold conditioning, and it is the reason the category exists at all: it needed cellars cold enough to hold for weeks, so it stayed a regional Bavarian habit until refrigeration made it possible anywhere.',
      },
      { kind: 'h', text: 'Worth being able to place' },
      {
        kind: 'list',
        items: [
          '**Pilsner** - pale lager, crisp, noticeably hoppy. The template most mass-market lager copies.',
          '**Pale ale and IPA** - hop-forward ales. IPA is stronger and more bitter historically; the modern hazy version trades bitterness for aroma and reads almost like juice.',
          '**Stout and porter** - dark ales from roasted malt. Coffee, chocolate, sometimes a dry mineral finish.',
          '**Wheat beer** - a large share of wheat alongside barley. Hazy, soft, and in the German version strongly banana-and-clove from the yeast.',
          '**Sour** - deliberately acidified, by wild yeast or bacteria. The closest beer gets to wine, and the one to put in front of someone who says they do not like beer.',
        ],
      },
      {
        kind: 'unsure',
        title: 'Mine to write',
        text: 'TODO: New Zealand hops are a genuine speciality - Nelson Sauvin, Riwaka, Motueka - and NZ craft brewing deserves better than a bullet from me. Write it from breweries I have drunk, not from a list.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'beer-behind-the-bar',
    part: 'beer',
    n: 15,
    title: 'Beer behind the bar',
    minutes: 4,
    standfirst:
      'The pour, line cleaning, and the cocktails that use beer.',
    body: [
      {
        kind: 'p',
        text: 'Most of what goes wrong with a beer happens after it leaves the brewery, and nearly all of it is fixable behind the bar.',
      },
      { kind: 'h', text: 'The pour' },
      {
        kind: 'steps',
        items: [
          'Start with a clean, cool, wet glass. A glass out of a hot washer kills the head instantly, and any grease left on it does the same.',
          'Hold it at about 45° and open the tap fully. A half-opened tap makes foam, not beer.',
          'Straighten the glass as it fills so the last of the pour lands in the middle and builds the head.',
          'Finish with two or three fingers of foam. It is not waste - the head holds the aroma, and a flat beer smells of nothing.',
        ],
      },
      {
        kind: 'note',
        title: 'The head is the point',
        text: 'A pour with no head has been served without its aroma. If someone asks for it filled to the brim, that is their call, but the flat, slightly stale character they may complain about later starts here.',
      },
      {
        kind: 'p',
        text: 'Serving temperature is the other common fault, in the other direction: most beer is poured too cold. Straight from a chiller at 2°C, a good beer tastes of very little, for the same reason freezer vodka does. Lagers want around 4–7°C; ales and stouts are better at 8–12°C.',
      },
      { kind: 'h', text: 'Beer in a cocktail' },
      {
        kind: 'p',
        text: 'Beer works in a drink for the same reason soda does - it brings carbonation and dilution - with the difference that it also brings bitterness and malt sweetness of its own, so it can do a liqueur\'s job as well as a mixer\'s.',
      },
      {
        kind: 'list',
        items: [
          '**Michelada** - lager, lime, hot sauce and salt. A Bloody Mary\'s lighter relative and a better hangover drink.',
          '**Shandy or radler** - beer and lemonade, roughly half and half.',
          '**Black Velvet** - stout and sparkling wine, layered.',
          '**Beer as the top** - any sour built long and finished with beer instead of soda. A pale ale over a gin sour works better than it sounds.',
        ],
      },
      {
        kind: 'note',
        title: 'Add it last, and never shake it',
        text: 'Carbonation and a sealed shaker do not mix - at best you lose the fizz, at worst the tin comes apart. Build the rest of the drink, then top with beer and fold it through with a bar spoon.',
      },
      {
        kind: 'unsure',
        title: 'Not from the course, and not from experience either',
        text: 'The whole of this part is written from outside the qualification. TODO: line cleaning intervals, keg handling and cellar temperature are things a working bar has strong opinions about and I have none, because I have never run a tap system. If this book is going to claim to cover beer service it needs someone who has.',
      },
    ],
  },
];

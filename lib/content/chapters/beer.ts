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
          '**Water.** Mineral content changes how bitterness reads, which is why Burton pale ales are hoppy and Pilsen lagers are soft. The towns had different water long before anyone knew why it mattered.',
          '**Malt.** Barley, germinated then kilned, which means dried with heat to stop it growing. How hard it is kilned is the dial: pale malt gives bready sweetness, medium gives caramel and toffee, and roasted-to-black gives coffee and chocolate. **Malt is where beer colour comes from** - not from strength, and not from the yeast.',
          '**Hops.** The seasoning. Bitterness to balance malt sweetness, plus aroma. Boiled early they give bitterness and lose aroma; added late or after fermentation they give aroma and almost no bitterness. That timing split is most of what separates a bitter old-school IPA from a modern juicy one.',
          '**Yeast.** Eats the sugar, makes alcohol, and throws off flavour compounds while doing it. The biggest single difference between beers, and the subject of the next chapter.',
        ],
      },
      {
        kind: 'note',
        title: 'Colour is malt, not strength',
        text: 'A dark beer isn\'t necessarily strong, heavy or high in alcohol. Guinness is about 4.2% - lighter than a lot of pale lagers. The colour came out of a kiln, and nothing else follows from it.',
      },
      { kind: 'tool', tool: 'kiln' },
      { kind: 'h', text: 'How it\'s made' },
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
        text: 'Compare that to Part I and the shape is familiar. Beer is the fermented wash a grain whisky would be distilled from, stopped one step early and hopped. That\'s not a coincidence, and it\'s a useful way to connect the two.',
      },
      { kind: 'tool', tool: 'brew' },
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
        text: 'Warm yeast is more active: it throws off esters and phenols, which land as banana, pear, clove and pepper. Cold yeast works slowly and quietly and leaves very little of itself behind. That\'s why a lager tastes clean and a Belgian ale tastes of fruit nobody added.',
      },
      {
        kind: 'p',
        text: '*Lager* is German for "to store", which is the technique rather than a description of the beer. Lagering is cold conditioning, and it\'s the reason the category exists at all: it needed cellars cold enough to hold for weeks, so it stayed a regional Bavarian habit until refrigeration made it possible anywhere.',
      },
      { kind: 'h', text: 'The styles to know' },
      {
        kind: 'list',
        items: [
          '**Pilsner** - pale lager, crisp, noticeably hoppy. The template most mass-market lager copies.',
          '**Pale ale and IPA** - hop-forward ales. IPA is stronger and more bitter historically; the modern hazy version trades bitterness for aroma and tastes almost like juice.',
          '**Stout and porter** - dark ales from roasted malt. Coffee, chocolate, sometimes a dry mineral finish.',
          '**Wheat beer** - a large share of wheat alongside barley. Hazy, soft, and in the German version strongly banana-and-clove from the yeast.',
          '**Sour** - deliberately acidified, by wild yeast or bacteria. The closest beer gets to wine, and the one to put in front of someone who says they don\'t like beer.',
        ],
      },
      { kind: 'h', text: 'New Zealand hops' },
      { kind: 'p', text: 'New Zealand hops are a genuine speciality, and one variety made them so. **Nelson Sauvin**, released in 2000 and named after the grape, tastes of Sauvignon Blanc - gooseberry, white grape, passionfruit - and nothing grown anywhere else does. Two others carry the same white-grape thread with a different fruit on top: **Motueka** is lime, the crushed mojito kind, and **Riwaka** is grapefruit and cut grass, low in bittering acid and so used late or as a dry hop for the aroma. All three come from Nelson, which grows nearly the whole crop.' },
      { kind: 'p', text: 'What you taste in a New Zealand pale ale is usually one of those three - wine, lime or grapefruit - over a malt that stays out of the way. Emerson\'s in Dunedin was the first of the modern breweries, in 1991, and is still the one to hand someone who wants a classic style done properly. Garage Project\'s Pernicious Weed is the Nelson Sauvin showcase, a double IPA that tastes like a hop field. Panhead\'s Supercharger APA is the everyday version of the same idea, and their Port Road Pilsner shows what the hops do in a lager, where there is nothing to hide behind. I have poured all of them.' },
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
        text: 'Most of what goes wrong with a beer happens after it leaves the brewery, and nearly all of it\'s fixable behind the bar.',
      },
      { kind: 'h', text: 'The pour' },
      {
        kind: 'steps',
        items: [
          'Start with a clean, cool, wet glass. A glass out of a hot washer kills the head instantly, and any grease left on it does the same.',
          'Hold it at about 45° and open the tap fully. A half-opened tap makes foam, not beer.',
          'Straighten the glass as it fills so the last of the pour lands in the middle and builds the head.',
          'Finish with two or three fingers of foam. It\'s not waste, because the head holds the aroma, and a flat beer smells of nothing.',
        ],
      },
      { kind: 'tool', tool: 'pour' },
      {
        kind: 'note',
        title: 'Why the head matters',
        text: 'A pour with no head has been served without its aroma. If someone asks for it filled to the brim, that\'s their call, but that is why it goes flat and tastes stale sooner.',
      },
      {
        kind: 'p',
        text: 'Serving temperature is the other common fault, in the other direction: most beer is poured too cold. Straight from a chiller at 2°C, a good beer tastes of very little, for the same reason freezer vodka does. Lagers want around 4–7°C; ales and stouts are better at 8–12°C.',
      },
      { kind: 'h', text: 'Line cleaning' },
      { kind: 'p', text: 'Lines grow yeast and beer stone, and a dirty line is the usual reason a good keg pours badly. Clean them every two weeks: caustic at two per cent, warm, circulated for fifteen minutes, then flushed until a pH strip says the water is clean. An acid clean every few months shifts the beer stone that caustic leaves behind. Strip and soak the taps while the lines are down.' },
      { kind: 'p', text: 'Every clean throws away a full line of beer, plus what it takes to flush the cleaner out. A bar with long runs from the chiller to the tap wastes more beer every fortnight than one with the kegs under the bar. At the Belgian bar it came to $800 to $1,000 a fortnight at sale price, which is the number that makes short lines look cheap.' },
      { kind: 'h', text: 'Kegs and the cellar' },
      { kind: 'p', text: 'A keg is beer under pressure. Too much gas and it foams; too little and it pours flat and goes off in the keg. Temperature decides the rest: a warm keg foams whatever the gas is doing, and a cold keg through a warm line foams at the tap. The keg and the line want to be the same temperature.' },
      { kind: 'p', text: 'Wine has its own temperatures and the beer fridge is not one of them. Sparkling wants 6–8 degrees, white 8–12, red 14–18. A fridge set for beer and soft drink runs at 2–4, and a white served straight from it tastes of nothing until it has sat in the glass for ten minutes. I have worked in places that kept the wine in the beer fridge, and the complaint was always the same: they could not taste it.' },
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
        text: 'Carbonation and a sealed shaker don\'t mix. At best you lose the fizz, at worst the tin comes apart. Build the rest of the drink, then top with beer and fold it through with a bar spoon.',
      },
      { kind: 'tool', tool: 'shaker' },
],
  },
];

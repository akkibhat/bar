import type { Chapter } from '../../types';

/**
 * Part II - The back bar.
 *
 * Eight chapters, one per shelf. The order runs from the spirit with the
 * least to say for itself to the ones that are mostly flavouring: vodka
 * and gin, the aged grains, cane, agave, fruit, then the sweetened and
 * fortified things that sit at the end of the bar.
 *
 * Two of these were not on the course. Agave was skipped entirely despite
 * the Margarita being taught, and bitters were listed under condiments
 * and never explained, so both are written from outside the workbook and
 * say so.
 */
export const BACK_BAR: Chapter[] = [
  /* ================================================================== */
  {
    slug: 'vodka-and-gin',
    part: 'back-bar',
    n: 5,
    title: 'Vodka and gin',
    minutes: 4,
    standfirst:
      'The same neutral spirit twice. One is left alone and one has a hedge thrown at it.',
    body: [
      {
        kind: 'p',
        text: 'These two belong together because they start in the same place: a high-strength neutral spirit off a column still, usually from grain, sometimes from potato or beet. What happens next is the entire difference.',
      },
      { kind: 'h', text: 'Vodka' },
      {
        kind: 'p',
        text: 'Vodka is distilled to 90–96% and filtered specifically to strip flavour out. It is unaged and, in the ideal that the category sells itself on, tastes of nothing. That is a real engineering achievement, and it also makes vodka the least interesting bottle on the shelf to talk about.',
      },
      {
        kind: 'p',
        text: 'What is left after the flavour has gone is texture. A good vodka is soft and slightly viscous; a cheap one is thin and burns. Base material still shows a little — wheat reads clean and slightly sweet, rye peppery, potato oilier and rounder — but at cocktail dilution you are mostly buying mouthfeel.',
      },
      {
        kind: 'note',
        title: 'Where it earns its place',
        text: 'Vodka is the right answer when you want the other ingredients to be the drink. An Espresso Martini works because nothing argues with the coffee. Substituting gin there does not make it more interesting, it makes it a different and worse drink.',
      },
      { kind: 'h', text: 'Gin' },
      {
        kind: 'p',
        text: 'Gin is that same neutral spirit redistilled with botanicals. **Juniper has to lead** — that is the legal definition, and the only thing every gin has in common. Around it sit coriander, angelica root, citrus peel, orris root, cardamom, liquorice, and whatever else the distiller fancies.',
      },
      {
        kind: 'p',
        text: 'It is not aged. Once distillation and flavouring are done the gin is finished, which is why a distillery can be making sellable gin within a week of opening and why so many small producers start there.',
      },
      {
        kind: 'list',
        items: [
          '**London Dry** — the dry, juniper-forward benchmark. A method rather than a place: nothing may be added after distillation but water. This is what a recipe means when it just says "gin".',
          '**Plymouth** — softer, earthier, slightly sweeter. A protected name from one distillery.',
          '**Old Tom** — lightly sweetened, the historical style. What a Tom Collins was originally built on.',
          '**New Western / contemporary** — juniper present but pulled back in favour of citrus or floral botanicals. Fine in its own right, and it will change a Martini underneath you.',
        ],
      },
      {
        kind: 'unsure',
        title: 'Mine to fill in',
        text: 'TODO: New Zealand gin is having a decade and the course said nothing about it. Name the ones I would pour, and what horopito, kawakawa and manuka do to a G&T. From bottles I have poured, not from a shop list.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'whisky',
    part: 'back-bar',
    n: 6,
    title: 'Whisky',
    minutes: 6,
    standfirst:
      'Grain, wood and time. Where the E goes, and what a label is actually promising.',
    body: [
      {
        kind: 'p',
        text: 'Whisky is distilled from a fermented grain mash and aged in wood. Barley, corn, rye and wheat in some combination; the mix is called the mash bill and it sets the character before a single day of ageing.',
      },
      {
        kind: 'p',
        text: 'The spelling is the easiest thing to get right and the thing people fuss over most. **Scotland, Canada and Japan write whisky. Ireland and the United States write whiskey.** The reliable memory aid: countries with an E in the name tend to use the E. Jameson is the exception that proves nothing, since Ireland has one.',
      },
      { kind: 'h', text: 'Malt and grain' },
      {
        kind: 'p',
        text: '**Malting** is the first move: barley is soaked until it starts to germinate, then dried to stop it. Germination converts starch into fermentable sugar; drying halts the process before the grain uses that sugar to grow. If the drying is done over a peat fire, smoke phenols land in the barley and stay there through fermentation, distillation and years of ageing. That is where Islay comes from.',
      },
      {
        kind: 'list',
        items: [
          '**Malt whisky** — from malted barley, pot-distilled. Where the flavour is.',
          '**Grain whisky** — from any grain, column-distilled, lighter and cheaper.',
          '**Single malt** — malt whisky from one distillery. "Single" means one distillery, not one barrel and not one year.',
          '**Blended** — malt and grain mixed, usually across many distilleries. The blender\'s job is consistency: a bottle this year has to taste like a bottle last year.',
          '**Single cask** — one barrel, bottled on its own. Genuinely one barrel.',
        ],
      },
      {
        kind: 'note',
        title: 'What an age statement means',
        text: 'The number on the bottle is the age of the *youngest* whisky in it, not the average. A 12-year-old blend may contain much older stock; it may not contain anything younger than twelve. No number at all — "no age statement" — means the blender wanted the freedom not to tell you.',
      },
      { kind: 'h', text: 'Wood, and the angels' },
      {
        kind: 'p',
        text: 'A barrel holds around 200 litres, and roughly 2% of it evaporates every year. That loss is called the angels\' share, and it compounds: a whisky sitting for twenty years has lost a serious fraction of the cask before anyone opens it. This is most of why old whisky is expensive. The rest is that the distiller has had money tied up in a warehouse for two decades.',
      },
      {
        kind: 'p',
        text: 'American whiskey must go into **new charred oak**, which is why bourbon is sweet, vanilla-heavy and quick to take colour. Scotch mostly goes into barrels that have already held something else — ex-bourbon casks, which the Americans cannot legally reuse, and sherry butts, which give the dried-fruit character.',
      },
      {
        kind: 'table',
        head: ['Style', 'Grain', 'Wood', 'Reads as'],
        rows: [
          ['Bourbon', 'At least 51% corn', 'New charred oak', 'Sweet, vanilla, caramel'],
          ['Rye (US)', 'At least 51% rye', 'New charred oak', 'Dry, peppery, spiced'],
          ['Scotch single malt', 'Malted barley', 'Used casks', 'Varies enormously by region'],
          ['Irish', 'Barley, often unmalted too', 'Used casks', 'Light, smooth, usually triple-distilled'],
          ['Japanese', 'Barley, corn', 'Used casks, sometimes mizunara', 'Precise, restrained'],
        ],
      },
      {
        kind: 'unsure',
        title: 'Check before quoting',
        text: 'TODO: my notes have "barrel 760–800% of task" and "72% evaporate per year", which are both garbled — the numbers I have written down do not match any figure I can find. The 2%-a-year evaporation above is the standard one. Find what I meant. Also confirm what the Japanese producers do with mizunara before I write about it.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'rum',
    part: 'back-bar',
    n: 7,
    title: 'Rum',
    minutes: 4,
    standfirst:
      'Sugarcane, and the least regulated shelf in the bar. Colour tells you almost nothing.',
    body: [
      {
        kind: 'p',
        text: 'Rum is distilled from sugarcane — either from molasses, the thick residue left after sugar is crystallised out, or from fresh-pressed cane juice. Molasses is the usual route and gives the deep, slightly funky character most people mean by rum. Fresh juice gives *rhum agricole*, mostly from Martinique, which tastes grassy and vegetal and surprises people expecting sweetness.',
      },
      {
        kind: 'p',
        text: 'The course taught rum in three colours. Learn the framing, then distrust it.',
      },
      {
        kind: 'list',
        items: [
          '**Light or white** — filtered after distillation to strip colour back out. Slight aroma, clean. The mixing rum: Daiquiri, Mojito.',
          '**Gold or amber** — some time in wood, or caramel, or both. Medium-bodied and smoother.',
          '**Dark** — long in charred casks, often heavily caramel-coloured. Meant for drinking neat or for standing up in a tiki build.',
        ],
      },
      {
        kind: 'note',
        title: 'Why colour lies here more than anywhere',
        text: 'Rum has almost no international category law. A white rum may have been aged for years and then filtered clear; a dark rum may be a young spirit with caramel in it. Two bottles of the same shade can be entirely different products, and no standard forces the label to admit it. Producer and country tell you more than colour does.',
      },
      {
        kind: 'unsure',
        title: 'Worth adding',
        text: 'TODO: the course never mentioned that plenty of rum is sweetened after distillation, sometimes heavily, and that some producers are open about it while others are not. Add a line on the regional styles: Jamaican high-ester funk against Spanish-style *ron*. That distinction changes what a drink tastes like more than colour does.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'agave',
    part: 'back-bar',
    n: 8,
    title: 'Agave: tequila and mezcal',
    minutes: 5,
    standfirst:
      'The shelf the course skipped, while teaching the Margarita. A plant that takes years to be ready and a spirit that is mostly misunderstood.',
    body: [
      {
        kind: 'p',
        text: 'The workbook covers the Margarita and never covers tequila. This chapter fills that in from outside the course, so weigh it accordingly.',
      },
      {
        kind: 'p',
        text: 'Agave is not a cactus. It is a succulent, and the part that matters is the *piña* — the dense core left when the spines are cut away, which looks like a pineapple and weighs as much as a person. A blue agave takes six to eight years before it can be harvested. No other major spirit waits that long before fermentation even starts.',
      },
      {
        kind: 'p',
        text: 'The sugar in agave is stored as inulin, which yeast cannot eat, so the piñas are cooked to break it down. **How they are cooked is the whole difference between tequila and mezcal.** Tequila steams them in ovens or autoclaves. Mezcal roasts them in a pit lined with hot rocks and covered over, which is where the smoke comes from — it is not a peat-style drying step, it is the cooking itself.',
      },
      {
        kind: 'table',
        head: ['Term', 'Means'],
        rows: [
          ['Blanco / silver', 'Unaged, or under two months. The clearest view of the agave.'],
          ['Reposado', 'Two months to a year in oak. Softer, faint vanilla.'],
          ['Añejo', 'One to three years. Darker, closer to a whisky in feel.'],
          ['Extra añejo', 'Over three years. Sipping territory.'],
          ['100% agave', 'What you want. Anything not saying this may be up to 49% other sugars.'],
        ],
      },
      {
        kind: 'note',
        title: 'The one thing to check on a label',
        text: 'If the bottle does not say **100% agave**, it is a *mixto* — legally up to 49% of the fermentable sugar can come from somewhere else, usually cane. That is the stuff behind most bad memories of tequila. The difference in a Margarita is not subtle.',
      },
      {
        kind: 'p',
        text: 'Tequila is a denomination: it can only be made in Jalisco and a few neighbouring municipalities, and only from blue agave. Mezcal covers a much wider area and around thirty permitted agave varieties, so it is a far broader category — all tequila would technically qualify as mezcal if the producers wanted the label.',
      },
      {
        kind: 'unsure',
        title: 'Not from the course',
        text: 'None of this chapter is from the workbook — it is assembled from category rules and general reading. I have not visited a distillery and I am not confident enough on the sustainability argument around agave supply to write it. Verify the ageing bands against a current source before relying on them.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'brandy',
    part: 'back-bar',
    n: 9,
    title: 'Brandy',
    minutes: 5,
    standfirst:
      'Distilled fruit. Cognac is the famous one, and the rest of the family is more interesting than it gets credit for.',
    body: [
      {
        kind: 'p',
        text: 'Brandy is distilled wine. Widen that to distilled fruit and you take in most of the family — apple, pear, plum, cherry. It is the oldest of the mixing spirits and it spent most of the twentieth century being thought of as something a grandfather drinks, which is unfair to it.',
      },
      { kind: 'h', text: 'The grape ones' },
      {
        kind: 'list',
        items: [
          '**Cognac** — from Charente in western France, twice pot-distilled, aged in French oak. The benchmark.',
          '**Armagnac** — south-west France, usually column-distilled once, often more rustic and more interesting per dollar.',
          '**Pisco** — Chile and Peru, distilled to strength with no water added afterwards and no wood. Peruvian pisco leans on muscat grapes and is aromatic; the two countries disagree about almost everything else concerning it.',
          '**Grappa** — Italian, distilled from pomace, the skins and pips left after pressing. Sharp and rustic.',
        ],
      },
      { kind: 'h', text: 'The fruit ones' },
      {
        kind: 'p',
        text: '**Calvados** is apple or pear brandy from Normandy — cider distilled and aged, and a genuinely good substitute in a lot of whisky drinks. Eaux-de-vie cover everything else: clear, unaged, intensely of their fruit.',
      },
      {
        kind: 'table',
        head: ['Mark', 'Youngest spirit in the blend'],
        rows: [
          ['VS — Very Special', 'Two years'],
          ['VSOP — Very Superior Old Pale', 'Four years'],
          ['XO — Extra Old', 'Ten years'],
        ],
      },
      {
        kind: 'p',
        text: 'The same catch as with whisky: the mark describes the youngest component, not the average. A VSOP can hold a lot of much older spirit.',
      },
      {
        kind: 'note',
        title: 'Serving it',
        text: 'A snifter, at room temperature or barely warmed in the hand. Not set on fire, not heated over a flame — that boils off the aromatics you paid for. Ice and a splash of water is a perfectly respectable way to drink one and nobody in Cognac would mind.',
      },
      {
        kind: 'p',
        text: 'In a cocktail it goes into a Sidecar, a Brandy Alexander, a Sazerac and a Mint Julep — the last two originally, before American whiskey took them over during a phylloxera-driven brandy shortage.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'liqueurs',
    part: 'back-bar',
    n: 10,
    title: 'Liqueurs',
    minutes: 5,
    standfirst:
      'A spirit, sugar, and something to taste of. The most crowded shelf, and the one that does the most work in a recipe.',
    body: [
      {
        kind: 'p',
        text: 'A liqueur is a spirit that has been sweetened and flavoured. That is the whole definition. Most use a neutral base so the flavouring is the point; some use brandy, whisky or rum, and those tend to be the ones with a house secret attached.',
      },
      {
        kind: 'p',
        text: 'The flavouring can come from almost anywhere, and the categories are worth knowing because they predict how a bottle will behave in a drink.',
      },
      {
        kind: 'list',
        items: [
          '**Herbs** — often with a medicinal past. Mint became crème de menthe as a digestive; thyme was a stimulant and antiseptic; sage was supposed to bring down a fever.',
          '**Barks** — cinnamon, sandalwood, angostura.',
          '**Flowers** — chamomile, lavender, orange blossom, rose, violet.',
          '**Roots** — angelica, liquorice, ginger, turmeric.',
          '**Beans and kernels** — coffee, cocoa, almond, vanilla.',
          '**Fruit** — blackcurrant in cassis, and every other fruit you can name.',
          '**Egg** — yolk, in advocaat.',
        ],
      },
      { kind: 'h', text: 'The ones that turn up in recipes' },
      {
        kind: 'table',
        head: ['Bottle', 'What it is', 'Where it goes'],
        rows: [
          ['Triple sec', 'Dry, clear orange liqueur from bitter and sweet orange peel. *Sec* is French for dry.', 'Margarita, Cosmopolitan, White Lady'],
          ['Cointreau', 'A triple sec, made to a higher strength and cleaner.', 'Anywhere triple sec is called for and the drink is short'],
          ['Grand Marnier', 'Orange, but on a cognac base rather than neutral.', 'Where you want weight behind the orange'],
          ['Kahlúa', 'Mexican coffee liqueur, rum-based, sugar and vanilla.', 'Espresso Martini, White Russian, B52'],
          ['Baileys', 'Irish cream — cream, cocoa and Irish whiskey.', 'B52, and after dinner'],
          ['Drambuie', 'Scotch, honey, herbs and spice.', 'Rusty Nail'],
          ['Amaretto', 'Almond, usually from apricot kernels rather than almonds.', 'Amaretto Sour'],
          ['Midori', 'Musk melon, from Suntory. Aggressively green.', 'Where you want the colour'],
          ['Frangelico', 'Hazelnut, from Piedmont.', 'After dinner, with coffee'],
          ['Galliano', 'Vanilla-forward, with anise, ginger, citrus and juniper.', 'Harvey Wallbanger'],
        ],
      },
      {
        kind: 'note',
        title: 'Reading a spec',
        text: 'When a recipe names a specific bottle rather than a category — Cointreau instead of triple sec, Chambord instead of raspberry liqueur — it usually means the sugar level matters. Swapping across is fine, but taste and expect to adjust the citrus.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'aperitif-digestif-fortified',
    part: 'back-bar',
    n: 11,
    title: 'Aperitifs, digestifs and fortified wine',
    minutes: 5,
    standfirst:
      'The bottles that bracket a meal, and the wines with spirit added. Half the modern bar list is built out of this shelf.',
    body: [
      {
        kind: 'p',
        text: 'An **aperitif** is what you drink before eating, and it is meant to sharpen the appetite — dry, usually bitter, usually not very strong. A **digestif** comes afterwards and is meant to settle things: sweeter, heavier, often taken neat.',
      },
      {
        kind: 'p',
        text: 'The distinction is cultural rather than chemical, and it is useful anyway, because it predicts where a bottle belongs in an evening. Vermouth, dry sherry and a Negroni are aperitifs. Cognac, Drambuie, Kahlúa, limoncello and a Rusty Nail are digestifs.',
      },
      { kind: 'h', text: 'Fortified wine' },
      {
        kind: 'p',
        text: 'Fortified wine is wine with a spirit — usually grape spirit — added to it. That raises the strength to roughly 15–22%, and if it is added *during* fermentation it also kills the yeast early, leaving the unfermented sugar behind. Which is why the sweet ones are sweet: the sweetness was never fermented out.',
      },
      {
        kind: 'list',
        items: [
          '**Sherry** — from Jerez in Spain, and drier than its reputation. Fino and manzanilla are bone dry and want serving cold; oloroso and cream sherries are richer. Fino goes into a Bloody Mary and improves it.',
          '**Vermouth** — aromatised wine, flavoured with botanicals. Dry (French) is pale and crisp; sweet or *rosso* (Italian) is red and spiced; bianco sits between them. It is wine, so **it goes off** — fridge, and finish it within a month.',
          '**Port** — Portuguese and sweet. Ruby is young and fruity; tawny is wood-aged, nutty and dry-finishing; white port is made from white grapes and is genuinely good chilled with tonic. Vintage port is bottle-aged and can run thirty years.',
          '**Madeira** — from the island, and deliberately heated during maturation, which gives it a burnt, caramelised character and makes it almost indestructible once open.',
        ],
      },
      {
        kind: 'note',
        title: 'The mistake everyone makes',
        text: 'Vermouth is treated like a spirit and kept on the back bar at room temperature for a year. It is a wine. An oxidised bottle is the single most common reason a home Martini or Manhattan tastes flat and slightly stale, and no amount of good gin fixes it.',
      },
      {
        kind: 'p',
        text: 'The bitter aperitifs — Campari, Aperol, and the amari behind them — are their own small world, and they carry the Negroni, the Boulevardier, the Contessa and the spritz between them. They are covered properly in the next chapter, since bitterness is a structural ingredient rather than a flavour you add at the end.',
      },
    ],
  },

  /* ================================================================== */
  {
    slug: 'bitters',
    part: 'back-bar',
    n: 12,
    title: 'Bitters',
    minutes: 4,
    standfirst:
      'In the 1806 definition, in half the recipes in this book, and listed in the course workbook under condiments with no explanation at all.',
    body: [
      {
        kind: 'p',
        text: 'Angostura appears in the Old Fashioned, the Manhattan, the Pisco Sour, the Champagne Cocktail and a dozen others. The workbook lists it beside the Tabasco and the Worcestershire sauce and never says what it is. So: bitters are a high-proof spirit infused with bark, root, and aromatic botanicals to the point of being undrinkable on their own, used in dashes.',
      },
      {
        kind: 'p',
        text: 'They exist because bitterness is a structural element, not a flavour. Sweet and sour can balance each other into something flat and cloying; a few dashes of bitters give the drink an edge to push against and pull the other elements into focus. The usual analogy is salt in cooking, and it is a good one — you do not taste it as itself, you notice its absence.',
      },
      {
        kind: 'list',
        items: [
          '**Aromatic** — Angostura is the reference. Clove, cinnamon, gentian. If a recipe just says "bitters", it means this.',
          '**Orange** — brighter and citrus-led. Lifts gin and lightens a Manhattan.',
          '**Peychaud\'s** — from New Orleans, lighter and anise-forward, faintly floral. The Sazerac needs it specifically.',
          '**Everything else** — celery, cardamom, chocolate, grapefruit. Useful once the first three are on the shelf, not before.',
        ],
      },
      {
        kind: 'note',
        title: 'Bitters, amari, and why the words collide',
        text: 'Dashing bitters and bitter liqueurs are different things that share a name. Angostura goes in at 2–3 dashes. Campari and Aperol are *amari* — bitter liqueurs, sweetened, low enough in strength to pour by the 30 ml. Both bring bitterness; one is a seasoning and one is an ingredient.',
      },
      {
        kind: 'p',
        text: 'A bottle of Angostura will outlive most of the bar — it is roughly 45% alcohol and used a few drops at a time. The distinctive oversized paper label is a printing error nobody ever corrected.',
      },
      {
        kind: 'unsure',
        title: 'Not from the course',
        text: 'Written from outside the workbook, which never covered this. TODO: the claim about the Angostura label being an unfixed mistake is the story the company itself tells, and I have not seen it sourced anywhere independent. Treat it as a nice anecdote rather than a fact until I can check it.',
      },
    ],
  },
];

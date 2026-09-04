import type { Chapter } from '../../schema';

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
    minutes: 5,
    standfirst:
      'Same neutral spirit, two directions. What makes each one what it is.',
    body: [
      {
        kind: 'p',
        text: 'These two belong together because they start the same: a high-strength neutral spirit off a column still, usually from grain, sometimes from potato or beet. What happens next is the difference.',
      },
      { kind: 'h', text: 'Vodka' },
      {
        kind: 'p',
        text: 'Vodka is distilled to 90–96% and filtered specifically to strip flavour out. It\'s not aged and tastes of nothing. That\'s an engineering achievement, and it also leaves little to say about the bottle.',
      },
      {
        kind: 'p',
        text: 'What\'s left after the flavour has gone is texture. A good vodka is soft and slightly viscous; a cheap one is thin and burns. Base material still shows a little - wheat reads clean and slightly sweet, rye is peppery, potato is oilier and rounder - but at cocktail dilution you\'re mostly buying mouthfeel.',
      },
      {
        kind: 'note',
        title: 'Where vodka is the right call',
        text: 'Vodka is the right answer when you want the other ingredients to be the drink. An Espresso Martini works because nothing argues with the coffee. Substituting gin makes a different drink, and a worse one.',
      },
      { kind: 'h', text: 'Gin' },
      {
        kind: 'p',
        text: 'Gin is that same neutral spirit, redistilled with botanicals. The law puts a floor under the base where vodka has none: it has to come off the still at 96% or higher, so whatever it was made from is gone by the time the botanicals go in. **Juniper has to lead** - that\'s the legal definition, and the only thing every gin has in common. Around it sit coriander, angelica root, citrus peel, orris root, cardamom, liquorice, and whatever else the distiller chooses.',
      },
      {
        kind: 'p',
        text: 'It\'s not aged. Once distillation and flavouring are done the gin is finished, which is why a distillery can be making sellable gin within a week of opening and why so many small producers start there.',
      },
      { kind: 'h', text: 'How the botanicals get in' },
      {
        kind: 'p',
        text: 'There are two ways, and they make different gins. **Maceration** steeps the botanicals in the spirit and then redistils the lot; it pulls out the heavier, more resinous flavours and gives the classic juniper-forward weight. **Vapour infusion** hangs them in a basket high in the still so only the rising vapour passes through them, which takes the lighter aromatics and leaves the heavy ones behind. That is most of why a floral contemporary gin tastes the way it does.',
      },
      {
        kind: 'p',
        text: 'Either way the spirit comes off around 75% and is diluted to bottling strength with water. Nothing else may be added to a London Dry after that point.',
      },
      {
        kind: 'list',
        items: [
          '**London Dry** - the dry, juniper-forward benchmark. A method rather than a place: nothing may be added after distillation but water. This is what a recipe means when it just says "gin".',
          '**Plymouth** - softer, earthier, slightly sweeter. A protected name from one distillery.',
          '**Old Tom** - lightly sweetened, the historical style. What a Tom Collins was originally built on.',
          '**New Western / contemporary** - juniper present but pulled back in favour of citrus or floral botanicals. Fine in its own right, and it\'ll change a Martini.',
        ],
      },
      { kind: 'h', text: 'New Zealand gin' },
      { kind: 'p', text: 'New Zealand gin has had a decade, and what makes it a category rather than a label is the native bush. Three botanicals turn up again and again, and they do different jobs.' },
      {
        kind: 'list',
        items: [
          '**Horopito**, the pepper tree - heat and a green, resinous bite. What grains of paradise do in a London Dry, but hotter and more obviously from a forest.',
          '**Kawakawa** - peppery and faintly numbing, related to kava. The one that most changes a G&T.',
          '**Mānuka**, usually the leaf - tea-like and soft. Where a gin tastes of the beach rather than the bush, this is often why.',
        ],
      },
      { kind: 'p', text: 'I have poured Scapegrace, The Source from Cardrona, Waiheke Distilling Co, Dancing Sands and Sea Lovers, among others. Scapegrace - the Black especially - and Dancing Sands are the two I would put in a G&T over an imported gin without thinking about it; the Dancing Sands wasabi gin is the one I would hand someone who thinks they know what gin tastes like; and Sea Lovers is a favourite, because it tastes like the ocean in a good way. Others worth knowing by what they put in the still:' },
      {
        kind: 'list',
        items: [
          '**Reid + Reid**, Martinborough - all three natives, and the most kawakawa-forward of the lot.',
          '**Little Biddy**, West Coast - horopito with rimu and Douglas fir behind it. Spiced citrus and warm resin.',
          '**Dancing Sands**, Golden Bay - horopito and kelp in the dry gin, and the wasabi gin off local wasabi root.',
          '**Sea Lovers**, Auckland - the marine one: kelp and Waiheke oyster shell over rosemary and lime. Savoury and faintly salty.',
          '**Lighthouse**, Martinborough - nine botanicals built on Yen Ben lemon rather than bush. New Zealand grown, not New Zealand bush.',
          '**Broken Heart**, Queenstown - eleven botanicals and Mt Aspiring water. More classic than native.',
        ],
      },
      { kind: 'p', text: 'A kawakawa-led gin should sit well in a Negroni - the pepper reads as spice under the Campari rather than fighting it, and the vermouth rounds off the numbing edge. Reid + Reid is the one to try it with.' },
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
      'Malt and grain + smoke + wood and time = what the label promises.',
    body: [
      {
        kind: 'p',
        text: 'Whisky is distilled from a fermented grain mash and aged in wood. Barley, corn, rye and wheat in some combination; the mix is called the mash bill and it sets the character before it has aged even a single day.',
      },
      {
        kind: 'p',
        text: 'The spelling gets fussed over more than it deserves. **Scotland, Canada and Japan write whisky. Ireland and the United States write whiskey.** The memory aid: countries with an E in the name tend to use the E. In Scotland the spelling is enforced: under the Scotch Whisky Regulations a bottle of Scotch has to say whisky, and whiskey on a Scotch label is illegal.',
      },
      { kind: 'h', text: 'Malt and grain' },
      {
        kind: 'p',
        text: '**Malting** is the first move: barley is soaked until it starts to germinate, then dried to stop it. Germination converts starch into fermentable sugar; drying halts the process before the grain uses that sugar to grow. If the drying is done over a peat fire, the smoke leaves compounds called phenols in the barley - they\'re what tastes of smoke and tar - and they stay there through fermentation, distillation and years of ageing. That\'s where Islay comes from.',
      },
      { kind: 'tool', tool: 'peat' },
      {
        kind: 'list',
        items: [
          '**Malt whisky** - from malted barley, pot-distilled. Richer and more cereal-tasting, and where most of the flavour is.',
          '**Grain whisky** - from unmalted grain, usually corn or wheat, with a little malt in the mash to supply the enzymes. Column-distilled, lighter and cheaper.',
          '**Single pot still** - the Irish style: malted and unmalted barley together, pot-distilled. The unmalted share gives it an oily, spicy texture.',
          '**Single malt** - malt whisky from one distillery. "Single" means one distillery, not one barrel and not one year.',
          '**Blended** - malt and grain mixed, usually across many distilleries. The blender\'s job is consistency: a bottle this year has to taste like a bottle last year.',
          '**Single cask** - one barrel, bottled on its own. Here "single" does mean one barrel.',
        ],
      },
      {
        kind: 'note',
        title: 'What an age statement means',
        text: 'The number on the bottle is the age of the *youngest* whisky in it, not the average. A 12-year-old blend may contain much older stock; it may not contain anything younger than twelve. No number at all - "no age statement" - usually means some of the whisky in it is young, and the blender would rather say nothing than print a low number. That isn\'t a mark against the bottle by itself; plenty of good whisky has no age on it.',
      },
      { kind: 'h', text: 'Wood, and the angels' },
      {
        kind: 'p',
        text: 'A barrel holds around 200 litres, and roughly 2% of it evaporates every year. That loss is called the angels\' share, and it compounds: a whisky sitting for twenty years has lost a serious fraction of the cask before anyone opens it. This is most of why old whisky is expensive. The rest is that the distiller has had money tied up in a warehouse for two decades. The cask earns it: the usual figure is that 60 to 80 per cent of what you taste comes from the wood rather than the spirit, which is why one distillate in two barrels makes two whiskies.',
      },
      { kind: 'tool', tool: 'angelsShare' },
      {
        kind: 'p',
        text: 'American whiskey must go into **new charred oak**, which is why bourbon is sweet, vanilla-heavy and quick to take colour. Bourbon has three other numbers attached to it, all of them limits rather than recipes: a mash of at least **51 percent corn**, distilled to no more than **160 proof**, and into the barrel at no more than **125 proof**. No colouring is permitted. Scotch mostly goes into barrels that have already held something else - ex-bourbon casks, which the Americans can\'t legally reuse, and sherry butts, which give the dried-fruit character. Japanese producers also use mizunara, a native oak so porous and hard to coop that the staves need three years\' drying and the casks still leak; what it gives - sandalwood, coconut, incense - takes fifteen years or more in the wood to show.',
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
],
  },

  /* ================================================================== */
  {
    slug: 'rum',
    part: 'back-bar',
    n: 7,
    title: 'Rum',
    minutes: 6,
    standfirst:
      'Cane spirit, and the loosest rules on the shelf. Colour tells you little, and cachaça is its own thing.',
    body: [
      {
        kind: 'p',
        text: 'Rum is distilled from sugarcane - either from molasses, the thick residue left after sugar is crystallised out, or from fresh-pressed cane juice. Molasses is the usual route and gives the deep, slightly funky character most people mean by rum. The cane-juice spirits are a different thing, and they are at the end of this chapter.',
      },
      { kind: 'tool', tool: 'molasses' },
      {
        kind: 'p',
        text: 'Rum is usually sorted into three colours. The framing is worth knowing, but it doesn\'t tell you much.',
      },
      {
        kind: 'list',
        items: [
          '**Light or white** - filtered after distillation to take the colour back out, and in Cuba and Puerto Rico it has to be aged first, so a white rum is not necessarily an unaged one. Light aroma, clean taste. The one for mixing: Daiquiri, Mojito.',
          '**Gold or amber** - some time in wood, or caramel, or both. Medium-bodied and smoother.',
          '**Dark** - long in charred casks, often heavily caramel-coloured. Meant for drinking neat, or for a tiki drink like a Mai Tai, where it has to hold its own against a lot of juice and syrup.',
        ],
      },
      {
        kind: 'note',
        title: 'What colour doesn\'t tell you',
        text: 'Rum has almost no international category law. A white rum may have been aged for years and then filtered clear; a dark rum may be a young spirit with caramel in it. Two bottles of the same shade can be different products, and no standard forces the label to admit it. Producer and country tell you more than colour does.',
      },
      {
        kind: 'h',
        text: 'Added sugar, and the four traditions',
      },
      {
        kind: 'p',
        text: 'Plenty of rum is sweetened after distillation, and nothing obliges a producer to say so. The EU allows up to 20 grams a litre, which is enough to change the texture of a drink and most of its finish. Jamaica\'s geographical indication forbids it outright, Barbados works to the CARICOM standard, and much of the rest of the world permits it quietly. The Swedish and Finnish state monopolies lab-test what they stock and publish the sugar figures, which is the most reliable way to find out what is in a bottle.',
      },
      {
        kind: 'p',
        text: 'Where a rum comes from and what it was distilled in tell you far more than its colour, and the traditions split along old colonial lines.',
      },
      {
        kind: 'list',
        items: [
          '**Jamaican** - pot still, long fermentations and deliberately high ester levels. That is the funk: overripe banana and something close to glue, in the best sense. Hampden and Worthy Park sit at the far end of it.',
          '**Spanish-style *ron*** - column still, lighter, aged in the heat and often sweetened. Cuba, Puerto Rico, Venezuela, Guatemala.',
          '**English-style** - Demerara from Guyana, and the Barbados blends. Pot and column together: richer than the Spanish style, drier than the sweetened ones.',
          '**French *rhum agricole*** - distilled from fresh cane juice instead of molasses, so it starts from a different raw material rather than a different method. Grassy and vegetal, and Martinique has an AOC for it.',
        ],
      },
      { kind: 'h', text: 'Cachaça, which is not rum' },
      {
        kind: 'p',
        text: 'Brazilian, made from fresh cane juice rather than molasses, and one of the oldest spirits in the New World. The law calls it its own category and it earns that three times over.',
      },
      {
        kind: 'list',
        items: [
          '**It ferments on airborne yeast.** No pitched strain - whatever is in the air at the mill does the work, which is why one distillery does not taste like the next.',
          '**The cane fires the still.** The crushed solids left after pressing are burned to heat the kiln, so the plant runs on its own waste.',
          '**It is not aged in oak.** Unaged cachaça rests in steel. Aged cachaça goes into Brazilian hardwoods - amburana most famously, which gives cinnamon and vanilla, and thirty-odd others that oak has no equivalent for.',
        ],
      },
      {
        kind: 'p',
        text: '*Rhum agricole*, from Martinique, is the other cane-juice spirit and the same idea from a French colonial direction: grassy and vegetal where a molasses rum is rich. If a recipe calls for cachaça, an agricole is the nearest thing on most shelves.',
      },
      {
        kind: 'unsure',
        title: 'Written from reading, not from tasting',
        text: 'Written up now - the sweetening, the disclosure gap and the four traditions are all in the chapter. TODO: I have not tasted Hampden or Worthy Park side by side against a Spanish-style ron, and that comparison is the one that would make the point stick.'
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
      'Taught on the course but never written down. Agave, tequila and mezcal.',
    body: [
{
        kind: 'p',
        text: 'Agave is not a cactus. It\'s a succulent, and the part that matters is the *piña* - the dense core left when the spines are cut away, which looks like a pineapple and weighs as much as a person. A blue agave takes six to eight years before it can be harvested. No other major spirit waits that long before fermentation even starts.',
      },
      {
        kind: 'p',
        text: 'The sugar in agave is stored as inulin, which yeast can\'t eat, so the piñas are cooked to break it down. **How they\'re cooked is the main difference between tequila and mezcal.** Tequila steams them in ovens or autoclaves. Mezcal roasts them in a pit lined with hot rocks and covered over, which is a hangi by another name, and which is where the smoke comes from. It is not a peat-style drying step, it is the cooking itself.',
      },
      { kind: 'tool', tool: 'agave' },
      {
        kind: 'table',
        head: ['Term', 'Means'],
        rows: [
          ['Blanco / silver', 'Unaged, or under two months. The clearest view of the agave.'],
          ['Reposado', 'Two months to a year in oak. Softer, faint vanilla.'],
          ['Añejo', 'One to three years. Darker, closer to a whisky in feel.'],
          ['Extra añejo', 'Over three years. Sipping territory.'],
          ['Joven / oro / gold', 'Usually a blanco with caramel in it, coloured to look aged. Occasionally a real blend.'],
          ['Cristalino', 'An añejo filtered back to clear. You pay for the ageing and filter out some of what it did.'],
          ['**100% agave**', '**What you want. Anything not saying this may be up to 49% other sugars.**'],
        ],
      },
      {
        kind: 'note',
        title: 'The one thing to check on a label',
        text: 'If the bottle doesn\'t say **100% agave**, it\'s a *mixto*: legally up to 49% of the fermentable sugar can come from somewhere else, usually cane. That\'s behind most bad memories of tequila. The difference in a Margarita is obvious.',
      },
      {
        kind: 'p',
        text: 'Tequila is a denomination: it can only be made in Jalisco and a few neighbouring municipalities, and only from blue agave. Mezcal covers a much wider area and around thirty permitted agave varieties, so it\'s a far broader category. All tequila would technically qualify as mezcal if the producers wanted the label.',
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
      'Distilled fruit. Cognac and Armagnac, then the fruit brandies.',
    body: [
      {
        kind: 'p',
        text: 'Brandy is distilled wine. Widen that to distilled fruit and you take in most of the family - apple, pear, plum, cherry. It\'s the oldest of the mixing spirits and spent most of the twentieth century being thought of as something a grandfather drinks.',
      },
      { kind: 'h', text: 'The grape ones' },
      {
        kind: 'list',
        items: [
          '**Cognac** - from Charente in western France, twice pot-distilled, aged in French oak. The benchmark.',
          '**Armagnac** - south-west France, usually column-distilled once, often more rustic and more interesting per dollar.',
          '**Pisco** - Chile and Peru, distilled to strength with no water added afterwards and no wood. Peruvian pisco leans on muscat grapes and is aromatic; the two countries disagree about almost everything else concerning it.',
          '**Grappa** - Italian, distilled from pomace, the skins and pips left after pressing. Sharp and rustic.',
        ],
      },
      { kind: 'h', text: 'The fruit ones' },
      {
        kind: 'p',
        text: '**Calvados** is apple or pear brandy from Normandy - cider distilled and aged, and a good substitute in a lot of whisky drinks. The rest are eaux-de-vie, French for "water of life": clear, unaged fruit brandies that taste intensely of their fruit and of nothing else.',
      },
      {
        kind: 'table',
        head: ['Mark', 'Youngest spirit in the blend'],
        rows: [
          ['VS - Very Special', 'Two years'],
          ['VSOP - Very Superior Old Pale', 'Four years'],
          ['XO - Extra Old', 'Ten years'],
        ],
      },
      {
        kind: 'p',
        text: 'The same catch as with whisky: the mark describes the youngest component, not the average. A VSOP can hold a lot of much older spirit.',
      },
      {
        kind: 'note',
        title: 'Serving it',
        text: 'A snifter, at room temperature or barely warmed in the hand. Not set on fire, not heated over a flame, because that boils off the aromatics. Ice and a splash of water is a perfectly respectable way to drink one.',
      },
      {
        kind: 'p',
        text: 'In a cocktail it goes into a Sidecar, a Brandy Alexander, a Sazerac and a Mint Julep - the last two originally, before American whiskey took them over during the brandy shortage that followed phylloxera, the vine louse that wiped out most of Europe\'s vineyards in the late 1800s.',
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
      'Spirit, sugar, flavour. The crowded shelf, and the ones recipes always ask for.',
    body: [
      {
        kind: 'p',
        text: 'A liqueur is a spirit that has been sweetened and flavoured. That\'s the definition. Most use a neutral base so the flavouring carries the bottle; some use brandy, whisky or rum, and those tend to be the older named brands.',
      },
      {
        kind: 'p',
        text: 'The flavouring can come from almost anywhere, and the categories are worth knowing because they predict how a bottle will behave in a drink.',
      },
      {
        kind: 'list',
        items: [
          '**Herbs** - often with a medicinal past. Mint became crème de menthe as a digestive; thyme was a stimulant and antiseptic; sage was supposed to bring down a fever.',
          '**Barks** - cinnamon, sandalwood, angostura.',
          '**Flowers** - chamomile, lavender, orange blossom, rose, violet.',
          '**Roots** - angelica, liquorice, ginger, turmeric.',
          '**Beans and kernels** - coffee, cocoa, almond, vanilla.',
          '**Fruit** - blackcurrant in cassis, and every other fruit you can name.',
          '**Egg** - yolk, in advocaat.',
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
          ['Baileys', 'Irish cream - cream, cocoa and Irish whiskey.', 'B52, and after dinner'],
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
        text: 'When a recipe names a specific bottle rather than a category - Cointreau instead of triple sec, Chambord instead of raspberry liqueur - it usually means the sugar level matters. Swapping across is fine, but taste and expect to adjust the citrus.',
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
      'Vermouth, amaro, sherry, port. The bottles behind the Martini, the Negroni and the spritz.',
    body: [
      {
        kind: 'p',
        text: 'An **aperitif** is what you drink before eating, and it\'s meant to sharpen the appetite - dry, usually bitter, usually not very strong. A **digestif** comes afterwards and is meant to settle things: sweeter, heavier, often taken neat.',
      },
      {
        kind: 'p',
        text: 'The distinction is cultural rather than chemical, and it\'s useful anyway, because it predicts where a bottle belongs in an evening. Vermouth, dry sherry and a Negroni are aperitifs. Cognac, Drambuie, Kahlúa, limoncello and a Rusty Nail are digestifs.',
      },
      { kind: 'h', text: 'Fortified wine' },
      {
        kind: 'p',
        text: 'Fortified wine is wine with a spirit - usually grape spirit - added to it. That raises the strength to roughly 15–22%, and if it\'s added *during* fermentation it also kills the yeast early, leaving the unfermented sugar behind. That\'s why the sweet ones are sweet: the sugar was never fermented out.',
      },
      {
        kind: 'list',
        items: [
          '**Sherry** - from Jerez in Spain, and drier than its reputation. Fino and manzanilla are bone dry and want serving cold; oloroso and cream sherries are richer. Fino goes into a Bloody Mary and improves it.',
          '**Vermouth** - aromatised wine, and it has to contain **wormwood**: the name is the German *Wermut*. Dry (French) is pale and crisp; sweet or *rosso* (Italian) is red and spiced; bianco sits between them. It\'s wine, so **it goes off** - fridge, and finish it within a month.',
          '**Port** - Portuguese and sweet. Ruby is young and fruity; tawny is wood-aged, nutty and dry-finishing; white port is made from white grapes and is good chilled with tonic. Vintage port is bottle-aged and can run thirty years.',
          '**Madeira** - from the island, and deliberately heated during maturation, which gives it a burnt, caramelised character and makes it almost indestructible once open.',
        ],
      },
      {
        kind: 'note',
        title: 'The mistake everyone makes',
        text: 'Vermouth is treated like a spirit and kept on the back bar at room temperature for a year. It\'s a wine. An oxidised bottle is the most common reason a home Martini or Manhattan tastes flat and slightly stale. Good gin doesn\'t fix it.',
      },
      {
        kind: 'p',
        text: 'The bitter aperitifs - Campari, Aperol, and the amari behind them - are a category of their own, and they carry the Negroni, the Boulevardier, the Contessa and the spritz. They\'re covered properly in the next chapter, since bitterness is a structural ingredient rather than a flavour you add at the end.',
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
      'In the 1806 definition and half these recipes, and rarely explained.',
    body: [
      {
        kind: 'p',
        text: 'Angostura appears in the Old Fashioned, the Manhattan, the Champagne Cocktail, the Pisco Sour - where Amargo is the Peruvian original and Angostura the usual stand-in - and a dozen others. It usually gets listed beside the Tabasco and the Worcestershire sauce, and nobody says what it is. So: bitters are a high-proof spirit infused with bark, root, and aromatic botanicals to the point of being undrinkable on their own, used in dashes. The bitterness itself usually comes from gentian root, from wormwood, or from quinine - the same quinine that makes tonic bitter.',
      },
      {
        kind: 'p',
        text: 'They exist because bitterness is a structural element, not a flavour. Sweet and sour can balance each other into something flat and cloying; a few dashes of bitters give the drink an edge and pull the other elements into focus. The usual analogy is salt in cooking, and it\'s a good one - you don\'t taste it as itself, you notice its absence.',
      },
      {
        kind: 'list',
        items: [
          '**Aromatic** - Angostura is the reference. Clove, cinnamon, gentian. If a recipe just says "bitters", it means this.',
          '**Orange** - brighter and citrus-led. Lifts gin and lightens a Manhattan.',
          '**Peychaud\'s** - from New Orleans, lighter and anise-forward, faintly floral. The Sazerac needs it specifically.',
          '**Everything else** - celery, cardamom, chocolate, grapefruit. Useful once the first three are on the shelf, not before.',
        ],
      },
      {
        kind: 'note',
        title: 'Bitters and amari are different things',
        text: 'Dashing bitters and bitter liqueurs are different things that share a name. Angostura goes in by the dash - one or two, or a soaked cube in an Old Fashioned. Campari and Aperol are *amari* - bitter liqueurs, sweetened, low enough in strength to pour by the 30 ml. Both bring bitterness; one is a seasoning and one is an ingredient.',
      },
      {
        kind: 'p',
        text: 'A bottle of Angostura lasts for years - it\'s roughly 45% alcohol and used a few drops at a time. The distinctive oversized paper label is said to be a mistake nobody ever corrected, though that is the company\'s own account and more than one version of it is in circulation.',
      },
      {
        kind: 'note',
        title: 'The label that never got fixed',
        text: 'The Angostura label is famously too big for its bottle - it runs past the shoulder and overlaps itself. The story the company tells is that the Siegert brothers split the job of preparing a bottle for a competition, one taking the label and one taking the bottle, and neither checked what the other had measured. By the time anyone noticed, the mismatch was how people recognised it on a shelf, so it stayed.',
      },
],
  },
];

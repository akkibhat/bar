/**
 * The shelf, pulled from Bar Assistant.
 *
 * GENERATED FILE - do not edit by hand. Regenerate with:
 *   npm run pull
 *
 * Bar Assistant is the source of truth; this is a committed snapshot of
 * it, because the site is static and public and cannot carry a personal
 * API token. See scripts/pull-backbar.mjs for the reasoning and the
 * refresh steps.
 *
 * The recipes are reproduced exactly as authored. Nothing here is
 * reworded or reordered.
 */

/** One line of a drink's build. */
export type ShelfSpecLine = {
  name: string;
  /** Free text: "45 ml", "2 dash", "top". Null where there is no measure. */
  amount: string | null;
  optional?: boolean;
  substitutes?: string[];
  note?: string;
};

export type ShelfDrink = {
  id: number;
  /** The clean slug, used in the URL. */
  slug: string;
  /** Bar Assistant's own slug, kept so old links still resolve. */
  rawSlug?: string;
  name: string;
  description?: string;
  /** Instructions, split into steps. */
  steps: string[];
  garnish?: string;
  glass?: string;
  method?: string;
  /** Calculated by Bar Assistant, including its own dilution assumption. */
  abv?: number;
  volumeMl?: number;
  /** First non-optional ingredient, used for the shelf filter. */
  base?: string;
  tags: string[];
  spec: ShelfSpecLine[];
  createdAt?: string;
};

/** When this snapshot was taken, so the page can admit its age. */
export const PULLED_AT = "2026-11-03T05:02:30.744Z";

/** Everything on the shelf, newest first. */
export const SHELF: ShelfDrink[] = [
  {
    "id": 633,
    "slug": "espresso-martini",
    "rawSlug": "espresso-martini-1",
    "name": "Espresso Martini",
    "description": "No coffee liqueur, so the bitterness is the espresso's own rather than something poured in after it. Butterscotch and vanilla vodka do the sweetening Kahlúa usually does, which leaves the roast at the front and a toffee edge behind it.",
    "steps": [
      "1. Chill a coupe glass with ice and water.",
      "2. Add all ingredients to a cocktail shaker filled with lots of ice.",
      "3. Shake vigorously for at least 20 seconds.",
      "4. Empty the chilled glass.",
      "5. Double strain mixture into glass quickly."
    ],
    "garnish": "3 coffee beans; chocolate powder covering half the glass",
    "glass": "Cocktail",
    "method": "Shake",
    "abv": 18.95,
    "volumeMl": 93.75,
    "base": "Vanilla Vodka",
    "tags": [
      "original"
    ],
    "spec": [
      {
        "name": "Vanilla Vodka",
        "amount": "45 ml",
        "substitutes": [
          "Vodka",
          "Vanilla syrup"
        ]
      },
      {
        "name": "Double Espresso",
        "amount": "1 double shot"
      },
      {
        "name": "Butterscotch",
        "amount": "15 ml"
      },
      {
        "name": "Sugar Syrup",
        "amount": "15 ml"
      }
    ],
    "createdAt": "2026-08-11T08:58:21+00:00"
  },
  {
    "id": 619,
    "slug": "christmas-rum-mule",
    "rawSlug": "christmas-rum-mule-1",
    "name": "Christmas Rum Mule",
    "description": "A mule built for a summer Christmas, rather than one borrowed from winter. Spiced rum puts clove and allspice where a mule is usually just vodka, the orange softens the lime, and a hundred millilitres of ginger beer keeps it long enough to drink outside in the sun.",
    "steps": [
      "Fill a tall glass or mule mug with ice.",
      "Add spiced rum, lime juice and orange juice.",
      "Top with ginger beer and stir gently.",
      "Garnish with an orange wedge and star anise."
    ],
    "garnish": "Orange wedge and star anise",
    "glass": "Highball",
    "method": "Build",
    "abv": 8.77,
    "volumeMl": 192.5,
    "base": "Spiced Rum",
    "tags": [
      "original",
      "Spiced Rum",
      "Christmas"
    ],
    "spec": [
      {
        "name": "Spiced Rum",
        "amount": "45 ml"
      },
      {
        "name": "Lime juice",
        "amount": "15 ml"
      },
      {
        "name": "Orange juice",
        "amount": "15 ml"
      },
      {
        "name": "Ginger beer",
        "amount": "100 ml"
      }
    ],
    "createdAt": "2026-08-11T05:00:34+00:00"
  },
  {
    "id": 618,
    "slug": "spiced-apple-crumble",
    "rawSlug": "spiced-apple-crumble-1",
    "name": "Spiced Apple Crumble",
    "description": "A pudding taken apart and rebuilt as a drink. Cloudy apple carries it, vanilla syrup stands in for the custard, cinnamon does the crumble, and the lemon is the only thing stopping it going sickly sweet.",
    "steps": [
      "Add spiced rum, cloudy apple juice, vanilla syrup, lemon juice and cinnamon to a shaker.",
      "Add ice and shake until well chilled.",
      "Strain over fresh ice.",
      "Garnish with an apple slice and cinnamon.",
      "aquafaba/egg?"
    ],
    "garnish": "Apple slice and cinnamon",
    "glass": "Coupe",
    "method": "Shake",
    "abv": 10.31,
    "volumeMl": 162.89,
    "base": "Spiced Rum",
    "tags": [
      "original",
      "Spiced Rum",
      "Apple",
      "Christmas"
    ],
    "spec": [
      {
        "name": "Spiced Rum",
        "amount": "45 ml"
      },
      {
        "name": "Cloudy Apple Juice",
        "amount": "60 ml"
      },
      {
        "name": "Vanilla syrup",
        "amount": "15 ml"
      },
      {
        "name": "Lemon juice",
        "amount": "10 ml"
      },
      {
        "name": "Cinnamon",
        "amount": "1 dash",
        "note": "Ground, in the shake. Dust more over the top to finish."
      }
    ],
    "createdAt": "2026-08-11T04:59:44+00:00"
  },
  {
    "id": 617,
    "slug": "ginger-collins",
    "rawSlug": "ginger-collins-1",
    "name": "Ginger Collins",
    "description": "A Collins where ginger syrup replaces the sugar, so the heat comes in with it rather than alongside. Raw and peppery next to the drier fizz of a ginger beer, with juniper underneath and soda stretching it out.",
    "steps": [
      "Add gin, ginger syrup and lemon juice to a shaker.",
      "Add ice and shake until well chilled.",
      "Strain into a tall glass filled with fresh ice.",
      "Top with soda water and stir gently.",
      "Garnish with a lemon wheel and candied ginger."
    ],
    "garnish": "Lemon wheel and candied ginger",
    "glass": "Highball",
    "method": "Shake",
    "abv": 10.29,
    "volumeMl": 175,
    "base": "Gin",
    "tags": [
      "original",
      "Gin"
    ],
    "spec": [
      {
        "name": "Gin",
        "amount": "45 ml"
      },
      {
        "name": "Ginger syrup",
        "amount": "15 ml"
      },
      {
        "name": "Lemon juice",
        "amount": "20 ml"
      },
      {
        "name": "Soda Water",
        "amount": "60 ml"
      }
    ],
    "createdAt": "2026-08-11T04:59:11+00:00"
  },
  {
    "id": 616,
    "slug": "black-magic-margarita",
    "rawSlug": "black-magic-margarita-1",
    "name": "Black Magic Margarita",
    "description": "A Margarita built on blackcurrant. Cassis goes where the triple sec would, so the sweetening arrives as Ribena rather than orange - the adult version of what every Kiwi kid grew up drinking. Lime holds it tart, and black salt on the rim reads differently against fruit than it does against plain agave.",
    "steps": [
      "Run a lime wedge around the rim of a rocks glass and dip in black salt.",
      "Add tequila, crème de cassis, lime juice and agave syrup to a shaker.",
      "Add ice and shake hard until well chilled.",
      "Strain over fresh ice into the prepared glass.",
      "Garnish with a lime wheel."
    ],
    "garnish": "Lime wheel, black salt rim",
    "glass": "Cocktail",
    "method": "Shake",
    "abv": 19.37,
    "volumeMl": 118.75,
    "base": "Tequila Blanco",
    "tags": [
      "original",
      "Tequila",
      "Margarita"
    ],
    "spec": [
      {
        "name": "Tequila Blanco",
        "amount": "45 ml"
      },
      {
        "name": "Crème de cassis",
        "amount": "20 ml"
      },
      {
        "name": "Lime juice",
        "amount": "20 ml"
      },
      {
        "name": "Agave Syrup",
        "amount": "10 ml"
      }
    ],
    "createdAt": "2026-08-11T04:58:45+00:00"
  },
  {
    "id": 615,
    "slug": "limoncello-spritz-highball",
    "rawSlug": "limoncello-spritz-highball-1",
    "name": "Limoncello Spritz Highball",
    "description": "Three things and no citrus juice at all: the lemon here is all peel, which is why it lands rounder and less sharp than a spritz built on a squeeze. Prosecco dries it back out and soda gives it length.",
    "steps": [
      "Fill a tall glass with ice.",
      "Add limoncello and prosecco.",
      "Top with soda water and stir gently.",
      "Garnish with a lemon wheel and fresh mint."
    ],
    "garnish": "Lemon wheel and fresh mint",
    "glass": "Highball",
    "method": "Build",
    "abv": 12.32,
    "volumeMl": 148.5,
    "base": "Limoncello",
    "tags": [
      "original",
      "Limoncello",
      "Spritz"
    ],
    "spec": [
      {
        "name": "Limoncello",
        "amount": "45 ml"
      },
      {
        "name": "Prosecco",
        "amount": "60 ml"
      },
      {
        "name": "Soda Water",
        "amount": "30 ml"
      }
    ],
    "createdAt": "2026-08-11T04:58:07+00:00"
  },
  {
    "id": 614,
    "slug": "peach-royale",
    "rawSlug": "peach-royale-1",
    "name": "Peach Royale",
    "description": "Peach and lemon over a base that stays quiet. Vodka carries the schnapps without arguing with it, the lemon keeps the peach from turning into lolly water, and champagne gives it a dry, slightly toasty finish that soda would not.",
    "steps": [
      "Add vodka, peach schnapps, lemon juice and simple syrup to a shaker.",
      "Add ice and shake until well chilled.",
      "Fine strain into a chilled flute or coupe.",
      "Top gently with Champagne/Prosecco.",
      "Garnish with a peach slice."
    ],
    "garnish": "Peach slice",
    "glass": "Coupe",
    "method": "Shake",
    "abv": 13.75,
    "volumeMl": 168.75,
    "base": "Vodka",
    "tags": [
      "original",
      "Peach",
      "Sparkling"
    ],
    "spec": [
      {
        "name": "Vodka",
        "amount": "30 ml"
      },
      {
        "name": "Peach Schnapps",
        "amount": "20 ml"
      },
      {
        "name": "Lemon juice",
        "amount": "15 ml"
      },
      {
        "name": "Simple Syrup",
        "amount": "10 ml"
      },
      {
        "name": "Champagne",
        "amount": "60 ml",
        "substitutes": [
          "Prosecco"
        ],
        "note": "Top gently to preserve the bubbles."
      }
    ],
    "createdAt": "2026-08-11T04:57:38+00:00"
  },
  {
    "id": 613,
    "slug": "filthy-mistress",
    "rawSlug": "filthy-mistress-1",
    "name": "Filthy Mistress",
    "description": "Smoky, dark and quietly floral. The port and the cherry give it the weight of something aged, the Italicus lifts it with bergamot, and the pinch of salt is what stops it reading as a dessert.",
    "steps": [
      "Add the mezcal, tawny port, cherry syrup and Italicus to a shaker.",
      "Add a pinch of salt.",
      "Add ice and shake hard for 15 seconds until well chilled.",
      "Fine strain into a chilled coupe.",
      "Garnish with a maraschino cherry on a flag."
    ],
    "garnish": "Maraschino cherry on a flag",
    "glass": "Coupe",
    "method": "Shake",
    "abv": 18.74,
    "volumeMl": 137.5,
    "base": "Mezcal",
    "tags": [
      "original",
      "mezcal"
    ],
    "spec": [
      {
        "name": "Mezcal",
        "amount": "40 ml"
      },
      {
        "name": "Tawny Port",
        "amount": "30 ml"
      },
      {
        "name": "Cherry syrup",
        "amount": "20 ml"
      },
      {
        "name": "Italicus Rosolio di Bergamotto",
        "amount": "20 ml"
      },
      {
        "name": "Salt",
        "amount": "1 pinch"
      }
    ],
    "createdAt": "2026-08-11T04:50:46+00:00"
  }
];

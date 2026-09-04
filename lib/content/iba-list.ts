/**
 * The IBA's official list: names, lists and links.
 *
 * GENERATED FILE - do not edit by hand. Regenerate with:
 *   npm run pull:iba
 *
 * Three fields per drink and no more. The IBA's recipes are theirs, and
 * none of them are held here or anywhere else in this repo. The book
 * writes its own spec for the ones it covers; everything else on the
 * shelf is a name and a link out to the IBA's own page.
 *
 * See scripts/pull-iba.mjs for the reasoning and the refresh steps.
 */

import type { IbaCategory } from '../iba';

/** One drink on the official list. Name, list, and where it lives. */
export type IbaEntry = {
  name: string;
  /** The IBA's own slug, and the last segment of its URL. */
  slug: string;
  category: IbaCategory;
  url: string;
};

/** When this snapshot was taken, so the page can admit its age. */
export const IBA_PULLED_AT = "2026-09-04T15:58:48.586Z";

/** The whole official list, alphabetical. */
export const IBA_LIST: IbaEntry[] = [
  {
    "name": "Alexander",
    "slug": "alexander",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/alexander/"
  },
  {
    "name": "Americano",
    "slug": "americano",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/americano/"
  },
  {
    "name": "Angel Face",
    "slug": "angel-face",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/angel-face/"
  },
  {
    "name": "Aviation",
    "slug": "aviation",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/aviation/"
  },
  {
    "name": "Bee’s Knees",
    "slug": "bees-knees",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/bees-knees/"
  },
  {
    "name": "Bellini",
    "slug": "bellini",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/bellini/"
  },
  {
    "name": "Between the Sheets",
    "slug": "between-the-sheets",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/between-the-sheets/"
  },
  {
    "name": "Black Russian",
    "slug": "black-russian",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/black-russian/"
  },
  {
    "name": "Bloody Mary",
    "slug": "bloody-mary",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/bloody-mary/"
  },
  {
    "name": "Boulevardier",
    "slug": "boulevardier",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/boulevardier/"
  },
  {
    "name": "Bramble",
    "slug": "bramble",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/bramble/"
  },
  {
    "name": "Brandy Crusta",
    "slug": "brandy-crusta",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/brandy-crusta/"
  },
  {
    "name": "Caipirinha",
    "slug": "caipirinha",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/caipirinha/"
  },
  {
    "name": "Canchanchara",
    "slug": "canchanchara",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/canchanchara/"
  },
  {
    "name": "Cardinale",
    "slug": "cardinale",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/cardinale/"
  },
  {
    "name": "Casino",
    "slug": "casino",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/casino/"
  },
  {
    "name": "Champagne Cocktail",
    "slug": "champagne-cocktail",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/champagne-cocktail/"
  },
  {
    "name": "Chartreuse Swizzle",
    "slug": "chartreuse-swizzle",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/chartreuse-swizzle/"
  },
  {
    "name": "Clover Club",
    "slug": "clover-club",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/clover-club/"
  },
  {
    "name": "Corpse Reviver #2",
    "slug": "corpse-reviver-2",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/corpse-reviver-2/"
  },
  {
    "name": "Cosmopolitan",
    "slug": "cosmopolitan",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/cosmopolitan/"
  },
  {
    "name": "Cuba Libre",
    "slug": "cuba-libre",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/cuba-libre/"
  },
  {
    "name": "Daiquiri",
    "slug": "daiquiri",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/daiquiri/"
  },
  {
    "name": "Dark ‘N’ Stormy",
    "slug": "dark-n-stormy",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/dark-n-stormy/"
  },
  {
    "name": "Don's Special Daiquiri",
    "slug": "dons-special-daiquiri",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/dons-special-daiquiri/"
  },
  {
    "name": "Dry Martini",
    "slug": "dry-martini",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/dry-martini/"
  },
  {
    "name": "Espresso Martini",
    "slug": "espresso-martini",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/espresso-martini/"
  },
  {
    "name": "Fernandito",
    "slug": "fernandito",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/fernandito/"
  },
  {
    "name": "French 75",
    "slug": "french-75",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/french-75/"
  },
  {
    "name": "French Connection",
    "slug": "french-connection",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/french-connection/"
  },
  {
    "name": "French Martini",
    "slug": "french-martini",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/french-martini/"
  },
  {
    "name": "Garibaldi",
    "slug": "garibaldi",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/garibaldi/"
  },
  {
    "name": "Gin Basil Smash",
    "slug": "gin-basil-smash",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/gin-basil-smash/"
  },
  {
    "name": "Gin Fizz",
    "slug": "gin-fizz",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/gin-fizz/"
  },
  {
    "name": "Grand Margarita",
    "slug": "grand-margarita",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/grand-margarita/"
  },
  {
    "name": "Grasshopper",
    "slug": "grasshopper",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/grasshopper/"
  },
  {
    "name": "Hanky Panky",
    "slug": "hanky-panky",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/hanky-panky/"
  },
  {
    "name": "Hemingway Special",
    "slug": "hemingway-special",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/hemingway-special/"
  },
  {
    "name": "Horse’s Neck",
    "slug": "horses-neck",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/horses-neck/"
  },
  {
    "name": "IBA Tiki",
    "slug": "iba-tiki",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/iba-tiki/"
  },
  {
    "name": "Illegal",
    "slug": "illegal",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/illegal/"
  },
  {
    "name": "Irish Coffee",
    "slug": "irish-coffee",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/irish-coffee/"
  },
  {
    "name": "John Collins",
    "slug": "john-collins",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/john-collins/"
  },
  {
    "name": "Jungle Bird",
    "slug": "jungle-bird",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/jungle-bird/"
  },
  {
    "name": "Kir",
    "slug": "kir",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/kir/"
  },
  {
    "name": "Last Word",
    "slug": "last-word",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/last-word/"
  },
  {
    "name": "Lemon Drop Martini",
    "slug": "lemon-drop-martini",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/lemon-drop-martini/"
  },
  {
    "name": "Long Island Iced Tea",
    "slug": "long-island-iced-tea",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/long-island-iced-tea/"
  },
  {
    "name": "Mai-Tai",
    "slug": "mai-tai",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/mai-tai/"
  },
  {
    "name": "Manhattan",
    "slug": "manhattan",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/manhattan/"
  },
  {
    "name": "Margarita",
    "slug": "margarita",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/margarita/"
  },
  {
    "name": "Martinez",
    "slug": "martinez",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/martinez/"
  },
  {
    "name": "Mary Pickford",
    "slug": "mary-pickford",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/mary-pickford/"
  },
  {
    "name": "Mimosa",
    "slug": "mimosa",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/mimosa/"
  },
  {
    "name": "Mint Julep",
    "slug": "mint-julep",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/mint-julep/"
  },
  {
    "name": "Missionary's Downfall",
    "slug": "missionarys-downfall",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/missionarys-downfall/"
  },
  {
    "name": "Mojito",
    "slug": "mojito",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/mojito/"
  },
  {
    "name": "Monkey Gland",
    "slug": "monkey-gland",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/monkey-gland/"
  },
  {
    "name": "Moscow Mule",
    "slug": "moscow-mule",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/moscow-mule/"
  },
  {
    "name": "Naked and Famous",
    "slug": "naked-and-famous",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/naked-and-famous/"
  },
  {
    "name": "Negroni",
    "slug": "negroni",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/negroni/"
  },
  {
    "name": "New York Sour",
    "slug": "new-york-sour",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/new-york-sour/"
  },
  {
    "name": "Old Cuban",
    "slug": "old-cuban",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/old-cuban/"
  },
  {
    "name": "Old Fashioned",
    "slug": "old-fashioned",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/old-fashioned/"
  },
  {
    "name": "Paloma",
    "slug": "paloma",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/paloma/"
  },
  {
    "name": "Paper Plane",
    "slug": "paper-plane",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/paper-plane/"
  },
  {
    "name": "Paradise",
    "slug": "paradise",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/paradise/"
  },
  {
    "name": "Penicillin",
    "slug": "penicillin",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/penicillin/"
  },
  {
    "name": "Pina Colada",
    "slug": "pina-colada",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/pina-colada/"
  },
  {
    "name": "Pisco Punch",
    "slug": "pisco-punch",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/pisco-punch/"
  },
  {
    "name": "Pisco Sour",
    "slug": "pisco-sour",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/pisco-sour/"
  },
  {
    "name": "Planters Punch",
    "slug": "planters-punch",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/planters-punch/"
  },
  {
    "name": "Porn Star Martini",
    "slug": "porn-star-martini",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/porn-star-martini/"
  },
  {
    "name": "Porto Flip",
    "slug": "porto-flip",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/porto-flip/"
  },
  {
    "name": "Rabo de Galo",
    "slug": "rabo-de-galo",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/rabo-de-galo/"
  },
  {
    "name": "Ramos Fizz",
    "slug": "ramos-fizz",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/ramos-fizz/"
  },
  {
    "name": "Remember the Maine",
    "slug": "remember-the-maine",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/remember-the-maine/"
  },
  {
    "name": "Russian Spring Punch",
    "slug": "russian-spring-punch",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/russian-spring-punch/"
  },
  {
    "name": "Rusty Nail",
    "slug": "rusty-nail",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/rusty-nail/"
  },
  {
    "name": "Sazerac",
    "slug": "sazerac",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/sazerac/"
  },
  {
    "name": "Sea Breeze",
    "slug": "sea-breeze",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/sea-breeze/"
  },
  {
    "name": "Sex on the Beach",
    "slug": "sex-on-the-beach",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/sex-on-the-beach/"
  },
  {
    "name": "Sherry Cobbler",
    "slug": "sherry-cobbler",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/sherry-cobbler/"
  },
  {
    "name": "Sidecar",
    "slug": "sidecar",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/sidecar/"
  },
  {
    "name": "Singapore Sling",
    "slug": "singapore-sling",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/singapore-sling/"
  },
  {
    "name": "South Side",
    "slug": "south-side",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/south-side/"
  },
  {
    "name": "Spicy Fifty",
    "slug": "spicy-fifty",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/spicy-fifty/"
  },
  {
    "name": "Spritz",
    "slug": "spritz",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/spritz/"
  },
  {
    "name": "Stinger",
    "slug": "stinger",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/stinger/"
  },
  {
    "name": "Suffering Bastard",
    "slug": "suffering-bastard",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/suffering-bastard/"
  },
  {
    "name": "Tequila Sunrise",
    "slug": "tequila-sunrise",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/tequila-sunrise/"
  },
  {
    "name": "Three Dots and a Dash",
    "slug": "three-dots-and-a-dash",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/three-dots-and-a-dash/"
  },
  {
    "name": "Tipperary",
    "slug": "tipperary",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/tipperary/"
  },
  {
    "name": "Tommy's Margarita",
    "slug": "tommys-margarita",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/tommys-margarita/"
  },
  {
    "name": "Trinidad Sour",
    "slug": "trinidad-sour",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/trinidad-sour/"
  },
  {
    "name": "Tuxedo",
    "slug": "tuxedo",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/tuxedo/"
  },
  {
    "name": "Ve.N.To",
    "slug": "ve-n-to",
    "category": "new-era",
    "url": "https://iba-world.com/iba-cocktail/ve-n-to/"
  },
  {
    "name": "Vesper",
    "slug": "vesper",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/vesper/"
  },
  {
    "name": "Vieux Carré",
    "slug": "vieux-carre",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/vieux-carre/"
  },
  {
    "name": "Whiskey Sour",
    "slug": "whiskey-sour",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/whiskey-sour/"
  },
  {
    "name": "White Lady",
    "slug": "white-lady",
    "category": "unforgettables",
    "url": "https://iba-world.com/iba-cocktail/white-lady/"
  },
  {
    "name": "Zombie",
    "slug": "zombie",
    "category": "contemporary",
    "url": "https://iba-world.com/iba-cocktail/zombie/"
  }
];

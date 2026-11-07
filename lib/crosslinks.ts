import { lookupChapter } from './content/book';
import type { Chapter } from './schema';
import { PAGED, shelfOf, type ShelfEntry } from './backbar';

/**
 * Joins a drink on the shelf to the chapters that explain its base spirit
 * and its method.
 *
 * Lookups go through `lookupChapter` by slug, so a chapter that is
 * renumbered or removed becomes a missing link rather than a wrong one.
 */

/**
 * Shelf label to the chapter covering that spirit. The keys are the
 * labels `shelfOf` produces, not the raw Bar Assistant base, because the
 * raw base is specific ("Vanilla Vodka") and the chapters are not.
 */
const SPIRIT_CHAPTERS: Record<string, string> = {
  Vodka: 'vodka-and-gin',
  Gin: 'vodka-and-gin',
  Whisky: 'whisky',
  Rum: 'rum',
  Tequila: 'agave',
  Mezcal: 'agave',
  Brandy: 'brandy',
  Liqueur: 'liqueurs',
  Aperitif: 'aperitif-digestif-fortified',
};

/** The chapter for a shelf label, if the book has one. */
export function spiritChapter(shelf: string): Chapter | undefined {
  const slug = SPIRIT_CHAPTERS[shelf];
  return slug ? lookupChapter(slug) : undefined;
}

/**
 * Every method Bar Assistant records - shake, stir, build, and the rest -
 * is taught in one chapter, so there is a single destination rather than
 * a map. Guarded anyway: a drink with no method gets no link.
 */
export function methodChapter(method: string | null | undefined): Chapter | undefined {
  return method ? lookupChapter('the-seven-methods') : undefined;
}

/* ===================================================================== *
 * The other direction
 * ===================================================================== */

/**
 * The shelves a chapter covers, inverted from SPIRIT_CHAPTERS.
 *
 * Built rather than written out, so the two directions cannot disagree:
 * if a shelf is pointed at a chapter above, that chapter points back at
 * it here, and adding one spirit updates both.
 */
const SHELVES_BY_CHAPTER = Object.entries(SPIRIT_CHAPTERS).reduce<
  Record<string, string[]>
>((acc, [shelf, chapterSlug]) => {
  (acc[chapterSlug] ??= []).push(shelf);
  return acc;
}, {});

/**
 * The drinks on the shelf a chapter is about.
 *
 * The book pointed at the shelf and the shelf pointed back at the book,
 * but only one of those was a link: a Backbar page named its base spirit
 * and linked the chapter, while the chapter on that spirit said nothing
 * about the drinks made from it.
 *
 * Only drinks with a page of their own, since four fifths of the IBA
 * list is a name and a link out and a row of those would be a list of
 * places this site cannot take you.
 */
export function drinksInChapter(chapterSlug: string): ShelfEntry[] {
  const shelves = SHELVES_BY_CHAPTER[chapterSlug];
  if (!shelves) return [];
  return PAGED.filter((d) => shelves.includes(shelfOf(d)));
}

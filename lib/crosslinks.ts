import { lookupChapter } from './content/book';
import type { Chapter } from './schema';

/**
 * Joins a drink on the shelf to the chapters that explain it.
 *
 * The two halves of the site were written separately and never pointed at
 * each other: a Backbar page states a base spirit and a method, both of
 * which have a chapter, and neither was a link. This is the join, kept
 * here rather than in the page so the mapping is one list to read instead
 * of a chain of conditionals inside JSX.
 *
 * Both lookups go through `lookupChapter`, so a chapter that gets
 * renumbered, retitled or removed shows up as a missing link rather than
 * as a wrong one. Nothing here hardcodes a chapter number or title.
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

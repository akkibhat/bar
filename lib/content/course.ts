import type { Chapter } from '../types';
import { FOUNDATIONS } from './chapters/foundations';
import { BACK_BAR } from './chapters/back-bar';
import { BEER } from './chapters/beer';
import { BALANCE } from './chapters/balance';
import { TECHNIQUE } from './chapters/technique';
import { KIT } from './chapters/kit';
import { SERVICE } from './chapters/service';
import { CLASSICS } from './chapters/classics';
import { PAST_THE_SYLLABUS } from './chapters/past-the-syllabus';

/**
 * The assembled book, in reading order.
 *
 * Chapter files are kept separate by part so each stays editable on its
 * own; this file is the only place that knows about all of them.
 */
export const CHAPTERS: Chapter[] = [
  ...FOUNDATIONS,
  ...BACK_BAR,
  ...BEER,
  ...BALANCE,
  ...TECHNIQUE,
  ...KIT,
  ...SERVICE,
  ...CLASSICS,
  ...PAST_THE_SYLLABUS,
];

/** Total number of chapters, used for progress display and the contents. */
export const CHAPTER_COUNT = CHAPTERS.length;

/** Every chapter belonging to one part, in order. */
export function chaptersInPart(partSlug: string): Chapter[] {
  return CHAPTERS.filter((c) => c.part === partSlug);
}

/** Look up a single chapter by slug. */
export function findChapter(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

/**
 * The chapters immediately before and after a given one, for the
 * previous/next footer links. Either may be undefined at the ends.
 */
export function neighbours(slug: string): { prev?: Chapter; next?: Chapter } {
  const i = CHAPTERS.findIndex((c) => c.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : undefined,
    next: i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined,
  };
}

/**
 * Every chapter carrying at least one unresolved note.
 *
 * The `unsure` block is how this book admits a gap - something not
 * checked, or a passage still owed from my own notes. Counting them is
 * the honest version of a progress bar: it says how much of the book is
 * still provisional rather than how much of it you have read.
 */
export function chaptersWithOpenQuestions(): Chapter[] {
  return CHAPTERS.filter((c) => c.body.some((b) => b.kind === 'unsure'));
}

import type { Chapter } from '../schema';
import { FOUNDATIONS } from './chapters/foundations';
import { BACK_BAR } from './chapters/back-bar';
import { BEER } from './chapters/beer';
import { BALANCE } from './chapters/balance';
import { TECHNIQUE } from './chapters/technique';
import { KIT } from './chapters/kit';
import { SERVICE } from './chapters/service';
import { CLASSICS } from './chapters/classics';
import { PAST_THE_SYLLABUS } from './chapters/past-the-syllabus';
import { headingsOf } from '../headings';
import type { ContentsChapter } from '../contents';

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
export function chaptersIn(partSlug: string): Chapter[] {
  return CHAPTERS.filter((c) => c.part === partSlug);
}

/** Look up a single chapter by slug. */
export function lookupChapter(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

/**
 * The chapters immediately before and after a given one, for the
 * previous/next footer links. Either may be undefined at the ends.
 */
export function around(slug: string): { prev?: Chapter; next?: Chapter } {
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
export function chaptersStillOpen(): Chapter[] {
  return CHAPTERS.filter((c) => c.body.some((b) => b.kind === 'unsure'));
}

/**
 * The chapters projected down to what the navigation needs.
 *
 * Server-side only, by construction: it reads CHAPTERS, so importing it
 * from a client component would undo the whole point. See
 * `lib/contents.ts` for why.
 */
export function buildContents(): ContentsChapter[] {
  return CHAPTERS.map((c) => ({
    n: c.n,
    slug: c.slug,
    title: c.title,
    minutes: c.minutes,
    part: c.part,
    headings: headingsOf(c.body),
  }));
}

/**
 * One thing the search can find, and where it sits.
 *
 * A note carries no id, because notes are not `h` blocks and nothing
 * stamps an anchor on them - so a note match opens the chapter rather
 * than jumping inside it.
 */
export type SearchMark = {
  text: string;
  /** Anchor within the chapter, where there is one. */
  id?: string;
  kind: 'heading' | 'note' | 'term';
};

export type SearchEntry = {
  n: number;
  slug: string;
  title: string;
  marks: SearchMark[];
};

/** Inline markup delimiters are not part of a name. */
const strip = (s: string) => s.replace(/\*/g, '').trim();

/**
 * The search index: for each chapter, its headings, note titles, list
 * terms and table first columns.
 *
 * Kept separate from `buildContents`, which is serialised into every page;
 * this is only read by the search page.
 */
export function buildSearchIndex(): SearchEntry[] {
  return CHAPTERS.map((c) => ({
    n: c.n,
    slug: c.slug,
    title: c.title,
    marks: [
      ...headingsOf(c.body).map(
        (h): SearchMark => ({ text: h.text, id: h.id, kind: 'heading' }),
      ),
      ...c.body.flatMap((b): SearchMark[] => {
        if (b.kind === 'note' && b.title) {
          return [{ text: b.title, kind: 'note' }];
        }
        /* A list item names its subject in bold and explains it after
           the dash - "**Oleo saccharum** - citrus peels buried in..." -
           so the name is what goes in, not the sentence. The handful of
           items written without one are prose and stay out. */
        if (b.kind === 'list') {
          return b.items.flatMap((item) => {
            const name = /^\*\*(.+?)\*\*/.exec(item)?.[1];
            return name ? [{ text: strip(name), kind: 'term' as const }] : [];
          });
        }
        /* Every table in the book puts the thing being described in its
           first column and the description in the rest. */
        if (b.kind === 'table') {
          return b.rows.flatMap((row) =>
            row[0] ? [{ text: strip(row[0]), kind: 'term' as const }] : [],
          );
        }
        return [];
      }),
    ],
  }));
}

import type { Heading } from './headings';

/**
 * The contents, slimmed for the client.
 *
 * The index and the top bar are client components. Importing the book
 * there would put every chapter's full text into every page's JavaScript,
 * so the server projects each chapter down to these fields and passes them
 * as a prop. This module must import no content, or the chapters come back.
 */
export type ContentsChapter = {
  n: number;
  slug: string;
  title: string;
  minutes: number;
  /** The part's slug, so the navigation can group without a second list. */
  part: string;
  headings: Heading[];
};

/** The chapters of one part, in order. The client-side `chaptersIn`. */
export function inPart(
  contents: ContentsChapter[],
  partSlug: string,
): ContentsChapter[] {
  return contents.filter((c) => c.part === partSlug);
}

/** One chapter by slug, or undefined. The client-side `lookupChapter`. */
export function chapterAt(
  contents: ContentsChapter[],
  slug: string | undefined,
): ContentsChapter | undefined {
  return slug ? contents.find((c) => c.slug === slug) : undefined;
}

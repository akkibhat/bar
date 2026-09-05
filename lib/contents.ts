import type { Heading } from './headings';

/**
 * The contents, slimmed for the client.
 *
 * The index and the top bar are both interactive, so they are client
 * components, and both sat in the root layout importing the whole book to
 * read a slug and a title off it. That pulled all thirty-seven chapters -
 * every paragraph, table and spec - into the JavaScript bundle of every
 * page on the site, where it was duplicated against the prose already
 * rendered into the HTML and never used.
 *
 * So the server projects each chapter down to the handful of fields the
 * navigation actually reads, and passes that down as a prop. Headings
 * come along because the index lists them for the open chapter, and they
 * are a few words each rather than a body.
 *
 * This module deliberately imports no content. Anything a client
 * component reaches for has to live here, or the chapters come back.
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

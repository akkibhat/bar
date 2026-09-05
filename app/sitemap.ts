import type { MetadataRoute } from 'next';
import { CHAPTERS } from '@/lib/content/book';
import { PAGED } from '@/lib/backbar';
import { SITE_ORIGIN } from '@/lib/site';

/**
 * The sitemap, built from the same data the pages are.
 *
 * Every route here is generated rather than listed, so a chapter added to
 * the book or a drink added to the shelf appears without anyone
 * remembering to come back here. The only hand-written entries are the
 * fixed pages, which are the ones a file listing would give us anyway.
 *
 * `PAGED` rather than `ALL` on the shelf: four fifths of the IBA list is
 * a name and a link out with no page of its own, and putting a URL in a
 * sitemap that returns a 404 is worse than omitting it.
 *
 * Priorities are relative and only meaningful against each other. The two
 * halves lead, then the reference tools, then the individual pages - which
 * is the order the site itself presents them in.
 */
const FIXED: [string, number][] = [
  ['', 1],
  ['/book', 0.9],
  ['/backbar', 0.9],
  ['/families', 0.6],
  ['/glassware', 0.6],
  ['/spirits', 0.6],
  ['/ratio', 0.6],
  ['/dilution', 0.6],
  ['/glossary', 0.6],
];

/* Static for the same reason the image routes are: `output: export`
   has no server to decide it at request time. */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...FIXED.map(([path, priority]) => ({
      url: `${SITE_ORIGIN}${path}`,
      lastModified: now,
      priority,
    })),
    ...CHAPTERS.map((c) => ({
      url: `${SITE_ORIGIN}/book/${c.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...PAGED.map((d) => ({
      url: `${SITE_ORIGIN}/backbar/${d.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}

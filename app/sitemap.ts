import type { MetadataRoute } from 'next';
import { CHAPTERS } from '@/lib/content/book';
import { PAGED } from '@/lib/backbar';
import { SITE_ORIGIN } from '@/lib/site';

/**
 * The fixed pages and their sitemap priority. Chapters and drinks are
 * added from data below, so new ones appear without editing this file.
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

/**
 * The sitemap. Uses `PAGED` rather than `ALL` for the shelf, because most
 * of the IBA list is a link out with no page here.
 */
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

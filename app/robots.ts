import type { MetadataRoute } from 'next';
import { SITE_ORIGIN } from '@/lib/site';

/* Static for the same reason the image routes are: `output: export`
   has no server to decide it at request time. */
export const dynamic = 'force-static';

/**
 * Everything is public and there is nothing to hide: the site is a book
 * and a shelf, both meant to be read. So this exists to point at the
 * sitemap rather than to keep anything out.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}

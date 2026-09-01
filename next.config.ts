import type { NextConfig } from 'next';

/**
 * The site is entirely static: every route renders from committed content,
 * so there is nothing to configure for images, rewrites or runtime.
 *
 * The one thing worth stating is the redirect set, which keeps links from
 * the old cocktails site working. See `REDIRECTS.md` for what was where.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      /* The old site's menu index and its recipe pages. Permanent (308),
         because those addresses are not coming back - Backbar is where a
         drink lives now, under its same slug. */
      { source: '/menu', destination: '/backbar', permanent: true },
      { source: '/menu/:slug', destination: '/backbar/:slug', permanent: true },

      /* Standard drinks used to have its own route. It is the same
         calculation as dilution seen from the other end, so the two are
         one page now. Permanent: the split was the mistake. */
      { source: '/units', destination: '/dilution', permanent: true },
    ];
  },
};

export default nextConfig;

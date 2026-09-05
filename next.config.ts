import type { NextConfig } from 'next';

/**
 * The site is entirely static, and now says so to the build as well.
 *
 * `output: 'export'` writes plain files to `out/` - no Node process, no
 * adapter, nothing to keep running. That suits the host (Cloudflare
 * Workers, assets only) and it suits the content: every route renders
 * from data committed to this repo, so a page can only change when the
 * repo does.
 *
 * The one feature this gives up is redirects, which are executed by a
 * server. There are none to give up: the three that used to sit here
 * were all dead, since a redirect declared here only runs for a request
 * that already reached this site.
 */
const nextConfig: NextConfig = {
  output: 'export',
};

export default nextConfig;

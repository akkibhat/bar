import type { NextConfig } from 'next';

/**
 * The site is entirely static: `output: 'export'` writes plain files to
 * `out/` for Cloudflare Workers to serve as assets, with no server.
 *
 * The cost is that redirects declared here would never run, so there are
 * none.
 */
const nextConfig: NextConfig = {
  output: 'export',
};

export default nextConfig;

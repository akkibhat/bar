import type { NextConfig } from 'next';

/**
 * The site is entirely static: every route renders from committed
 * content, so there is nothing to configure for images, rewrites or
 * runtime.
 *
 * There are no redirects, and nothing here to configure at all. The
 * three that used to sit in this file were all dead: a redirect declared
 * here only runs for a request that already reached this site, and the
 * old cocktails address is not going to resolve here.
 */
const nextConfig: NextConfig = {};

export default nextConfig;

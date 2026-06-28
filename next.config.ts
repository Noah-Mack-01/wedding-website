import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    // Images are pre-compressed in public/ and served as static assets
    // straight from Cloudflare's CDN. @opennextjs/cloudflare has no
    // sharp-based optimizer, so this avoids per-request Worker CPU cost.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);

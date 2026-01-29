/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // This finds the entry point of your installed 'wei-nextjs-adapter-test' package
    // regardless of where it is on the disk.
    adapterPath: require.resolve("wei-nextjs-adapter-test"), 
  },
  cacheComponents: true,
  images: {
    unoptimized: true, // Required for standalone/custom adapters usually
  },
  async redirects() {
    return [
      // Test: Visiting /old-home should 307 redirect to /
      {
        source: '/old-home',
        destination: '/',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      // Test: Visiting /rewrite-test should show the /blog/rewritten page
      // but keep the URL as /rewrite-test
      {
        source: '/rewrite-test',
        destination: '/blog/rewritten',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Test: Inspect response headers to see if this exists
          {
            key: 'X-Custom-Config-Header',
            value: 'ItWorks',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
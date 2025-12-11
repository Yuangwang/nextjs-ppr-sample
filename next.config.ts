import type { NextConfig } from "next";
// import path from "path"; // No longer needed if using require.resolve

const nextConfig: NextConfig = {
  experimental: {
    // This finds the entry point of your installed 'wei-nextjs-adapter-test' package
    // regardless of where it is on the disk.
    adapterPath: require.resolve("wei-nextjs-adapter-test"), 
  },
  cacheComponents: true,
};

export default nextConfig;
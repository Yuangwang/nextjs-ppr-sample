import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    // process.cwd() is the root of your 'my-canary-next-app' folder.
    // We join it with the relative path to go up one level to your packages.
    adapterPath: path.join(process.cwd(), "../firebase-framework-tools/packages/@apphosting/adapter-nextjs/dist/index.cjs"),
  },
  cacheComponents: true,
};

export default nextConfig;
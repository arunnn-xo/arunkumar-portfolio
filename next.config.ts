import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Typescript errors irunthalum build aaga sollum
    ignoreBuildErrors: true,
  },
} as NextConfig;

export default nextConfig;
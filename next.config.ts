import type { NextConfig } from "next";

/**
 * Next.js configuration with performance optimizations and i18n support.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
// swcMinify removed
  compress: true,
  images: {
    domains: [], // add external image domains if needed
  },

  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_AB_TEST: process.env.NEXT_PUBLIC_AB_TEST,
  },
};

export default nextConfig;

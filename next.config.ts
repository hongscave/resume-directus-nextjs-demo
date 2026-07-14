import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@directus/sdk"],
  images: {
    qualities: [75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hongcheung.com',
      },
    ],
  },
};

export default nextConfig;

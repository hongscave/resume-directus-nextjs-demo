import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@directus/sdk"],
  images: {
    qualities: [75],
  },
};

export default nextConfig;

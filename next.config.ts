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

if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then((m) =>
    m.initOpenNextCloudflareForDev(),
  );
}

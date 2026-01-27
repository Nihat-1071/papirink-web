import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/urunler/kagit/aydingere",
        destination: "/urunler/kagit/aydinger",
        permanent: true,
      },
      {
        source: "/urunler/kagit/aydingere/:path*",
        destination: "/urunler/kagit/aydinger/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

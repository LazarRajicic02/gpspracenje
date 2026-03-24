import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/usluge", destination: "/prednosti", permanent: true },
      { source: "/narudzba", destination: "/porucivanje", permanent: true },
    ];
  },
};

export default nextConfig;

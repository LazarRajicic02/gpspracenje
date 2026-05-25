import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/usluge", destination: "/prednosti", permanent: true },
      { source: "/narudzba", destination: "/porucivanje", permanent: true },
      {
        source: "/blog/zasto-gps-pracenje-flote",
        destination: "/blog/kako-funkcionise-gps-pracenje-vozila",
        permanent: true,
      },
      {
        source: "/blog/bezbednost-vozila-i-daljinsko-gasenje",
        destination: "/blog/kako-funkcionise-gps-pracenje-vozila",
        permanent: true,
      },
      {
        source: "/blog/kako-izabrati-gps-za-firmu",
        destination: "/blog/kako-funkcionise-gps-pracenje-vozila",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

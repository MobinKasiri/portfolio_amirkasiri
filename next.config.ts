import type { NextConfig } from "next";

const remotePatterns = [
   { protocol: "https" as const, hostname: "cdn.pixabay.com", pathname: "/photo/**" },
   { protocol: "https" as const, hostname: "rasadnegar.ir" },
   { protocol: "https" as const, hostname: "back.rasadnegar.ir" },
   { protocol: "https" as const, hostname: "front-collab.liara.run" },
   { protocol: "https" as const, hostname: "back-colab.liara.run" },
   { protocol: "https" as const, hostname: "placehold.co" },
];

const nextConfig: NextConfig = {
   eslint: { ignoreDuringBuilds: false },
   typescript: { ignoreBuildErrors: false },
   compress: true,
   poweredByHeader: false,
   images: {
      remotePatterns,
      formats: ["image/webp"],
      dangerouslyAllowSVG: true,
   },
   modularizeImports: {
      "@mui/icons-material": { transform: "@mui/icons-material/{{member}}" },
   },
   experimental: {
      optimizePackageImports: ["@mui/material", "@mui/icons-material", "react-icons"],
   },
};

export default nextConfig;

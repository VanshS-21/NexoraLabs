import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/media/**",
        search: "",
      },
      {
        pathname: "/og/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;

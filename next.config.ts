import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  images: {
    domains: [
      "images.thevoicemag.ru",
      "cdn-media.tass.ru",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;

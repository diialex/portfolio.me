import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Requerido por GitHub Pages para no romper las imágenes
  },
  basePath: '/portfolio.me', 
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Strict Mode dla lepszego developmentu
  reactStrictMode: true,
  
  // Optymalizacja CSS (wyłączone z powodu problemów z critters)
  // experimental: {
  //   optimizeCss: true,
  // },
  
  // Konfiguracja obrazów
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.shopify.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Optymalizacja obrazów
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers dla bezpieczeństwa
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

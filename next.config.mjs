/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Image optimization device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Image optimization sizes
  },
  env: {
    // Add any environment variables you want to expose to the browser
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  // Uncomment the following lines if you're using internationalized routing
  // i18n: {
  //   locales: ['en', 'fr', 'de'],
  //   defaultLocale: 'en',
  // },
  // Add custom webpack config if needed
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here
    return config
  },
  // Add custom headers
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
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Uncomment if you need to rewrite paths
  // async rewrites() {
  //   return [
  //     // Add your rewrites here
  //   ]
  // },
};

export default nextConfig;

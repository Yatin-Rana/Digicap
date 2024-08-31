// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
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
          hostname: 'images.pexels.com', // Corrected: removed 'https://'
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: { unoptimized: true },
  allowedDevOrigins: [
    'http://localhost:3000',
    'local-origin.dev',
    '*.local-origin.dev',
  ],
};

export default nextConfig;

import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true },
  allowedDevOrigins: [
    'http://localhost:3000',
    'local-origin.dev',
    '*.local-origin.dev',
  ],

  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

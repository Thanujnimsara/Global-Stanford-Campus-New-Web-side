/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin.html',
      },
    ];
  },
};

export default nextConfig;


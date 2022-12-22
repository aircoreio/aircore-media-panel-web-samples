/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  async redirects() {
    return [];
  },
}

module.exports = nextConfig;

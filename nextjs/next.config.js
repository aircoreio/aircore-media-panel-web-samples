const withTM = require('next-transpile-modules')(['@aircore/aircore-media-panel', '@aircore/aircore-panel-core']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [];
  },
}

module.exports = withTM(nextConfig);

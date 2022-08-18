const withTM = require('next-transpile-modules')(['hooks', 'ui', 'utils']);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV !== 'test',
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  eslint: { dirs: ['src'], ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);

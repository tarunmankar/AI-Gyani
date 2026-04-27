/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [],
  },
  // Enable strict mode for better React practices
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Power by header removal for security
  poweredByHeader: false,
  // Generate ETags for caching
  generateEtags: true,
  // Trailing slash configuration for SEO consistency
  trailingSlash: false,
};

module.exports = nextConfig;

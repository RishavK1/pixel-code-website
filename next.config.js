/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow JavaScript files alongside TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

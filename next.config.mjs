/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/Vendaarlia/**'
      }
    ]
  },
  reactStrictMode: true,
};

export default nextConfig;

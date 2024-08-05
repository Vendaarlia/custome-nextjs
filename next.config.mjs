/** @type {import('next').NextConfig} */
const nextConfig = {
  module: {
    //... other configurations ...
    target: 'serverless',
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/,
        use: 'style-loader!css-loader',
        include: /pages\/Dungeon\/Crypt\/crypts.module.css$/,
      });
      return config;
    },
  },
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



/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  images: {
    loader: 'akamai',
    path: process.env.BASE_PATH,
  },
  basePath: process.env.BASE_PATH,
  assetPrefix: isProd ? 'https://ganningorlightman.github.io/deploying-next' : 'local',
};

export default nextConfig;
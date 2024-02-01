/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  images: {
    loader: 'akamai',
    path: isProd ? 'deploying-next' : 'out',
    domains: ['https://ganningorlightman.github.io'],
  },
  assetPrefix: isProd ? 'https://ganningorlightman.github.io/deploying-next' : '',
};

export default nextConfig;
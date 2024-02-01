/**
* @type {import('next').NextConfig}
*/
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: "export",
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? 'https://ganningorlightman.github.io/deploying-next' : undefined,
};

export default nextConfig;
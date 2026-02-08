/** @type {import('next').NextConfig} */
const basePath = "/SteelWeb";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const rawBasePath = process.env.SITE_BASE_PATH ?? "/SteelWeb";
const normalizedBasePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");
const basePath = normalizedBasePath
  ? normalizedBasePath.startsWith("/")
    ? normalizedBasePath
    : `/${normalizedBasePath}`
  : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

// Served at the ROOT of its own domain: https://rhumi.app
// (dedicated GitHub Pages repo with CNAME=rhumi.app — NOT a subfolder of the
// personal site anymore, so there is no basePath).
const nextConfig = {
  reactStrictMode: true,
  output: "export", // fully static; emits to ./out
  trailingSlash: true, // emit folder/index.html so Pages serves clean URLs
  images: { unoptimized: true }, // no image optimizer on a static host
};

export default nextConfig;

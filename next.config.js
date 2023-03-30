/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.chec.io",
      "images.pexels.com",
      "lh3.googleusercontent.com"
    ],
  },
}

module.exports = nextConfig

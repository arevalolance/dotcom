const { withContentlayer } = require("next-contentlayer")
const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "covers.openlibrary.org",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "image.tmdb.org",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "m.media-amazon.com",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)

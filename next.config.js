const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {

        hostname: 'images.unsplash.com',
        protocol: "https",
        pathname: "/**"
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)

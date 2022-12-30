/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'static-cse.canva.com',
      'i3.ytimg.com',
      'upload.wikimedia.org',
      'cdn-icons-png.flaticon.com',
      'cdn.iconscout.com',
      'pbs.twimg.com',
      'd33wubrfki0l68.cloudfront.net',
      'storage.googleapis.com',
    ],
  },
};

module.exports = nextConfig;

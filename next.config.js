/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ID: process.env.ID,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: [
      "d2eawub7utcl6.cloudfront.net",
      "nix-tag-images.s3.amazonaws.com",
      "s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;

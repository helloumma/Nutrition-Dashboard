/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ID: process.env.ID,
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig

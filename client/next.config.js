/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env : {
    OPEN_API_KEY : process.env.OPEN_API_KEY
  }
}

module.exports = nextConfig

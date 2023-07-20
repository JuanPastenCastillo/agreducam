/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/servicios",
        permanent: true
      },
    ]
  }
}

module.exports = nextConfig

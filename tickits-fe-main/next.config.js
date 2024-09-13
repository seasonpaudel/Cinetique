/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dhooyk69h/image/upload/**",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dhooyk69h/image/upload/**",
      }, 
    ],
  },
};

module.exports = nextConfig;
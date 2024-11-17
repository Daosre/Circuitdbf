/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["circuitdubonheur-366a75058d05.herokuapp.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.*",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

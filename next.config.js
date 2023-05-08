/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "daogilles",
    mongodb_password: "SNKWHtOL7OjBdppI",
    mongodb_clustername: "cluster0",
    mongodb_database: "trainr",
  },
};

module.exports = nextConfig;

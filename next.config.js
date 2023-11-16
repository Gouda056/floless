/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "floless-development.s3.ap-south-1.amazonaws.com",
      "floless-dev-org.s3.ap-south-1.amazonaws.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

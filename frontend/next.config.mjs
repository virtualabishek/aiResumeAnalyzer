/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
      "pdfjs-dist": require.resolve("pdfjs-dist/legacy/build/pdf"),
    };

    return config;
  },
};

export default nextConfig;

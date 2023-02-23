/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com', 'cdn-icons-png.flaticon.com'],
},
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Applique le X-Frame-Options pour éviter le clicjacking
        source: "/",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

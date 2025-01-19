import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.joseedev.com"], // Add your domain for image hosting
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "joseedev.com",
          },
        ],
        destination: "https://www.joseedev.com/:path*",
        permanent: true,
      },
      // Redirect Vercel domain to main domain
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "jose-dev-portfolio.vercel.app",
          },
        ],
        destination: "https://www.joseedev.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

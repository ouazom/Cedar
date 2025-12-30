import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  async rewrites() {
    return {
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: "/:path*",
          destination: `https://new.1web.com/:path*`,
          has: [{ type: "header", key: "User-Agent" }],
        },
      ],
    };
  },
};

export default nextConfig;

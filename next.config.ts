import type { NextConfig } from "next";

const nextConfig: NextConfig = {

 images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: '*', // Allow all remote images
       },
     ],
   },
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint errors during builds
    },

    experimental: {
        serverActions: {
          bodySizeLimit: "10mb", // Increase this if needed (e.g., "50mb")
        },
      },

};

export default nextConfig;

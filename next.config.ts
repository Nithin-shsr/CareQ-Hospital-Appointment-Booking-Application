import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                protocol: "https",
                hostname: "api.dicebear.com",
                pathname: "/**", // allows all paths including SVGs
            },
        ],
    },
};

export default nextConfig;

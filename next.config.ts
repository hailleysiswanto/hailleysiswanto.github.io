import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // "" on a user site (name.github.io), "/repo" on a project site; set by the Pages workflow
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

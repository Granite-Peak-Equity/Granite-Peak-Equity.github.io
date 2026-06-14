import type { NextConfig } from "next";

/**
 * Static-export config for GitHub Pages.
 *
 * GitHub Pages serves plain static files, so the site is exported to ./out.
 *
 * basePath/assetPrefix:
 *   - Project page (https://USER.github.io/REPO): set NEXT_PUBLIC_BASE_PATH=/REPO
 *     (the deploy workflow does this automatically).
 *   - User/org page (https://USER.github.io) or a custom domain
 *     (e.g. www.granitepeakequity.com): leave NEXT_PUBLIC_BASE_PATH unset.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    // GitHub Pages can't run the Next.js image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;

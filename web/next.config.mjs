/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Hide `X-Powered-By: Next.js` on Vercel / Node */
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon.png",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  images: {
    /**
     * Static mailer PNGs live under /public/mailer. Serving them directly avoids
     * the /_next/image pipeline (dev cache flakes, optimizer 404s, Sharp quirks).
     * For this site, raw PNG delivery is reliable and predictable.
     */
    unoptimized: true,
  },
  /**
   * On external / network volumes, webpack’s PackFileCacheStrategy often fails
   * (ENOENT on rename of *.pack_ → *.pack) and can leave `.next` half-written —
   * dev 500s, missing chunk modules, or failed `next build` finalization.
   * Memory cache avoids that; tradeoff is slower compiles and more RAM.
   * Production builds on normal disks (e.g. Vercel) keep the default disk cache.
   */
  webpack: (config, { dev }) => {
    const cwd = process.cwd();
    const onExternalVolume =
      cwd.startsWith("/Volumes/") || cwd.startsWith("/mnt/");

    if (dev) {
      config.cache = { type: "memory" };
      /**
       * String globs only. Merging Next’s prior `ignored` (often RegExp / mixed)
       * breaks webpack’s schema validation with WATCHPACK_POLLING (“ignored[0]
       * should be a non-empty string”).
       */
      const mergedIgnored = [
        "**/node_modules/**",
        "**/.git/**",
        "**/.next/**",
        "**/eng.traineddata",
        "**/.cursor/**",
        "**/._*",
      ];
      const pollInterval =
        Number(process.env.WATCHPACK_POLLING_INTERVAL) || 1000;
      if (onExternalVolume || process.env.NEXT_DEV_POLLING === "1") {
        // Do not spread prior watchOptions — invalid ignored + poll breaks dev.
        config.watchOptions = {
          ignored: mergedIgnored,
          poll: pollInterval,
        };
      } else {
        config.watchOptions = {
          ...config.watchOptions,
          ignored: mergedIgnored,
        };
      }
    } else if (onExternalVolume) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export for GitHub Pages — no Node server at runtime.
  // All routes (including /chalets/[slug]) are pre-rendered to HTML at
  // build time via generateStaticParams; client-side interactivity
  // (Framer Motion, the lightbox, the mobile menu, etc.) still runs
  // normally since it ships as ordinary client JS hydrated in the browser.
  output: "export",

  // GitHub Pages has no image-optimization endpoint to call at request
  // time, so next/image must serve the original files as-is.
  images: { unoptimized: true },

  // Emit `/chalets/batchouli/index.html` instead of `/chalets/batchouli.html`
  // so every route resolves cleanly as a directory with an index file —
  // the most broadly compatible layout for static hosts, GitHub Pages
  // included, and it matches how internal <Link> hrefs resolve.
  trailingSlash: true,

  // Only needed for the no-custom-domain case, e.g. a project served at
  // https://<user>.github.io/<repo>/ instead of its own domain. Leave
  // unset while a custom domain is mapped (the site is served from the
  // domain's root). Uncomment and set to "/<repo-name>" if you ever
  // publish without a custom domain attached.
  // basePath: "/<repo-name>",
  // assetPrefix: "/<repo-name>",
};

export default nextConfig;

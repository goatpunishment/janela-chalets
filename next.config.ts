import type { NextConfig } from "next";

// Empty by default, so local `next dev` / `next build` and an eventual
// custom-domain deployment both serve from "/" unchanged. The GitHub
// Actions workflow (.github/workflows/deploy.yml) sets NEXT_BASE_PATH to
// "/janela-chalets" only for the CI build, because a GitHub Pages project
// site with no custom domain is served under that subpath
// (https://<user>.github.io/janela-chalets/), not from the domain root —
// every asset/script/link must be prefixed with it or the deployed page
// requests them from the wrong place and 404s. Once a custom domain is
// attached, remove that line from the workflow and this goes back to "".
const basePath = process.env.NEXT_BASE_PATH ?? "";

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

  basePath,
  assetPrefix: basePath,

  // `next/image` with `unoptimized: true` does NOT apply basePath to the
  // `src` it renders (a known Next.js gap — the built-in loader is what
  // normally calls addBasePath(), and that loader is skipped when
  // unoptimized). So every hardcoded image path in the app (see
  // src/lib/basePath.ts) prefixes itself manually using this same value,
  // exposed to client components via NEXT_PUBLIC_*.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

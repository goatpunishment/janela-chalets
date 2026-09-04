// Mirrors the `basePath` computed in next.config.ts (empty locally and on
// a custom domain, "/janela-chalets" on the CI build for GitHub Pages).
// `next/image` doesn't add this prefix on its own when `unoptimized` is
// set, so every hardcoded local asset path — /logo.png, chalet photos
// found by src/lib/images.ts, metadata icons — must be run through this
// before being used as an <Image> `src` or a metadata URL.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

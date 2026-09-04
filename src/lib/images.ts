import fs from "node:fs";
import path from "node:path";

// Convention-based photo discovery. Real photography for a chalet lives at
// `public/chalets/<slug>/hero.{jpg,jpeg,png,webp}` for the hero plate and
// `public/chalets/<slug>/1.jpg`, `2.jpg`, ... for the gallery. This runs at
// build time (server only) and simply reports what it finds — nothing is
// fabricated, and dropping files into the folder is the entire integration
// step for the client.

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function chaletDir(slug: string) {
  return path.join(process.cwd(), "public", "chalets", slug);
}

function findFile(dir: string, base: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = path.join(dir, base + ext);
    if (fs.existsSync(file)) return `/chalets/${path.basename(dir)}/${base}${ext}`;
  }
  return null;
}

export function getChaletHeroImage(slug: string): string | null {
  return findFile(chaletDir(slug), "hero");
}

export function getChaletGalleryImages(slug: string): string[] {
  const dir = chaletDir(slug);
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .filter((f) => path.basename(f, path.extname(f)) !== "hero")
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );
  return files.map((f) => `/chalets/${slug}/${f}`);
}

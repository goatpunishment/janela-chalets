import type { MetadataRoute } from "next";
import { getChaletSlugs } from "@/data/chalets";

export const dynamic = "force-static";

const BASE_URL = "https://janelachalets.sa";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const chaletRoutes = getChaletSlugs().map((slug) => ({
    url: `${BASE_URL}/chalets/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...chaletRoutes];
}

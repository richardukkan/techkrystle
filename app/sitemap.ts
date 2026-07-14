import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/config";
import { getAllPlanSlugs } from "@/data/plans";
import { getAllGuideSlugs } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/is-it-worth-it",
    "/guides",
    "/quiz",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const planRoutes = getAllPlanSlugs().map((slug) => ({
    url: `${BASE_URL}/is-it-worth-it/${slug}`,
    lastModified: new Date(),
  }));

  const guideRoutes = getAllGuideSlugs().map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...planRoutes, ...guideRoutes];
}

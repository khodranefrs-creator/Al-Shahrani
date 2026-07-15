import type { MetadataRoute } from "next";
import { siteConfig } from "@/types";

const baseUrl = "https://alshahrani.com";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/corporate-law",
  "/services/governance",
  "/services/contracts",
  "/services/ma",
  "/services/litigation",
  "/services/debt-collection",
  "/services/notarization",
  "/services/labor",
  "/services/personal-status",
  "/services/property",
  "/services/medical",
  "/blog",
  "/contact",
];

const servicePages = routes.filter((r) => r.startsWith("/services/"));

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of ["ar", "en"] as const) {
      const isServiceDetail = route.startsWith("/services/") && route !== "/services";
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: isServiceDetail ? "monthly" : route === "/blog" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : route === "/services" ? 0.9 : isServiceDetail ? 0.8 : 0.7,
        alternates: {
          languages: {
            ar: `${baseUrl}/ar${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}

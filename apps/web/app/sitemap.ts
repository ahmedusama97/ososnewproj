import type { MetadataRoute } from "next";
import { visaDestinations } from "../lib/visa-content";

const baseUrl = "https://ososnewproj-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/home",
    "/apply",
    "/track",
    "/pricing",
    "/privacy",
    "/terms",
    "/refund",
    "/compliance",
    "/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...visaDestinations.map((destination) => ({
      url: `${baseUrl}/visa/${destination.slug}`,
      lastModified: new Date(),
    })),
  ];
}

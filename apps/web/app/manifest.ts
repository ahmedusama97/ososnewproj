import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VisaFlow",
    short_name: "VisaFlow",
    description: "Secure visa request intake and admin review platform.",
    start_url: "/home",
    scope: "/",
    display: "standalone",
    background_color: "#fcf9f8",
    theme_color: "#964900",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}

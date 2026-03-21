import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pranav Tripathi",
    short_name: "PT",
    description:
      "Staff Software Engineer with 13+ years of experience building products used by 400M+ people.",
    start_url: "/",
    display: "standalone",
    theme_color: "#09090b",
    background_color: "#09090b",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

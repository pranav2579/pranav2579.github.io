import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

const LAST_CONTENT_UPDATE = "2026-03-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://pranavtripathi.dev/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: "https://pranavtripathi.dev",
      lastModified: new Date(LAST_CONTENT_UPDATE),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://pranavtripathi.dev/blog",
      lastModified: new Date(LAST_CONTENT_UPDATE),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://pranavtripathi.dev/resume",
      lastModified: new Date(LAST_CONTENT_UPDATE),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogPosts,
  ];
}

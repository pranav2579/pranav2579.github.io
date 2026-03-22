import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingTime: string;
  content: string;
}

function validateFrontmatter(
  data: Record<string, unknown>,
  filename: string
): BlogFrontmatter {
  if (typeof data.title !== "string" || !data.title) {
    throw new Error(`[mdx] Missing or invalid "title" in ${filename}`);
  }
  if (typeof data.date !== "string" || !data.date) {
    throw new Error(`[mdx] Missing or invalid "date" in ${filename}`);
  }
  if (typeof data.description !== "string" || !data.description) {
    throw new Error(`[mdx] Missing or invalid "description" in ${filename}`);
  }

  const tags = Array.isArray(data.tags)
    ? data.tags.filter((t): t is string => typeof t === "string")
    : [];

  return { title: data.title, description: data.description, date: data.date, tags };
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      console.warn(`[mdx] Blog directory not found: ${BLOG_DIR}`);
      return [];
    }

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

    const posts: Omit<BlogPost, "content">[] = [];

    for (const filename of files) {
      try {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(BLOG_DIR, filename);
        const source = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(source);

        posts.push({
          slug,
          frontmatter: validateFrontmatter(data, filename),
          readingTime: readingTime(content).text,
        });
      } catch (err) {
        console.error(`[mdx] Error processing ${filename}:`, err);
      }
    }

    return posts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      if (isNaN(dateA) || isNaN(dateB)) return 0;
      return dateB - dateA;
    });
  } catch (err) {
    console.error("[mdx] Error reading blog posts:", err);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(source);

    return {
      slug,
      frontmatter: validateFrontmatter(data, `${slug}.mdx`),
      readingTime: readingTime(content).text,
      content,
    };
  } catch (err) {
    console.error(`[mdx] Error reading post ${slug}:`, err);
    return null;
  }
}

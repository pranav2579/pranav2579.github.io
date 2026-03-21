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

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const source = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(source);

    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      readingTime: readingTime(content).text,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    readingTime: readingTime(content).text,
    content,
  };
}

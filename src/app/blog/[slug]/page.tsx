import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.frontmatter.title} — Pranav Tripathi`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-zinc-950">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <header className="mb-12">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              {post.frontmatter.title}
            </h1>

            <p className="mb-6 text-lg text-zinc-400">
              {post.frontmatter.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>

            <div className="mt-6 h-px bg-zinc-800" />
          </header>

          <div className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-emerald-400 prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-xl prose-blockquote:border-emerald-400 prose-blockquote:text-zinc-400 prose-li:text-zinc-300 prose-ol:text-zinc-300 prose-ul:text-zinc-300">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeHighlight],
                },
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

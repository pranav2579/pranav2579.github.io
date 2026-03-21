import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";

export const metadata = {
  title: "Blog — Pranav Tripathi",
  description:
    "Thoughts on building at scale, AI in products, and software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Blog"
            subtitle="Thoughts on engineering, scale, and building products people love."
          />

          {posts.length === 0 ? (
            <p className="text-center text-faint">No posts yet. Check back soon!</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="h-full rounded-2xl border border-edge bg-card p-6 transition-all duration-300 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-400/5">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-tag px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-heading group-hover:text-emerald-400 transition-colors">
                      {post.frontmatter.title}
                    </h3>

                    <p className="mb-6 text-muted leading-relaxed">
                      {post.frontmatter.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between text-sm text-faint">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.readingTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

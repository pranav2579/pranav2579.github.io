"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { BlogPost } from "@/lib/mdx";

type BlogListPost = Omit<BlogPost, "content">;

interface BlogListProps {
  posts: BlogListPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.frontmatter.tags))
  ).sort();

  const filtered = activeTag
    ? posts.filter((p) => p.frontmatter.tags.includes(activeTag))
    : posts;

  return (
    <>
      {/* Tag filter bar */}
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setActiveTag(null)}
          className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
            activeTag === null
              ? "border-emerald-400 bg-emerald-400/10 text-emerald-400"
              : "border-edge bg-transparent text-muted hover:border-emerald-400/30 hover:text-heading"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              activeTag === tag
                ? "border-emerald-400 bg-emerald-400/10 text-emerald-400"
                : "border-edge bg-transparent text-muted hover:border-emerald-400/30 hover:text-heading"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Filtered count */}
      <p className="mb-6 text-sm text-faint">
        Showing {filtered.length} of {posts.length} posts
      </p>

      {/* Post grid */}
      <div className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
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

                  <h3 className="mb-2 text-xl font-bold text-heading transition-colors group-hover:text-emerald-400">
                    {post.frontmatter.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-muted">
                    {post.frontmatter.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-sm text-faint">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(post.frontmatter.date).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

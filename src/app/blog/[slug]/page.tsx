import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { projects } from "@/lib/data";
import Navbar from "@/components/navbar";
import CopyCodeButtons from "@/components/copy-code-button";
import Footer from "@/components/footer";
import ReadingProgress from "@/components/reading-progress";
import TableOfContents from "@/components/table-of-contents";
import ShareButtons from "@/components/share-buttons";
import BlogFooterCta from "@/components/blog-footer-cta";
import { extractHeadings } from "@/lib/utils";

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

  const url = `https://pranavtripathi.dev/blog/${slug}`;
  return {
    title: `${post.frontmatter.title} — Pranav Tripathi`,
    description: post.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      publishedTime: post.frontmatter.date,
      authors: ["Pranav Tripathi"],
      tags: post.frontmatter.tags,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.frontmatter.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: ["/og-image.png"],
    },
  };
}

function getRelatedPosts(currentSlug: string, currentTags: string[]) {
  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== currentSlug);

  const scored = otherPosts.map((p) => {
    const matchingTags = p.frontmatter.tags.filter((t) =>
      currentTags.includes(t)
    );
    return { ...p, score: matchingTags.length };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 2);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const relatedPosts = getRelatedPosts(slug, post.frontmatter.tags);
  const linkedProject = projects.find((p) => p.blogSlug === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    image: "https://pranavtripathi.dev/og-image.png",
    author: {
      "@type": "Person",
      name: "Pranav Tripathi",
      url: "https://pranavtripathi.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Pranav Tripathi",
    },
    url: `https://pranavtripathi.dev/blog/${post.slug}`,
  };

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen pt-32 pb-20 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="xl:grid xl:grid-cols-[1fr_220px] xl:gap-10">
            <article className="mx-auto max-w-3xl xl:mx-0 xl:max-w-none">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to blog
              </Link>

              <header className="mb-12">
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

                <h1 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">
                  {post.frontmatter.title}
                </h1>

                <p className="mb-6 text-lg text-muted">
                  {post.frontmatter.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-faint">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.frontmatter.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readingTime}
                  </span>
                </div>

                <div className="mt-6 h-px bg-edge" />
              </header>

              {linkedProject && (
                <Link
                  href="/#projects"
                  className="mb-8 flex items-center gap-3 rounded-xl border border-edge bg-card px-4 py-3 text-sm text-muted hover:border-emerald-400/30 hover:text-emerald-400 transition-all"
                >
                  <span>🔗</span>
                  <span>
                    See the project:{" "}
                    <span className="font-semibold text-heading">
                      {linkedProject.title}
                    </span>
                  </span>
                </Link>
              )}

              <ShareButtons title={post.frontmatter.title} slug={slug} />

              <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:text-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-body prose-p:leading-relaxed prose-a:text-accent-text prose-a:no-underline hover:prose-a:underline prose-strong:text-heading prose-code:text-accent-text prose-code:bg-tag prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-card prose-pre:border prose-pre:border-edge prose-pre:rounded-xl prose-blockquote:border-emerald-400 prose-blockquote:text-muted prose-li:text-body prose-ol:text-body prose-ul:text-body">
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

            <CopyCodeButtons />

            {/* Desktop TOC sidebar */}
            <TableOfContents headings={headings} />
          </div>

          <div className="mt-12 mx-auto max-w-3xl xl:max-w-none">
            <ShareButtons title={post.frontmatter.title} slug={slug} />
          </div>

          <BlogFooterCta />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-20 mx-auto max-w-3xl xl:max-w-none">
              <div className="mb-8 h-px bg-edge" />
              <h2 className="mb-6 text-2xl font-bold text-heading">
                Related Posts
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group"
                  >
                    <article className="h-full rounded-2xl border border-edge bg-card p-6 transition-all duration-300 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-400/5">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {rp.frontmatter.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-tag px-3 py-1 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-heading group-hover:text-emerald-400 transition-colors">
                        {rp.frontmatter.title}
                      </h3>
                      <p className="mb-6 text-muted leading-relaxed">
                        {rp.frontmatter.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between text-sm text-faint">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {new Date(
                              rp.frontmatter.date
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {rp.readingTime}
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
            </section>
          )}
        </div>
      </main>

      {/* BlogPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pranavtripathi.dev' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://pranavtripathi.dev/blog' },
              { '@type': 'ListItem', position: 3, name: post.frontmatter.title, item: `https://pranavtripathi.dev/blog/${slug}` },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}

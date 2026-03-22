import { getAllPosts } from "@/lib/mdx";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "Blog — Pranav Tripathi",
  description:
    "Thoughts on building at scale, AI in products, and software engineering.",
  openGraph: {
    type: "website",
    title: "Blog — Pranav Tripathi",
    description:
      "Thoughts on building at scale, AI in products, and software engineering.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Pranav Tripathi",
    description:
      "Thoughts on building at scale, AI in products, and software engineering.",
  },
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
            <BlogList posts={posts} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

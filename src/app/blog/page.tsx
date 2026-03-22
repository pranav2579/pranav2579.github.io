import { getAllPosts } from "@/lib/mdx";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SectionHeading from "@/components/section-heading";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "Blog — Pranav Tripathi",
  description:
    "Thoughts on building at scale, AI in products, and software engineering.",
  alternates: { canonical: "https://pranavtripathi.dev/blog" },
  openGraph: {
    type: "website",
    title: "Blog — Pranav Tripathi",
    description:
      "Thoughts on building at scale, AI in products, and software engineering.",
    url: "https://pranavtripathi.dev/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Blog — Pranav Tripathi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Pranav Tripathi",
    description:
      "Thoughts on building at scale, AI in products, and software engineering.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-32 pb-20 bg-surface">
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

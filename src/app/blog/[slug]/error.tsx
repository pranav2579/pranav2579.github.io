"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BlogError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">📄</div>
        <h1 className="text-3xl font-bold text-heading mb-4">Post not available</h1>
        <p className="text-muted mb-8">
          {process.env.NODE_ENV === "development"
            ? error.message
            : "This blog post could not be loaded. Please try again."}
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
          >
            Try Again
          </button>
          <Link href="/blog" className="px-6 py-3 border border-edge text-muted hover:text-heading rounded-xl transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

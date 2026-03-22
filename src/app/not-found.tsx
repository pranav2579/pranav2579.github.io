"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, BookOpen, Terminal } from "lucide-react";

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        {/* Floating 404 */}
        <motion.h1
          variants={floatingVariants}
          animate="animate"
          className="text-[10rem] sm:text-[12rem] leading-none font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent select-none"
        >
          404
        </motion.h1>

        {/* Terminal-style message */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 flex items-center gap-2 rounded-lg border border-edge bg-card px-4 py-2 font-mono text-sm text-faint"
        >
          <Terminal className="h-4 w-4 shrink-0 text-emerald-400" />
          <span>
            <span className="text-emerald-400">$</span> page --find{" "}
            <span className="text-muted">not_found</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-lg text-muted"
        >
          Looks like this page got lost in the codebase.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-2 text-sm text-faint"
        >
          The route you&apos;re looking for doesn&apos;t exist — it may have
          been moved or never written.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-700/20 transition-all hover:bg-emerald-600 hover:shadow-emerald-600/30 hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-edge bg-card px-6 py-3 text-sm font-medium text-heading transition-all hover:border-emerald-500/50 hover:bg-accent-subtle hover:-translate-y-0.5"
          >
            <BookOpen className="h-4 w-4" />
            Read the Blog
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

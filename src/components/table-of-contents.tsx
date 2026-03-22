"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronDown } from "lucide-react";
import type { TocHeading } from "@/lib/utils";

export type { TocHeading };

export default function TableOfContents({
  headings,
}: {
  headings: TocHeading[];
}) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) {
        observer.observe(el);
        observers.push(observer);
      }
    }

    return () => observer.disconnect();
  }, [headings]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }

  if (headings.length === 0) return null;

  const tocList = (
    <nav aria-label="Table of contents">
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id}>
            <button
              onClick={() => handleClick(h.id)}
              className={`block w-full text-left text-sm transition-colors duration-200 rounded px-2 py-1.5 ${
                h.level === 3 ? "pl-5" : ""
              } ${
                activeId === h.id
                  ? "text-emerald-400 bg-emerald-400/10 font-medium"
                  : "text-muted hover:text-heading"
              }`}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden xl:block sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
          On this page
        </p>
        {tocList}
      </aside>

      {/* Mobile collapsible */}
      <div className="xl:hidden mb-8 rounded-xl border border-edge bg-card p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between text-sm font-semibold text-heading"
        >
          <span className="flex items-center gap-2">
            <List size={16} />
            Table of Contents
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} />
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-3 border-t border-edge pt-3">{tocList}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

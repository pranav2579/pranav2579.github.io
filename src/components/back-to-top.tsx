"use client";

import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="p-2 rounded-full bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20 transition-colors cursor-pointer"
      aria-label="Back to top"
    >
      <ChevronUp size={18} />
    </button>
  );
}

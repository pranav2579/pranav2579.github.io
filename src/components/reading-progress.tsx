"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const article = document.querySelector("article");
      if (!article) return;

      const { top, height } = article.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrolled = Math.min(
        Math.max((-top) / (height - viewportHeight), 0),
        1
      );
      setProgress(scrolled * 100);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

const sectionIds = ["about", "experience", "projects", "skills", "achievements", "testimonials", "contact"];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

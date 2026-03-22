import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import GithubSlugger from "github-slugger";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function extractHeadings(content: string): TocHeading[] {
  const slugger = new GithubSlugger();
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocHeading[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      id: slugger.slug(match[2]),
      text: match[2],
      level: match[1].length as 2 | 3,
    });
  }
  return headings;
}

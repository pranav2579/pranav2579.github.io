"use client";

import { useState } from "react";
import { Twitter, Linkedin, Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://pranavtripathi.dev/blog/${slug}`;

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-faint">Share this post</span>
      <div className="flex items-center gap-2">
        <button
          onClick={shareTwitter}
          aria-label="Share on Twitter"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-all hover:border hover:border-emerald-400/40 hover:text-emerald-400"
        >
          <Twitter size={16} />
        </button>
        <button
          onClick={shareLinkedIn}
          aria-label="Share on LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-all hover:border hover:border-emerald-400/40 hover:text-emerald-400"
        >
          <Linkedin size={16} />
        </button>
        <div className="relative">
          <button
            onClick={copyLink}
            aria-label="Copy link"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-all hover:border hover:border-emerald-400/40 hover:text-emerald-400"
          >
            {copied ? (
              <Check size={16} className="text-emerald-400" />
            ) : (
              <Link2 size={16} />
            )}
          </button>
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-emerald-400/10 px-2 py-1 text-xs text-emerald-400">
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

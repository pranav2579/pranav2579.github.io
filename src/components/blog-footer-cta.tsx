import Link from "next/link";
import {
  PenLine,
  Twitter,
  Rss,
  Linkedin,
  FileText,
  CalendarCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function BlogFooterCta() {
  return (
    <section className="mt-16 mx-auto max-w-3xl xl:max-w-none rounded-2xl border border-edge bg-card p-8">
      <h2 className="text-xl font-bold text-heading mb-2">
        Enjoyed this article? Follow along for more.
      </h2>
      <p className="text-muted text-sm mb-6 leading-relaxed">
        I write about building products at scale, AI/ML in production, and
        lessons from 13+ years in software engineering.
      </p>

      <div className="flex flex-wrap gap-3">
        {[
          {
            icon: PenLine,
            href: siteConfig.links.medium,
            label: "Medium",
            external: true,
          },
          {
            icon: Twitter,
            href: siteConfig.links.twitter,
            label: "Twitter / X",
            external: true,
          },
          {
            icon: Linkedin,
            href: siteConfig.links.linkedin,
            label: "LinkedIn",
            external: true,
          },
          {
            icon: Rss,
            href: "/feed.xml",
            label: "RSS Feed",
            external: false,
          },
        ].map(({ icon: Icon, href, label, external }) =>
          external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-edge px-4 py-2 text-sm text-muted hover:border-emerald-400/30 hover:text-emerald-400 transition-all"
            >
              <Icon size={16} />
              {label}
            </a>
          ) : (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-2 rounded-full border border-edge px-4 py-2 text-sm text-muted hover:border-emerald-400/30 hover:text-emerald-400 transition-all"
            >
              <Icon size={16} />
              {label}
            </a>
          )
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-edge/50 pt-6">
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-4 py-2 text-sm font-medium text-accent-text hover:underline transition-all"
        >
          <FileText size={16} />
          View my resume
        </Link>
        <a
          href={siteConfig.links.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-4 py-2 text-sm font-medium text-accent-text hover:underline transition-all"
        >
          <CalendarCheck size={16} />
          Book a chat
        </a>
      </div>
    </section>
  );
}

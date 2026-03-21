import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-edge/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-heading font-mono">
              Pranav Tripathi<span className="text-emerald-400">.</span>
            </span>
            <span className="text-faint text-sm">
              © {new Date().getFullYear()} Pranav Tripathi
            </span>
          </div>

          {/* Built with */}
          <p className="text-faint text-sm flex items-center gap-1">
            Built with Next.js, Tailwind &amp;{" "}
            <Heart size={14} className="text-red-400 fill-red-400" />
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: siteConfig.links.github, label: "GitHub" },
              {
                icon: Linkedin,
                href: siteConfig.links.linkedin,
                label: "LinkedIn",
              },
              { icon: Mail, href: siteConfig.links.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-faint hover:text-emerald-400 transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}

export function NavLink({ href, label, isActive, onClick, variant = "desktop" }: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(
          "transition-colors py-2 pl-3 border-l-2",
          isActive
            ? "text-emerald-400 border-emerald-400 bg-emerald-400/10"
            : "text-muted hover:text-emerald-400 border-transparent"
        )}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "text-sm transition-colors relative pb-1",
        isActive
          ? "text-emerald-400"
          : "text-muted hover:text-emerald-400"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="navbar-underline"
          className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-emerald-400 rounded-full"
        />
      )}
    </a>
  );
}

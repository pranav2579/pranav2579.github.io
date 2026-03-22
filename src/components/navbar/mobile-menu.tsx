"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

interface NavSection {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  sections: NavSection[];
  isDark: boolean;
  toggleTheme: () => void;
}

export function MobileMenu({ isOpen, onClose, activeSection, sections, isDark, toggleTheme }: MobileMenuProps) {
  const isActive = (href: string) => {
    const hash = href.split("#")[1];
    return hash ? activeSection === hash : false;
  };

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-nav-scrolled backdrop-blur-lg border-b border-edge"
        >
          <nav aria-label="Main navigation" className="px-6 py-4 flex flex-col gap-4">
            {sections.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isActive(link.href)}
                onClick={onClose}
                variant="mobile"
              />
            ))}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} showLabel />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

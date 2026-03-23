"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./use-active-section";
import { ThemeToggle } from "./theme-toggle";
import { NavLink } from "./nav-link";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const prevMobileMenuOpen = useRef(false);
  const activeSection = useActiveSection();

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);

  const isActive = (href: string) => {
    const hash = href.split("#")[1];
    return hash ? activeSection === hash : false;
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const prefersLight = stored === "light";
    if (prefersLight) {
      requestAnimationFrame(() => setIsDark(false));
    } else if (!prefersDark && !prefersLight) {
      requestAnimationFrame(() =>
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Return focus to the toggle button when menu closes
  useEffect(() => {
    if (prevMobileMenuOpen.current && !isMobileMenuOpen) {
      mobileMenuButtonRef.current?.focus();
    }
    prevMobileMenuOpen.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-nav-scrolled backdrop-blur-lg border-b border-nav-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="p-2 rounded-lg text-heading hover:text-emerald-400 hover:bg-card transition-all"
          aria-label="Home"
        >
          <Home size={22} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} isActive={isActive(link.href)} />
          ))}
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile menu button */}
        <button
          ref={mobileMenuButtonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-muted hover:text-heading transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        activeSection={activeSection}
        sections={navLinks}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
    </motion.header>
  );
}

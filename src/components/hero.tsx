"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Twitter, PenLine, Youtube, Calendar } from "lucide-react";
import Link from "next/link";
import { siteConfig, stats, heroData } from "@/lib/data";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  const animate = useCallback(() => {
    // Parse numeric portion and suffix from strings like "13+", "400M+", "2012"
    const match = value.match(/^(\d+)(.*)/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2]; // e.g. "+", "M+", ""
    // For large numbers like 2012, start near the target for a nicer effect
    const start = target > 100 ? target - Math.min(20, Math.floor(target * 0.01)) : 0;
    const duration = 2000;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (target - start) * eased);

      if (progress < 1) {
        setDisplay(`${current}${suffix}`);
        requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    }

    requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    if (isInView) {
      animate();
    }
  }, [isInView, animate]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !hasScrolled) setHasScrolled(true);
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-hero-bg">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--hero-orb1)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--hero-orb2)] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(128 128 128 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-edge bg-card text-sm text-muted mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {heroData.statusMessage}
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-heading mb-6 tracking-tight">
            Pranav{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Tripathi
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
            {heroData.tagline}
          </p>

          <p className="text-base text-faint max-w-2xl mx-auto mb-12">
            {heroData.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/25"
            >
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border border-edge hover:border-muted text-body hover:text-heading rounded-full transition-all"
            >
              Get in Touch
            </a>
            <a
              href={siteConfig.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-edge/50 hover:border-emerald-400/50 text-faint hover:text-emerald-400 rounded-full transition-all"
            >
              <Calendar size={18} />
              Book a 1:1
            </a>
            <Link
              href="/resume"
              className="hidden sm:flex items-center gap-2 px-8 py-4 border border-edge/50 hover:border-emerald-400/50 text-faint hover:text-emerald-400 rounded-full transition-all"
            >
              <FileText size={18} />
              View Resume
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: siteConfig.links.github, label: "GitHub" },
              { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
              { icon: Youtube, href: siteConfig.links.youtube, label: "YouTube" },
              { icon: PenLine, href: siteConfig.links.medium, label: "Medium" },
              { icon: Mail, href: siteConfig.links.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-edge text-faint hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-heading mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-faint">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-edge flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

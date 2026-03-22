"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function MidPageCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="collaborate"
      className="relative py-24 overflow-hidden bg-surface-alt"
    >
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading">
            Want to build products at this scale?
          </h2>

          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            I&apos;m always open to discussing engineering challenges, AI
            products, or potential collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={siteConfig.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <Calendar size={18} />
              Schedule a Chat
            </a>
            <a
              href={siteConfig.links.email}
              className="flex items-center gap-2 px-8 py-4 border border-edge hover:border-emerald-400/50 text-body hover:text-heading rounded-full transition-all"
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

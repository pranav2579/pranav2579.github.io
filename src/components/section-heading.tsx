"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
      <div
        aria-hidden="true"
        className={`mt-4 h-1 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}

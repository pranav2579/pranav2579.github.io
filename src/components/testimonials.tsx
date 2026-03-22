"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import SectionHeading from "./section-heading";
import { testimonials, siteConfig } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-32 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="What People Say"
          subtitle="Testimonials from colleagues and collaborators"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-edge-subtle bg-white/5 dark:bg-white/[0.03] hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="text-emerald-400/30 mb-4 transition-colors duration-300 group-hover:text-emerald-400/60" size={36} />

              <p className="text-body italic leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="h-px w-1/3 mx-auto bg-edge-subtle mb-4 transition-all duration-300 group-hover:w-full" />

              <p className="text-heading font-semibold">{testimonial.name}</p>
              <p className="text-muted text-sm">
                {testimonial.role} · {testimonial.company}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted text-sm mt-12"
        >
          ✨ Want to add a testimonial?{" "}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            Connect with me on LinkedIn
          </a>
        </motion.p>
      </div>
    </section>
  );
}

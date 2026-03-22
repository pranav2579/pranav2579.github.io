"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and concepts I work with daily"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-2xl border border-edge bg-card hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-subtle group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="text-emerald-400" size={20} />
                  </div>
                  <h3 className="text-heading font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-lg bg-tag text-muted border border-tag-border hover:text-emerald-400 hover:border-emerald-400/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

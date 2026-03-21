"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import SectionHeading from "./section-heading";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="Building at scale for over a decade"
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-zinc-700 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-emerald-400 border-4 border-zinc-950 z-10" />

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/5">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0">
                      <Briefcase className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="text-emerald-400 font-medium">{exp.company}</p>
                      <p className="text-zinc-500 text-sm mt-1">
                        {exp.period} · {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-sm text-zinc-300">
                        <span className="text-emerald-400 shrink-0 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

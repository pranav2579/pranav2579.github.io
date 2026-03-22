"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ExternalLink,
  Users,
  Palette,
  HardDrive,
  MessageSquare,
  Store,
  Puzzle,
  Newspaper,
} from "lucide-react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";

const projectIcons: Record<string, LucideIcon> = {
  "paint-cocreator": Palette,
  "windows-backup-restore": HardDrive,
  "store-ai-review": MessageSquare,
  "windows-store-spark": Store,
  "edge-extensions": Puzzle,
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Products that reach hundreds of millions of users"
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="h-full p-6 rounded-2xl border border-edge bg-card hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/5 hover:scale-[1.02] flex flex-col">
                  {/* Project icon/header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-accent-subtle">
                      {Icon ? (
                        <Icon className="text-emerald-400" size={24} />
                      ) : (
                        <Palette className="text-emerald-400" size={24} />
                      )}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-tag border border-tag-border">
                      <Users size={14} className="text-emerald-400" />
                      <span className="text-xs text-emerald-400 font-semibold">
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">
                    {project.longDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-edge/50">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-tag text-muted border border-tag-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External product link + press */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:underline opacity-80 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        View Product
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.press && (
                      <a
                        href={project.press.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-emerald-400 transition-colors"
                        title={project.press.title}
                      >
                        <Newspaper size={14} />
                        In the Press
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-cyan-400/0 group-hover:from-emerald-400/10 group-hover:via-emerald-400/5 group-hover:to-cyan-400/10 transition-all duration-500 -z-10 blur-xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

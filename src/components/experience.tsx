"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import SectionHeading from "./section-heading";
import { experiences } from "@/lib/data";

const PREVIEW_ACHIEVEMENTS = 2;

const companyColors: Record<string, string> = {
  "Microsoft": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Workday": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Sears Holdings India": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Goldman Sachs": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Oracle": "bg-red-500/10 text-red-400 border-red-500/20",
  "Infosys": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "IIT Bombay": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

function getCompanyInitials(company: string): string {
  if (company === "IIT Bombay") return "IIT";
  return company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const leadershipKeywords = /^(Led|Mentored|Architected|Drove|Directed|Spearheaded|Owned|Leading|Acted as technical lead)/;

function isLeadershipBullet(text: string): boolean {
  return leadershipKeywords.test(text);
}

function extractYear(period: string): string | null {
  const match = period.match(/(\d{4})/);
  return match ? match[1] : null;
}

function AchievementItem({ achievement }: { achievement: string }) {
  const isLeadership = isLeadershipBullet(achievement);
  return (
    <li
      className={`flex gap-2 text-sm text-body ${
        isLeadership ? "border-l-2 border-emerald-400/40 pl-2" : ""
      }`}
    >
      {isLeadership ? (
        <Star className="text-emerald-400 shrink-0 mt-0.5" size={14} />
      ) : (
        <span className="text-emerald-400 shrink-0 mt-1">▹</span>
      )}
      <span>
        {isLeadership ? (
          <>
            <strong className="text-emerald-300">
              {achievement.split(" ")[0]}
            </strong>{" "}
            {achievement.split(" ").slice(1).join(" ")}
          </>
        ) : (
          achievement
        )}
      </span>
    </li>
  );
}

const detailsVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // First entry (most recent/current role) expanded by default
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (experiences.length > 0) {
      initial[experiences[0].id] = true;
    }
    return initial;
  });

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Compute unique year markers — only show a year the first time it appears
  const shownYears = new Set<string>();
  const yearMarkers: (string | null)[] = experiences.map((exp) => {
    const year = extractYear(exp.period);
    if (year && !shownYears.has(year)) {
      shownYears.add(year);
      return year;
    }
    return null;
  });

  return (
    <section id="experience" className="py-32 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="Building at scale for over a decade"
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-edge to-transparent" />

          {experiences.map((exp, index) => {
            const badgeColors =
              companyColors[exp.company] ??
              "bg-gray-500/10 text-gray-400 border-gray-500/20";
            const initials = getCompanyInitials(exp.company);
            const yearMarker = yearMarkers[index];
            const isExpanded = !!expanded[exp.id];
            const previewAchievements = exp.achievements.slice(0, PREVIEW_ACHIEVEMENTS);
            const remainingAchievements = exp.achievements.slice(PREVIEW_ACHIEVEMENTS);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year marker on timeline */}
                {yearMarker && (
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 -top-7 z-20">
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-surface-alt border border-edge text-faint tracking-wide">
                      {yearMarker}
                    </span>
                  </div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-emerald-400 border-4 border-timeline-dot-border z-10" />

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="group p-6 rounded-2xl border border-edge bg-card-alt hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/5">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-lg border text-xs font-bold shrink-0 ${badgeColors}`}
                      >
                        {initials}
                      </div>
                      <div>
                        <h3 className="text-heading font-bold text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-accent-text font-medium">
                          {exp.company}
                        </p>
                        <p className="text-faint text-sm mt-1">
                          {exp.period} · {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted text-sm mb-4">{exp.description}</p>

                    {/* Preview achievements (always visible) */}
                    {previewAchievements.length > 0 && (
                      <ul className="space-y-2 mb-3">
                        {previewAchievements.map((achievement, i) => (
                          <AchievementItem key={i} achievement={achievement} />
                        ))}
                      </ul>
                    )}

                    {/* Expandable details: remaining achievements + tech stack */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="details"
                          variants={detailsVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          {remainingAchievements.length > 0 && (
                            <ul className="space-y-2 mb-4">
                              {remainingAchievements.map((achievement, i) => (
                                <AchievementItem
                                  key={i + PREVIEW_ACHIEVEMENTS}
                                  achievement={achievement}
                                />
                              ))}
                            </ul>
                          )}

                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-2 mb-1">
                            {exp.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs rounded-full bg-tag text-muted border border-tag-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Toggle button */}
                    <button
                      onClick={() => toggleExpanded(exp.id)}
                      aria-expanded={isExpanded}
                      className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide details" : "Show details"}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

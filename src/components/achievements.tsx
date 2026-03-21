"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star } from "lucide-react";
import SectionHeading from "./section-heading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Achievements & Awards"
          subtitle="Recognition and milestones along the way"
        />

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-edge bg-card hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-amber-subtle shrink-0">
                  {index === 0 ? (
                    <Award className="text-amber-400" size={24} />
                  ) : (
                    <Star className="text-amber-400" size={24} />
                  )}
                </div>
                <div>
                  <h3 className="text-heading font-bold text-lg mb-1 group-hover:text-amber-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-amber-400/80 text-sm font-medium mb-1">
                    {achievement.organization}
                  </p>
                  <p className="text-faint text-xs mb-3">{achievement.year}</p>
                  <p className="text-muted text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Globe, GraduationCap, Heart, Linkedin } from "lucide-react";
import SectionHeading from "./section-heading";
import { education, volunteerExperience, siteConfig, languages, quickFacts } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="The story behind the code"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile photo */}
            <div className="flex justify-center md:justify-start mb-2">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-edge shadow-lg shadow-emerald-500/10">
                <Image
                  src="/images/profile.jpg"
                  alt="Pranav Tripathi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <p className="text-body text-lg leading-relaxed">
              I&apos;m a builder at heart. For the past 13+ years, I&apos;ve been obsessed with one
              question: <span className="text-emerald-400 font-semibold">how do you engineer products
              that work flawlessly for hundreds of millions of people?</span>
            </p>
            <p className="text-muted leading-relaxed">
              From shipping DALL-E-powered AI in Microsoft Paint to designing billing systems
              processing billions in transactions at Workday, I&apos;ve learned that great engineering
              is about making the complex feel simple — whether you&apos;re serving 100 users or 400
              million.
            </p>
            <p className="text-muted leading-relaxed">
              Currently, I&apos;m bringing AI to gaming at Microsoft&apos;s{" "}
              <span className="text-heading font-medium">XBOX team in Vancouver</span>. When I&apos;m
              not architecting distributed systems, I&apos;m mentoring engineers, writing about
              building at scale, and giving back to the community that shaped my journey — starting
              from{" "}
              <a
                href="https://iitbhu.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
              >
                IIT BHU
              </a>{" "}
              to the global tech stage.
            </p>

            {/* LinkedIn link */}
            <div className="pt-2">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={16} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Education & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Education card */}
            <div className="p-6 rounded-2xl border border-edge bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-subtle">
                  <GraduationCap className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-heading font-semibold text-lg">Education</h3>
              </div>
              <div>
                <p className="text-heading font-medium">{education.degree}</p>
                <p className="text-emerald-400 text-sm mt-1">{education.institution}</p>
                <p className="text-faint text-sm mt-1">{education.period}</p>
                <p className="text-muted text-sm mt-3">{education.description}</p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="p-6 rounded-2xl border border-edge bg-card">
              <h3 className="text-heading font-semibold text-lg mb-4">Quick Facts</h3>
              <div className="space-y-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex justify-between items-center">
                    <span className="text-faint text-sm">{fact.label}</span>
                    <span className="text-body text-sm font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community card */}
            <div className="p-6 rounded-2xl border border-edge bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-subtle">
                  <Heart className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-heading font-semibold text-lg">Community</h3>
              </div>
              <div>
                <p className="text-heading font-medium">{volunteerExperience.role}</p>
                <p className="text-emerald-400 text-sm mt-1">{volunteerExperience.organization}</p>
                <p className="text-faint text-sm mt-1">{volunteerExperience.period} · {volunteerExperience.location}</p>
                <p className="text-muted text-sm mt-3">{volunteerExperience.description}</p>
              </div>
            </div>

            {/* Languages card */}
            <div className="p-6 rounded-2xl border border-edge bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-subtle">
                  <Globe className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-heading font-semibold text-lg">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="text-faint text-sm">{lang.name}</span>
                    <span className="text-body text-sm font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

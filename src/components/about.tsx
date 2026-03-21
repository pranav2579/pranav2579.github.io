"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./section-heading";
import { education } from "@/lib/data";

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
              I&apos;m a <span className="text-emerald-400 font-semibold">Staff Software Engineer</span> with
              over 13 years of experience building software systems that reach hundreds of millions of
              people. My work has shipped on every Windows 11 device and powers products used by
              100M+ monthly active users.
            </p>
            <p className="text-muted leading-relaxed">
              My journey started at <span className="text-heading font-medium">IIT BHU Varanasi</span>, one of
              India&apos;s top engineering institutions, where I studied Computer Science. From there, I joined
              Oracle and then spent the better part of a decade at Microsoft, where I&apos;ve led the
              architecture of large-scale distributed systems, AI-powered features, and platform
              infrastructure.
            </p>
            <p className="text-muted leading-relaxed">
              I&apos;m passionate about building systems that are not just scalable, but elegant. Whether
              it&apos;s bringing AI image generation to 100M+ Paint users or designing backend
              infrastructure for the Windows Store, I love the challenge of making complex things
              simple and reliable.
            </p>
            <p className="text-muted leading-relaxed">
              Currently based in <span className="text-heading font-medium">Canada 🇨🇦</span>, I&apos;m always
              interested in new challenges and opportunities to build impactful technology.
            </p>
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
                {[
                  { label: "Current Focus", value: "AI-Powered Products & Platform Engineering" },
                  { label: "Companies", value: "Microsoft → Oracle" },
                  { label: "Speciality", value: "Distributed Systems at Scale" },
                  { label: "Scale", value: "400M+ users, 100M+ MAU" },
                  { label: "Location", value: "Canada 🇨🇦" },
                ].map((fact) => (
                  <div key={fact.label} className="flex justify-between items-center">
                    <span className="text-faint text-sm">{fact.label}</span>
                    <span className="text-body text-sm font-medium">{fact.value}</span>
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

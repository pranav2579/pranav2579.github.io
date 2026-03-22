"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Github, Calendar, MessageSquare } from "lucide-react";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-surface-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-muted leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting projects,
              or just having a conversation about technology and engineering at scale.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@pranavtripathi.dev",
                  href: siteConfig.links.email,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Canada 🇨🇦",
                  href: null,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/pranav2579",
                  href: siteConfig.links.linkedin,
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/pranav2579",
                  href: siteConfig.links.github,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-accent-subtle">
                    <item.icon className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-faint text-xs">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body hover:text-emerald-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-body">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center p-8 rounded-2xl border border-border bg-card-bg space-y-6"
          >
            <div className="text-center space-y-3">
              <MessageSquare className="mx-auto text-emerald-400" size={40} />
              <h3 className="text-heading font-bold text-xl">
                Let&apos;s Connect
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Whether you have a project idea, want to collaborate, or just want to chat about tech — I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={siteConfig.links.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Calendar size={18} />
                Schedule a Meeting
              </a>
              <a
                href={siteConfig.links.email}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-border hover:border-emerald-400/50 text-heading font-medium rounded-xl transition-all hover:bg-accent-subtle"
              >
                <Mail size={18} />
                Send an Email
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-border hover:border-emerald-400/50 text-heading font-medium rounded-xl transition-all hover:bg-accent-subtle"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

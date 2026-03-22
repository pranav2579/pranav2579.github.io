// Contact form using Formspree (https://formspree.io)
// To activate: Replace YOUR_FORM_ID below with your Formspree form ID
// Sign up free at https://formspree.io and create a new form

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import SectionHeading from "./section-heading";
import { siteConfig } from "@/lib/data";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const IS_FORM_CONFIGURED = !FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Contact from ${formState.name}`,
          _gotcha: "",
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setError("Failed to send message. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div role="status" aria-live="polite" className="h-full flex items-center justify-center p-8 rounded-2xl border border-emerald-400/30 bg-emerald-500/5">
                <div className="text-center">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-heading font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : !IS_FORM_CONFIGURED ? (
              <div className="h-full flex items-center justify-center p-8 rounded-2xl border border-amber-400/30 bg-amber-500/5">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-heading font-bold text-xl mb-2">Form Not Configured</h3>
                  <p className="text-muted text-sm">
                    Contact form will be activated soon. In the meantime, please reach out via{" "}
                    <a href={siteConfig.links.email} className="text-emerald-400 hover:underline">email</a>{" "}
                    or{" "}
                    <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">LinkedIn</a>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="_gotcha" className="absolute left-[-9999px]" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                {error && (
                  <div id="form-error" role="alert" className="text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    {error}
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-input-bg border border-input-border text-heading placeholder-faint focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-input-bg border border-input-border text-heading placeholder-faint focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-input-bg border border-input-border text-heading placeholder-faint focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/50 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-describedby={error ? "form-error" : undefined}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/50 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

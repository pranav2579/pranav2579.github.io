import { Metadata } from "next";
import Link from "next/link";
import {
  experiences,
  projects,
  skillCategories,
  achievements,
  education,
  siteConfig,
} from "@/lib/data";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Resume — Pranav Tripathi",
  description:
    "Professional resume of Pranav Tripathi — Senior Software Engineer Technical Lead with 13+ years of experience building products used by 400M+ people.",
  alternates: {
    canonical: `${siteConfig.url}/resume`,
  },
  openGraph: {
    title: "Resume — Pranav Tripathi",
    description:
      "Senior Software Engineer Technical Lead with 13+ years of experience.",
    url: `${siteConfig.url}/resume`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Resume — Pranav Tripathi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Pranav Tripathi",
    description:
      "Senior Software Engineer Technical Lead with 13+ years of experience.",
    images: ["/og-image.png"],
  },
};

const fullTimeExperiences = experiences.filter(
  (e) => !e.id.includes("intern")
);

const featuredProjects = projects.filter((p) => p.featured).slice(0, 5);

export default function ResumePage() {
  return (
    <>
      {/* Global print overrides */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              nav, footer, .no-print { display: none !important; }
              body { background: white !important; color: black !important; font-size: 11px !important; }
              html { background: white !important; }
              a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; color: #666; }
              .print-link-clean a[href]::after { content: none; }
            }
          `,
        }}
      />

      <main id="main-content" className="max-w-4xl mx-auto px-6 py-16 bg-surface min-h-screen print:bg-white print:py-4 print:px-0 print:min-h-0 print:text-black">
        {/* Top bar — hidden in print */}
        <div className="flex items-center justify-between mb-10 no-print">
          <Link
            href="/"
            className="text-sm text-muted hover:text-heading transition-colors"
          >
            ← Back to Home
          </Link>
          <PrintButton />
        </div>

        {/* Print hint — hidden in print */}
        <p className="text-xs text-faint text-center mb-8 no-print">
          Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-surface-alt text-muted text-xs font-mono border border-edge">⌘/Ctrl + P</kbd> to save as PDF
        </p>

        {/* ─── Header ─── */}
        <header className="mb-8 print:mb-4">
          <h1 className="text-3xl font-bold text-heading print:text-2xl print:text-black">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-body mt-1 print:text-sm print:text-gray-700">
            Senior Software Engineer Technical Lead
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted print:text-xs print:text-gray-600 print-link-clean">
            <span>Vancouver, Canada</span>
            <a href={siteConfig.links.email} className="hover:text-heading transition-colors print:text-gray-600">
              hello@pranavtripathi.dev
            </a>
            <a href={siteConfig.links.linkedin} className="hover:text-heading transition-colors print:text-gray-600">
              linkedin.com/in/pranav2579
            </a>
            <a href={siteConfig.links.github} className="hover:text-heading transition-colors print:text-gray-600">
              github.com/pranav2579
            </a>
            <a href={siteConfig.url} className="hover:text-heading transition-colors print:text-gray-600">
              pranavtripathi.dev
            </a>
          </div>
        </header>

        <hr className="border-edge mb-6 print:border-gray-300 print:mb-4" />

        {/* ─── Summary ─── */}
        <section className="mb-8 print:mb-4">
          <h2 className="text-lg font-semibold text-heading mb-2 print:text-base print:text-black">
            Summary
          </h2>
          <p className="text-sm text-body leading-relaxed print:text-xs print:text-gray-800">
            Senior Software Engineer Technical Lead with 13+ years of experience building and
            shipping products used by 400M+ people. Proven track record at Microsoft, Workday,
            Goldman Sachs, and Oracle delivering scalable distributed systems, AI-powered
            consumer features, and enterprise platforms. IIT BHU alumnus. Based in Vancouver, Canada.
          </p>
        </section>

        {/* ─── Experience ─── */}
        <section className="mb-8 print:mb-4">
          <h2 className="text-lg font-semibold text-heading mb-4 print:text-base print:text-black">
            Experience
          </h2>
          <div className="space-y-6 print:space-y-3">
            {fullTimeExperiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <h3 className="font-semibold text-heading text-sm print:text-xs print:text-black">
                    {exp.role}
                    <span className="text-muted font-normal print:text-gray-600">
                      {" "}— {exp.company}
                    </span>
                  </h3>
                  <span className="text-xs text-muted shrink-0 print:text-gray-500">
                    {exp.period} · {exp.location}
                  </span>
                </div>
                <ul className="mt-1.5 space-y-0.5 text-sm text-body print:text-xs print:text-gray-800">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-faint select-none print:text-gray-400">•</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Key Projects ─── */}
        <section className="mb-8 print:mb-4">
          <h2 className="text-lg font-semibold text-heading mb-4 print:text-base print:text-black">
            Key Projects
          </h2>
          <div className="space-y-4 print:space-y-2">
            {featuredProjects.map((proj) => (
              <div key={proj.id}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <h3 className="font-semibold text-heading text-sm print:text-xs print:text-black">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium shrink-0 print:text-gray-600">
                    {proj.impact}
                  </span>
                </div>
                <p className="text-sm text-body mt-0.5 print:text-xs print:text-gray-800">
                  {proj.description}
                </p>
                <p className="text-xs text-muted mt-1 print:text-gray-500">
                  {proj.tech.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className="mb-8 print:mb-4">
          <h2 className="text-lg font-semibold text-heading mb-4 print:text-base print:text-black">
            Skills
          </h2>
          {/* Screen: card grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 print:hidden">
            {skillCategories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-lg border border-edge bg-card p-3"
              >
                <h3 className="text-xs font-semibold text-heading mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {cat.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
          {/* Print: compact list */}
          <div className="hidden print:block space-y-1">
            {skillCategories.map((cat) => (
              <p key={cat.name} className="text-xs text-gray-800">
                <span className="font-semibold text-black">{cat.name}:</span>{" "}
                {cat.skills.join(", ")}
              </p>
            ))}
          </div>
        </section>

        {/* ─── Education ─── */}
        <section className="mb-8 print:mb-4">
          <h2 className="text-lg font-semibold text-heading mb-2 print:text-base print:text-black">
            Education
          </h2>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="font-semibold text-heading text-sm print:text-xs print:text-black">
                {education.degree}
              </h3>
              <span className="text-xs text-muted shrink-0 print:text-gray-500">
                {education.period}
              </span>
            </div>
            <p className="text-sm text-body mt-0.5 print:text-xs print:text-gray-800">
              {education.institution}
            </p>
            <p className="text-xs text-muted mt-1 print:text-gray-600">
              {education.description}
            </p>
          </div>
        </section>

        {/* ─── Achievements ─── */}
        <section className="mb-8 print:mb-4">
          <h2 className="text-lg font-semibold text-heading mb-3 print:text-base print:text-black">
            Achievements
          </h2>
          <ul className="space-y-2 print:space-y-1">
            {achievements.map((ach, i) => (
              <li key={i} className="flex gap-2 text-sm text-body print:text-xs print:text-gray-800">
                <span className="text-faint select-none print:text-gray-400">•</span>
                <span>
                  <span className="font-semibold text-heading print:text-black">
                    {ach.title}
                  </span>
                  {" — "}
                  {ach.organization}, {ach.year}.{" "}
                  {ach.description}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

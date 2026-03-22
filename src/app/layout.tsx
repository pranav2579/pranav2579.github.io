import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/back-to-top";
import MotionProvider from "@/components/motion-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranavtripathi.dev"),
  title: "Pranav Tripathi — Senior Software Engineer Technical Lead",
  description:
    "Senior Software Engineer Technical Lead with 13+ years of experience building products used by 400M+ people. IIT BHU alumnus. Microsoft.",
  keywords: [
    "Pranav Tripathi",
    "Senior Software Engineer Technical Lead",
    "Microsoft",
    "IIT BHU",
    "Portfolio",
    "Full Stack Developer",
    "Canada",
  ],
  authors: [{ name: "Pranav Tripathi" }],
  alternates: {
    canonical: "https://pranavtripathi.dev",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranavtripathi.dev",
    title: "Pranav Tripathi — Senior Software Engineer Technical Lead",
    description:
      "Senior Software Engineer Technical Lead with 13+ years of experience building products used by 400M+ people. IIT BHU alumnus. Microsoft.",
    siteName: "Pranav Tripathi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranav Tripathi — Senior Software Engineer Technical Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Tripathi — Senior Software Engineer Technical Lead",
    description:
      "Senior Software Engineer Technical Lead with 13+ years of experience building products used by 400M+ people. IIT BHU alumnus. Microsoft.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/*
          Security meta tags for static export.
          Note: X-Frame-Options and full CSP are best set as HTTP headers
          via your hosting platform (e.g. GitHub Pages _headers, Cloudflare,
          or Vercel vercel.json) — they cannot be reliably enforced via meta tags.
        */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        {/* Inline theme init to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=localStorage.getItem('theme');if(d==='dark'||(!d&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-heading transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pranav Tripathi",
              jobTitle: "Senior Software Engineer Technical Lead",
              url: "https://pranavtripathi.dev",
              image: "https://pranavtripathi.dev/og-image.png",
              description:
                "Senior Software Engineer Technical Lead with 13+ years of experience building products used by 400M+ people.",
              sameAs: [
                "https://linkedin.com/in/pranav2579",
                "https://github.com/pranav2579",
                "https://twitter.com/pranav2579",
                "https://www.youtube.com/channel/UC6et41KnTGyocDtbjeOQ8pw",
                "https://pranav2579.medium.com",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Microsoft",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "IIT BHU",
              },
              knowsAbout: [
                "Software Engineering",
                "Full Stack Development",
                "TypeScript",
                "React",
                "Node.js",
              ],
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <MotionProvider>
          {children}
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}

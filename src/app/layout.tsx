import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav Tripathi — Staff Software Engineer",
  description:
    "Staff Software Engineer with 13+ years of experience building products used by 400M+ people. IIT BHU alumnus. Ex-Microsoft.",
  keywords: [
    "Pranav Tripathi",
    "Staff Software Engineer",
    "Microsoft",
    "IIT BHU",
    "Portfolio",
    "Full Stack Developer",
    "Canada",
  ],
  authors: [{ name: "Pranav Tripathi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranavtripathi.dev",
    title: "Pranav Tripathi — Staff Software Engineer",
    description:
      "Staff Software Engineer with 13+ years of experience building products used by 400M+ people.",
    siteName: "Pranav Tripathi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Tripathi — Staff Software Engineer",
    description:
      "Staff Software Engineer with 13+ years of experience building products used by 400M+ people.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pranav Tripathi",
              jobTitle: "Staff Software Engineer",
              url: "https://pranavtripathi.dev",
              sameAs: [
                "https://linkedin.com/in/pranavtripathi",
                "https://github.com/pranavtripathi",
              ],
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
        {children}
      </body>
    </html>
  );
}

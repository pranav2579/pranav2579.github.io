import {
  Code2,
  Cloud,
  Database,
  Globe,
  Layers,
  Terminal,
  Brain,
  Palette,
} from "lucide-react";

export const siteConfig = {
  name: "Pranav Tripathi",
  title: "Pranav Tripathi — Staff Software Engineer",
  description:
    "Staff Software Engineer with 13+ years of experience building products used by 400M+ people. IIT BHU alumnus. Ex-Microsoft.",
  url: "https://pranavtripathi.dev",
  links: {
    github: "https://github.com/pranav2579",
    linkedin: "https://linkedin.com/in/pranav2579",
    email: "mailto:hello@pranavtripathi.dev",
  },
};

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "microsoft-3",
    company: "Microsoft",
    role: "Staff Software Engineer",
    period: "2020 — Present",
    location: "Vancouver, Canada",
    description:
      "Leading design and implementation of scalable systems powering Windows, Microsoft Store, and AI-driven products.",
    achievements: [
      "Led Paint Co-Creator (DALL-E AI image generation) — serving 100M+ monthly users",
      "Built Windows Apps Backup & Restore shipped on 400M+ Windows 11 devices",
      "Developed AI Review Summarization for Microsoft Store — summarizing millions of app reviews",
      "Architected Windows Store Backend (SPARK) for Win32 app catalog integration",
    ],
    tech: ["C#", ".NET Core", "Azure Cosmos DB", "Azure Functions", "Python", "Distributed Systems"],
  },
  {
    id: "microsoft-2",
    company: "Microsoft",
    role: "Senior Software Engineer",
    period: "2017 — 2020",
    location: "Hyderabad, India",
    description:
      "Engineered core backend services for Microsoft Edge Extensions and the Windows Store platform.",
    achievements: [
      "Built Edge Extensions Publishing Backend from scratch — enabled 10,000+ extensions in 6 months",
      "Compared to 300 all-time extensions on old Edge browser",
      "Led developer ingestion workflow via Microsoft Partner Center",
      "Awarded Microsoft 'Be a Leader' 2021 for demonstrating leadership in Store Services team",
    ],
    tech: ["C#", ".NET", "Azure", "SQL Server", "Microservices", "REST APIs"],
  },
  {
    id: "microsoft-1",
    company: "Microsoft",
    role: "Software Engineer",
    period: "2014 — 2017",
    location: "Hyderabad, India",
    description:
      "Worked on the Windows Store Services team building critical platform infrastructure.",
    achievements: [
      "Contributed to core Store services powering app distribution on Windows",
      "Developed backend systems handling millions of daily transactions",
    ],
    tech: ["C#", ".NET", "Azure", "SQL Server"],
  },
  {
    id: "oracle",
    company: "Oracle",
    role: "Software Engineer",
    period: "2012 — 2014",
    location: "Hyderabad, India",
    description:
      "Worked on Oracle E-Business Suite products — WebADI and Report Manager.",
    achievements: [
      "Developed Excel formatting controls for Report Manager with wide customer impact",
      "Delivered Windows 8 certification for WebADI & Report Manager — shipped to thousands of EBS customers",
      "Built Office 2010 64-bit certification for global EBS customer base",
    ],
    tech: ["Java", "J2EE", "SQL", "VBA", "Oracle DB"],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  impact: string;
  tech: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "paint-cocreator",
    title: "Paint Co-Creator",
    description:
      "DALL-E powered AI image generation built into Microsoft Paint",
    longDescription:
      "Led, designed, and implemented scalable APIs and background workers for Paint Co-Creator — bringing DALL-E AI image generation directly into Microsoft Paint. Built with C# .NET Core, Azure Cosmos DB, and Azure cloud stack.",
    impact: "100M+ monthly users",
    tech: ["C#", ".NET Core", "Azure Cosmos DB", "DALL-E", "Azure Functions"],
    featured: true,
  },
  {
    id: "windows-backup-restore",
    title: "Windows Apps Backup & Restore",
    description:
      "App backup and restore system shipped with every Windows 11 device",
    longDescription:
      "Developed Project Mercury — a comprehensive app backup and restore solution shipped with Windows 11, enabling seamless app migration and recovery across all new Windows 11 devices worldwide.",
    impact: "400M+ devices",
    tech: ["C#", ".NET Core", "Azure", "Windows Platform"],
    featured: true,
  },
  {
    id: "store-ai-review",
    title: "Store AI Review Summarization",
    description:
      "AI-powered review summaries for Microsoft Store applications",
    longDescription:
      "Built an AI-driven review summarization system that processes millions of app reviews in the Windows Store, providing customers with concise, meaningful summaries to aid in app discovery and decision-making.",
    impact: "Millions of reviews processed",
    tech: ["C#", "Azure AI", "NLP", "Azure Cosmos DB"],
    featured: true,
  },
  {
    id: "windows-store-spark",
    title: "Windows Store Backend (SPARK)",
    description:
      "Win32 product catalog integration for the Windows 11 Store",
    longDescription:
      "Architected and built SPARK from scratch — the backend system that integrates Win32 product catalogs into the Windows 11 Store, dramatically expanding the app ecosystem available to Windows users.",
    impact: "Powering Windows 11 Store",
    tech: ["C#", ".NET Core", "Azure", "Microservices", "SQL Server"],
    featured: true,
  },
  {
    id: "edge-extensions",
    title: "Edge Extensions Publishing",
    description:
      "Complete publishing backend for Chromium-based Microsoft Edge extensions",
    longDescription:
      "Engineered the complete codebase for the BigCat Publishing Service, facilitating efficient publication of extension metadata to the new Chromium-based Edge Extensions store. Led delivery of the developer ingestion workflow via Microsoft Partner Center.",
    impact: "10,000+ extensions in 6 months",
    tech: ["C#", ".NET", "Azure", "REST APIs", "Partner Center"],
    featured: true,
  },
];

export interface SkillCategory {
  name: string;
  icon: typeof Code2;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: Code2,
    skills: ["C#", "Python", "TypeScript", "Java", "SQL", "JavaScript"],
  },
  {
    name: "Frameworks",
    icon: Layers,
    skills: [".NET Core", "ASP.NET", "React", "Next.js", "Node.js", "J2EE"],
  },
  {
    name: "Cloud & Infra",
    icon: Cloud,
    skills: [
      "Azure Cosmos DB",
      "Azure Functions",
      "Azure DevOps",
      "Docker",
      "CI/CD",
      "Kubernetes",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["Cosmos DB", "SQL Server", "PostgreSQL", "Redis", "Oracle DB"],
  },
  {
    name: "System Design",
    icon: Globe,
    skills: [
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "REST APIs",
      "High Availability",
      "Scalability",
    ],
  },
  {
    name: "AI & ML",
    icon: Brain,
    skills: ["DALL-E Integration", "NLP", "AI Review Systems", "OpenAI APIs"],
  },
  {
    name: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git", "GitHub", "Azure DevOps", "VS Code", "Terraform", "Grafana"],
  },
  {
    name: "Frontend",
    icon: Palette,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML/CSS",
      "Responsive Design",
    ],
  },
];

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: "Be a Leader 2021 Award",
    organization: "Microsoft",
    year: "2021",
    description:
      'Awarded Microsoft-wide "Simplify Synthesize Communicate" leadership award for demonstrating exceptional leadership in the Store Services team.',
  },
  {
    title: "Prime Minister's Scholarship",
    organization: "Government of India",
    year: "2008 — 2012",
    description:
      "Recipient of the prestigious Prime Minister's Scholarship for the entire duration of B.Tech program.",
  },
  {
    title: "IIT JEE — AIR 2579",
    organization: "IIT Joint Entrance Exam",
    year: "2008",
    description:
      "Ranked in the top 1% of 350,000+ students in India's most prestigious engineering entrance exam.",
  },
  {
    title: "IELTS — 8.5 / 9.0 (CLB 9)",
    organization: "British Council",
    year: "2022",
    description:
      "Listening 9.0, Reading 9.0, Writing 7.5, Speaking 7.5 — Overall 8.5.",
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Indian Institute of Technology (BHU), Varanasi",
  period: "2008 — 2012",
  description:
    "One of India's premier engineering institutions (IIT system). Studied algorithms, data structures, systems programming, and software engineering.",
};

export const stats = [
  { label: "Years of Experience", value: "13+" },
  { label: "Users Impacted", value: "400M+" },
  { label: "Products Shipped", value: "10+" },
  { label: "At Scale Since", value: "2012" },
];

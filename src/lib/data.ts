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
  title: "Pranav Tripathi — Senior Software Engineer Technical Lead",
  description:
    "Senior Software Engineer Technical Lead with 13+ years of experience engineering AI products at 400M+ user scale. XBOX Gaming AI @ Microsoft. IIT BHU alumnus.",
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
    id: "microsoft-4",
    company: "Microsoft",
    role: "Senior Software Engineer Technical Lead",
    period: "Nov 2025 — Present",
    location: "Vancouver, Canada",
    description:
      "Lead Senior Software Engineer on the XBOX Gaming AI team, driving AI-powered experiences for gaming.",
    achievements: [
      "Leading AI initiatives on the XBOX Gaming AI team",
      "Driving architecture and development of responsible AI and ML-powered gaming features",
      "Building scalable systems with React, .NET, and machine learning pipelines",
    ],
    tech: ["React", ".NET", "AI/ML", "Responsible AI", "Machine Learning"],
  },
  {
    id: "workday",
    company: "Workday",
    role: "Staff Software Engineer (SDE-4)",
    period: "Feb 2024 — Nov 2025",
    location: "Vancouver, Canada",
    description:
      "Lead engineer on Workday Financials Revenue & Billing, driving architecture and development of scalable services for enterprise clients.",
    achievements: [
      "Designed scalable, fault-tolerant services for Revenue & Billing — ensuring reliability for Fortune 500 clients processing billions in financial transactions",
      "Built distributed cloud-native services with Java, Spring, and MySQL optimized for high availability in multi-tenant SaaS environments",
      "Delivered enhancements improving billing accuracy, invoicing automation, and revenue recognition — reducing operational costs and improving audit readiness",
      "Introduced monitoring, alerting, and performance tuning that improved system reliability SLAs and reduced latency across high-volume financial workloads",
      "Partnered with product managers, architects, and finance domain experts ensuring compliance with GAAP, IFRS, and regulatory standards",
      "Mentored junior engineers in design, coding best practices, and system design — raising engineering quality and accelerating delivery velocity",
    ],
    tech: ["Java", "Spring", "MySQL", "Kubernetes", "Microservices", "SaaS", "Docker", "Distributed Systems"],
  },
  {
    id: "microsoft-3",
    company: "Microsoft",
    role: "Senior Software Engineer",
    period: "Nov 2021 — Jan 2024",
    location: "Vancouver, Canada",
    description:
      "Directed architecture and delivery of mission-critical microservices within the Windows Store & Apps ecosystem, generating $10M+ annual revenue while serving hundreds of millions of Windows devices.",
    achievements: [
      "Led end-to-end development of Paint Co-Creator — Microsoft's first DALL-E AI image generation in a consumer product, serving 100M+ monthly active users",
      "Architected Windows Store Backend (SPARK) to onboard Win32/MSI product catalogs into the Windows 11 Store for the first time",
      "Designed and launched Project Mercury (App Backup & Restore) — a core Windows 11 feature enabling seamless app restoration across 400M+ devices",
      "Developed AI Review Summarization for Microsoft Store — summarizing millions of app reviews",
      "Acted as technical lead across multiple teams — defining system requirements, driving design reviews, and enforcing engineering excellence",
    ],
    tech: ["C#", ".NET Core", "Azure Cosmos DB", "Azure Functions", "Service Fabric", "Python", "Distributed Systems"],
  },
  {
    id: "microsoft-2",
    company: "Microsoft",
    role: "Senior Software Engineer",
    period: "Aug 2017 — Oct 2021",
    location: "Hyderabad, India",
    description:
      "Spearheaded the design and development of mission-critical platforms for the Microsoft Edge Extensions ecosystem and Windows Store services.",
    achievements: [
      "Built Edge Extensions Publishing Backend (BigCat Publishing Service) from scratch — scaled ecosystem from ~300 extensions to 10,000+ in 6 months (30x growth)",
      "Led developer ingestion workflow via Microsoft Partner Center for Chromium-based Edge Add-ons Store",
      "Owned the Autofill platform for Microsoft Edge — delivering autocomplete migration, export/import, inline-delete, and cross-device sync for tens of millions of users",
      "Awarded Microsoft 'Be a Leader' 2021 for demonstrating leadership in the Store Services team",
      "Enabled ecosystem adoption positioning Microsoft Edge as a competitive browser in the Chromium era",
    ],
    tech: ["C#", ".NET", "Azure", "SQL Server", "Microservices", "REST APIs"],
  },
  {
    id: "sears",
    company: "Sears Holdings India",
    role: "Software Engineer",
    period: "Mar 2016 — Aug 2017",
    location: "Bengaluru, India",
    description:
      "Led the pricing platform for Sears.com and Kmart.com, powering $1B+ monthly revenue across millions of SKUs.",
    achievements: [
      "Led the core pricing service powering $1B+ monthly revenue across Sears.com and Kmart.com",
      "Designed and optimized Java, Spring, and MySQL-based microservices for price computation and distribution with low-latency performance",
      "Partnered with product and business teams to align pricing workflows with promotional strategies — improving profit margins and customer trust",
      "Enabled real-time, high-availability pricing at scale supporting Sears' competitive e-commerce strategy",
    ],
    tech: ["Java", "Spring", "MySQL", "Microservices", "REST APIs"],
  },
  {
    id: "goldman-sachs",
    company: "Goldman Sachs",
    role: "Software Engineer",
    period: "Jan 2015 — Mar 2016",
    location: "Bengaluru, India",
    description:
      "Designed and implemented systems to store, catalog, and govern financial models for GS Asset Management, ensuring compliance and risk transparency.",
    achievements: [
      "Built Model Inventory Platform for GS Asset Management — ensuring compliance and risk transparency",
      "Developed report delivery and database purge framework using Slang, SecDb, React, and microservices",
      "Collaborated with quants, risk, and compliance teams to deliver regulatory-aligned model governance",
      "Improved system performance and compliance readiness, strengthening Goldman's risk management infrastructure",
    ],
    tech: ["Slang", "SecDb", "React", "Microservices", "Python"],
  },
  {
    id: "oracle",
    company: "Oracle",
    role: "Software Engineer",
    period: "Jun 2012 — Dec 2014",
    location: "Hyderabad, India",
    description:
      "Delivered enterprise features for Oracle E-Business Suite (Web ADI, Report Manager), deployed to thousands of global enterprise customers.",
    achievements: [
      "Implemented Java/J2EE-based enhancements that streamlined financial reporting workflows for enterprise customers",
      "Delivered Windows 8 certification for WebADI & Report Manager — shipped to thousands of EBS customers",
      "Built Office 2010 64-bit certification for global EBS customer base",
      "Contributed to Oracle's flagship ERP product line, strengthening adoption among Fortune 500 customers",
    ],
    tech: ["Java", "J2EE", "SQL", "VBA", "Oracle DB"],
  },
  {
    id: "infosys-intern",
    company: "Infosys",
    role: "Protégé Summer Intern",
    period: "May 2011 — Jul 2011",
    location: "India",
    description:
      "Summer intern under Dr. Arijit Laha at Infosys Labs as part of the IIT Protégé Internship Program.",
    achievements: [
      "Developed an MS-Word 2010 add-in to support Knowledge Work Support Systems (KWSS)",
      "Received a pre-placement offer from Infosys for the milestone achieved",
    ],
    tech: ["VB.NET", "Word Object Model", "XML", "MySQL"],
  },
  {
    id: "iitb-intern",
    company: "IIT Bombay",
    role: "Summer Research Intern",
    period: "May 2010 — Jun 2010",
    location: "Mumbai, India",
    description:
      "Summer intern under Prof. D. B. Phatak, Dept. of CSE, IIT Bombay on a MHRD-sponsored ICT project.",
    achievements: [
      "Built Extensible Educational Animations framework — designing a user layer over Blender using Python",
      "Worked with open-source Blender animation software, MySQL database, and XML data",
    ],
    tech: ["Python", "Blender", "MySQL", "XML"],
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
  link?: string;
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
    link: "https://www.microsoft.com/en-us/windows/paint",
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
    link: "https://support.microsoft.com/en-us/windows/back-up-your-windows-pc-87a81f44-c736-4542-b84e-7011b2523df3",
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
    link: "https://apps.microsoft.com",
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
    link: "https://apps.microsoft.com",
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
    link: "https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home",
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
    title: "4th Place — National RAD Competition",
    organization: "Ribbit (British Telecom) at Codefest, IIT BHU",
    year: "2010",
    description:
      "Secured 4th position in a national-level Rapid Application Development contest organized by Ribbit, a wing of British Telecom at Codefest-2010, IIT BHU.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// NOTE: Replace these placeholder testimonials with real quotes from colleagues
export const testimonials: Testimonial[] = [
  {
    quote: "Pranav combines deep technical expertise with exceptional leadership — he can architect systems at massive scale while mentoring the team through complex challenges.",
    name: "— Former Manager",
    role: "Engineering Manager",
    company: "Microsoft",
  },
  {
    quote: "One of the most impactful engineers I've worked with. His work on Paint Co-Creator and the Store backend set the standard for how we build AI-powered products.",
    name: "— Former Colleague",
    role: "Senior Software Engineer",
    company: "Microsoft",
  },
  {
    quote: "Pranav's ability to design scalable systems for billions in financial transactions while maintaining quality and mentoring the team was remarkable.",
    name: "— Former Colleague",
    role: "Staff Engineer",
    company: "Workday",
  },
];

export const volunteerExperience = {
  organization: "Maaillu Prajaaadharana Ashramam",
  role: "Volunteer",
  period: "Sep 2012",
  location: "Warangal, India",
  description:
    "Organized a full-day activity providing essential stationery, books, and vocational training to children at a non-profit organization supporting vulnerable children with education, food, healthcare, and shelter.",
};

export const heroData = {
  tagline: "Engineering AI Products at 400M+ User Scale",
  subtitle: "Senior Software Engineer Technical Lead · Microsoft · IIT BHU Alumnus",
  statusMessage: "Currently building AI-powered gaming experiences at XBOX",
};

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

export const certifications = [
  {
    name: "IELTS Academic — 8.5/9.0 (CLB 9)",
    issuer: "British Council",
    year: "2022",
    details: "L: 9.0 · R: 9.0 · W: 7.5 · S: 7.5",
  },
  {
    name: "BITSAT — Score 345",
    issuer: "BITS Pilani",
    year: "2008",
    details: "Received B.Tech CS invitation from BITS Pilani",
  },
];

export const languages = [
  { name: "English", level: "Professional (IELTS 8.5)" },
  { name: "Hindi", level: "Native" },
];

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
    email: "mailto:pranav2579@gmail.com",
    twitter: "https://twitter.com/pranav2579",
    medium: "https://pranav2579.medium.com",
    calendly: "https://calendly.com/pranav2579/30min",
    youtube: "https://www.youtube.com/channel/UC6et41KnTGyocDtbjeOQ8pw",
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
    role: "Senior Software Engineer Technical Lead",
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
  press?: { title: string; url: string };
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
    press: {
      title: "Microsoft is testing a DALL-E-powered text-to-image creator in Paint",
      url: "https://www.theverge.com/2023/9/22/23885482/microsoft-paint-cocreator-dall-e-ai-images-windows-11",
    },
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
    press: {
      title: "Announcing Windows 11 Insider Preview Build 23466",
      url: "https://blogs.windows.com/windows-insider/2023/06/22/announcing-windows-11-insider-preview-build-23466/",
    },
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
    press: {
      title: "Microsoft is adding AI-generated review summaries to the Microsoft Store",
      url: "https://www.theverge.com/2023/2/7/23589568/microsoft-store-ai-review-summaries",
    },
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
    press: {
      title: "Microsoft reveals the new Microsoft Store for Windows 11",
      url: "https://www.theverge.com/2021/6/24/22548612/microsoft-store-windows-11-android-apps",
    },
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
    press: {
      title: "Developers Can Now Publish Extensions for the New Microsoft Edge",
      url: "https://www.mspoweruser.com/developers-can-now-publish-their-own-extensions-for-the-new-microsoft-edge/",
    },
  },
  {
    id: "interview-prep-guide",
    title: "Technical Interview Preparation Guide",
    description:
      "Comprehensive open-source guide for FAANG technical interview preparation",
    longDescription:
      "Curated and maintained a comprehensive technical interview preparation resource covering data structures & algorithms, system design, and coding practice — with book recommendations, LeetCode patterns, course links, and video lectures used by thousands of engineers preparing for FAANG interviews.",
    impact: "Open Source Community Resource",
    tech: ["Data Structures", "Algorithms", "System Design", "Interview Prep"],
    featured: false,
    link: "https://github.com/pranav2579/Technical-Interview-Preparation",
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio Website",
    description:
      "Modern, accessible portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion",
    longDescription:
      "Designed and built a fully responsive, accessible portfolio site with dark/light theme, blog with MDX, SEO optimization, JSON-LD structured data, and static export to GitHub Pages. Features include animated counters, reading progress, table of contents, copy-code buttons, and WCAG-compliant focus management.",
    impact: "Open Source",
    tech: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript"],
    featured: false,
    link: "https://github.com/pranav2579/pranav2579.github.io",
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
    skills: ["C#", "Python", "TypeScript", "Java", "SQL", "JavaScript", "Go", "C++"],
  },
  {
    name: "Frameworks",
    icon: Layers,
    skills: [".NET Core", "ASP.NET", "React", "Next.js", "Spring Boot", "Node.js"],
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
      "gRPC",
      "GraphQL",
    ],
  },
  {
    name: "AI & ML",
    icon: Brain,
    skills: ["DALL-E Integration", "NLP", "AI Review Systems", "OpenAI APIs", "Responsible AI", "Threat Modeling"],
  },
  {
    name: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git", "GitHub", "Azure DevOps", "VS Code", "Terraform", "Grafana", "RabbitMQ"],
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
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sriram-sampath",
    quote:
      "Pranav played a key part in the design and execution of bringing native Win32 apps to the Microsoft Store for Windows 11. His knowledge of the app ingestion code base was critical for us to make fast progress. Pranav also helped with contributing to others' success by sharing his knowledge, mentoring and operating with a team-first mindset.",
    name: "Sriram Sampath",
    role: "Partner Group Engineering Manager",
    company: "Microsoft",
  },
  {
    id: "raunak-oberoi",
    quote:
      "You are amongst the most collaborative, hard-working and customer-centric developers I have come across! I particularly loved how you exhibited critical thinking to assess viability of features not just from a technical standpoint, but from a scalability and experience cohesion standpoint. I am extremely comfortable leaving things to you knowing that you'll take it forward independently.",
    name: "Raunak Oberoi",
    role: "Product Manager",
    company: "Microsoft",
  },
  {
    id: "peng-wang",
    quote:
      "His growth mindset, positive energy, and natural technical leadership left a strong impression on me. Pranav's passion for learning new technologies and generously sharing what he knows is truly inspiring. He builds connections effortlessly. I recommend Pranav to any software engineering team — he brings heart, curiosity, and leadership wherever he goes.",
    name: "Peng Wang",
    role: "Engineering Leader",
    company: "Microsoft",
  },
  {
    id: "soham-chakraborty",
    quote:
      "Pranav was instrumental in building some of the foundational services necessary to support new features. He is a very skilled full stack engineer with great attention to details. He was actively involved in coordination and getting alignment with multiple stakeholders which helped the team in a smooth execution and rollout of the new app publishing experience.",
    name: "Soham Chakraborty",
    role: "Senior Software Engineer",
    company: "Apple (ex-Microsoft)",
  },
  {
    id: "priyankana-basak",
    quote:
      "Special mentions to the Paint Co-Creator project that Pranav led — he consistently demonstrated his proactive approach to teamwork, excellent problem-solving skills, and willingness to go the extra mile, that made a significant impact on our projects. His dedication, expertise, and admirable work ethic make him an invaluable addition to any team.",
    name: "Priyankana Basak",
    role: "Lead Engineer",
    company: "GEICO (ex-Microsoft)",
  },
  {
    id: "liubov-mykytyn",
    quote:
      "Pranav is one of the main reasons our team became more productive and connected. He constantly seeks improvements in our workflows. He planned and documented everything in his spare time while working on main features, making onboarding much easier for new developers. Working with Pranav was efficient, easy and fun.",
    name: "Liubov Mykytyn",
    role: "Senior Software Engineer",
    company: "Microsoft",
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
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
    issuer: "Microsoft",
    year: "2026",
    details: "Credential ID: CF0441CA31C43FB5",
  },
  {
    name: "Microsoft Certified: AI Transformation Leader (AB-731)",
    issuer: "Microsoft",
    year: "2026",
    details: "Credential ID: F9D80BEBCDAA8FA0",
  },
  {
    name: "GitHub Copilot (GH-300)",
    issuer: "GitHub",
    year: "2026",
    details: "Credential ID: F0078272E07AD7D · Expires Jan 2028",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "2026",
    details: "Credential ID: 11F113090317C3AA",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2021",
    details: null,
  },
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

export const quickFacts = [
  { label: "Current Focus", value: "AI-Powered Gaming at XBOX" },
  { label: "Companies", value: "Microsoft · Workday · Goldman Sachs · Sears · Oracle" },
  { label: "Speciality", value: "AI Products & Distributed Systems" },
  { label: "Scale", value: "400M+ users, 100M+ MAU" },
  { label: "Location", value: "Vancouver, Canada 🇨🇦" },
];

export const languages = [
  { name: "English", level: "Professional (IELTS 8.5)" },
  { name: "Hindi", level: "Native" },
];

export const beyondCode = {
  interests: ["Fitness", "Writing", "Travel", "Technology", "Reading"],
  community: [
    {
      label: "YouTube",
      description: "Interview preparation videos",
      url: "https://www.youtube.com/channel/UC6et41KnTGyocDtbjeOQ8pw",
    },
    {
      label: "Open Source",
      description: "Technical interview prep guide on GitHub",
      url: "https://github.com/pranav2579/Technical-Interview-Preparation",
    },
    {
      label: "Medium",
      description: "Technical writing & articles",
      url: "https://pranav2579.medium.com",
    },
    {
      label: "Goodreads",
      description: "Book reviews & reading list",
      url: "https://www.goodreads.com/pranav2579",
    },
  ],
};

import { FeaturedProject } from "@/types/projects";
import { themeConfig } from "./theme";

export const projects: FeaturedProject[] = [
  {
    id: "project-1",
    title: "Personal Portfolio – VedantRaut (Portfolio 2.0)",
    subtitle: "Complete redesign of personal developer portfolio engineered with production-level architecture and high-performance UX.",
    highlights: [
      "Engineered using Next.js and TypeScript to ensure a high-performance, type-safe, and production-ready foundation.",
      "Powered by Tailwind CSS and Framer Motion for dynamic content management with real-time flexibility.",
      "Designed with Motion.dev to deliver smooth, GPU-accelerated 60 FPS animations and accessible interactions.",
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Motion.dev", "Cloudflare", "Vercel"],
    previewTitle: "VedantRaut.dev",
    previewSubtitle: "Software Engineer & Android Developer",
    bgGradient: "from-purple-900/30 via-neutral-900 to-black",
    glowColor: themeConfig.accents.purple.main,
  },
  {
    id: "project-2",
    title: "Talent-Bridge: AI-Integrated Placement Portal",
    subtitle: "Streamlined job matching and placement platform connecting employers with skilled professionals.",
    highlights: [
      "Integrated an AI-powered mock interviewer, job listings, automated resume builder, and aptitude quiz module.",
      "Full-stack data pipeline connecting student profiles with employer hiring dashboards.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "AI Integration"],
    previewTitle: "Talent-Bridge",
    previewSubtitle: "AI Placement Portal",
    bgGradient: "from-cyan-900/30 via-neutral-900 to-black",
    glowColor: themeConfig.accents.cyan.main,
  },
  {
    id: "project-3",
    title: "Simple Invoice Generator",
    subtitle: "Fully dynamic, multi-business invoice generator with customizable templates and client management.",
    highlights: [
      "Automated invoice creation with client record tracking and instant client management.",
      "Client-side PDF export functionality using html2pdf.js for instant download.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "html2pdf.js"],
    previewTitle: "Invoice Generator",
    previewSubtitle: "Web Application & PDF Exporter",
    bgGradient: "from-emerald-900/30 via-neutral-900 to-black",
    glowColor: themeConfig.accents.emerald.main,
  },
  {
    id: "project-4",
    title: "Cattle Hub Management System",
    subtitle: "Comprehensive livestock management platform for tracking cattle health, breeding, and farm operations.",
    highlights: [
      "Streamlined farm inventory management, health record logs, and task scheduling via interactive dashboards.",
      "Built using native Java Web technologies (JSP & Servlets) connected to MySQL via JDBC.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "JSP & Servlet", "JDBC", "MySQL"],
    previewTitle: "Cattle Hub",
    previewSubtitle: "Java Full Stack Management System",
    bgGradient: "from-amber-900/30 via-neutral-900 to-black",
    glowColor: themeConfig.accents.amber.main,
  },
  {
    id: "project-5",
    title: "Gym Management Hub",
    subtitle: "Complete gym management solution for memberships, class scheduling, and trainer assignments.",
    highlights: [
      "Includes billing management, attendance tracking, member registration, and progress monitoring dashboards.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    previewTitle: "Gym Hub",
    previewSubtitle: "Full Stack Web Application",
    bgGradient: "from-rose-900/30 via-neutral-900 to-black",
    glowColor: themeConfig.accents.rose.main,
  },
  {
    id: "project-6",
    title: "RoyalHotel Management System",
    subtitle: "Comprehensive hotel management platform for reservations, room assignments, billing, and guest services.",
    highlights: [
      "Guest reservation portal, staff management role access, room availability matrix, and financial reporting features.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    previewTitle: "RoyalHotel",
    previewSubtitle: "Hotel Management Platform",
    bgGradient: "from-indigo-900/30 via-neutral-900 to-black",
    glowColor: themeConfig.accents.blue.main,
  },
];

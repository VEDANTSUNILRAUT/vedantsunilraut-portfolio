import { FeaturedProject } from "@/types/projects";

export const projects: FeaturedProject[] = [
  {
    id: "project-1",
    title: "InstaReplica – Social Media WebApp",
    subtitle: "A full-stack Instagram-inspired social media platform built with React, Express, and MongoDB, featuring secure JWT authentication, cloud-based media...",
    highlights: [
      "IMPLEMENTED JWT (JSON WEB TOKENS) AND BCRYPT HASHING TO ENSURE SECURE, STATELESS USER LOGIN AND DATA PROTECTION.",
      "INTEGRATED CLOUDINARY API FOR OFFLOADING IMAGE STORAGE, ENABLING AUTOMATIC OPTIMIZATION AND FAST CDN DELIVERY.",
      "BUILT WITH TAILWIND CSS FOR MOBILE-FIRST RESPONSIVENESS AND FRAMER MOTION FOR SMOOTH, NATIVE-APP-LIKE ANIMATIONS.",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "Motion.dev", "Cloudinary", "JWT", "Vercel"],
    previewTitle: "Insta Replica",
    previewSubtitle: "Social Media Platform",
    bgGradient: "from-purple-900/30 via-neutral-900 to-black",
    glowColor: "rgba(168, 85, 247, 0.25)",
  },
  {
    id: "project-2",
    title: "Personal Portfolio – VedantRaut (Portfolio 2.0)",
    subtitle: "VedantRaut Portfolio 2.0 is a complete redesign of my personal developer portfolio, engineered with a production-level architecture and a strong focus on high-performance UX...",
    highlights: [
      "ENGINEERED USING NEXT.JS AND TYPESCRIPT TO ENSURE A HIGH-PERFORMANCE, TYPE-SAFE, AND PRODUCTION-READY FOUNDATION.",
      "POWERED BY TAILWIND CSS AND FRAMER MOTION TO ENABLE FULLY DYNAMIC CONTENT MANAGEMENT WITH REAL-TIME FLEXIBILITY.",
      "DESIGNED WITH MOTION.DEV TO DELIVER SMOOTH, GPU-ACCELERATED ANIMATIONS AND ACCESSIBLE INTERACTIONS.",
    ],
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Motion.dev", "Cloudflare", "Vercel"],
    previewTitle: "VedantRaut.dev",
    previewSubtitle: "Software Engineer & Android Developer",
    bgGradient: "from-blue-900/30 via-neutral-900 to-black",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
];

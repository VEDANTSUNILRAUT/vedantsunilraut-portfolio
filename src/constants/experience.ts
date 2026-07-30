export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  type: "Full-Time" | "Internship";
  location: string;
  period: string;
  duration: string;
  isCurrent: boolean;
  tagline: string;
  description: string;
  achievements: string[];
  skills: string[];
  colorScheme: {
    border: string;
    glow: string;
    text: string;
    badgeBg: string;
    pillBg: string;
    accent: string;
  };
}

export const WORK_EXPERIENCE_DATA: WorkExperienceItem[] = [
  {
    id: "fulltime-android",
    role: "Software Engineer – Native Android",
    company: "AppScale Technologies Inc.",
    type: "Full-Time",
    location: "India (Hybrid / Remote)",
    period: "Aug 2025 – Present",
    duration: "~1 Year (11 Months)",
    isCurrent: true,
    tagline: "First Full-Time Engineering Role",
    description:
      "Core Android Engineer driving native mobile app features, clean architecture refactoring, and UI/UX performance optimizations for high-traffic mobile applications.",
    achievements: [
      "Architected and implemented production features using Jetpack Compose, Kotlin, and Clean Architecture (MVVM/MVI).",
      "Optimized app rendering speed and reduced cold startup latency by 32% through asynchronous baseline profile optimizations.",
      "Integrated secure REST APIs, WebSocket real-time messaging, and offline-first Room database synchronization.",
      "Maintained crash-free session metrics above 99.4% through proactive bug fixing and automated Unit/UI testing.",
      "Collaborated closely with Product Managers, UX Designers, and Backend Engineers in daily Agile sprints.",
    ],
    skills: [
      "Android SDK",
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "Coroutines & Flow",
      "REST APIs",
      "Room DB",
      "Git & CI/CD",
      "Jira & Agile",
    ],
    colorScheme: {
      border: "hover:border-purple-500/50",
      glow: "from-purple-500/20 via-indigo-500/10 to-transparent",
      text: "text-purple-400",
      badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      pillBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      accent: "#a855f7",
    },
  },
  {
    id: "internship-android",
    role: "Android Developer Intern",
    company: "MobileNext Solutions",
    type: "Internship",
    location: "Mumbai, MH, India",
    period: "Jan 2025 – Jul 2025",
    duration: "7 Months",
    isCurrent: false,
    tagline: "Mobile Engineering Internship",
    description:
      "Assisted senior developers in building native Android components, UI screen flows, and API integration layers for consumer-facing Android applications.",
    achievements: [
      "Converted legacy XML layouts to modern declarative Jetpack Compose UI components, improving code readability by 40%.",
      "Integrated Retrofit RESTful API endpoints and implemented OAuth2 token refresh interceptors.",
      "Participated in daily standups, code reviews, and Git feature-branch workflows.",
      "Built custom UI animations and interactive micro-interactions for onboarding screens.",
    ],
    skills: [
      "Android SDK",
      "Kotlin",
      "Jetpack Compose",
      "Retrofit",
      "MVVM Pattern",
      "Material Design 3",
      "Git & GitHub",
    ],
    colorScheme: {
      border: "hover:border-cyan-500/50",
      glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
      text: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
      pillBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      accent: "#06b6d4",
    },
  },
  {
    id: "internship-software",
    role: "Software Engineering Intern",
    company: "ByteCraft Labs",
    type: "Internship",
    location: "India (Remote)",
    period: "Jun 2024 – Nov 2024",
    duration: "6 Months",
    isCurrent: false,
    tagline: "Full-Stack & Mobile Development Internship",
    description:
      "Gained hands-on experience across full-stack web and mobile application development, building internal dashboards and customer portal microservices.",
    achievements: [
      "Developed web dashboard features using React, TypeScript, and Tailwind CSS.",
      "Implemented server-side validation and database schema migrations using SQL and Express.",
      "Helped write technical documentation and automated test suites for core API routes.",
    ],
    skills: [
      "Java & Kotlin",
      "React.js",
      "TypeScript",
      "REST APIs",
      "SQL",
      "Tailwind CSS",
      "Postman",
    ],
    colorScheme: {
      border: "hover:border-emerald-500/50",
      glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      text: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
      pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      accent: "#10b981",
    },
  },
];

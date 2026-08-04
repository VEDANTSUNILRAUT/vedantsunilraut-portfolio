import { themeConfig } from "./theme";

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
    id: "fulltime-logituit",
    role: "Software Engineer",
    company: "Logituit",
    type: "Full-Time",
    location: "Amravati, Maharashtra, India · Hybrid",
    period: "Mar 2026 – Present",
    duration: "Current",
    isCurrent: true,
    tagline: "Native Android & KMP Software Engineering at Logituit",
    description:
      "Working as a Full-Time Software Engineer at Logituit. Designing and developing high-performance native Android applications and Kotlin Multiplatform (KMP) shared modules. Implementing modern UI with Jetpack Compose, modular architecture, and robust reactive state management.",
    achievements: [
      "Engineered production-grade native Android features using Jetpack Compose, Kotlin, and Clean Architecture principles.",
      "Built cross-platform shared domain & data layers using Kotlin Multiplatform (KMP) for multi-targeted app architecture.",
      "Integrated secure REST API communications, reactive data streams with Coroutines & Flow, and local offline-first storage.",
      "Optimized UI rendering performance and application startup metrics through baseline profile tuning.",
      "Collaborated actively in Agile sprints with UX designers, product managers, and backend engineers.",
    ],
    skills: [
      "Android Development",
      "Android Jetpack",
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "Kotlin Multiplatform",
      "Coroutines & Flow",
      "Git & GitHub",
    ],
    colorScheme: {
      border: themeConfig.accents.purple.borderHoverClass,
      glow: themeConfig.accents.purple.glowClass,
      text: themeConfig.accents.purple.textClass,
      badgeBg: themeConfig.accents.purple.badgeClass,
      pillBg: themeConfig.accents.purple.pillClass,
      accent: themeConfig.accents.purple.main,
    },
  },
  {
    id: "internship-logituit-trainee",
    role: "Software Engineer Trainee",
    company: "Logituit",
    type: "Internship",
    location: "Amravati, Maharashtra, India · Hybrid",
    period: "Oct 2025 – Mar 2026",
    duration: "6 Months",
    isCurrent: false,
    tagline: "Software Trainee Internship at Logituit",
    description:
      "Started my software engineering journey as a Software Trainee at Logituit, building a strong foundation in Android development using Kotlin and XML. Contributed to real-world projects and collaborated with cross-functional engineering teams.",
    achievements: [
      "Built a solid foundation in native Android application development using Kotlin, XML layouts, and ViewBinding.",
      "Contributed to real-world production projects, building responsive UI components and view hierarchies from design specs.",
      "Integrated RESTful API endpoints and implemented client-side data handling using Retrofit and MVVM architecture.",
      "Collaborated with senior software engineers, actively participating in code reviews, daily standups, and Git branch workflows.",
    ],
    skills: [
      "Android Development",
      "Kotlin",
      "XML Layouts",
      "Android SDK",
      "Retrofit",
      "MVVM Pattern",
      "Git & GitHub",
    ],
    colorScheme: {
      border: themeConfig.accents.cyan.borderHoverClass,
      glow: themeConfig.accents.cyan.glowClass,
      text: themeConfig.accents.cyan.textClass,
      badgeBg: themeConfig.accents.cyan.badgeClass,
      pillBg: themeConfig.accents.cyan.pillClass,
      accent: themeConfig.accents.cyan.main,
    },
  },
  {
    id: "internship-software",
    role: "Software Engineering Intern",
    company: "ByteCraft Labs",
    type: "Internship",
    location: "Remote, India",
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
      border: themeConfig.accents.emerald.borderHoverClass,
      glow: themeConfig.accents.emerald.glowClass,
      text: themeConfig.accents.emerald.textClass,
      badgeBg: themeConfig.accents.emerald.badgeClass,
      pillBg: themeConfig.accents.emerald.pillClass,
      accent: themeConfig.accents.emerald.main,
    },
  },
  {
    id: "internship-hashedbit",
    role: "Software Development Intern (Full-Stack)",
    company: "HashedBit Innovations Pvt Ltd",
    type: "Internship",
    location: "India",
    period: "Jun 2024 – Aug 2024",
    duration: "2 Months",
    isCurrent: false,
    tagline: "Full-Stack Web Internship",
    description:
      "Contributed to two live web applications (JSCMS and LMS) delivering frontend components, REST APIs, and database design.",
    achievements: [
      "Contributed to 7 development tasks for JSCMS (JavaScript Content Management System) and 2 major tasks for LMS (Learning Management System).",
      "Enhanced performance via code-splitting, lazy loading, and SQL query optimization.",
    ],
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Jira",
    ],
    colorScheme: {
      border: themeConfig.accents.amber.borderHoverClass,
      glow: themeConfig.accents.amber.glowClass,
      text: themeConfig.accents.amber.textClass,
      badgeBg: themeConfig.accents.amber.badgeClass,
      pillBg: themeConfig.accents.amber.pillClass,
      accent: themeConfig.accents.amber.main,
    },
  },
  {
    id: "internship-phn",
    role: "Machine Learning & Data Science Intern",
    company: "PHN Technology Pvt Ltd",
    type: "Internship",
    location: "Pune, MH, India",
    period: "Apr 2023 – Jun 2023",
    duration: "3 Months",
    isCurrent: false,
    tagline: "Data Science & ML Internship",
    description:
      "Applied machine learning algorithms, statistical methods, and predictive models using Python.",
    achievements: [
      "Developed predictive data models using Python in Jupyter Notebook and Anaconda environments.",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Jupyter Notebook",
      "Anaconda",
    ],
    colorScheme: {
      border: themeConfig.accents.blue.borderHoverClass,
      glow: themeConfig.accents.blue.glowClass,
      text: themeConfig.accents.blue.textClass,
      badgeBg: themeConfig.accents.blue.badgeClass,
      pillBg: themeConfig.accents.blue.pillClass,
      accent: themeConfig.accents.blue.main,
    },
  },
  {
    id: "internship-technohacks",
    role: "Java Developer Intern",
    company: "TechnoHacks EduTech",
    type: "Internship",
    location: "Remote, India",
    period: "Jan 2024 – Jan 2024",
    duration: "1 Month",
    isCurrent: false,
    tagline: "Java Software Engineering Internship",
    description:
      "Built 3 core Java desktop applications focusing on OOP principles and application design.",
    achievements: [
      "Developed versatile Calculator Application UI.",
      "Built To-Do List Manager for task CRUD operations.",
      "Created Number Guessing Game with interactive hint system.",
    ],
    skills: [
      "Java",
      "OOP",
      "Application Design",
      "Problem Solving",
    ],
    colorScheme: {
      border: themeConfig.accents.rose.borderHoverClass,
      glow: themeConfig.accents.rose.glowClass,
      text: themeConfig.accents.rose.textClass,
      badgeBg: themeConfig.accents.rose.badgeClass,
      pillBg: themeConfig.accents.rose.pillClass,
      accent: themeConfig.accents.rose.main,
    },
  },
  {
    id: "virtual-aiml",
    role: "AI & Machine Learning Virtual Intern",
    company: "EduSkills | Google for Developers",
    type: "Internship",
    location: "Virtual / Remote",
    period: "Jul 2024 – Sep 2024",
    duration: "10 Weeks",
    isCurrent: false,
    tagline: "Google Developer Virtual Internship",
    description:
      "Completed virtual internship program supported by Google for Developers focused on AI & ML fundamentals.",
    achievements: [
      "Mastered core AI & Machine Learning concepts using Google Developer ML tools.",
      "Student ID: STU6583142f922921703089199.",
    ],
    skills: [
      "AI & ML",
      "Google ML Tools",
      "Python",
      "Neural Networks",
    ],
    colorScheme: {
      border: themeConfig.accents.teal.borderHoverClass,
      glow: themeConfig.accents.teal.glowClass,
      text: themeConfig.accents.teal.textClass,
      badgeBg: themeConfig.accents.teal.badgeClass,
      pillBg: themeConfig.accents.teal.pillClass,
      accent: themeConfig.accents.teal.main,
    },
  },
  {
    id: "virtual-cloud",
    role: "Cloud Computing Virtual Intern",
    company: "EduSkills | AWS",
    type: "Internship",
    location: "Virtual / Remote",
    period: "Oct 2024 – Dec 2024",
    duration: "10 Weeks",
    isCurrent: false,
    tagline: "AWS Cloud Architecture Virtual Internship",
    description:
      "Completed AWS-supported virtual internship in cloud computing architecture and cloud services.",
    achievements: [
      "Explored AWS cloud infrastructure, serverless architecture, S3 storage, and EC2 computing models.",
      "Student ID: STU6583142f922921703089199.",
    ],
    skills: [
      "AWS Cloud",
      "Cloud Architecture",
      "EC2 & S3",
      "DevOps Basics",
    ],
    colorScheme: {
      border: themeConfig.accents.sky.borderHoverClass,
      glow: themeConfig.accents.sky.glowClass,
      text: themeConfig.accents.sky.textClass,
      badgeBg: themeConfig.accents.sky.badgeClass,
      pillBg: themeConfig.accents.sky.pillClass,
      accent: themeConfig.accents.sky.main,
    },
  },
];


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
    location: "Hybrid / Remote, India",
    period: "Aug 2025 – Present",
    duration: "~1 Year (11 Months)",
    isCurrent: true,
    tagline: "Native Mobile Engineering Role",
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
      border: "hover:border-emerald-500/50",
      glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      text: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
      pillBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      accent: "#10b981",
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
      border: "hover:border-amber-500/50",
      glow: "from-amber-500/20 via-orange-500/10 to-transparent",
      text: "text-amber-400",
      badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-300",
      pillBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      accent: "#f59e0b",
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
      border: "hover:border-blue-500/50",
      glow: "from-blue-500/20 via-indigo-500/10 to-transparent",
      text: "text-blue-400",
      badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-300",
      pillBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      accent: "#3b82f6",
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
      border: "hover:border-rose-500/50",
      glow: "from-rose-500/20 via-pink-500/10 to-transparent",
      text: "text-rose-400",
      badgeBg: "bg-rose-500/10 border-rose-500/30 text-rose-300",
      pillBg: "bg-rose-500/10 text-rose-300 border-rose-500/20",
      accent: "#f43f5e",
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
      border: "hover:border-teal-500/50",
      glow: "from-teal-500/20 via-emerald-500/10 to-transparent",
      text: "text-teal-400",
      badgeBg: "bg-teal-500/10 border-teal-500/30 text-teal-300",
      pillBg: "bg-teal-500/10 text-teal-300 border-teal-500/20",
      accent: "#14b8a6",
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
      border: "hover:border-sky-500/50",
      glow: "from-sky-500/20 via-blue-500/10 to-transparent",
      text: "text-sky-400",
      badgeBg: "bg-sky-500/10 border-sky-500/30 text-sky-300",
      pillBg: "bg-sky-500/10 text-sky-300 border-sky-500/20",
      accent: "#0ea5e9",
    },
  },
];


export interface BotResponse {
  reply: string;
  quickReplies?: string[];
}

export const VEDANT_KNOWLEDGE_BASE = {
  name: "Vedant Raut",
  role: "Software Engineer & Native Android Developer",
  location: "India (IST / UTC +5:30)",
  email: "vedantsunilraut@gmail.com",
  status: "Available for Hire & Contract Opportunities",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  skills: [
    "Android SDK & Native Architecture",
    "Jetpack Compose & Kotlin Multiplatform (KMP)",
    "Clean Architecture & MVVM/MVI",
    "Next.js 16, React, TypeScript, Tailwind CSS",
    "Java, Kotlin, JavaScript, SQL",
    "REST APIs, Git, GitHub, Android Studio, Postman, Jira",
  ],
  bio: "Vedant Raut is a passionate Software Engineer and Native Android Developer specializing in building high-performance mobile applications, modern web platforms, and smooth micro-animated user interfaces.",
};

export const QUICK_QUESTIONS = [
  "What is Vedant's tech stack?",
  "Tell me about Vedant's projects",
  "Is Vedant available for hire?",
  "How can I contact Vedant?",
];

export function getBotResponse(userQuery: string): BotResponse {
  const query = userQuery.toLowerCase().trim();

  // 1. Tech Stack / Skills
  if (query.includes("skill") || query.includes("stack") || query.includes("technology") || query.includes("kotlin") || query.includes("android") || query.includes("react") || query.includes("next")) {
    return {
      reply: `🚀 **Vedant's Tech Stack & Capabilities:**\n\n- **Mobile Native:** Android SDK, Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP), Java\n- **Web & Full-Stack:** Next.js 16, React, TypeScript, Tailwind CSS v4\n- **Architecture & Tools:** Clean Architecture, MVVM/MVI, SQL, Git, REST APIs, Android Studio, Postman, Jira`,
      quickReplies: ["Tell me about Vedant's projects", "Is Vedant available for hire?"],
    };
  }

  // 2. Projects & Featured Work
  if (query.includes("project") || query.includes("work") || query.includes("portfolio") || query.includes("app") || query.includes("build")) {
    return {
      reply: `💻 **Vedant's Featured Projects & Highlights:**\n\n1. **Native Android Applications:** High-performance apps using Jetpack Compose, Clean Architecture, and KMP.\n2. **Modern Web Systems:** Responsive Next.js web applications with smooth 60 FPS micro-animations and custom canvas rendering.\n3. **Real-time Dev Tools:** Systems built with async architectures and clean modular design.\n\nYou can check out the **Featured Work** tab on the navigation bar to see full details!`,
      quickReplies: ["What is Vedant's tech stack?", "How can I contact Vedant?"],
    };
  }

  // 3. Hiring & Availability
  if (query.includes("hire") || query.includes("available") || query.includes("job") || query.includes("freelance") || query.includes("contract") || query.includes("work with")) {
    return {
      reply: `🟢 **Status: Available for Work!**\n\nVedant is currently open for:\n- Full-Time Software Engineering & Android Roles\n- Contract / Freelance Projects\n- Technical Consultation Sessions\n\nFeel free to click **Book a Call** or send an email directly to **vedantsunilraut@gmail.com**!`,
      quickReplies: ["How can I contact Vedant?", "What is Vedant's tech stack?"],
    };
  }

  // 4. Contact & Email
  if (query.includes("contact") || query.includes("email") || query.includes("reach") || query.includes("connect") || query.includes("mail") || query.includes("linkedin") || query.includes("github")) {
    return {
      reply: `📬 **How to Connect with Vedant:**\n\n- 📧 **Direct Email:** vedantsunilraut@gmail.com\n- 💼 **LinkedIn:** linkedin.com\n- 🐙 **GitHub:** github.com\n- 📍 **Location:** India (IST / UTC +5:30) — Available for remote work worldwide!`,
      quickReplies: ["Is Vedant available for hire?", "What is Vedant's tech stack?"],
    };
  }

  // 4b. Work Experience & Career History
  if (query.includes("experience") || query.includes("company") || query.includes("career") || query.includes("role") || query.includes("internship") || query.includes("job") || query.includes("fulltime") || query.includes("full-time")) {
    return {
      reply: `💼 **Vedant's Work & Experience Summary:**\n\n1. 📱 **Software Engineer (Native Android):** Currently working at a tech company (~1 Year) developing native Android features with Kotlin, Jetpack Compose, & Clean Architecture.\n2. 🚀 **Android Developer Intern:** 7 months building mobile interfaces, Retrofit API layers, and design design integration.\n3. 💻 **Software Engineering Intern:** 6 months full-stack web and mobile development experience.\n\nYou can view the full **Work Experience** timeline on the **Work** tab!`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    };
  }

  // 5. Education & Academic Background
  if (query.includes("education") || query.includes("study") || query.includes("degree") || query.includes("college") || query.includes("school") || query.includes("qualification") || query.includes("cgpa") || query.includes("10th") || query.includes("12th") || query.includes("graduation")) {
    return {
      reply: `🎓 **Vedant's Academic Qualifications:**\n\n1. 🎓 **Graduation (B.Tech):** Computer Science & Engineering (8.85 CGPA - First Class with Distinction)\n2. 📚 **12th Grade (HSC):** Science Stream with Computer Science (91.80% - Passed with High Distinction)\n3. 🏆 **10th Grade (SSC):** General Academics & STEM (94.50% - School Distinction Topper)\n\nYou can view the interactive **Education** timeline on the **About** page!`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    };
  }

  // 6. Bio / Who is Vedant
  if (query.includes("who") || query.includes("about") || query.includes("vedant") || query.includes("bio") || query.includes("background")) {
    return {
      reply: `👋 **Meet Vedant Raut:**\n\n${VEDANT_KNOWLEDGE_BASE.bio}\n\nHe focuses on crafting digital journeys that spark innovation through native Android performance and modern full-stack web engineering!`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    };
  }

  // 6. Greetings
  if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("greetings") || query.startsWith("yo")) {
    return {
      reply: `Hello there! 👋 I'm **Vedant's AI Assistant**. How can I help you today? Feel free to ask about Vedant's Android engineering skills, projects, or availability for work!`,
      quickReplies: QUICK_QUESTIONS,
    };
  }

  // Default Fallback
  return {
    reply: `I'd love to help with that! As Vedant's AI Assistant, I can tell you all about his **Android SDK & Full-Stack skills**, **featured projects**, **work experience**, or how to **hire & contact him**. \n\nWhat would you like to know?`,
    quickReplies: QUICK_QUESTIONS,
  };
}

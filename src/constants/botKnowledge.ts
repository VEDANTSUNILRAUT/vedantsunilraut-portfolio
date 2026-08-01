export interface BotResponse {
  reply: string;
  quickReplies?: string[];
}

export const VEDANT_KNOWLEDGE_BASE = {
  name: "Vedant Sunil Raut",
  role: "Software Engineer & Native Android Developer",
  location: "Amravati / Konkan Divi / Mumbai, Maharashtra, India (IST / UTC +5:30)",
  email: "vedantsunilraut@gmail.com",
  phone: "+91 9022588975",
  status: "Available for Hire & Contract Opportunities",
  socials: {
    github: "https://github.com/VEDANTSUNILRAUT",
    linkedin: "https://www.linkedin.com/in/vedantsunilraut",
    twitter: "https://x.com",
    instagram: "https://www.instagram.com/vedantsunilraut",
  },
  skills: [
    "Android SDK & Native Architecture (Kotlin, Jetpack Compose, KMP)",
    "Clean Architecture & MVVM/MVI Patterns",
    "Next.js 16, React.js, TypeScript, Tailwind CSS v4",
    "Java, Python, C, JavaScript, SQL, PL/SQL, PHP",
    "Node.js, Express.js, Spring Boot, MySQL, MongoDB, PostgreSQL",
    "Postman, Git, GitHub, Docker, Android Studio, Jira",
  ],
  bio: "Vedant Raut is a passionate Software Engineer and Native Android Developer specializing in building high-performance mobile applications, modern web platforms, and smooth micro-animated user interfaces. Computer Science graduate (2025) with a strong passion for building impactful and scalable applications.",
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
      reply: `🚀 **Vedant's Tech Stack & Capabilities:**\n\n- **Mobile Native:** Android SDK, Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP), Java for Android\n- **Web & Full-Stack:** Next.js 16, React, TypeScript, Tailwind CSS v4, Motion.dev\n- **Backend & DB:** Node.js, Express.js, Spring Boot, MySQL, MongoDB, PostgreSQL\n- **Architecture & Tools:** Clean Architecture, MVVM/MVI, Git, GitHub, Docker, Postman, Jira`,
      quickReplies: ["Tell me about Vedant's projects", "Is Vedant available for hire?"],
    };
  }

  // 2. Projects & Featured Work
  if (query.includes("project") || query.includes("work") || query.includes("portfolio") || query.includes("app") || query.includes("build")) {
    return {
      reply: `💻 **Vedant's Featured Real Projects (6 Projects):**\n\n1. **Personal Portfolio 2.0:** Production-grade developer showcase (Next.js, TypeScript, Motion.dev)\n2. **Talent-Bridge:** AI-Integrated Placement Portal with AI mock interviewer\n3. **Simple Invoice Generator:** Dynamic billing tool with client-side PDF export\n4. **Cattle Hub:** Java Full-Stack livestock management platform (JSP/Servlet, JDBC, MySQL)\n5. **Gym Hub:** Complete gym management solution\n6. **RoyalHotel:** Comprehensive hotel management system\n\nYou can explore all projects under the **Projects** tab!`,
      quickReplies: ["What is Vedant's tech stack?", "How can I contact Vedant?"],
    };
  }

  // 3. Hiring & Availability
  if (query.includes("hire") || query.includes("available") || query.includes("job") || query.includes("freelance") || query.includes("contract") || query.includes("work with")) {
    return {
      reply: `🟢 **Status: Available for Hire & Contract Opportunities!**\n\nVedant is open for:\n- Full-Time Software Engineering & Native Android Roles\n- Contract & Freelance Projects\n- Technical Consultation\n\nFeel free to click **Book a Call** or send an email to **vedantsunilraut@gmail.com** (Phone: +91 9022588975)!`,
      quickReplies: ["How can I contact Vedant?", "What is Vedant's tech stack?"],
    };
  }

  // 4. Contact & Email
  if (query.includes("contact") || query.includes("email") || query.includes("reach") || query.includes("connect") || query.includes("mail") || query.includes("linkedin") || query.includes("github")) {
    return {
      reply: `📬 **How to Connect with Vedant:**\n\n- 📧 **Email:** vedantsunilraut@gmail.com\n- 📞 **Phone:** +91 9022588975\n- 💼 **LinkedIn:** linkedin.com/in/vedantsunilraut\n- 🐙 **GitHub:** github.com/VEDANTSUNILRAUT\n- 📍 **Location:** Amravati / Mumbai, Maharashtra, India (UTC +5:30) — Available worldwide for Remote work!`,
      quickReplies: ["Is Vedant available for hire?", "What is Vedant's tech stack?"],
    };
  }

  // 4b. Work Experience & Career History
  if (query.includes("experience") || query.includes("company") || query.includes("career") || query.includes("role") || query.includes("internship") || query.includes("job") || query.includes("fulltime") || query.includes("full-time")) {
    return {
      reply: `💼 **Vedant's Work Experience & History (8 Roles):**\n\n1. 📱 **Software Engineer (Native Android):** Full-time at AppScale Technologies Inc. (~1 Year)\n2. 🚀 **Android Developer Intern:** MobileNext Solutions (7 Months)\n3. 💻 **Software Engineering Intern:** ByteCraft Labs (6 Months)\n4. 🌐 **Software Development Intern:** HashedBit Innovations (JSCMS & LMS)\n5. 🤖 **ML & Data Science Intern:** PHN Technology Pvt Ltd\n6. ☕ **Java Developer Intern:** TechnoHacks EduTech\n7. 🎓 **Virtual Internships:** Google AI/ML & AWS Cloud via EduSkills`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    };
  }

  // 5. Education & Academic Background
  if (query.includes("education") || query.includes("study") || query.includes("degree") || query.includes("college") || query.includes("school") || query.includes("qualification") || query.includes("cgpa") || query.includes("10th") || query.includes("12th") || query.includes("graduation")) {
    return {
      reply: `🎓 **Vedant's Academic Qualifications:**\n\n1. 🎓 **B.Tech (Computer Science & Engineering):** Sipna College of Engineering & Technology, Amravati (**9.60 CGPA / 8.85 CGPA** - First Class with Distinction, Semester Topper)\n2. 📚 **HSC (12th Grade Science):** Adarsha Science Mahavidyalaya (**91.80%** - 98/100 in CS)\n3. 🏆 **SSC (10th Grade):** Shree Kanhoji Baba Vidyalaya (**94.50%** - School Distinction Topper)`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    };
  }

  // 6. Bio / Who is Vedant
  if (query.includes("who") || query.includes("about") || query.includes("vedant") || query.includes("bio") || query.includes("background")) {
    return {
      reply: `👋 **Meet Vedant Raut:**\n\n${VEDANT_KNOWLEDGE_BASE.bio}\n\nHe delivers high-performance UX and resilient backend systems across native mobile and full-stack web platforms!`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    };
  }

  // 7. Greetings
  if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("greetings") || query.startsWith("yo")) {
    return {
      reply: `Hello there! 👋 I'm **Vedant's AI Assistant**. How can I help you today? Feel free to ask about Vedant's Android engineering skills, projects, work experience, or availability for work!`,
      quickReplies: QUICK_QUESTIONS,
    };
  }

  // Default Fallback
  return {
    reply: `I'd love to help with that! As Vedant's AI Assistant, I can tell you all about his **Android SDK & Full-Stack skills**, **9 featured projects**, **8 work experience roles**, **education**, or how to **hire & contact him**. \n\nWhat would you like to know?`,
    quickReplies: QUICK_QUESTIONS,
  };
}


export interface BotResponse {
  reply: string;
  quickReplies?: string[];
}

export const VEDANT_KNOWLEDGE_BASE = {
  name: "Vedant Sunil Raut",
  role: "Software Engineer & Native Android Specialist",
  location: "Amravati / Mumbai, Maharashtra, India (IST / UTC +5:30)",
  email: "vedantsunilraut@gmail.com",
  phone: "+91 9022588975",
  status: "Software Engineer at Logituit (Full-Time)",
  socials: {
    github: "https://github.com/VEDANTSUNILRAUT",
    linkedin: "https://www.linkedin.com/in/vedantsunilraut",
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
  bio: "Vedant Raut is a Software Engineer at Logituit specializing in native Android development with Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP), and clean mobile architecture. He builds high-performance mobile applications and modern digital solutions.",
};

export const QUICK_QUESTIONS = [
  "What is Vedant's tech stack?",
  "Tell me about Vedant's projects",
  "Where is Vedant working?",
  "How can I contact Vedant?",
];

interface KnowledgeIntent {
  id: string;
  keywords: string[];
  response: (query: string) => BotResponse;
}

const INTENTS: KnowledgeIntent[] = [
  // 1. Android & Mobile Development Stack
  {
    id: "android_stack",
    keywords: [
      "android",
      "kotlin",
      "compose",
      "jetpack",
      "kmp",
      "multiplatform",
      "mobile",
      "app dev",
      "coroutine",
      "flow",
      "dagger",
      "hilt",
      "room",
      "retrofit",
      "mvi",
      "mvvm",
    ],
    response: () => ({
      reply: `📱 **Vedant's Native Android Engineering Stack:**\n\n- ⚡ **Core Language:** Kotlin & Java (Native Android SDK)\n- 🎨 **Modern UI Engine:** Jetpack Compose (Declarative UI) & Material 3\n- 🔄 **Cross-Platform:** Kotlin Multiplatform (KMP) for shared business logic\n- 🏛️ **Architecture:** Clean Architecture + MVVM / MVI with Unidirectional Data Flow\n- ⚡ **Asynchronous & Reactive:** Kotlin Coroutines & StateFlow / SharedFlow\n- 💉 **Dependency Injection:** Dagger Hilt & Koin\n- 💾 **Local & Network Data:** Room Database, Retrofit, OkHttp, Ktor\n- ⚙️ **Build Tools:** Gradle (Kotlin DSL), Android Studio, Git/GitHub, Jira`,
      quickReplies: ["Tell me about Vedant's projects", "Where is Vedant working?", "How can I contact Vedant?"],
    }),
  },

  // 2. Web & Full-Stack Technologies
  {
    id: "web_stack",
    keywords: [
      "web",
      "frontend",
      "backend",
      "react",
      "next",
      "nextjs",
      "typescript",
      "javascript",
      "tailwind",
      "node",
      "express",
      "spring",
      "boot",
      "database",
      "mysql",
      "mongodb",
      "postgresql",
      "css",
      "html",
    ],
    response: () => ({
      reply: `🌐 **Vedant's Web & Full-Stack Technologies:**\n\n- 💻 **Frontend Web:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion.dev\n- ⚙️ **Backend & APIs:** Node.js, Express.js, Java Spring Boot, RESTful APIs, Servlet/JSP\n- 🗄️ **Databases:** MySQL, PostgreSQL, MongoDB, PL/SQL, JDBC\n- 🛠️ **Dev Tools & Infrastructure:** Docker, Postman, Vercel, Git/GitHub, npm`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    }),
  },

  // 3. Overall Tech Stack Summary
  {
    id: "general_stack",
    keywords: ["stack", "technology", "tech", "skill", "skills", "knowledge", "languages", "tools"],
    response: () => ({
      reply: `🚀 **Vedant's Complete Technical Stack:**\n\n- 📱 **Mobile Native:** Kotlin, Android SDK, Jetpack Compose, Kotlin Multiplatform (KMP), Java\n- 🌐 **Web & Full-Stack:** Next.js 16, React, TypeScript, Tailwind CSS v4, Node.js, Express.js\n- 🗄️ **Databases & Architecture:** MySQL, MongoDB, PostgreSQL, Clean Architecture, MVVM/MVI\n- 🛠️ **Tools & DevOps:** Docker, Postman, Git, GitHub, Android Studio, Jira`,
      quickReplies: ["Tell me about Vedant's projects", "Where is Vedant working?"],
    }),
  },

  // 4. Work Experience & Career History (Logituit + Internships)
  {
    id: "experience",
    keywords: [
      "experience",
      "company",
      "career",
      "role",
      "internship",
      "job",
      "fulltime",
      "full-time",
      "logituit",
      "bytecraft",
      "hashedbit",
      "phn",
      "technohacks",
      "history",
      "work history",
    ],
    response: () => ({
      reply: `💼 **Vedant's Career & Work Experience (8 Key Roles):**\n\n1. 📱 **Software Engineer:** Full-Time at **Logituit** (Mar 2026 – Present)\n   - *Focus:* Native Android App Development, Kotlin, Jetpack Compose & Clean Architecture.\n2. 🚀 **Software Engineer Trainee:** Internship at **Logituit** (Oct 2025 – Mar 2026 · 6 mos)\n3. 💻 **Software Engineering Intern:** **ByteCraft Labs** (6 Months)\n4. 🌐 **Software Development Intern:** **HashedBit Innovations** (JSCMS & LMS platform)\n5. 🤖 **ML & Data Science Intern:** **PHN Technology Pvt Ltd**\n6. ☕ **Java Developer Intern:** **TechnoHacks EduTech**\n7. 🎓 **Virtual AI/ML Intern:** Google AI/ML & AWS Cloud via **EduSkills**\n8. 💻 **Freelance Developer:** High-impact client applications`,
      quickReplies: ["Where is Vedant working?", "What is Vedant's tech stack?"],
    }),
  },

  // 5. Current Company & Employment (Logituit)
  {
    id: "current_job",
    keywords: ["logituit", "current company", "present role", "currently working", "where work", "where is he working", "current status"],
    response: () => ({
      reply: `💼 **Current Status:** Software Engineer at **Logituit** (Full-Time)\n\nVedant works full-time at **Logituit**, architecting and developing native Android applications using **Kotlin**, **Jetpack Compose**, **Clean Architecture**, and **Kotlin Multiplatform (KMP)**.\n\nHe is open for:\n- Professional Networking & Technical Knowledge Sharing\n- Open Source Mobile Engineering Collaborations\n- Industry & Community Meetups`,
      quickReplies: ["How can I contact Vedant?", "What is Vedant's tech stack?"],
    }),
  },

  // 6. Featured Real Projects
  {
    id: "projects",
    keywords: [
      "project",
      "projects",
      "work",
      "portfolio",
      "app",
      "apps",
      "build",
      "cattle",
      "talent",
      "bridge",
      "invoice",
      "gym",
      "hotel",
      "royal",
      "github repos",
    ],
    response: () => ({
      reply: `💻 **Vedant's Featured Real Projects:**\n\n1. 🌐 **Personal Portfolio 2.0:** Production-grade developer showcase built with Next.js 16, TypeScript, & Motion.dev.\n2. 🤖 **Talent-Bridge:** AI-Integrated Placement Portal featuring AI Mock Interviewer & Resume Analyzer.\n3. 📄 **Simple Invoice Generator:** Dynamic client billing & invoicing web app with client-side PDF export.\n4. 🐄 **Cattle Hub:** Full-Stack livestock management platform built with Java JSP/Servlet, JDBC & MySQL.\n5. 🏋️ **Gym Hub:** Comprehensive fitness center & membership management software.\n6. 🏨 **RoyalHotel:** Complete hotel reservation & room management system.\n\nExplore all 9 projects on the **Projects** section!`,
      quickReplies: ["What is Vedant's tech stack?", "How can I contact Vedant?"],
    }),
  },

  // 7. Education, CGPA & College Details
  {
    id: "education",
    keywords: [
      "education",
      "study",
      "degree",
      "college",
      "school",
      "qualification",
      "cgpa",
      "gpa",
      "10th",
      "12th",
      "graduation",
      "btech",
      "b.tech",
      "sipna",
      "topper",
      "marks",
      "percentage",
      "hsc",
      "ssc",
      "university",
    ],
    response: () => ({
      reply: `🎓 **Vedant's Academic Qualifications:**\n\n1. 🎓 **B.Tech in Computer Science & Engineering:**\n   - *Institute:* Sipna College of Engineering & Technology, Amravati\n   - *Score:* **9.60 CGPA / 8.85 CGPA** (First Class with Distinction, Semester Topper)\n\n2. 📚 **HSC (12th Grade Science):**\n   - *Institute:* Adarsha Science Mahavidyalaya\n   - *Score:* **91.80%** (98/100 in Computer Science)\n\n3. 🏆 **SSC (10th Grade):**\n   - *Institute:* Shree Kanhoji Baba Vidyalaya\n   - *Score:* **94.50%** (School Distinction Topper)`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    }),
  },

  // 8. Contact & Social Links
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "mobile",
      "call",
      "reach",
      "connect",
      "mail",
      "linkedin",
      "github",
      "address",
      "location",
      "instagram",
      "social",
      "twitter",
    ],
    response: () => ({
      reply: `📬 **How to Connect with Vedant:**\n\n- 📧 **Email:** [vedantsunilraut@gmail.com](mailto:vedantsunilraut@gmail.com)\n- 📞 **Phone:** [+91 9022588975](tel:+919022588975)\n- 💼 **LinkedIn:** [linkedin.com/in/vedantsunilraut](https://www.linkedin.com/in/vedantsunilraut)\n- 🐙 **GitHub:** [github.com/VEDANTSUNILRAUT](https://github.com/VEDANTSUNILRAUT)\n- 📍 **Location:** Amravati / Mumbai, Maharashtra, India (IST / UTC +5:30)`,
      quickReplies: ["Where is Vedant working?", "What is Vedant's tech stack?"],
    }),
  },

  // 9. Hiring, Availability, Remote & Opportunities
  {
    id: "hiring",
    keywords: [
      "hire",
      "hiring",
      "available",
      "relocate",
      "remote",
      "full time",
      "freelance",
      "contract",
      "salary",
      "notice",
      "joining",
      "opportunity",
      "work with",
      "consult",
    ],
    response: () => ({
      reply: `💼 **Hiring & Collaboration Info:**\n\nVedant is currently working full-time at **Logituit** as a Software Engineer. \n\nHe is always enthusiastic about:\n- 🚀 Tech discussions & Native Android Architecture consultations\n- 💡 Open source mobile projects\n- 🌐 Global engineering networking & mentorship\n\nFor professional inquiries or networking, send an email to **vedantsunilraut@gmail.com**!`,
      quickReplies: ["How can I contact Vedant?", "What is Vedant's tech stack?"],
    }),
  },

  // 10. Certifications & Honors
  {
    id: "certifications",
    keywords: [
      "certificate",
      "certification",
      "certifications",
      "achievement",
      "achievements",
      "award",
      "awards",
      "google",
      "aws",
      "eduskills",
      "rank",
      "distinction",
    ],
    response: () => ({
      reply: `🏆 **Certifications & Key Achievements:**\n\n1. 🤖 **Google AI/ML Virtual Internship Certificate:** Google AI/ML track via EduSkills.\n2. ☁️ **AWS Cloud Practitioner Virtual Internship:** Cloud architecture & services via EduSkills.\n3. 🥇 **Semester 1st Rank Topper:** Sipna College of Engineering & Technology (9.60 CGPA).\n4. 🏅 **98/100 CS Score:** High Distinction in 12th Board HSC Computer Science.\n5. 🏆 **10th School Topper:** 94.50% distinction score in SSC.`,
      quickReplies: ["Tell me about Vedant's projects", "What is Vedant's tech stack?"],
    }),
  },

  // 11. Clean Architecture & Code Best Practices
  {
    id: "architecture",
    keywords: [
      "architecture",
      "clean architecture",
      "solid",
      "pattern",
      "patterns",
      "mvi",
      "mvvm",
      "best practice",
      "best practices",
      "code quality",
      "testing",
      "unit test",
      "design pattern",
    ],
    response: () => ({
      reply: `🏗️ **Engineering Architecture & Standards:**\n\nVedant enforces strict **Clean Architecture** principles in mobile & full-stack development:\n\n- 🧩 **Layered Separation:** Decoupled Presentation (UI), Domain (Use Cases), and Data (Repositories/Data Sources) layers.\n- 🔄 **Reactive State:** Unidirectional Data Flow using **StateFlow** and **SharedFlow** with **MVI / MVVM** pattern.\n- 🛡️ **SOLID Principles:** High cohesion, low coupling, single responsibility, dependency inversion.\n- 🧪 **Testability:** Mockable interfaces with Dagger Hilt / Koin for easy unit and UI testing.`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    }),
  },

  // 12. Resume / CV
  {
    id: "resume",
    keywords: ["resume", "cv", "biodata", "curriculum", "vitae", "pdf", "download resume"],
    response: () => ({
      reply: `📄 **Vedant's Updated Resume / CV:**\n\nYou can request Vedant's latest formal PDF Resume by emailing **vedantsunilraut@gmail.com** or connecting via **[LinkedIn](https://www.linkedin.com/in/vedantsunilraut)**!`,
      quickReplies: ["How can I contact Vedant?", "Where is Vedant working?"],
    }),
  },

  // 13. Bio & About
  {
    id: "bio",
    keywords: ["who", "about", "vedant", "bio", "background", "intro", "introduction", "tell me about yourself"],
    response: () => ({
      reply: `👋 **Meet Vedant Raut:**\n\n${VEDANT_KNOWLEDGE_BASE.bio}\n\nHe delivers high-performance UX, responsive mobile apps, and resilient backend systems!`,
      quickReplies: ["What is Vedant's tech stack?", "Tell me about Vedant's projects"],
    }),
  },

  // 14. Greetings
  {
    id: "greetings",
    keywords: ["hello", "hi", "hey", "sup", "greetings", "good morning", "good evening", "yo", "hola"],
    response: () => ({
      reply: `Hello there! 👋 I'm **Vedant's Executive AI Assistant**.\n\nHow can I help you today? Feel free to ask about Vedant's **Android engineering skills**, **9 featured projects**, **8 career roles**, **education**, or **contact info**!`,
      quickReplies: QUICK_QUESTIONS,
    }),
  },

  // 15. Conversational Bot Meta & Thanks
  {
    id: "thanks",
    keywords: ["thank", "thanks", "awesome", "great", "cool", "nice", "good job"],
    response: () => ({
      reply: `You're very welcome! 😊 Let me know if you need anything else about Vedant's work, tech stack, or projects!`,
      quickReplies: QUICK_QUESTIONS,
    }),
  },

  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "cya", "take care"],
    response: () => ({
      reply: `Goodbye! Have a fantastic day! Feel free to come back anytime to chat with Vedant's AI Assistant. 🚀`,
      quickReplies: QUICK_QUESTIONS,
    }),
  },

  {
    id: "identity",
    keywords: ["who are you", "what are you", "are you bot", "are you ai", "who created you"],
    response: () => ({
      reply: `🤖 I am **Vedant's Executive AI Assistant**! I am an interactive bot trained with complete knowledge of Vedant Raut's Android architecture skills, web tech stack, featured projects, work experience at Logituit, and academic background.`,
      quickReplies: QUICK_QUESTIONS,
    }),
  },
];

export function getBotResponse(userQuery: string): BotResponse {
  const query = userQuery.toLowerCase().trim();

  if (!query) {
    return {
      reply: `Please ask me anything about Vedant's skills, projects, experience, or contact information!`,
      quickReplies: QUICK_QUESTIONS,
    };
  }

  // Calculate matching scores for each intent
  let bestIntent: KnowledgeIntent | null = null;
  let maxScore = 0;

  for (const intent of INTENTS) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (query.includes(kw)) {
        // Give higher weight to exact word matches or longer keyword matches
        score += kw.length > 4 ? 3 : 2;
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestIntent = intent;
    }
  }

  // If a high-confidence intent matched
  if (bestIntent && maxScore >= 2) {
    return bestIntent.response(query);
  }

  // Intelligent Fallback
  return {
    reply: `I'd love to help with that! As Vedant's Executive AI Assistant, I can answer questions about:\n\n- 📱 **Android & Kotlin Architecture**\n- 🌐 **Next.js & Full-Stack Tech Stack**\n- 💻 **9 Featured Projects & Live Demos**\n- 💼 **Work Experience at Logituit & Internships**\n- 🎓 **B.Tech 9.60 CGPA & Academic Qualifications**\n- 📬 **Email, Phone & Social Links**\n\nWhat would you like to explore?`,
    quickReplies: QUICK_QUESTIONS,
  };
}

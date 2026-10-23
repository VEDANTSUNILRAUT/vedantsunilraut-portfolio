"use client";

import React, { useState } from "react";
import { 
  Code2, Smartphone, Layers, Server, Database, GitBranch, Github, 
  Terminal, Flame, Globe, Send, Box, Coffee, Cpu, Wrench, Wind, Atom, FileCode2, Sparkles, Zap
} from "lucide-react";

interface DevTechIconProps {
  name: string;
  slug: string;
  variant?: string;
  className?: string;
  invertOnDark?: boolean;
}

const fallbackLucideMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Android SDK": Smartphone,
  "Android": Smartphone,
  "Android Native": Smartphone,
  "Kotlin": Code2,
  "Jetpack Compose": Layers,
  "Kotlin Multiplatform": Layers,
  "KMP": Layers,
  "KMP (Multiplatform)": Layers,
  "React.js": Atom,
  "React": Atom,
  "Next.js": Globe,
  "TypeScript": FileCode2,
  "JavaScript": Code2,
  "C": Code2,
  "HTML5": FileCode2,
  "HTML": FileCode2,
  "CSS3": Wind,
  "CSS": Wind,
  "Tailwind CSS": Wind,
  "Node.js": Server,
  "Express.js": Cpu,
  "Spring Boot": Server,
  "REST API": Server,
  "REST APIs": Server,
  "MongoDB": Database,
  "MySQL": Database,
  "PostgreSQL": Database,
  "Firebase": Flame,
  "Git": GitBranch,
  "Git & GitHub": Github,
  "GitHub": Github,
  "VS Code": FileCode2,
  "Android Studio": Wrench,
  "IntelliJ IDEA": Terminal,
  "Vercel": Globe,
  "Figma": Layers,
  "Java": Coffee,
  "Gemini": Sparkles,
  "Gemini AI": Sparkles,
  "AI Integration": Sparkles,
  "AI Dev Tools": Sparkles,
  "Postman": Send,
  "Docker": Box,
  "Motion.dev": Zap,
  "Cloudflare": Globe,
  "PHP": Server,
  "html2pdf.js": FileCode2,
  "JSP & Servlet": Coffee,
  "JDBC": Database,
  "Gradle": Wrench,
  "Gradle (DSL)": Wrench,
  "Jira": Layers,
  "Jira / Agile": Layers,
  "OpenAI": Sparkles,
};

const localIconMap: Record<string, string> = {
  "android": "/tech-icons/android.svg",
  "kotlin": "/tech-icons/kotlin.svg",
  "androidstudio": "/tech-icons/androidstudio.svg",
  "android_studio": "/tech-icons/androidstudio.svg",
  "jetpackcompose": "/tech-icons/jetpackcompose.svg",
  "kmp": "/tech-icons/kmp.svg",
  "react": "/tech-icons/react.svg",
  "nextjs": "/tech-icons/nextjs.svg",
  "typescript": "/tech-icons/typescript.svg",
  "javascript": "/tech-icons/javascript.svg",
  "c": "/tech-icons/c.svg",
  "html5": "/tech-icons/html5.svg",
  "html": "/tech-icons/html5.svg",
  "html5-css3": "/tech-icons/html5-css3.svg",
  "css3": "/tech-icons/css3.svg",
  "css": "/tech-icons/css3.svg",
  "tailwindcss": "/tech-icons/tailwindcss.svg",
  "nodejs": "/tech-icons/nodejs.svg",
  "nodedotjs": "/tech-icons/nodejs.svg",
  "express": "/tech-icons/express.svg",
  "spring": "/tech-icons/spring.svg",
  "api": "/tech-icons/api.svg",
  "restapi": "/tech-icons/api.svg",
  "mongodb": "/tech-icons/mongodb.svg",
  "mysql": "/tech-icons/mysql.svg",
  "postgresql": "/tech-icons/postgresql.svg",
  "php": "/tech-icons/php.svg",
  "firebase": "/tech-icons/firebase.svg",
  "git": "/tech-icons/git.svg",
  "github": "/tech-icons/github.svg",
  "vscode": "/tech-icons/vscode.svg",
  "visualstudiocode": "/tech-icons/vscode.svg",
  "intellij": "/tech-icons/intellij.svg",
  "vercel": "/tech-icons/vercel.svg",
  "figma": "/tech-icons/figma.svg",
  "java": "/tech-icons/java.svg",
  "gemini": "/tech-icons/gemini.svg",
  "postman": "/tech-icons/postman.svg",
  "docker": "/tech-icons/docker.svg",
  "gradle": "/tech-icons/gradle.svg",
  "jira": "/tech-icons/jira.svg",
  "openai": "/tech-icons/openai.svg",
  "cloudflare": "/tech-icons/cloudflare.svg",
  "framermotion": "/tech-icons/framermotion.svg",
  "motion": "/tech-icons/motion.svg",
};

export function DevTechIcon({ 
  name, 
  slug, 
  variant = "original",
  className = "w-7 h-7 sm:w-8 sm:h-8", 
  invertOnDark = false 
}: DevTechIconProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !slug) {
    const FallbackComponent = fallbackLucideMap[name] || Code2;
    return <FallbackComponent className={`${className} shrink-0`} />;
  }

  const iconUrl = localIconMap[slug] || `https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

  return (
    <img
      src={iconUrl}
      alt={name}
      width={32}
      height={32}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-contain transition-transform group-hover:scale-110 ${className} ${invertOnDark ? "invert" : ""}`}
    />
  );
}

import React from "react";
import { TechBadgeProps } from "./TechBadge.types";
import { DevTechIcon } from "@/components/ui/DevTechIcon/DevTechIcon";

const badgeSlugMap: Record<string, { slug: string; invertOnDark?: boolean; variant?: string }> = {
  "Kotlin": { slug: "kotlin" },
  "Android SDK": { slug: "android" },
  "Android Native": { slug: "android" },
  "Android": { slug: "android" },
  "Android Studio": { slug: "androidstudio" },
  "Jetpack Compose": { slug: "jetpackcompose" },
  "KMP (Multiplatform)": { slug: "kmp" },
  "KMP": { slug: "kmp" },
  "Kotlin Multiplatform": { slug: "kmp" },
  "React": { slug: "react" },
  "React.js": { slug: "react" },
  "Next.js": { slug: "nextjs", invertOnDark: true },
  "Node.js": { slug: "nodejs" },
  "TypeScript": { slug: "typescript" },
  "JavaScript": { slug: "javascript" },
  "Tailwind CSS": { slug: "tailwindcss" },
  "HTML5": { slug: "html5" },
  "HTML": { slug: "html5" },
  "CSS3": { slug: "css3" },
  "CSS": { slug: "css3" },
  "PHP": { slug: "php" },
  "Spring Boot": { slug: "spring" },
  "VS Code": { slug: "vscode" },
  "Git & GitHub": { slug: "github", invertOnDark: true },
  "Git": { slug: "git" },
  "GitHub": { slug: "github", invertOnDark: true },
  "Express.js": { slug: "express", invertOnDark: true },
  "MongoDB": { slug: "mongodb" },
  "Postman": { slug: "postman" },
  "Java": { slug: "java" },
  "Python": { slug: "python" },
  "Docker": { slug: "docker" },
  "Figma": { slug: "figma" },
  "Firebase": { slug: "firebase", variant: "plain" },
  "MySQL": { slug: "mysql" },
  "PostgreSQL": { slug: "postgresql" },
  "Vercel": { slug: "vercel", invertOnDark: true },
  "Motion.dev": { slug: "framermotion" },
  "Framer Motion": { slug: "framermotion" },
  "Cloudflare": { slug: "cloudflare" },
  "AI Integration": { slug: "gemini" },
  "AI Dev Tools": { slug: "openai", invertOnDark: true },
  "OpenAI": { slug: "openai", invertOnDark: true },
  "Gemini AI": { slug: "gemini" },
  "Gemini": { slug: "gemini" },
  "REST API": { slug: "api" },
  "REST APIs": { slug: "api" },
  "Gradle": { slug: "gradle" },
  "Gradle (DSL)": { slug: "gradle" },
  "Jira": { slug: "jira" },
  "Jira / Agile": { slug: "jira" },
  "IntelliJ IDEA": { slug: "intellij" },
  "C": { slug: "c" },
  "html2pdf.js": { slug: "javascript" },
  "JSP & Servlet": { slug: "java" },
  "JDBC": { slug: "mysql" },
};

export function TechBadge({ 
  name, 
  color = "text-neutral-300 border-neutral-500/20 bg-neutral-500/10", 
  className = "",
  iconClassName = "w-3.5 h-3.5"
}: TechBadgeProps) {
  const badgeConfig = badgeSlugMap[name] || {
    slug: name.toLowerCase().replace(/[^a-z0-9]/g, ""),
  };

  return (
    <span
      className={`inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium transition-all duration-200 hover:scale-105 ${color} ${className}`}
    >
      <DevTechIcon 
        name={name} 
        slug={badgeConfig.slug} 
        variant={badgeConfig.variant} 
        invertOnDark={badgeConfig.invertOnDark} 
        className={iconClassName} 
      />
      <span>{name}</span>
    </span>
  );
}

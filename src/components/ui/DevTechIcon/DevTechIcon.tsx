"use client";

import React, { useState } from "react";
import { 
  Code2, Smartphone, Layers, Server, Database, GitBranch, Github, 
  Terminal, Flame, Globe, Send, Box, Coffee, Cpu, Wrench, Wind, Atom, FileCode2
} from "lucide-react";

interface DevTechIconProps {
  name: string;
  slug: string;
  variant?: string;
  className?: string;
  invertOnDark?: boolean;
}

const fallbackLucideMap: Record<string, React.ReactNode> = {
  "Android SDK": <Smartphone className="w-7 h-7 text-emerald-400" />,
  "Android": <Smartphone className="w-7 h-7 text-emerald-400" />,
  "Kotlin": <Code2 className="w-7 h-7 text-purple-400" />,
  "Jetpack Compose": <Layers className="w-7 h-7 text-blue-400" />,
  "Kotlin Multiplatform": <Layers className="w-7 h-7 text-purple-400" />,
  "KMP": <Layers className="w-7 h-7 text-purple-400" />,
  "React.js": <Atom className="w-7 h-7 text-cyan-400" />,
  "React": <Atom className="w-7 h-7 text-cyan-400" />,
  "Next.js": <Globe className="w-7 h-7 text-white" />,
  "TypeScript": <FileCode2 className="w-7 h-7 text-blue-300" />,
  "JavaScript": <Code2 className="w-7 h-7 text-yellow-400" />,
  "C": <Code2 className="w-7 h-7 text-blue-400" />,
  "HTML5": <FileCode2 className="w-7 h-7 text-orange-500" />,
  "CSS3": <Wind className="w-7 h-7 text-blue-500" />,
  "Tailwind CSS": <Wind className="w-7 h-7 text-sky-400" />,
  "Node.js": <Server className="w-7 h-7 text-green-400" />,
  "Express.js": <Cpu className="w-7 h-7 text-neutral-300" />,
  "Spring Boot": <Server className="w-7 h-7 text-green-500" />,
  "REST API": <Server className="w-7 h-7 text-emerald-400" />,
  "MongoDB": <Database className="w-7 h-7 text-emerald-500" />,
  "MySQL": <Database className="w-7 h-7 text-blue-400" />,
  "PostgreSQL": <Database className="w-7 h-7 text-indigo-400" />,
  "Firebase": <Flame className="w-7 h-7 text-amber-400" />,
  "Git": <GitBranch className="w-7 h-7 text-orange-400" />,
  "GitHub": <Github className="w-7 h-7 text-white" />,
  "VS Code": <FileCode2 className="w-7 h-7 text-sky-400" />,
  "Android Studio": <Wrench className="w-7 h-7 text-emerald-400" />,
  "IntelliJ IDEA": <Terminal className="w-7 h-7 text-purple-500" />,
  "Vercel": <Globe className="w-7 h-7 text-white" />,
  "Figma": <Layers className="w-7 h-7 text-pink-400" />,
  "Java": <Coffee className="w-7 h-7 text-amber-500" />,
  "Postman": <Send className="w-7 h-7 text-orange-400" />,
  "Docker": <Box className="w-7 h-7 text-blue-400" />,
};

const localIconMap: Record<string, string> = {
  "android": "/tech-icons/android.svg",
  "kotlin": "/tech-icons/kotlin.svg",
  "androidstudio": "/tech-icons/androidstudio.svg",
  "jetpackcompose": "/tech-icons/jetpackcompose.svg",
  "kmp": "/tech-icons/kmp.svg",
  "react": "/tech-icons/react.svg",
  "nextjs": "/tech-icons/nextjs.svg",
  "typescript": "/tech-icons/typescript.svg",
  "javascript": "/tech-icons/javascript.svg",
  "c": "/tech-icons/c.svg",
  "html5": "/tech-icons/html5.svg",
  "css3": "/tech-icons/css3.svg",
  "tailwindcss": "/tech-icons/tailwindcss.svg",
  "nodejs": "/tech-icons/nodejs.svg",
  "express": "/tech-icons/express.svg",
  "spring": "/tech-icons/spring.svg",
  "api": "/tech-icons/api.svg",
  "restapi": "/tech-icons/api.svg",
  "mongodb": "/tech-icons/mongodb.svg",
  "mysql": "/tech-icons/mysql.svg",
  "postgresql": "/tech-icons/postgresql.svg",
  "firebase": "/tech-icons/firebase.svg",
  "git": "/tech-icons/git.svg",
  "github": "/tech-icons/github.svg",
  "vscode": "/tech-icons/vscode.svg",
  "intellij": "/tech-icons/intellij.svg",
  "vercel": "/tech-icons/vercel.svg",
  "figma": "/tech-icons/figma.svg",
  "java": "/tech-icons/java.svg",
  "postman": "/tech-icons/postman.svg",
  "docker": "/tech-icons/docker.svg",
};

export function DevTechIcon({ 
  name, 
  slug, 
  variant = "original",
  className = "w-7 h-7 sm:w-8 sm:h-8", 
  invertOnDark = false 
}: DevTechIconProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallbackLucideMap[name] || <Code2 className="w-7 h-7 text-purple-400" />}</>;
  }

  const iconUrl = localIconMap[slug] || `https://cdn.jsdelivr.net/gh/devicon/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

  return (
    <img
      src={iconUrl}
      alt={name}
      loading="eager"
      onError={() => setHasError(true)}
      className={`object-contain transition-transform group-hover:scale-110 ${className} ${invertOnDark ? "invert" : ""}`}
    />
  );
}

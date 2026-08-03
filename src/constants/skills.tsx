import React from "react";
import { SkillItem, TechBadgeItem } from "@/types/skills";
import { DevTechIcon } from "@/components/ui/DevTechIcon/DevTechIcon";

export const techBadges: TechBadgeItem[] = [
  { name: "Kotlin", color: "text-purple-400 border-purple-500/20 bg-purple-500/10" },
  { name: "Android Native", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Jetpack Compose", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { name: "KMP (Multiplatform)", color: "text-purple-300 border-purple-400/20 bg-purple-400/10" },
  { name: "Next.js", color: "text-white border-white/20 bg-white/10" },
  { name: "React", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10" },
  { name: "TypeScript", color: "text-blue-300 border-blue-400/20 bg-blue-400/10" },
  { name: "Node.js", color: "text-green-400 border-green-500/20 bg-green-500/10" },
  { name: "Express.js", color: "text-neutral-300 border-neutral-500/20 bg-neutral-500/10" },
  { name: "Spring Boot", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Git & GitHub", color: "text-orange-400 border-orange-500/20 bg-orange-500/10" },
  { name: "Docker", color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
];

export const projectTags: string[] = [
  "Mobile Realities",
  "UI Experiments", 
  "Motion Design", 
  "Micro Interactions", 
  "Clean Architecture", 
  "Cross-Platform Systems"
];

export const row1Skills: SkillItem[] = [
  { name: "Android", symbol: <DevTechIcon name="Android" slug="android" /> },
  { name: "Kotlin", symbol: <DevTechIcon name="Kotlin" slug="kotlin" /> },
  { name: "Jetpack Compose", symbol: <DevTechIcon name="Jetpack Compose" slug="jetpackcompose" /> },
  { name: "Kotlin Multiplatform", symbol: <DevTechIcon name="Kotlin Multiplatform" slug="kmp" /> },
  { name: "Java", symbol: <DevTechIcon name="Java" slug="java" /> },
  { name: "C", symbol: <DevTechIcon name="C" slug="c" /> },
  { name: "TypeScript", symbol: <DevTechIcon name="TypeScript" slug="typescript" /> },
  { name: "JavaScript", symbol: <DevTechIcon name="JavaScript" slug="javascript" /> },
  { name: "React", symbol: <DevTechIcon name="React" slug="react" /> },
  { name: "Next.js", symbol: <DevTechIcon name="Next.js" slug="nextjs" invertOnDark /> },
  { name: "HTML5", symbol: <DevTechIcon name="HTML5" slug="html5" /> },
  { name: "CSS3", symbol: <DevTechIcon name="CSS3" slug="css3" /> },
  { name: "Tailwind CSS", symbol: <DevTechIcon name="Tailwind CSS" slug="tailwindcss" /> },
];

export const row2Skills: SkillItem[] = [
  { name: "Node.js", symbol: <DevTechIcon name="Node.js" slug="nodejs" /> },
  { name: "Express.js", symbol: <DevTechIcon name="Express.js" slug="express" invertOnDark /> },
  { name: "Spring Boot", symbol: <DevTechIcon name="Spring Boot" slug="spring" /> },
  { name: "REST API", symbol: <DevTechIcon name="REST API" slug="api" /> },
  { name: "MySQL", symbol: <DevTechIcon name="MySQL" slug="mysql" /> },
  { name: "PostgreSQL", symbol: <DevTechIcon name="PostgreSQL" slug="postgresql" /> },
  { name: "MongoDB", symbol: <DevTechIcon name="MongoDB" slug="mongodb" /> },
  { name: "Firebase", symbol: <DevTechIcon name="Firebase" slug="firebase" /> },
  { name: "Git", symbol: <DevTechIcon name="Git" slug="git" /> },
  { name: "GitHub", symbol: <DevTechIcon name="GitHub" slug="github" invertOnDark /> },
  { name: "VS Code", symbol: <DevTechIcon name="VS Code" slug="vscode" /> },
  { name: "Android Studio", symbol: <DevTechIcon name="Android Studio" slug="androidstudio" /> },
  { name: "IntelliJ IDEA", symbol: <DevTechIcon name="IntelliJ IDEA" slug="intellij" /> },
  { name: "Postman", symbol: <DevTechIcon name="Postman" slug="postman" /> },
  { name: "Docker", symbol: <DevTechIcon name="Docker" slug="docker" /> },
  { name: "Vercel", symbol: <DevTechIcon name="Vercel" slug="vercel" invertOnDark /> },
  { name: "Figma", symbol: <DevTechIcon name="Figma" slug="figma" /> },
];


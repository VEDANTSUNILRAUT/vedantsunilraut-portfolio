import React from "react";
import { SkillItem, TechBadgeItem } from "@/types/skills";
import { DevTechIcon } from "@/components/ui/DevTechIcon/DevTechIcon";
import { themeConfig } from "./theme";

export const techBadges: TechBadgeItem[] = [
  { name: "Kotlin", color: `text-purple-300 ${themeConfig.accents.purple.pillClass}` },
  { name: "Android Native", color: `text-violet-300 ${themeConfig.accents.emerald.pillClass}` },
  { name: "Jetpack Compose", color: `text-purple-300 ${themeConfig.accents.cyan.pillClass}` },
  { name: "KMP (Multiplatform)", color: `text-fuchsia-300 ${themeConfig.accents.amber.pillClass}` },
  { name: "Next.js", color: "text-white border-white/20 bg-white/10" },
  { name: "React", color: `text-violet-300 ${themeConfig.accents.teal.pillClass}` },
  { name: "TypeScript", color: `text-indigo-300 ${themeConfig.accents.blue.pillClass}` },
  { name: "Node.js", color: `text-purple-300 ${themeConfig.accents.purple.pillClass}` },
  { name: "Spring Boot", color: `text-violet-300 ${themeConfig.accents.emerald.pillClass}` },
  { name: "Git & GitHub", color: `text-fuchsia-300 ${themeConfig.accents.rose.pillClass}` },
  { name: "Docker", color: `text-purple-300 ${themeConfig.accents.sky.pillClass}` },
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
  { name: "Postman", symbol: <DevTechIcon name="Postman" slug="postman" /> },
  { name: "Docker", symbol: <DevTechIcon name="Docker" slug="docker" /> },
  { name: "Gemini AI", symbol: <DevTechIcon name="Gemini AI" slug="gemini" /> },
  { name: "Vercel", symbol: <DevTechIcon name="Vercel" slug="vercel" invertOnDark /> },
  { name: "Figma", symbol: <DevTechIcon name="Figma" slug="figma" /> },
];


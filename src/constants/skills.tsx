import React from "react";
import { 
  Code2, Smartphone, Layers, Server, Database, GitBranch, Github, 
  Terminal, Flame, Globe, Send, Box, Coffee, Cpu, Wrench, LayoutGrid, Wind
} from "lucide-react";
import { SkillItem, TechBadgeItem } from "@/types/skills";

export const techBadges: TechBadgeItem[] = [
  { name: "Kotlin", color: "text-purple-400 border-purple-500/20 bg-purple-500/10" },
  { name: "Android SDK", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" },
  { name: "Jetpack Compose", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { name: "React.js", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10" },
  { name: "Next.js", color: "text-white border-white/20 bg-white/10" },
  { name: "Node.js", color: "text-green-400 border-green-500/20 bg-green-500/10" },
  { name: "TypeScript", color: "text-blue-300 border-blue-400/20 bg-blue-400/10" },
  { name: "VS Code", color: "text-sky-400 border-sky-500/20 bg-sky-500/10" },
  { name: "Git & GitHub", color: "text-orange-400 border-orange-500/20 bg-orange-500/10" },
  { name: "Express.js", color: "text-neutral-300 border-neutral-500/20 bg-neutral-500/10" },
  { name: "MongoDB", color: "text-emerald-500 border-emerald-600/20 bg-emerald-600/10" },
  { name: "Postman", color: "text-amber-400 border-amber-500/20 bg-amber-500/10" },
];

export const projectTags: string[] = [
  "UI Experiments", 
  "Motion Design", 
  "Micro Interactions", 
  "Animated Interfaces", 
  "Visual Systems"
];

export const row1Skills: SkillItem[] = [
  { name: "React.js", symbol: <Code2 className="w-6 h-6 text-cyan-400" /> },
  { name: "Next.js", symbol: <span className="font-bold text-lg text-white">N</span> },
  { name: "TypeScript", symbol: <span className="font-bold text-base text-blue-400">TS</span> },
  { name: "JavaScript", symbol: <span className="font-bold text-base text-yellow-400">JS</span> },
  { name: "Kotlin", symbol: <span className="font-bold text-base text-purple-400">KT</span> },
  { name: "Android SDK", symbol: <Smartphone className="w-6 h-6 text-emerald-400" /> },
  { name: "Jetpack Compose", symbol: <Layers className="w-6 h-6 text-blue-400" /> },
  { name: "Tailwind CSS", symbol: <Wind className="w-6 h-6 text-sky-400" /> },
  { name: "Node.js", symbol: <Server className="w-6 h-6 text-green-400" /> },
  { name: "Express.js", symbol: <span className="font-mono text-sm text-neutral-300">ex</span> },
  { name: "MongoDB", symbol: <Database className="w-6 h-6 text-emerald-500" /> },
  { name: "Git", symbol: <GitBranch className="w-6 h-6 text-orange-400" /> },
  { name: "GitHub", symbol: <Github className="w-6 h-6 text-white" /> },
  { name: "Vercel", symbol: <span className="font-black text-lg text-white">▲</span> },
  { name: "Figma", symbol: <LayoutGrid className="w-6 h-6 text-pink-400" /> },
];

export const row2Skills: SkillItem[] = [
  { name: "Java", symbol: <Coffee className="w-6 h-6 text-amber-500" /> },
  { name: "Android Studio", symbol: <Wrench className="w-6 h-6 text-green-400" /> },
  { name: "Firebase", symbol: <Flame className="w-6 h-6 text-amber-400" /> },
  { name: "REST APIs", symbol: <Globe className="w-6 h-6 text-indigo-400" /> },
  { name: "Postman", symbol: <Send className="w-6 h-6 text-orange-400" /> },
  { name: "Linux", symbol: <Terminal className="w-6 h-6 text-yellow-300" /> },
  { name: "Docker", symbol: <Box className="w-6 h-6 text-blue-400" /> },
  { name: "System Architecture", symbol: <Cpu className="w-6 h-6 text-purple-400" /> },
];

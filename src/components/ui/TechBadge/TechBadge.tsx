import React from "react";
import { TechBadgeProps } from "./TechBadge.types";
import { DevTechIcon } from "@/components/ui/DevTechIcon/DevTechIcon";

const badgeSlugMap: Record<string, { slug: string; invertOnDark?: boolean; variant?: string }> = {
  "Kotlin": { slug: "kotlin" },
  "Android SDK": { slug: "android" },
  "Jetpack Compose": { slug: "androidstudio" },
  "React.js": { slug: "react" },
  "Next.js": { slug: "nextjs", invertOnDark: true },
  "Node.js": { slug: "nodejs" },
  "TypeScript": { slug: "typescript" },
  "VS Code": { slug: "vscode" },
  "Git & GitHub": { slug: "github", invertOnDark: true },
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
};

export function TechBadge({ name, color = "text-neutral-300 border-neutral-500/20 bg-neutral-500/10", className = "" }: TechBadgeProps) {
  const badgeConfig = badgeSlugMap[name];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-mono font-medium transition-transform hover:scale-105 ${color} ${className}`}
    >
      {badgeConfig && (
        <DevTechIcon 
          name={name} 
          slug={badgeConfig.slug} 
          variant={badgeConfig.variant} 
          invertOnDark={badgeConfig.invertOnDark} 
          className="w-3.5 h-3.5" 
        />
      )}
      <span>{name}</span>
    </span>
  );
}

import React from "react";
import { TechBadgeProps } from "./TechBadge.types";

export function TechBadge({ name, color = "text-neutral-300 border-neutral-500/20 bg-neutral-500/10", className = "" }: TechBadgeProps) {
  return (
    <span
      className={`px-3 py-1 rounded-xl border text-xs font-mono font-medium transition-transform hover:scale-105 ${color} ${className}`}
    >
      {name}
    </span>
  );
}

"use client";

import { Copy, Check } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { useClipboard } from "@/hooks/useClipboard";
import { CopyEmailButtonProps } from "./CopyEmailButton.types";

export function CopyEmailButton({
  className = "",
  email = siteConfig.hero.secondaryCta.email,
}: CopyEmailButtonProps) {
  const { copied, copy } = useClipboard();

  return (
    <button
      onClick={() => copy(email)}
      className={`group relative flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:border-white/30 text-xs md:text-sm font-mono text-neutral-300 hover:text-white transition-all duration-200 active:scale-95 bg-black/40 border border-white/10 ${className}`}
      title="Click to copy email address"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400 animate-in zoom-in duration-150" />
      ) : (
        <Copy className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors" />
      )}
      <span>{copied ? "Copied to clipboard!" : email}</span>
    </button>
  );
}

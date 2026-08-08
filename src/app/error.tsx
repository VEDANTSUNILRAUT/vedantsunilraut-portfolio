"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Boundary caught an issue:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 text-center font-sans">
      <div className="w-full max-w-lg bg-neutral-950/90 border border-white/15 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 shadow-xl">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase font-mono tracking-widest text-red-400 font-semibold mb-2">
          SYSTEM NOTICE
        </span>

        <h1 className="font-eb-garamond text-3xl sm:text-4xl text-white font-normal mb-3">
          Something went wrong
        </h1>

        <p className="font-source-code-pro text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
          An unexpected runtime exception occurred. You can retry loading the state or return to the home dashboard.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-sans font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-xl"
          >
            <RefreshCw className="w-4 h-4 text-black" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-mono text-xs sm:text-sm hover:bg-white/10 transition-all active:scale-95"
          >
            <Home className="w-4 h-4 text-purple-400" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

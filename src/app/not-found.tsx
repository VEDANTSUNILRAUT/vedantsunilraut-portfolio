import Link from "next/link";
import { Compass, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 text-center font-sans">
      <div className="w-full max-w-lg bg-neutral-950/90 border border-white/15 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-xl">
          <Compass className="w-8 h-8 animate-spin" />
        </div>

        <span className="text-xs uppercase font-mono tracking-widest text-purple-400 font-semibold mb-2">
          404 PAGE NOT FOUND
        </span>

        <h1 className="font-eb-garamond text-4xl sm:text-5xl text-white font-normal mb-3">
          Lost in Space
        </h1>

        <p className="font-source-code-pro text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
          The page or route you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-sans font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-xl"
          >
            <Home className="w-4 h-4 text-black" />
            <span>Go to Dashboard</span>
          </Link>

          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-mono text-xs sm:text-sm hover:bg-white/10 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-purple-400" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/projects";
import { useAndroidToast } from "../AndroidToast";
import { 
  Layers, 
  Github, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  X, 
  Code2
} from "lucide-react";

export function AndroidProjectsScreen() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const { showToast } = useAndroidToast();

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  const handleOpenDemo = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      showToast("Opening Live Demo...", "sparkle");
    } else {
      showToast("Repository available on GitHub", "info");
    }
  };

  const handleOpenRepo = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      showToast("Opening GitHub Repository...", "info");
    }
  };

  return (
    <div className="w-full flex flex-col items-center pt-1 pb-4 space-y-4 select-none">
      
      {/* 1. Header Banner */}
      <div className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-neutral-900/80 to-black border border-purple-500/20 backdrop-blur-2xl flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center shadow-sm">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-tight">Play Store & Production Apps</div>
            <div className="text-[10px] font-mono text-neutral-400">Native Android & Multiplatform</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-purple-300 bg-purple-500/15 px-2.5 py-0.5 rounded-full border border-purple-500/30 font-semibold">
          {projects.length} Apps
        </span>
      </div>

      {/* 2. Google Play Store Style App Cards */}
      <div className="w-full space-y-3.5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="w-full p-4 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-2xl hover:border-purple-500/40 shadow-xl flex flex-col space-y-3.5 transition-all"
          >
            {/* Top Row: App Icon + App Meta */}
            <div className="flex items-start gap-3.5">
              {/* App Squircle Icon */}
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-purple-600/30 via-neutral-800 to-neutral-950 border border-purple-500/40 flex items-center justify-center shrink-0 shadow-md">
                <Code2 className="w-6 h-6 text-purple-300" />
              </div>

              {/* Title, Developer & Rating */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug truncate">
                  {project.title.split("–")[0].trim()}
                </h3>
                <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                  Vedant Sunil Raut · Logituit
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30 font-semibold">
                    <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>5.0</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">·</span>
                  <span className="text-[9px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30 font-semibold">
                    Featured App
                  </span>
                </div>
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-2">
              {project.subtitle}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300 font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-neutral-500 font-medium">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Action Buttons (Install / View Repo / Details) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1.5 border-t border-white/10">
              <button
                onClick={() => handleOpenRepo(project.githubUrl)}
                className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 text-xs font-mono font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer min-h-[40px] shadow-sm"
              >
                <Github className="w-3.5 h-3.5 text-neutral-300" />
                <span>Source Code</span>
              </button>

              <button
                onClick={() => {
                  if (project.liveUrl) {
                    handleOpenDemo(project.liveUrl);
                  } else {
                    setSelectedProjectId(project.id);
                  }
                }}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:brightness-110 text-white text-xs font-mono font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer min-h-[40px] shadow-[0_0_15px_rgba(168,85,247,0.35)]"
              >
                <span>{project.liveUrl ? "Launch App" : "App Details"}</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. In-App Project Details Sheet Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 backdrop-blur-md p-3">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="w-full max-w-sm rounded-3xl bg-neutral-900 border border-purple-500/30 p-5 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-white tracking-tight">
                  {selectedProject.title}
                </div>
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                {selectedProject.subtitle}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-purple-400 font-semibold tracking-wider block">Architectural Highlights</span>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-300 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  handleOpenRepo(selectedProject.githubUrl);
                  setSelectedProjectId(null);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>Open Repository on GitHub</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

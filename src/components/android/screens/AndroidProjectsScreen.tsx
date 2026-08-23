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
  Sparkles, 
  CheckCircle2, 
  Info,
  X,
  Code2,
  Share2
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
      <div className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-neutral-900/80 to-black border border-purple-500/20 backdrop-blur-xl flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-tight">Play Store & Apps</div>
            <div className="text-[10px] font-mono text-neutral-400">Production Builds & Architectures</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/30">
          {projects.length} Apps
        </span>
      </div>

      {/* 2. Google Play Store Style App Cards */}
      <div className="w-full space-y-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="w-full p-3.5 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl hover:border-purple-500/40 shadow-xl flex flex-col space-y-3"
          >
            {/* Top Row: App Icon + App Meta */}
            <div className="flex items-start gap-3">
              {/* App Squircle Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/30 via-neutral-800 to-neutral-950 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-md">
                <Code2 className="w-6 h-6 text-purple-300" />
              </div>

              {/* Title, Developer & Rating */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold text-white tracking-tight leading-snug truncate">
                  {project.title.split("–")[0].trim()}
                </h3>
                <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                  Vedant Sunil Raut
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5 text-[9px] font-mono text-amber-300 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/30">
                    <Star className="w-2.5 h-2.5 fill-amber-300" />
                    <span>5.0</span>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-500">·</span>
                  <span className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.2 rounded border border-purple-500/20">
                    Featured
                  </span>
                </div>
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-[10px] text-neutral-300 leading-relaxed font-sans line-clamp-2">
              {project.subtitle}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-neutral-300"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-neutral-500">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Action Buttons (Install / View Repo / Details) */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
              <button
                onClick={() => handleOpenRepo(project.githubUrl)}
                className="py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 text-[10px] font-mono font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
              >
                <Github className="w-3 h-3 text-neutral-400" />
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
                className="py-1.5 px-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/40 border border-purple-500/40 text-purple-200 text-[10px] font-mono font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
              >
                <span>{project.liveUrl ? "Launch App" : "App Details"}</span>
                <ExternalLink className="w-3 h-3 text-purple-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. In-App Project Details Sheet Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-md p-2">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="w-full max-w-sm rounded-3xl bg-neutral-900 border border-white/20 p-4 shadow-2xl space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-white tracking-tight">
                  {selectedProject.title}
                </div>
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-neutral-300 leading-relaxed">
                {selectedProject.subtitle}
              </p>

              {/* Highlights */}
              <div className="space-y-1">
                <span className="text-[9px] font-mono uppercase text-purple-400">Architectural Highlights</span>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[10px] text-neutral-300">
                    <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  handleOpenRepo(selectedProject.githubUrl);
                  setSelectedProjectId(null);
                }}
                className="w-full py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg active:scale-95"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Open on GitHub</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

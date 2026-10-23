"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  Lock, 
  ExternalLink, 
  Maximize2, 
  X, 
  Wifi, 
  Battery, 
  Smartphone, 
  Layers, 
  Sparkles 
} from "lucide-react";
import { FeaturedProject } from "@/types/projects";

interface ProjectShowcaseProps {
  project: FeaturedProject;
  className?: string;
  maxTilt?: number;
}

export function ProjectShowcase({
  project,
  className = "",
  maxTilt = 10,
}: ProjectShowcaseProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Motion values for smooth 3D tilt (React Bits inspired)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.8 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Map normalized mouse position [-0.5, 0.5] to tilt rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Dynamic glare coordinates (percentage based)
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const normalizedX = mouseX / rect.width - 0.5;
      const normalizedY = mouseY / rect.height - 0.5;

      x.set(normalizedX);
      y.set(normalizedY);
    },
    [x, y]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const isMobile = project.deviceType === "mobile";
  const displayUrl = project.urlDisplay || (project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : `${project.previewTitle.toLowerCase().replace(/[^a-z0-9]/g, "")}.dev`);

  return (
    <>
      <div 
        className={`relative w-full [perspective:1200px] select-none ${className}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            boxShadow: isHovered
              ? `0 25px 60px -15px ${project.glowColor || "rgba(168, 85, 247, 0.35)"}, 0 0 35px 2px rgba(255, 255, 255, 0.05)`
              : `0 15px 40px -15px rgba(0, 0, 0, 0.4)`,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className={`w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl border border-white/15 dark:border-white/10 bg-gradient-to-br ${project.bgGradient} p-2.5 sm:p-4 relative overflow-hidden transition-all duration-300`}
        >
          {/* Specular Glare Light Overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.85 : 0,
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle 320px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.16), transparent 70%)`
              ),
            }}
          />

          {/* Device Mockup Wrapper */}
          <div 
            style={{ transform: "translateZ(20px)" }}
            className="w-full h-full flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-neutral-950/85 backdrop-blur-xl shadow-2xl relative"
          >
            {isMobile ? (
              /* ================= 21st.dev Style Smartphone Mockup ================= */
              <div className="w-full h-full flex flex-col">
                {/* Smartphone Status Bar */}
                <div className="flex items-center justify-between px-5 pt-2 pb-1.5 text-neutral-400 border-b border-white/5 bg-neutral-900/60 text-[11px] font-mono">
                  <span>9:41</span>
                  {/* Punch Hole Camera / Dynamic Island */}
                  <div className="w-14 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Wifi className="w-3 h-3 text-neutral-400" />
                    <Battery className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                </div>

                {/* Mobile Viewport / Screenshot */}
                <div className="relative flex-1 w-full overflow-hidden bg-neutral-900 group">
                  {project.image && !imageError ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <GenerativeMobilePreview project={project} />
                  )}

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono border border-white/20 backdrop-blur-md transition-transform duration-200 hover:scale-105"
                      title="Enlarge Screenshot"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono shadow-lg transition-transform duration-200 hover:scale-105"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Smartphone Home Indicator */}
                <div className="py-1.5 flex justify-center bg-neutral-950">
                  <div className="w-24 h-1 rounded-full bg-neutral-700" />
                </div>
              </div>
            ) : (
              /* ================= 21st.dev Style Safari / Browser Mockup ================= */
              <div className="w-full h-full flex flex-col">
                {/* Safari Browser Titlebar */}
                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 border-b border-white/10 bg-neutral-900/90 text-neutral-400 text-xs">
                  {/* Traffic Light Buttons */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-sm" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-sm" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-sm" />
                  </div>

                  {/* Browser Address Bar */}
                  <div className="flex-1 max-w-[200px] sm:max-w-xs mx-2 flex items-center justify-center gap-1.5 px-3 py-1 rounded-md sm:rounded-lg bg-neutral-950/70 border border-white/10 text-[11px] font-mono text-neutral-300 truncate shadow-inner">
                    <Lock className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="truncate text-neutral-400">
                      https://<span className="text-neutral-200 font-medium">{displayUrl}</span>
                    </span>
                  </div>

                  {/* Browser Action Icons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="p-1 rounded-md hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                      title="Inspect Screenshot"
                    >
                      <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                        title="Open Live Website"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Browser Viewport Canvas */}
                <div className="relative flex-1 w-full overflow-hidden bg-neutral-950 group">
                  {project.image && !imageError ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <GenerativeBrowserPreview project={project} />
                  )}

                  {/* Hover Interaction Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white text-xs font-mono border border-white/20 shadow-xl transition-transform duration-200 hover:scale-105"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Full Preview</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono shadow-xl transition-transform duration-200 hover:scale-105"
                      >
                        <span>Visit Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Interactive Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl border border-white/20 bg-neutral-950 overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-white truncate max-w-md">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Image */}
              <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] overflow-auto bg-neutral-950 p-2 flex items-center justify-center">
                {project.image && !imageError ? (
                  <div className="relative w-full h-full min-h-[450px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center">
                    <GenerativeBrowserPreview project={project} />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= Generative Browser Preview Component ================= */
function GenerativeBrowserPreview({ project }: { project: FeaturedProject }) {
  return (
    <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-neutral-950 via-neutral-900 to-black select-none">
      {/* Top Banner with App Brand */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div 
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono text-white shadow-md"
            style={{ backgroundColor: project.glowColor || "#9333ea" }}
          >
            {project.title.charAt(0)}
          </div>
          <span className="font-heading font-semibold text-xs sm:text-sm text-neutral-200">
            {project.previewTitle}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-purple-300">
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span>Active Build</span>
        </div>
      </div>

      {/* Center Dynamic UI Blueprint */}
      <div className="my-auto py-3 space-y-3">
        {/* Mock Stat Widgets Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] font-mono text-neutral-400">Architecture</div>
            <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 font-sans truncate">
              {project.techStack[0] || "Next.js"}
            </div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] font-mono text-neutral-400">Status</div>
            <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5 font-sans flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Production
            </div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[10px] font-mono text-neutral-400">Engineered</div>
            <div className="text-xs sm:text-sm font-semibold text-purple-300 mt-0.5 font-sans">
              100% Native
            </div>
          </div>
        </div>

        {/* Feature Highlights Pills */}
        <div className="p-3 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur-sm">
          <div className="text-[11px] font-mono text-neutral-400 mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-purple-400" />
            <span>Core Capabilities:</span>
          </div>
          <p className="text-xs text-neutral-300 font-sans line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Tech Tags Strip */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-neutral-400">
        <span className="truncate max-w-[200px]">{project.previewSubtitle}</span>
        <span className="text-purple-400 font-medium">Interactive Preview</span>
      </div>
    </div>
  );
}

/* ================= Generative Mobile Preview Component ================= */
function GenerativeMobilePreview({ project }: { project: FeaturedProject }) {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-neutral-950 to-neutral-900 text-white select-none">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-heading font-bold">{project.previewTitle}</span>
        </div>
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
          Android
        </span>
      </div>

      <div className="my-auto space-y-2 text-center py-2">
        <div 
          className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center shadow-lg border border-white/15"
          style={{ backgroundColor: project.glowColor || "#9333ea" }}
        >
          <Smartphone className="w-6 h-6 text-white" />
        </div>
        <h5 className="font-heading font-bold text-sm text-white">
          {project.previewTitle}
        </h5>
        <p className="font-sans text-[11px] text-neutral-300 px-3 line-clamp-2">
          {project.previewSubtitle}
        </p>
      </div>

      <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-center text-neutral-400">
        Jetpack Compose • Kotlin • Android SDK
      </div>
    </div>
  );
}

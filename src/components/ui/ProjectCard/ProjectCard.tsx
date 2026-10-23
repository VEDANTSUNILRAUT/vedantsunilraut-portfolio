"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectShowcase } from "@/components/ui/ProjectShowcase";
import { ProjectCardProps } from "./ProjectCard.types";

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
    >
      {/* Left Column: Interactive 3D Device Showcase (React Bits + 21st.dev) */}
      <div className="lg:col-span-6 z-10">
        <ProjectShowcase project={project} />
      </div>

      {/* Right Column: Project Title, Subtitle, Highlights & Badges (6 Cols) */}
      <div className="lg:col-span-6 z-10 space-y-5">
        {/* Project Title */}
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          {project.title}
        </h3>

        {/* Subtitle / Description */}
        <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
          {project.subtitle}
        </p>

        {/* Bullet Highlights */}
        <ul className="space-y-2.5">
          {project.highlights.map((highlight, hIdx) => (
            <li key={hIdx} className="flex items-start gap-3">
              <span className="text-purple-600 dark:text-purple-400 text-sm mt-0.5 select-none font-bold shrink-0">✦</span>
              <span className="font-sans text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Badges Cloud & Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, tIdx) => (
              <TechBadge
                key={tIdx}
                name={tech}
                color="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10"
              />
            ))}
          </div>

          {/* Action Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex items-center gap-2 pt-1 sm:pt-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-purple-400/40 transition-colors"
                  title="Source Code on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 text-white font-mono text-xs font-semibold hover:bg-purple-500 transition-colors shadow-md"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}


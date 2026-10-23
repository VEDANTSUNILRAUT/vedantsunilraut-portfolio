"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedWorkSectionProps } from "./FeaturedWorkSection.types";

export function FeaturedWorkSection({
  className = "",
  limit,
  showViewMore = false,
}: FeaturedWorkSectionProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className={`w-full max-w-6xl mx-auto px-6 pt-36 sm:pt-44 pb-28 relative z-10 scroll-mt-36 sm:scroll-mt-44 snap-start ${className}`}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 sm:mb-20 text-center"
      >
        <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          Featured <span className="italic-gradient-text">Work</span>
        </h2>
        <p className="mt-3.5 text-sm sm:text-base font-sans text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">
          Production-grade mobile apps, cross-platform modules, and scalable systems built with Kotlin & modern web stacks.
        </p>
      </motion.div>

      {/* Projects Showcase Stack */}
      <div className="space-y-24">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Redirect Button to Projects Page */}
      {showViewMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center flex justify-center"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/15 text-white font-medium text-base hover:bg-neutral-800 transition-all duration-300 shadow-xl hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 font-medium tracking-tight">
              View All Projects
            </span>
            <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-neutral-800 group-hover:bg-purple-600 transition-colors duration-300">
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      )}
    </section>
  );
}


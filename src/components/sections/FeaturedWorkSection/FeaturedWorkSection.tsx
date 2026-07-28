"use client";

import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedWorkSectionProps } from "./FeaturedWorkSection.types";

export function FeaturedWorkSection({ className = "" }: FeaturedWorkSectionProps) {
  return (
    <section id="work" className={`w-full max-w-6xl mx-auto px-6 pt-36 sm:pt-44 pb-28 relative z-10 scroll-mt-36 sm:scroll-mt-44 snap-start ${className}`}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="font-eb-garamond text-5xl sm:text-7xl text-white font-normal tracking-tight">
          Featured <span className="italic-gradient-text font-semibold">Work</span>
        </h2>
      </motion.div>

      {/* Projects Showcase Stack */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

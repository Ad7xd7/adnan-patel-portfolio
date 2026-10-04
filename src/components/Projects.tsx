"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Reveal } from "./Motion";
import { ProjectCard } from "./ProjectCard";
import { CaseStudy } from "./CaseStudy";

export function Projects() {
  const [open, setOpen] = useState<string | null>(null);
  const current = projects.find((p) => p.slug === open);
  return (
    <section id="projects" className="border-t border-line">
      <div className="container-x py-20 lg:py-28">
        <Reveal className="mb-12 grid gap-4 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">Selected projects</h2>
          <p className="max-w-xl leading-relaxed text-mist">Independent work in AI/ML, security and full-stack development. Each one opens as a case study.</p>
        </Reveal>
        <div className="space-y-8">
          {projects.map((p) => <Reveal key={p.slug}><ProjectCard project={p} onOpen={() => setOpen(p.slug)} /></Reveal>)}
        </div>
      </div>
      <AnimatePresence>{current && <CaseStudy key={current.slug} project={current} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}

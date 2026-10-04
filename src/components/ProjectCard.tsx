"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { FlowDiagram, Placeholder } from "./Motion";

function Visual({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const n = project.images.length;
  useEffect(() => {
    if (n < 2 || reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 4500);
    return () => clearInterval(t);
  }, [n, reduce]);

  if (n > 0) {
    const im = project.images[i];
    return (
      <div className="relative aspect-[16/8] bg-black/60">
        <AnimatePresence mode="wait">
          <motion.div key={im.src} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Image src={im.src} alt={im.alt} fill sizes="(min-width:1320px) 1240px, 100vw" className="object-contain" priority={project.featured} />
          </motion.div>
        </AnimatePresence>
        {n > 1 && <p className="absolute bottom-3 right-4 rounded bg-black/60 px-2 py-0.5 font-mono text-xs text-mist">{i + 1} / {n}</p>}
      </div>
    );
  }
  if (project.flow)
    return (
      <div className="relative flex min-h-[260px] items-center overflow-hidden bg-[#101214] p-8 md:p-12 lg:aspect-[16/6]"
        style={{ backgroundImage: "radial-gradient(600px 300px at 80% 0%, rgba(231,168,59,.10), transparent 70%)" }}>
        <div className="w-full">
          <p className="mb-5 text-sm text-mist">Detection and response pipeline</p>
          <FlowDiagram steps={project.flow} variant="row" />
          <p className="mt-6 text-sm text-mist">Implemented categories: <span className="text-paper">DoS · DDoS · Probe / PortScan</span></p>
        </div>
      </div>
    );
  return <Placeholder className="aspect-[16/8] min-h-[220px]" />;
}

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-mist/40">
      <div className="overflow-hidden border-b border-line"><Visual project={project} /></div>
      <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="text-sm text-teal">{project.category}</p>
          <h3 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight">{project.title}</h3>
          <p className="mt-4 max-w-xl leading-relaxed text-mist">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onOpen} className="btn btn-primary" aria-label={`View case study: ${project.title}`}>View Case Study <ArrowUpRight size={16} /></button>
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Github size={16} /> GitHub</a>}
          </div>
        </div>
        <div>
          {project.metrics.length > 0 && (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-line pb-6 sm:grid-cols-3">
              {project.metrics.map((m) => <div key={m.label}><dd className="font-display text-2xl font-medium text-amber">{m.value}</dd><dt className="mt-0.5 text-xs leading-snug text-mist">{m.label}</dt></div>)}
            </dl>
          )}
          <ul className="flex flex-wrap gap-2 pt-6">{project.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
        </div>
      </div>
    </article>
  );
}

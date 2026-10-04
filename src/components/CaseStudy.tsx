"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { FlowDiagram } from "./Motion";
import { ProjectGallery } from "./ProjectGallery";

export function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); prev?.focus(); };
  }, [onClose]);
  const numbered = project.slug === "ids";
  return (
    <motion.div className="fixed inset-0 z-[80] overflow-y-auto bg-bg/95 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      role="dialog" aria-modal="true" aria-labelledby="cs-title">
      <div className="container-x max-w-5xl pb-24 pt-6">
        <div className="flex justify-end"><button ref={closeBtn} onClick={onClose} className="btn btn-ghost !px-4 !py-2"><X size={16} /> Close</button></div>
        <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <p className="mt-4 text-sm text-teal">{project.category}</p>
          <h2 id="cs-title" className="mt-2 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">{project.title}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mist">{project.summary}</p>
          {project.metrics.length > 0 && (
            <dl className="mt-10 grid grid-cols-2 border-y border-line sm:grid-cols-3 lg:grid-cols-5">
              {project.metrics.map((m) => (
                <div key={m.label} className="py-5 pr-6"><dd className="font-display text-3xl font-medium text-amber">{m.value}</dd><dt className="mt-1 text-xs leading-snug text-mist">{m.label}</dt></div>
              ))}
            </dl>
          )}
          <ul className="mt-6 flex flex-wrap gap-2">{project.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>

          <div className="mt-14">
            {project.sections.map((s, idx) => (
              <section key={s.title} aria-labelledby={`s-${idx}`} className="grid gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
                <h3 id={`s-${idx}`} className="font-display text-lg font-medium">
                  {numbered && <span className="mr-3 font-mono text-sm text-amber">{String(idx + 1).padStart(2, "0")}</span>}{s.title}
                </h3>
                <div className="min-w-0">
                  {s.body && <p className="max-w-2xl text-[17px] leading-relaxed text-paper/90">{s.body}</p>}
                  {s.bullets && <ul className="mt-4 grid gap-x-8 gap-y-2 text-mist sm:grid-cols-2">{s.bullets.map((b) => <li key={b} className="flex gap-3"><span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal" />{b}</li>)}</ul>}
                  {s.flow && <div className="mt-6"><FlowDiagram steps={s.flow} /></div>}
                  {s.table && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="text-mist"><tr>{s.table.head.map((h) => <th key={h} className="border-b border-line py-2 pr-6 font-medium">{h}</th>)}</tr></thead>
                        <tbody>{s.table.rows.map((r) => <tr key={r[0]}>{r.map((c, k) => <td key={k} className="border-b border-line/60 py-2.5 pr-6 font-mono">{c}</td>)}</tr>)}</tbody>
                      </table>
                      {s.table.note && <p className="mt-2 text-xs text-mist">{s.table.note}</p>}
                    </div>
                  )}
                  {s.gallery && <ProjectGallery images={project.images} />}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

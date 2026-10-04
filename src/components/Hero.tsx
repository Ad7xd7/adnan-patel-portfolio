"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { site } from "@/data/site";
import { MetricCards } from "./MetricCards";

const ease = [0.22, 1, 0.36, 1] as const;
const up = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.6, ease } });

const groups = [
  { title: "Product engineering", color: "bg-amber", items: ["Observability", "Integrations", "API debugging"] },
  { title: "AI / ML", color: "bg-teal", items: ["Computer vision", "Classification", "Model evaluation"] },
  { title: "Security", color: "bg-paper/70", items: ["Intrusion detection", "API security", "Network analysis"] },
];

function ProfilePanel() {
  return (
    <motion.aside {...up(0.3)} aria-label="Engineering profile" className="panel relative overflow-hidden p-7 md:p-8">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-line" />
      <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-line" />
      <p className="relative font-display text-sm text-mist">Adnan <span className="text-line">/</span> Engineering profile</p>
      <div className="relative mt-7 space-y-6">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="text-sm font-medium">{g.title}</h2>
            <ul className="mt-2.5 space-y-1.5">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-[15px] text-mist"><span aria-hidden className={`h-1.5 w-1.5 rounded-full ${g.color}`} />{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <dl className="relative mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
        {[["11", "integrations"], ["153K+", "traffic samples"], ["21", "ML features"]].map(([v, l]) => (
          <div key={l}><dd className="font-display text-2xl font-medium">{v}</dd><dt className="text-xs text-mist">{l}</dt></div>
        ))}
      </dl>
    </motion.aside>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container-x pb-16 pt-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <motion.p {...up(0)} className="text-xs font-medium uppercase tracking-[0.22em] text-amber">Product Engineering / AI / Security</motion.p>
            <motion.h1 {...up(0.08)} className="mt-6 font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-tight">
              Adnan<br /><span className="text-paper/55">Patel</span><span className="text-amber">.</span>
            </motion.h1>
            <motion.p {...up(0.16)} className="mt-6 font-display text-xl text-paper md:text-2xl">Product Engineer · AI/ML · Cybersecurity</motion.p>
            <motion.p {...up(0.24)} className="mt-5 max-w-xl text-base leading-relaxed text-mist md:text-lg">{site.intro}</motion.p>
            <motion.div {...up(0.32)} className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">Explore Projects <ArrowRight size={16} /></a>
              <a href={site.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><FileText size={16} /> View Resume</a>
            </motion.div>
          </div>
          <ProfilePanel />
        </div>
        <div className="mt-20"><MetricCards /></div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { integrations } from "@/data/experience";
import { CountUp } from "./Motion";

const total = integrations.reduce((a, b) => a + b.count, 0);
const colors = ["bg-amber", "bg-teal", "bg-paper/70"];

export function IntegrationBreakdown() {
  return (
    <div className="panel h-full p-7">
      <p className="text-sm text-mist">Monitoring plugins delivered</p>
      <p className="mt-1 font-display text-6xl font-medium tracking-tight"><CountUp to={total} /></p>
      <ul className="mt-8 space-y-6">
        {integrations.map((it, r) => (
          <li key={it.name}>
            <div className="mb-2.5 flex items-baseline justify-between text-sm"><span>{it.name}</span><span className="font-mono text-mist">{String(it.count).padStart(2, "0")}</span></div>
            <div className="flex gap-1.5" role="img" aria-label={`${it.name}: ${it.count} plugins`}>
              {Array.from({ length: it.count }).map((_, i) => (
                <motion.span key={i} className={`h-7 w-7 rounded-[5px] ${colors[r]}`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + (r * 4 + i) * 0.05, duration: 0.3 }} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";
import { animate, motion, MotionConfig, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

/**
 * Server and first client render both output the final value, so markup always matches.
 * The count-up only starts after mount, once the element is in view.
 */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!inView || reduce) return;
    setN(0);
    const c = animate(0, to, { duration: 1.2, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/** "stack": vertical timeline. "pills": compact wrapping chain. A highlight steps through once visible. */
export function FlowDiagram({ steps, variant = "stack" }: { steps: string[]; variant?: "stack" | "pills" | "row" }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const [active, setActive] = useState(-1);
  useEffect(() => {
    if (reduce || !inView) return;
    let i = 0;
    setActive(0);
    const t = setInterval(() => { i = (i + 1) % (steps.length + 2); setActive(i < steps.length ? i : -1); }, 900);
    return () => clearInterval(t);
  }, [reduce, inView, steps.length]);

  if (variant === "row")
    return (
      <ol ref={ref} className="grid gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {steps.map((s, i) => (
          <li key={s} className={`relative rounded-lg border px-3.5 py-4 transition-colors duration-500 ${active === i ? "border-amber/70 bg-amber/10" : "border-line bg-bg/40"}`}>
            <span className="font-mono text-xs text-amber">{String(i + 1).padStart(2, "0")}</span>
            <span className={`mt-2 block text-[15px] leading-snug ${active === i ? "text-paper" : "text-mist"}`}>{s}</span>
            {i < steps.length - 1 && <span aria-hidden className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-xs text-mist lg:block">›</span>}
          </li>
        ))}
      </ol>
    );
  if (variant === "pills")
    return (
      <ol ref={ref} className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span className={`rounded-md border px-2.5 py-1 text-xs transition-colors duration-500 ${active === i ? "border-amber/70 bg-amber/10 text-paper" : "border-line text-mist"}`}>{s}</span>
            {i < steps.length - 1 && <span aria-hidden className="text-line">→</span>}
          </li>
        ))}
      </ol>
    );
  return (
    <ol ref={ref}>
      {steps.map((s, i) => (
        <li key={s} className="relative pb-5 pl-8 last:pb-0">
          {i < steps.length - 1 && <span aria-hidden className="absolute bottom-0 left-[5px] top-3 w-px bg-line" />}
          <span aria-hidden className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border transition-colors duration-500 ${active === i ? "border-amber bg-amber" : "border-mist/40 bg-bg"}`} />
          <span className={`text-[15px] transition-colors duration-500 ${active === i ? "text-paper" : "text-mist"}`}>{s}</span>
        </li>
      ))}
    </ol>
  );
}

export function Placeholder({ label = "Project visual coming soon", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-[#101214] ${className}`}
      style={{ backgroundImage: "repeating-linear-gradient(135deg, rgba(243,241,234,.025) 0 1px, transparent 1px 14px)" }}>
      <span aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-mist/40" />
      <span aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-mist/40" />
      <p className="text-sm text-mist">{label}</p>
    </div>
  );
}

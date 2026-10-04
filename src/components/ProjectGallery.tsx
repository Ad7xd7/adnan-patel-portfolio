"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, Maximize, X } from "lucide-react";
import type { Img } from "@/data/projects";
import { Placeholder } from "./Motion";

export function ProjectGallery({ images }: { images: Img[] }) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const n = images.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape" && !document.fullscreenElement) { e.stopPropagation(); setOpen(false); }
    };
    window.addEventListener("keydown", k, true);
    return () => window.removeEventListener("keydown", k, true);
  }, [open, go]);

  if (n === 0)
    return <Placeholder className="aspect-video rounded-xl border border-line" />;
  const cur = images[i];
  return (
    <div>
      <div className="group relative aspect-video overflow-hidden rounded-xl border border-line bg-black">
        <AnimatePresence mode="wait">
          <motion.div key={cur.src} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <Image src={cur.src} alt={cur.alt} fill sizes="(min-width:1024px) 800px, 100vw" className="object-contain" />
          </motion.div>
        </AnimatePresence>
        <button onClick={() => setOpen(true)} aria-label="Open image in lightbox" className="absolute right-3 top-3 rounded-lg bg-black/60 p-2 opacity-80 backdrop-blur hover:opacity-100"><Expand size={18} /></button>
        {n > 1 && (<>
          <button onClick={() => go(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 backdrop-blur"><ChevronLeft /></button>
          <button onClick={() => go(1)} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 backdrop-blur"><ChevronRight /></button>
        </>)}
      </div>
      <p className="mt-3 text-sm text-mist">{cur.caption}</p>
      {n > 1 && (
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {images.map((im, k) => (
            <li key={im.src}>
              <button onClick={() => setI(k)} aria-label={`Show image ${k + 1}: ${im.caption}`} aria-current={k === i}
                className={`relative block aspect-video w-full overflow-hidden rounded-lg border bg-black transition ${k === i ? "border-amber" : "border-line opacity-60 hover:opacity-100"}`}>
                <Image src={im.src} alt="" fill sizes="160px" loading="lazy" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <AnimatePresence>
        {open && (
          <motion.div ref={box} role="dialog" aria-modal="true" aria-label="Image lightbox" className="fixed inset-0 z-[90] flex flex-col bg-bg/95 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex justify-end gap-2">
              <button onClick={() => box.current?.requestFullscreen?.()} aria-label="Fullscreen" className="rounded-lg bg-white/10 p-2"><Maximize size={18} /></button>
              <button autoFocus onClick={() => setOpen(false)} aria-label="Close lightbox" className="rounded-lg bg-white/10 p-2"><X size={18} /></button>
            </div>
            <div className="relative my-3 flex-1">
              <Image src={cur.src} alt={cur.alt} fill sizes="100vw" className="object-contain" />
              {n > 1 && (<>
                <button onClick={() => go(-1)} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3"><ChevronLeft /></button>
                <button onClick={() => go(1)} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3"><ChevronRight /></button>
              </>)}
            </div>
            <p className="text-center text-sm text-zinc-300">{cur.caption} ({i + 1}/{n})</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

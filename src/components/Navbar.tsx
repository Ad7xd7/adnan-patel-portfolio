"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";
import { useActiveSection } from "@/lib/useActiveSection";

const ids = nav.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/70 backdrop-blur-md">
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#home" className="font-display text-sm font-semibold tracking-[0.14em]" aria-label="Adnan Patel, home">ADNAN<span className="text-amber">.</span>P</a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? "page" : undefined}
                  className={`relative block py-4 pl-5 pr-3 text-[13px] transition-colors ${active === n.id ? "text-paper" : "text-mist hover:text-paper"}`}>
                  {active === n.id && <motion.span layoutId="nav-dot" className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-amber" />}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="rounded-md p-2 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-line bg-bg md:hidden">
          <ul className="container-x py-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} aria-current={active === n.id ? "page" : undefined}
                  className={`flex items-center gap-3 py-3 text-base ${active === n.id ? "text-paper" : "text-mist"}`}>
                  <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${active === n.id ? "bg-amber" : "bg-transparent"}`} />{n.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}

import { ArrowUpRight, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Motion";

const links = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/adnan-patel-8b4016252", href: site.linkedin },
  ...(site.github ? [{ icon: Github, label: "GitHub", value: site.github.replace(/^https?:\/\//, ""), href: site.github }] : []),
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="container-x grid gap-12 py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-32">
        <Reveal>
          <h2 className="max-w-lg font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">Let&apos;s build something useful.</h2>
          <a href={site.resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-9"><FileText size={16} /> View Resume</a>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="border-t border-line">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 border-b border-line py-5 transition-colors hover:text-amber">
                  <l.icon size={18} className="text-mist group-hover:text-amber" aria-hidden />
                  <span className="min-w-0 flex-1"><span className="block text-xs text-mist">{l.label}</span><span className="block break-all">{l.value}</span></span>
                  <ArrowUpRight size={16} className="text-mist" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

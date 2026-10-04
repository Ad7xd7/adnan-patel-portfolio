import { cyberCategories, cyberTools, cyberNote } from "@/data/cyber";
import { Section } from "./Section";

export function Cybersecurity() {
  return (
    <Section id="cybersecurity" title="Cybersecurity" intro={cyberNote}>
      <div className="grid gap-4 md:grid-cols-2">
        {cyberCategories.map((c, i) => (
          <div key={c.title} className={`panel p-6 transition-colors hover:border-teal/40 ${i === 3 ? "md:row-span-2" : ""}`}>
            <h3 className="font-display text-lg font-medium">{c.title}</h3>
            <ul className="mt-4">{c.items.map((it) => <li key={it} className="flex items-start gap-2.5 border-b border-line/50 py-2 text-[14px] last:border-0"><span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-teal" />{it}</li>)}</ul>
          </div>
        ))}
        <div className="panel p-6">
          <h3 className="font-display text-lg font-medium">Tools</h3>
          <ul className="mt-4 flex flex-wrap gap-2">{cyberTools.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
          <p className="mt-5 text-sm text-mist">Applied end to end in the <a href="#projects" className="text-amber underline underline-offset-4">intrusion detection system</a>.</p>
        </div>
      </div>
    </Section>
  );
}

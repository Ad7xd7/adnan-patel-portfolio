import { ExternalLink } from "lucide-react";
import { certs } from "@/data/certifications";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section id="certs" title="Certifications" intro="Courses and credentials from my resume.">
      <ul className="grid gap-3 md:grid-cols-2">
        {certs.map((c) => (
          <li key={c.name} className="flex items-start justify-between gap-4 rounded-lg border border-line bg-surface px-5 py-4 transition-colors hover:border-mist/40">
            <div><h3 className="text-[15px] font-medium leading-snug">{c.name}</h3><p className="mt-1 text-sm text-mist">{c.issuer}</p>
              {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm text-amber">View credential <ExternalLink size={13} /></a>}</div>
            <span className="tag shrink-0">{c.category}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

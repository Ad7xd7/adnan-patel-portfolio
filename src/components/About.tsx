import { Reveal } from "./Motion";

const focus = ["Enterprise observability","Product engineering","AI / ML","Cybersecurity","API and backend work","Product analysis","Cross-functional collaboration"];

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-28">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">Engineering with a product mindset.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lg leading-relaxed text-paper/90">
            I understand how software products are built, integrated, debugged and validated, and I also build AI/ML and security systems independently.
          </p>
          <p className="mt-5 leading-relaxed text-mist">
            At Motadata I worked on an enterprise observability platform, turning requirements and uneven API data into Go plugins, dashboards and validated features alongside Product, QA and Backend Engineering. My projects extend that into machine learning, intrusion detection and full-stack work.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
            {focus.map((f) => <li key={f} className="flex items-center gap-3 text-[15px]"><span aria-hidden className="h-1 w-1 rounded-full bg-teal" />{f}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

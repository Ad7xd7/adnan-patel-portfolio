import { Reveal } from "./Motion";

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="container-x grid gap-10 py-20 lg:grid-cols-[230px_1fr] lg:gap-16 lg:py-28">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-2xl font-medium tracking-tight">{title}</h2>
          {intro && <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">{intro}</p>}
        </header>
        <Reveal className="min-w-0">{children}</Reveal>
      </div>
    </section>
  );
}

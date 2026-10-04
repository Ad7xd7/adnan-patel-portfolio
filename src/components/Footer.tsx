import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col justify-between gap-2 text-sm text-mist md:flex-row">
        <p>{site.name} · Product Engineer</p>
        <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
      </div>
    </footer>
  );
}

import { collaboration } from "@/data/experience";

export function Collaboration() {
  return (
    <div className="panel p-7">
      <h3 className="font-display text-lg font-medium">Cross-functional collaboration</h3>
      <ul className="mt-4">
        {collaboration.map((c) => (
          <li key={c.who} className="flex items-center justify-between gap-4 border-b border-line/60 py-3 last:border-0 last:pb-0">
            <span>{c.who}</span><span className="text-sm text-amber">{c.how}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

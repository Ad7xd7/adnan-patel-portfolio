import type { SkillGroup } from "@/data/skills";

export function SkillCategory({ group }: { group: SkillGroup }) {
  return (
    <div className="panel group h-full p-6 transition-colors hover:border-amber/40">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-medium">{group.title}</h3>
        <span className="font-mono text-xs text-mist">{group.items.length}</span>
      </div>
      <p className="mt-1.5 text-sm text-mist">{group.blurb}</p>
      <ul className="mt-5 grid grid-cols-2 gap-x-5 border-t border-line pt-4">
        {group.items.map((s) => (
          <li key={s} className="flex items-start gap-2.5 border-b border-line/50 py-2 text-[14px] text-paper/90 transition-colors hover:text-amber">
            <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-teal" />{s}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { skillGroups } from "@/data/skills";
import { Section } from "./Section";
import { SkillCategory } from "./SkillCategory";

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Eight areas, grouped by how I use them. No proficiency scores, only what I have worked with.">
      <div className="grid gap-4 xl:grid-cols-2">
        {skillGroups.map((g) => <SkillCategory key={g.id} group={g} />)}
      </div>
    </Section>
  );
}

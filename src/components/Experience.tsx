import { job, workflow, workflowNote, productAnalysis, backupCase, documentation } from "@/data/experience";
import { Section } from "./Section";
import { FlowDiagram } from "./Motion";
import { IntegrationBreakdown } from "./IntegrationBreakdown";
import { Collaboration } from "./ExperienceTimeline";

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="One role, read as a case study: what was integrated, how, and with whom.">
      <div className="flex flex-col justify-between gap-3 border-b border-line pb-8 md:flex-row md:items-end">
        <div>
          <h3 className="font-display text-3xl font-medium tracking-tight">{job.role}</h3>
          <p className="mt-1.5 text-mist">{job.company} · {job.product}</p>
        </div>
        <p className="font-mono text-sm text-amber">{job.period}</p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <IntegrationBreakdown />
        <div className="panel p-7">
          <h3 className="font-display text-lg font-medium">Integration workflow</h3>
          <div className="mt-6"><FlowDiagram steps={workflow} /></div>
        </div>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist">{workflowNote}</p>

      <div className="mt-8 rounded-xl border border-amber/30 bg-amber/[0.04] p-7">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber">Case study</p>
        <h3 className="mt-2 font-display text-2xl font-medium">{backupCase.title}</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-mist">{backupCase.summary}</p>
        <div className="mt-6"><FlowDiagram steps={backupCase.steps} variant="pills" /></div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="panel p-7">
          <h3 className="font-display text-lg font-medium">Product analysis &amp; feature development</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-5">
            {productAnalysis.map((p) => <li key={p} className="flex items-start gap-2.5 border-b border-line/50 py-2 text-[14px]"><span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-teal" />{p}</li>)}
          </ul>
        </div>
        <div className="space-y-4">
          <Collaboration />
          <div className="panel p-7"><h3 className="font-display text-lg font-medium">Documentation</h3><p className="mt-2 text-sm leading-relaxed text-mist">{documentation}</p></div>
        </div>
      </div>
    </Section>
  );
}

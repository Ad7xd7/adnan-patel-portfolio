import { heroMetrics } from "@/data/site";
import { CountUp } from "./Motion";

export function MetricCards() {
  return (
    <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4">
      {heroMetrics.map((m, i) => (
        <div key={m.label} className={`px-1 py-7 md:px-8 ${i > 0 ? "md:border-l md:border-line" : "md:pl-0"} ${i % 2 === 1 ? "border-l border-line pl-6 md:pl-8" : ""}`}>
          <dd className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            <CountUp to={m.value} /><span className="text-amber">{m.suffix}</span>
          </dd>
          <dt className="mt-2 text-sm text-mist">{m.label}</dt>
        </div>
      ))}
    </dl>
  );
}

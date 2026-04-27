import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const vehicles = [
  {
    code: "SBIR Phase III IDIQ",
    title: "Intelligent Automation as a Service",
    detail:
      "Federal Government-Wide IDIQ. Direct-award eligible across DoD and civilian agencies. No further competition required for in-scope work.",
    fields: [
      ["Contract #", "FA877124D0003"],
      ["Period", "20 Sep 2024 — 19 Sep 2029"],
      ["Scope", "AI · RPA · Agentic Automation"],
    ],
  },
  {
    code: "GSA EPIC Pool 2",
    title: "UiPath Services — Small Business Set-Aside",
    detail:
      "GSA Multiple Award Schedule contract for UiPath delivery, set aside for qualified small businesses. Pre-competed labor categories with rapid task-order award.",
    fields: [
      ["Schedule", "GSA MAS"],
      ["Pool", "EPIC Pool 2"],
      ["Set-aside", "Small Business"],
    ],
  },
];

export function Vehicles() {
  return (
    <Section id="vehicles">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Eyebrow number="04" label="Contract vehicles" total="05 / 09" />
          <h2 className="mt-8 max-w-[24ch] text-3xl tracking-[-0.02em] text-text md:text-5xl md:leading-[1.05]">
            Pre-competed.{" "}
            <span className="text-text-muted">Easy to buy.</span>
          </h2>
        </div>
        <p className="max-w-[40ch] text-text-muted">
          Two active vehicles, both designed for fast award cycles. Talk to a
          contracting officer? We&rsquo;ll send the SOW template that day.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2">
        {vehicles.map((v) => (
          <div key={v.code} className="bg-bg p-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {v.code}
            </div>
            <h3 className="mt-4 text-2xl tracking-[-0.01em] text-text md:text-3xl">
              {v.title}
            </h3>
            <p className="mt-5 max-w-[48ch] text-text-muted">{v.detail}</p>

            <dl className="mt-8 grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3">
              {v.fields.map(([k, val]) => (
                <div key={k} className="bg-bg-raised p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">
                    {k}
                  </dt>
                  <dd className="mt-2 text-sm text-text">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Button href="/vehicles" variant="ghost">
          Vehicle details &amp; capability statement
        </Button>
      </div>
    </Section>
  );
}

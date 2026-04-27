import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Services — Invoke",
  description:
    "Five disciplines, one delivery model: AI code modernization, agentic automation, RPA at scale, low-code platforms, and workforce enablement.",
};

const services = [
  {
    id: "modernization",
    n: "01",
    title: "AI-driven code modernization",
    body: "Legacy systems rebuilt with agentic refactoring pipelines. Static analysis, semantic equivalence checks, and a clean handoff to the team that owns it next.",
  },
  {
    id: "agentic",
    n: "02",
    title: "Agentic automation",
    body: "LLM-driven agents scoped to policy and procedure, deployed inside cleared environments. We design the guardrails before we design the autonomy.",
  },
  {
    id: "rpa",
    n: "03",
    title: "RPA at federal scale",
    body: "UiPath Gold delivery across 100+ installations. Platform engineering, governance, and an operating model designed to outlive the contract.",
  },
  {
    id: "low-code",
    n: "04",
    title: "Low-code platforms",
    body: "Power Platform, Appian, and Ideagen Case Management — built with the same engineering rigor as bespoke code.",
  },
  {
    id: "enablement",
    n: "05",
    title: "Workforce enablement",
    body: "Citizen-developer bootcamps that produced 5,000+ Airmen and Guardians shipping their own automations across the Air Force.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        number="01"
        kicker="Services · five disciplines"
        total="01 / 04"
        title={<>Five disciplines.<br /><span className="text-text-muted">One delivery model.</span></>}
        subtitle="We compose across all five. Most engagements start with one and earn the right to expand into the rest."
      />

      <Section bordered={false}>
        <div className="grid grid-cols-1 gap-px bg-[var(--border)]">
          {services.map((s) => (
            <div key={s.id} id={s.id} className="bg-bg p-10 md:p-14">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    {s.n}
                  </div>
                  <h2 className="mt-6 text-2xl tracking-[-0.01em] text-text md:text-3xl md:leading-tight">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  <p className="max-w-[60ch] text-text-muted">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

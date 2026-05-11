import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const metrics = [
  {
    label: "Legacy code modernized",
    value: "10M+",
    unit: "lines",
    detail: "Air Force Sustainment — legacy stacks transformed end-to-end.",
  },
  {
    label: "Citizen developers trained",
    value: "5,000",
    unit: "Airmen & Guardians",
    detail: "Standing workforce of AF-trained automation builders.",
  },
  {
    label: "User-led automations",
    value: "1,000+",
    unit: "in production",
    detail: "Across 100+ installations. Built by the mission, not for it.",
  },
  {
    label: "Case-cycle reduction",
    value: "90%",
    unit: "median",
    detail: "Federal case processing — from weeks to hours.",
  },
];

export function Proof() {
  return (
    <Section id="proof">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow label="Impact" />
          <h2 className="mt-8 max-w-[18ch] text-3xl tracking-[-0.02em] text-text md:text-4xl">
            Numbers that already shipped.
          </h2>
          <p className="mt-5 max-w-[40ch] text-text-muted">
            Not pilots. Not lab demos. Production outcomes inside the
            agencies that procured them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2">
          {metrics.map((m) => (
            <div key={m.label} className="bg-bg p-7">
              <div className="text-xs font-semibold uppercase tracking-wide text-text-dim">
                {m.label}
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl tracking-[-0.03em] text-text md:text-6xl">
                  {m.value}
                </span>
                <span className="text-sm font-medium text-accent">
                  {m.unit}
                </span>
              </div>
              <p className="mt-5 max-w-[34ch] text-sm text-text-muted">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

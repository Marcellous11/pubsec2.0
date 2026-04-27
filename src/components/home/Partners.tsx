import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const partners = [
  { name: "UiPath", role: "Gold Partner · Federal" },
  { name: "Appian", role: "Implementation partner" },
  { name: "Microsoft", role: "Power Platform delivery" },
  { name: "Ideagen", role: "Case Management partner" },
];

export function Partners() {
  return (
    <Section id="partners" accentRule>
      <Eyebrow number="06" label="Stack · technology partners" total="07 / 09" />

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_3fr]">
        <h2 className="max-w-[18ch] text-3xl tracking-[-0.02em] text-text md:text-4xl md:leading-[1.08]">
          The platforms federal teams already trust.
        </h2>
        <p className="max-w-[58ch] self-end text-text-muted">
          We deliver on the platforms agencies have already cleared. No
          adoption tax, no procurement fight, no ten-month authority-to-operate
          dance for a brand-new tool.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-px bg-[var(--border)] md:grid-cols-4">
        {partners.map((p) => (
          <div key={p.name} className="bg-bg p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
              Partner
            </div>
            <div className="mt-6 text-2xl tracking-[-0.01em] text-text">
              {p.name}
            </div>
            <div className="mt-3 text-sm text-text-muted">{p.role}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

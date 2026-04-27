import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Capabilities — Invoke",
  description:
    "What Invoke actually delivers inside the boundary: cleared engineers, FedRAMP architectures, and an operating model designed to outlive the contract.",
};

const blocks = [
  {
    h: "Inside the boundary",
    body: "Every system we ship is designed to live where the data lives. FedRAMP Moderate and High, IL4, IL5 — architecture starts at the boundary.",
  },
  {
    h: "Cleared engineers",
    body: "Staff with active clearances, mission familiarity, and the patience for federal procurement timelines. We don't sub the hard parts out.",
  },
  {
    h: "Platform thinking",
    body: "We don't ship one-off automations — we ship platforms. Versioning, observability, governance, and a runbook the agency can actually run.",
  },
  {
    h: "Workforce as deliverable",
    body: "Every engagement leaves trained citizen developers behind. The capability stays after the contract ends.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        number="02"
        kicker="Capabilities"
        total="02 / 04"
        title={<>What we deliver.<br /><span className="text-text-muted">Inside the boundary.</span></>}
        subtitle="The federal market is full of vendors whose capability deck is longer than their delivery record. Here is what we actually do."
      />
      <Section bordered={false}>
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.h} className="bg-bg p-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Capability</div>
              <h3 className="mt-6 text-2xl tracking-[-0.01em] text-text">{b.h}</h3>
              <p className="mt-4 max-w-[52ch] text-text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

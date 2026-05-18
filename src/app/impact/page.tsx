import { PageHeader } from "@/components/ui/PageHeader";
import { Proof } from "@/components/home/Proof";
import { CaseStudy } from "@/components/home/CaseStudy";

export const metadata = {
  title: "Impact — Invoke",
  description:
    "10M+ lines of legacy code modernized, 5,000 citizen developers trained, 1,000+ user-led automations in production, 90% case-cycle reduction.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        kicker="Impact"
        title={<>Numbers that <span className="text-text-muted">already shipped.</span></>}
        subtitle="Not a pilot. Not a slideware projection. Production systems running inside federal boundaries today."
      />
      <Proof />
      <CaseStudy />
    </>
  );
}

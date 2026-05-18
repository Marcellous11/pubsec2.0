import { PageHeader } from "@/components/ui/PageHeader";
import { Differentiators } from "@/components/home/Differentiators";

export const metadata = {
  title: "Why Invoke — Invoke",
  description:
    "We modernize the code, not just the workflow. We train the workforce as we deliver. And everything ships inside the FedRAMP / IL4 / IL5 boundary.",
};

export default function WhyPage() {
  return (
    <>
      <PageHeader
        kicker="Why Invoke"
        title={<>Built differently, <span className="text-text-muted">on purpose.</span></>}
        subtitle="Most automation vendors paper over legacy systems and leave when the contract ends. We do the opposite."
      />
      <Differentiators />
    </>
  );
}

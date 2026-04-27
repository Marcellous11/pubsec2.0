import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Vehicles } from "@/components/home/Vehicles";

export const metadata = {
  title: "Contract vehicles — Invoke",
  description:
    "SBIR Phase III IDIQ (FA877124D0003) and GSA EPIC Pool 2. Pre-competed, easy to buy, in scope across DoD and civilian agencies.",
};

export default function VehiclesPage() {
  return (
    <>
      <PageHeader
        number="03"
        kicker="Contract vehicles"
        total="03 / 04"
        title={<>Pre-competed. <span className="text-text-muted">Easy to buy.</span></>}
        subtitle="Two active vehicles. Direct-award eligible. We can move from intro call to executed task order in weeks, not quarters."
      />
      <Vehicles />
    </>
  );
}

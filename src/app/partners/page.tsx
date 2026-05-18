import { PageHeader } from "@/components/ui/PageHeader";
import { Partners } from "@/components/home/Partners";

export const metadata = {
  title: "Technology Partners — Invoke",
  description:
    "We deliver on the platforms federal teams already trust — UiPath, Appian, Microsoft Power Platform, and Ideagen.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        kicker="Technology Partners"
        title={<>The platforms federal teams <span className="text-text-muted">already trust.</span></>}
        subtitle="We meet agencies on the tools already inside their boundary — no rip-and-replace, no new authorization fight."
      />
      <Partners />
    </>
  );
}

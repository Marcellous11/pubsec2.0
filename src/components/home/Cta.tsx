import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <Section id="cta" innerClassName="py-32 md:py-40">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Eyebrow number="07" label="Engage" total="08 / 09" />
          <h2 className="mt-10 text-4xl leading-[1.04] tracking-[-0.025em] text-text md:text-7xl md:leading-[0.98]">
            Tell us what the mission can&rsquo;t do yet.{" "}
            <span className="text-accent">We&rsquo;ll tell you how.</span>
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-text-muted">
            Brief us on the agency, the problem, and the boundary. We&rsquo;ll come back
            inside two business days with a delivery shape — not a sales deck.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact#brief">Brief us</Button>
            <Button href="mailto:hello@invokepublic.com" variant="ghost" external arrow={false}>
              hello@invokepublic.com
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

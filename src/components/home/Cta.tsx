import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Cta() {
  return (
    <Section id="cta" innerClassName="py-32 md:py-40">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Eyebrow label="Get in Touch" />
          <h2 className="mt-10 text-4xl leading-[1.04] tracking-[-0.025em] text-text md:text-7xl md:leading-[0.98]">
            Ready to talk?
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-text-muted">
            We&rsquo;ll come back with a delivery shape — not a sales deck.
          </p>
          <div className="mt-6 space-y-2">
            <Link
              href="/contact"
              className="block text-sm font-medium text-text transition-colors hover:text-accent"
            >
              Contact us
            </Link>
            <a
              href="mailto:hello@invokepublic.com"
              className="block text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              hello@invokepublic.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "About — Invoke",
  description:
    "Invoke is a federal automation and AI services firm. We modernize legacy code, automate the mission, and train the workforce that runs them.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        number="04"
        kicker="About · the firm"
        total="04 / 04"
        title={<>Built for the next ten years <span className="text-text-muted">of the mission.</span></>}
        subtitle="Invoke is a small business federal automation and AI services firm. We modernize legacy systems, deploy agentic and RPA platforms inside cleared boundaries, and train the workforce that operates them."
      />

      <Section bordered={false}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Mandate</div>
            <h2 className="mt-6 text-3xl leading-tight tracking-[-0.02em] text-text md:text-4xl">
              We are not the vendor that ships pilots.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="max-w-[60ch] text-text-muted">
              The federal market has plenty of automation vendors. What it
              doesn&rsquo;t have enough of are firms willing to do the unglamorous
              work — modernize the codebase, document the runbook, certify the
              workforce, and stay around long enough to see the platform
              outlive the contract.
            </p>
            <p className="mt-6 max-w-[60ch] text-text-muted">
              That&rsquo;s the work we&rsquo;re built for.
            </p>
          </div>
        </div>

        <div id="leadership" className="mt-24 border-t border-[var(--border)] pt-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Leadership</div>
          <p className="mt-6 max-w-[60ch] text-text-muted">
            Leadership profiles coming soon. Until then,{" "}
            <a className="text-accent underline-offset-4 hover:underline" href="mailto:hello@invokepublic.com">
              hello@invokepublic.com
            </a>{" "}
            reaches the people in charge.
          </p>
        </div>
      </Section>
    </>
  );
}

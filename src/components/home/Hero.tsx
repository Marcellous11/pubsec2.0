import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <Container className="relative z-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <Eyebrow label="Federal Automation" />

        <h1 className="mt-10 max-w-[18ch] text-[44px] leading-[1.02] tracking-[-0.025em] text-text md:text-[88px] md:leading-[0.96]">
          Modernize the legacy.{" "}
          <span className="text-text-muted">Automate the mission.</span>
        </h1>

        <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-text-muted md:text-lg">
          Invoke pairs AI-driven code modernization with agentic automation and
          citizen-developer enablement — so federal teams ship{" "}
          <span className="text-text">outcomes, not pilots</span>.
          Built for IL4/IL5, FedRAMP, and the agencies that can&rsquo;t afford to be wrong.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/contact#brief">Brief us on your mission</Button>
          <Button href="/services" variant="ghost">
            See what we deliver
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-[var(--border)] pt-8 md:grid-cols-3">
          {[
            {
              k: "Contract",
              v: "SBIR Phase III IDIQ",
              s: "FA877124D0003 · 2024–2029",
            },
            {
              k: "Vehicle",
              v: "GSA EPIC Pool 2",
              s: "UiPath Services · SB set-aside",
            },
            {
              k: "Authorization",
              v: "FedRAMP · IL4 / IL5",
              s: "Cleared deployments",
            },
          ].map((row) => (
            <div key={row.v}>
              <div className="text-xs font-semibold uppercase tracking-wide text-text-dim">
                {row.k}
              </div>
              <div className="mt-2 text-sm text-text">{row.v}</div>
              <div className="mt-1 text-xs text-text-dim">{row.s}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

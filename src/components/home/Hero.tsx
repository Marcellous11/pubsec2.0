import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative z-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <h1 className="max-w-[18ch] text-[44px] leading-[1.02] tracking-[-0.025em] text-text md:text-[88px] md:leading-[0.96]">
          Modernize the legacy.{" "}
          <span className="text-text-muted">Automate the mission.</span>
        </h1>

        <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-text-muted md:text-lg">
          AI-driven code modernization, agentic automation, and workforce
          enablement for the federal government. Built for IL4/IL5, FedRAMP,
          and the agencies that can&rsquo;t afford to be wrong.
        </p>
      </Container>
    </section>
  );
}

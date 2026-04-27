import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

export function PageHeader({
  number,
  kicker,
  total,
  title,
  subtitle,
}: {
  number: string;
  kicker: string;
  total: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="pointer-events-none absolute inset-0 hair-grid opacity-40" aria-hidden />
      <Container className="relative pt-24 pb-20 md:pt-32 md:pb-24">
        <Eyebrow number={number} label={kicker} total={total} />
        <h1 className="mt-10 max-w-[22ch] text-4xl leading-[1.04] tracking-[-0.025em] text-text md:text-7xl md:leading-[0.98]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-[60ch] text-base leading-relaxed text-text-muted md:text-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

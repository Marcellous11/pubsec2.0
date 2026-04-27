import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { RuleInView } from "./RuleInView";

export function Section({
  id,
  className,
  innerClassName,
  bordered = true,
  accentRule = false,
  children,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  bordered?: boolean;
  accentRule?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        bordered && !accentRule && "border-t border-[var(--border)]",
        className,
      )}
    >
      {accentRule && <RuleInView />}
      <Container className={cn("py-24 md:py-32", innerClassName)}>{children}</Container>
    </section>
  );
}

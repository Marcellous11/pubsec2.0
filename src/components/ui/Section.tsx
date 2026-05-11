import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  id,
  className,
  innerClassName,
  bordered = true,
  children,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  bordered?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        bordered && "border-t border-[var(--border)]",
        className,
      )}
    >
      <Container className={cn("py-24 md:py-32", innerClassName)}>{children}</Container>
    </section>
  );
}

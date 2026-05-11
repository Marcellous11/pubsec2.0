import { cn } from "@/lib/cn";

export function Eyebrow({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-xs font-semibold uppercase tracking-wide text-accent",
        className,
      )}
    >
      {label}
    </div>
  );
}

import { cn } from "@/lib/cn";

export function Eyebrow({
  number,
  label,
  total,
  className,
}: {
  number?: string;
  label: string;
  total?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim",
        className,
      )}
    >
      {number && (
        <>
          <span className="text-accent">{number}</span>
          <span aria-hidden className="text-border-strong">·</span>
        </>
      )}
      <span className="text-text-muted">{label}</span>
      {total && (
        <>
          <span aria-hidden className="text-border-strong">·</span>
          <span className="text-text-dim">{total}</span>
        </>
      )}
    </div>
  );
}

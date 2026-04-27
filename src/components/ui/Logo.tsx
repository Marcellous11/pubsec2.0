import Link from "next/link";

export function Logo({ withName = true }: { withName?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Invoke home">
      <span
        className="grid h-7 w-7 place-items-center border border-[var(--border-strong)] bg-bg-raised font-mono text-[11px] tracking-tight text-text transition-colors group-hover:border-accent group-hover:text-accent"
        aria-hidden
      >
        IV
      </span>
      {withName && (
        <span className="font-mono text-[13px] tracking-[0.18em] uppercase text-text">
          Invoke<span className="text-text-dim"> · Public</span>
        </span>
      )}
    </Link>
  );
}

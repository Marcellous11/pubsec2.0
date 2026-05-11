import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-2 text-sm font-medium rounded-full px-6 h-11 transition-colors duration-200 group";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-[#f3b85b]",
  ghost:
    "border border-[var(--border-strong)] text-text hover:bg-bg-hover hover:border-[var(--text-dim)]",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  arrow = false,
  external,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  arrow?: boolean;
  external?: boolean;
}) {
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
        target="_blank"
        rel="noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {inner}
    </Link>
  );
}

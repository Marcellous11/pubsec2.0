import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-1.5" aria-label="Invoke home">
      <span className="text-lg font-semibold tracking-tight text-text">
        Invoke
      </span>
      <span className="text-lg font-normal tracking-tight text-text-muted">
        Public Sector
      </span>
    </Link>
  );
}

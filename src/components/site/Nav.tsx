import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const leftLinks = [
  { href: "/services", label: "Services" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/vehicles", label: "Contract Vehicles" },
  { href: "/about", label: "About" },
];

const rightLinks = [
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-bg backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {leftLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Secondary">
          {rightLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

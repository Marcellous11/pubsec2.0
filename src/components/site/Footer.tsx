import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const cols: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { href: "/services#modernization", label: "Code modernization" },
      { href: "/services#agentic", label: "Agentic automation" },
      { href: "/services#rpa", label: "RPA at scale" },
      { href: "/services#low-code", label: "Low-code platforms" },
      { href: "/services#enablement", label: "Workforce enablement" },
    ],
  },
  {
    heading: "Vehicles",
    links: [
      { href: "/vehicles#sbir", label: "SBIR Phase III IDIQ" },
      { href: "/vehicles#epic", label: "GSA EPIC Pool 2" },
      { href: "/vehicles#partners", label: "Partners" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/about#leadership", label: "Leadership" },
      { href: "/contact", label: "Contact" },
      { href: "https://www.linkedin.com/company/invoke-inc", label: "LinkedIn" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-bg">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm text-text-muted">
              Intelligent automation, AI, and code modernization for the federal
              government and the critical infrastructure that runs underneath it.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
              FedRAMP · IL4 / IL5 deployments
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.heading}>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
                {c.heading}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-muted transition-colors hover:text-text"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-6 md:flex-row md:items-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            © {new Date().getFullYear()} Invoke, Inc. · All rights reserved
          </div>
          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            <Link href="/legal/privacy" className="hover:text-text">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-text">Terms</Link>
            <Link href="/legal/accessibility" className="hover:text-text">Accessibility</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

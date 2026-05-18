import Link from "next/link";
import { ArrowUpRight, Cpu, Bot, Workflow, Boxes, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    icon: Cpu,
    title: "AI-driven code modernization",
    body: "Legacy COBOL, Fortran, and 90s-era enterprise stacks rebuilt with agentic refactoring pipelines. Functional parity, faster, with a clean handoff to the team that owns it next.",
    href: "/services#modernization",
  },
  {
    icon: Bot,
    title: "Agentic automation",
    body: "LLM-driven agents that reason over policy, route work, and act inside cleared environments. We design the guardrails before we design the autonomy.",
    href: "/services#agentic",
  },
  {
    icon: Workflow,
    title: "RPA at federal scale",
    body: "UiPath Gold delivery across 100+ installations. We don't ship pilots — we ship platforms with the operating model attached.",
    href: "/services#rpa",
  },
  {
    icon: Boxes,
    title: "Low-code platforms",
    body: "Power Platform, Appian, and Ideagen builds — opinionated where it matters, flexible where it should be. Engineered to outlive the contract.",
    href: "/services#low-code",
  },
  {
    icon: GraduationCap,
    title: "Workforce enablement",
    body: "Citizen-developer bootcamps that have already produced 5,000+ Airmen and Guardians shipping their own automations. The mission learns to build.",
    href: "/services#enablement",
  },
];

export function Services({ tone }: { tone?: "base" | "raised" } = {}) {
  return (
    <Section id="services" tone={tone}>
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Eyebrow label="Capabilities" />
          <h2 className="mt-8 max-w-[22ch] text-3xl tracking-[-0.02em] text-text md:text-5xl md:leading-[1.05]">
            Five disciplines.{" "}
            <span className="text-text-muted">One delivery model.</span>
          </h2>
        </div>
        <p className="max-w-[40ch] text-text-muted">
          We compose across all five. Most engagements start with one and earn
          the right to expand into the rest.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="bg-bg">
              <Link
                href={s.href}
                className="group relative flex h-full flex-col p-8 transition-colors hover:bg-bg-raised"
              >
                <Icon className="size-5 text-text-dim transition-colors group-hover:text-accent" strokeWidth={1.5} />
                <h3 className="mt-8 text-xl tracking-[-0.01em] text-text">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{s.body}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-text-dim transition-colors group-hover:text-accent">
                  Learn more
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </div>
          );
        })}
        <div className="hidden bg-bg lg:block" />
      </div>
    </Section>
  );
}

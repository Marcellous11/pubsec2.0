"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CaseStudy() {
  return (
    <Section id="case">
      <Eyebrow number="05" label="Outcome · Air Force" total="06 / 09" />

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-3xl leading-[1.08] tracking-[-0.02em] text-text md:text-5xl">
            From a 5,000-Airmen training program to{" "}
            <span className="text-accent">1,000+ automations in production.</span>
          </h2>
          <p className="mt-6 max-w-[44ch] text-text-muted">
            We didn&rsquo;t deploy a tool — we built a workforce. The Air Force
            now has a standing population of certified citizen developers
            shipping their own automations across more than a hundred
            installations, with Invoke as the platform team behind them.
          </p>
        </div>

        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-px bg-[var(--border)]"
          >
            <Block label="Before" tone="dim">
              <Line k="Process" v="Manual case routing" />
              <Line k="Cycle time" v="Weeks" />
              <Line k="Throughput" v="Constrained by analyst hours" />
              <Line k="Workforce" v="Tooling consumers" />
            </Block>
            <Block label="After" tone="accent">
              <Line k="Process" v="Agent-assisted intake & triage" />
              <Line k="Cycle time" v="Hours · 90% reduction" />
              <Line k="Throughput" v="Bursts within FedRAMP boundary" />
              <Line k="Workforce" v="5,000+ certified builders" />
            </Block>
          </motion.div>

          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
            Air Force Personnel · Air Force Sustainment Command · Federal case-management programs
          </div>
        </div>
      </div>
    </Section>
  );
}

function Block({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "dim" | "accent";
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bg p-8">
      <div
        className={
          "font-mono text-[10px] uppercase tracking-[0.2em] " +
          (tone === "accent" ? "text-accent" : "text-text-dim")
        }
      >
        {label}
      </div>
      <dl className="mt-6 space-y-5">{children}</dl>
    </div>
  );
}

function Line({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 border-t border-[var(--border)] pt-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">{k}</dt>
      <dd className="text-sm text-text">{v}</dd>
    </div>
  );
}

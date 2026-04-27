"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroAurora } from "./HeroAurora";

export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <HeroAurora />

      <Container className="relative z-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <Eyebrow number="00" label="Federal Automation · 2026" total="01 / 09" />

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-10 max-w-[18ch] text-[44px] leading-[1.02] tracking-[-0.025em] text-text md:text-[88px] md:leading-[0.96]"
        >
          Modernize the legacy.{" "}
          <span className="text-text-muted">Automate the mission.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-8 max-w-[58ch] text-base leading-relaxed text-text-muted md:text-lg"
        >
          Invoke pairs AI-driven code modernization with agentic automation and
          citizen-developer enablement — so federal teams ship{" "}
          <span className="text-text">outcomes, not pilots</span>.
          Built for IL4/IL5, FedRAMP, and the agencies that can&rsquo;t afford to be wrong.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button href="/contact#brief">Brief us on your mission</Button>
          <Button href="/services" variant="ghost">
            See what we deliver
          </Button>
        </motion.div>

        {/* Inline contract-vehicle strip — the thing fed contracting officers
            actually want to see above the fold. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-[var(--border)] pt-8 md:grid-cols-3"
        >
          {[
            {
              k: "Contract",
              v: "SBIR Phase III IDIQ",
              s: "FA877124D0003 · 2024–2029",
            },
            {
              k: "Vehicle",
              v: "GSA EPIC Pool 2",
              s: "UiPath Services · SB set-aside",
            },
            {
              k: "Authorization",
              v: "FedRAMP · IL4 / IL5",
              s: "Cleared deployments",
            },
          ].map((row) => (
            <div key={row.v}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                {row.k}
              </div>
              <div className="mt-2 text-sm text-text">{row.v}</div>
              <div className="mt-1 font-mono text-[11px] text-text-dim">{row.s}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

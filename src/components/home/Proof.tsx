"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const metrics = [
  {
    label: "Legacy code modernized",
    value: "10M+",
    unit: "lines",
    detail: "Air Force Sustainment — legacy stacks transformed end-to-end.",
  },
  {
    label: "Citizen developers trained",
    value: "5,000",
    unit: "Airmen & Guardians",
    detail: "Standing workforce of AF-trained automation builders.",
  },
  {
    label: "User-led automations",
    value: "1,000+",
    unit: "in production",
    detail: "Across 100+ installations. Built by the mission, not for it.",
  },
  {
    label: "Case-cycle reduction",
    value: "90%",
    unit: "median",
    detail: "Federal case processing — from weeks to hours.",
  },
];

export function Proof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <Section id="proof" accentRule>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow number="01" label="Impact · in production" total="02 / 09" />
          <h2 className="mt-8 max-w-[18ch] text-3xl tracking-[-0.02em] text-text md:text-4xl">
            Numbers that already shipped.
          </h2>
          <p className="mt-5 max-w-[40ch] text-text-muted">
            Not pilots. Not lab demos. Production outcomes inside the
            agencies that procured them.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-bg p-7"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">
                {m.label}
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl tracking-[-0.03em] text-text md:text-6xl">
                  {m.value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {m.unit}
                </span>
              </div>
              <p className="mt-5 max-w-[34ch] text-sm text-text-muted">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

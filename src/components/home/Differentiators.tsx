"use client";

import { motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const points = [
  {
    n: "A",
    title: "We modernize the code, not just the workflow.",
    body: "Most automation shops paper over the legacy. We rebuild it, agentically, and leave a stack the agency can keep maintaining after we leave.",
  },
  {
    n: "B",
    title: "We train the workforce as we go.",
    body: "Every engagement leaves behind certified citizen developers. The capability stays after the contract ends — that is the mission, not a side-effect.",
  },
  {
    n: "C",
    title: "We deliver inside the boundary.",
    body: "FedRAMP, IL4, IL5 — built to deploy where the data lives, not adjacent to it. The architecture starts at the boundary and works outward.",
  },
];

export function Differentiators() {
  return (
    <Section id="why" accentRule>
      <Eyebrow number="03" label="Why Invoke" total="04 / 09" />

      <h2 className="mt-8 max-w-[22ch] text-3xl tracking-[-0.02em] text-text md:text-5xl md:leading-[1.05]">
        Built differently,{" "}
        <span className="text-text-muted">on purpose.</span>
      </h2>
      <p className="mt-6 max-w-[58ch] text-text-muted">
        The federal market is full of automation vendors who ship pilots,
        collect testimonials, and disappear. We're built for the next ten years
        of the mission, not the next quarter of the pipeline.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3">
        {points.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-bg p-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center border border-[var(--border-strong)] font-mono text-[11px] text-accent">
                {p.n}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
                Principle
              </span>
            </div>
            <h3 className="mt-8 text-xl leading-snug tracking-[-0.01em] text-text">
              {p.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

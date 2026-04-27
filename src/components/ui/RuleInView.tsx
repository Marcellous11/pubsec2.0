"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * 1px horizontal accent line that draws left→right when scrolled into view.
 * Used as an opt-in alternative to the default `border-t` on Section.
 */
export function RuleInView({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-0 h-px overflow-hidden bg-[var(--border)]",
        className,
      )}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 origin-left bg-accent"
        initial={{ scaleX: 0, opacity: 0.9 }}
        whileInView={{ scaleX: 1, opacity: [0.9, 0.9, 0.35] }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.9,
          ease: [0.2, 0.7, 0.2, 1],
          opacity: { duration: 1.6, times: [0, 0.6, 1] },
        }}
      />
    </div>
  );
}

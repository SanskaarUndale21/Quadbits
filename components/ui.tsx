"use client";
import { motion } from "motion/react";
import type { Claim } from "@/data/types";

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M8 8 L24 8 L24 24 L8 24 Z M8 8 L24 24 M24 8 L8 24" stroke="#4F7CFF" strokeWidth="1.2" opacity=".55" />
      {[[8, 8], [24, 8], [8, 24], [24, 24]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={i === 3 ? "#56E0E8" : "#F5F7FA"} />
      ))}
    </svg>
  );
}

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, className = "", children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`relative border-t border-line py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Heading({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl sm:mb-16">
      <h2 className="text-balance text-3xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">{children}</h2>
      {sub && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
    </Reveal>
  );
}

/** Renders a claim, flagging unverified ones so nothing reads as confirmed by accident. */
export function ClaimText({ claim }: { claim: Claim }) {
  return (
    <span>
      {claim.text}
      {claim.confirm && (
        <span className="ml-2 rounded-sm border border-line px-1.5 py-0.5 align-middle text-[11px] text-muted" title="Awaiting confirmation from the team">
          to confirm
        </span>
      )}
    </span>
  );
}

type IconProps = { size?: number; className?: string };

export function Github({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function Linkedin({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21h-4V9.75Z" />
    </svg>
  );
}

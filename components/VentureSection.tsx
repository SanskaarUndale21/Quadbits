"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ventures } from "@/data/ventures";
import { firstName } from "@/data/team";
import { formatLakh, totalFundingLakh } from "@/data/site";
import { ClaimText, Heading, Reveal, Section } from "./ui";

const tones = ["#4F7CFF", "#56E0E8", "#9299A7"];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      setV(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">₹{v.toFixed(1)} lakh</span>
      <span className="sr-only">{formatLakh(to)}</span>
    </span>
  );
}

export default function VentureSection() {
  return (
    <Section id="ventures">
      <Heading>Three ventures. {formatLakh(totalFundingLakh)} in reported funding.</Heading>

      <Reveal className="mb-14">
        <p className="font-display text-5xl font-bold sm:text-7xl">
          <Counter to={totalFundingLakh} />
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Combined funding reported across three separate ventures founded or co-founded by team members. It is not
          revenue, a valuation, or funding awarded to Squadbits as a company.
        </p>
        <div className="mt-6 flex h-3 w-full gap-1" role="img" aria-label={ventures.map((v) => `${v.name} ${formatLakh(v.fundingLakh)}`).join(", ")}>
          {ventures.map((v, i) => (
            <motion.div
              key={v.id}
              style={{ background: tones[i], flexBasis: `${(v.fundingLakh / totalFundingLakh) * 100}%`, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: "easeOut" }}
            />
          ))}
        </div>
      </Reveal>

      <ul className="divide-y divide-line border-y border-line">
        {ventures.map((v, i) => (
          <li key={v.id} className="grid gap-6 py-10 md:grid-cols-[1fr_2fr_auto] md:items-start md:gap-10">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="size-3" style={{ background: tones[i] }} aria-hidden="true" />
                <h3 className="text-2xl font-bold sm:text-3xl">{v.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted">Founded by {v.founders.map(firstName).join(" and ")}</p>
            </Reveal>
            <Reveal delay={0.08} className="space-y-3 text-sm leading-relaxed text-muted">
              <p><ClaimText claim={v.description} /></p>
              <p><span className="text-ink">Funding source:</span> <ClaimText claim={v.source} /></p>
              {v.url ? (
                <a href={v.url} className="inline-block min-h-11 py-2 font-semibold text-cyan hover:underline">Explore venture</a>
              ) : (
                <p className="text-xs">Venture page link to be added.</p>
              )}
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-display text-3xl font-bold md:text-right">{formatLakh(v.fundingLakh)}</p>
              <p className="text-xs text-muted md:text-right">reported</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { stats } from "@/data/site";
import { team } from "@/data/team";

/** Four founders as a connected constellation. Drawn once on load, no looping motion. */
const nodes = [
  { id: "sanskaar", x: 120, y: 90 },
  { id: "aanchal", x: 330, y: 60 },
  { id: "prithvi", x: 90, y: 270 },
  { id: "pritam", x: 300, y: 300 },
];
const edges: [string, string][] = [
  ["sanskaar", "aanchal"],
  ["aanchal", "pritam"],
  ["pritam", "prithvi"],
  ["prithvi", "sanskaar"],
  ["sanskaar", "pritam"],
  ["aanchal", "prithvi"],
];
const pos = (id: string) => nodes.find((n) => n.id === id)!;

function Constellation() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <svg
      viewBox="0 0 420 360"
      className="w-full max-w-md"
      role="img"
      aria-label="Diagram of the four Quadbits co-founders connected as a team"
    >
      {edges.map(([a, b], i) => {
        const hot = active === a || active === b;
        return (
          <motion.line
            key={i}
            x1={pos(a).x}
            y1={pos(a).y}
            x2={pos(b).x}
            y2={pos(b).y}
            stroke={hot ? "#56E0E8" : "#4F7CFF"}
            strokeOpacity={hot ? 1 : 0.4}
            strokeWidth={hot ? 1.6 : 1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, delay: 0.6 + i * 0.1, ease: "easeInOut" }}
          />
        );
      })}
      {nodes.map((n, i) => {
        const m = team.find((t) => t.id === n.id)!;
        const on = active === n.id;
        return (
          <motion.g
            key={n.id}
            tabIndex={0}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(n.id)}
            onBlur={() => setActive(null)}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
          >
            <circle cx={n.x} cy={n.y} r={on ? 16 : 11} fill="none" stroke="#56E0E8" strokeOpacity={on ? 0.7 : 0.25} />
            <circle cx={n.x} cy={n.y} r="5.5" fill={on ? "#56E0E8" : "#F5F7FA"} />
            <text x={n.x + 18} y={n.y + 4} fill="#F5F7FA" fontSize="13">
              {m.name.split(" ")[0]}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-dvh flex-col justify-end overflow-hidden pt-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.h1 {...fade(0.1)} className="text-[clamp(2.6rem,9vw,6.5rem)] font-bold uppercase leading-[0.95]">
            Built to solve.
            <br />
            Proven to execute.
          </motion.h1>
          <motion.p {...fade(0.3)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            We are Quadbits: four co-founders combining engineering, technology, competition experience and
            entrepreneurial thinking to build solutions that matter.
          </motion.p>
          <motion.div {...fade(0.45)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#team"
              className="rounded-sm bg-blue px-6 py-4 text-center font-semibold text-white transition-colors hover:bg-[#6a90ff]"
            >
              Explore our team
            </a>
            <a
              href="#achievements"
              className="rounded-sm border border-line px-6 py-4 text-center font-semibold transition-colors hover:border-cyan hover:text-cyan"
            >
              See our track record
            </a>
          </motion.div>
        </div>
        <motion.div {...fade(0.3)} className="hidden justify-center lg:flex">
          <Constellation />
        </motion.div>
      </div>
      <motion.dl {...fade(0.7)} className="relative border-t border-line bg-bg/70">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 px-5 py-6 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">{s.value}</dd>
              <dt className="mt-1 text-sm leading-snug text-muted">{s.label}</dt>
            </div>
          ))}
        </div>
      </motion.dl>
    </section>
  );
}

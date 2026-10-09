import { formatLakh, totalFundingLakh } from "@/data/site";
import { Heading, Reveal, Section } from "./ui";

const principles = [
  {
    title: "Proven competitive experience",
    body: "Between us we have taken part in many hackathons, with reported wins in software and cybersecurity competitions.",
  },
  {
    title: "Multidisciplinary engineering",
    body: "Software, security, electronics and robotics under one team, each backed by work we can show.",
  },
  {
    title: "Entrepreneurial thinking",
    body: `Three separate ventures tied to our members reported ${formatLakh(totalFundingLakh)} in funding combined. That is experience beyond competing.`,
  },
  {
    title: "Rapid execution",
    body: "Pick the problem, split the work, ship an MVP, test it, and explain the result clearly.",
  },
  {
    title: "Beyond the prototype",
    body: "Product thinking, user needs, presentation and teamwork, aimed at real-world impact.",
  },
];

const process = ["Understand the problem", "Design the solution", "Build the MVP", "Test and validate", "Present the impact"];

export default function HackathonAdvantage() {
  return (
    <Section id="why">
      <Heading sub="What a judge needs to know, backed by the record above.">Why Quadbits?</Heading>
      <ul className="divide-y divide-line border-y border-line">
        {principles.map((p, i) => (
          <li key={p.title} className="grid gap-3 py-7 md:grid-cols-[1fr_2fr] md:gap-10">
            <Reveal><h3 className="text-xl font-bold sm:text-2xl">{p.title}</h3></Reveal>
            <Reveal delay={0.08}><p className="max-w-xl leading-relaxed text-muted">{p.body}</p></Reveal>
          </li>
        ))}
      </ul>

      <h3 className="mb-6 mt-20 text-sm text-muted">How we work on a problem</h3>
      <ol className="grid gap-px border border-line bg-line sm:grid-cols-5">
        {process.map((s, i) => (
          <li key={s} className="bg-bg p-5">
            <span className="font-display text-sm text-cyan">{i + 1}</span>
            <p className="mt-2 font-display text-lg font-semibold leading-tight">{s}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

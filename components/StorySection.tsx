import { Heading, Reveal, Section } from "./ui";

const pillars = [
  { n: "01", title: "Engineer", body: "Turn ideas into functioning software, hardware and prototypes." },
  { n: "02", title: "Compete", body: "Work under constraints, solve hard problems and show results." },
  {
    n: "03",
    title: "Build businesses",
    body: "A solution needs more than code. It needs users, product thinking, execution and a way to last.",
  },
];

export default function StorySection() {
  return (
    <Section id="story">
      <Heading sub="Quadbits brings together engineering students and founders with experience in competitions, funded ventures, technical projects, internships and leadership.">
        We don&apos;t just build projects. We build possibilities.
      </Heading>
      <ol className="grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
        {pillars.map((p, i) => (
          <li
            key={p.n}
            className="border-b border-line py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
          >
            <Reveal delay={i * 0.12}>
              <span className="font-display text-sm text-cyan">{p.n}</span>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{p.title}</h3>
              <p className="mt-4 max-w-xs leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

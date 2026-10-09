import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { Github, Heading, Linkedin, Section } from "./ui";

export default function ContactSection() {
  const links = team.flatMap((m) => [
    m.links.linkedin && { href: m.links.linkedin, label: `${m.name} on LinkedIn`, Icon: Linkedin },
    m.links.github && { href: m.links.github, label: `${m.name} on GitHub`, Icon: Github },
  ]).filter(Boolean) as { href: string; label: string; Icon: typeof Github }[];

  return (
    <Section id="contact">
      <Heading sub="We bring the curiosity to explore difficult problems, the engineering mindset to build solutions, and the entrepreneurial drive to take ideas further.">
        Let&apos;s build something that matters.
      </Heading>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {site.email ? (
          <a href={`mailto:${site.email}`} className="flex items-center justify-center gap-2 rounded-sm bg-blue px-6 py-4 font-semibold text-white hover:bg-[#6a90ff]">
            <Mail size={18} /> {site.email}
          </a>
        ) : (
          <p className="border border-dashed border-line px-6 py-4 text-sm text-muted">
            Team email to be added in data/site.ts.
          </p>
        )}
        {links.map(({ href, label, Icon }) => (
          <a key={href} href={href} aria-label={label} className="grid size-14 place-items-center border border-line hover:border-cyan hover:text-cyan">
            <Icon size={20} />
          </a>
        ))}
      </div>
    </Section>
  );
}

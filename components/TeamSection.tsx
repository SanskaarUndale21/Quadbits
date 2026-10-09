"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Plus, X } from "lucide-react";
import { team } from "@/data/team";
import type { Claim, Member } from "@/data/types";
import { ClaimText, Github, Heading, Linkedin, Reveal, Section } from "./ui";

/** Each portrait gets its own proportions and offset so the row does not read as four identical cards. */
const layouts: Record<string, { cell: string; aspect: string }> = {
  sanskaar: { cell: "lg:col-span-5", aspect: "aspect-[4/5]" },
  aanchal: { cell: "lg:col-span-3 lg:mt-16", aspect: "aspect-[3/4]" },
  pritam: { cell: "lg:col-span-4 lg:mt-6", aspect: "aspect-square" },
  prithvi: { cell: "lg:col-span-4 lg:-mt-10", aspect: "aspect-[4/5]" },
};

function Portrait({ m }: { m: Member }) {
  if (m.photo) {
    return <Image src={m.photo} alt={`Portrait of ${m.name}`} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />;
  }
  const initials = m.name.split(" ").map((p) => p[0]).join("");
  return (
    <div className="absolute inset-0 grid place-items-center bg-surface" aria-hidden="true">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <span className="relative font-display text-7xl font-bold text-line">{initials}</span>
      <span className="absolute bottom-3 left-3 text-xs text-muted">Photo to be added</span>
    </div>
  );
}

function List({ title, items }: { title: string; items: Claim[] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-cyan">{title}</h4>
      <ul className="space-y-2 text-sm leading-relaxed text-muted">
        {items.map((c) => (
          <li key={c.text} className="border-l border-line pl-3">
            <ClaimText claim={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TeamSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = team.find((m) => m.id === openId);

  return (
    <Section id="team">
      <Heading sub="Four founders with different strengths. Open a profile to see what each person brings.">
        Meet the four co-founders
      </Heading>
      <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
        {team.map((m, i) => {
          const expanded = openId === m.id;
          return (
            <li key={m.id} className={layouts[m.id].cell}>
              <Reveal delay={i * 0.08}>
                <button
                  onClick={() => setOpenId(expanded ? null : m.id)}
                  aria-expanded={expanded}
                  aria-controls="profile-panel"
                  className="group block w-full text-left"
                >
                  <div className={`relative w-full overflow-hidden border border-line transition-colors group-hover:border-blue ${layouts[m.id].aspect}`}>
                    <Portrait m={m} />
                    <span className="absolute right-3 top-3 grid size-9 place-items-center bg-bg/80 transition-transform group-hover:rotate-90">
                      <Plus size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">{m.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{m.headline}</p>
                </button>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key={open.id}
            id="profile-panel"
            role="region"
            aria-label={`${open.name} profile`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-14 border border-line bg-surface p-6 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-bold sm:text-4xl">{open.name}</h3>
                <p className="mt-2 max-w-xl text-muted">{open.statement}</p>
              </div>
              <button onClick={() => setOpenId(null)} aria-label="Close profile" className="grid size-11 shrink-0 place-items-center border border-line hover:border-cyan">
                <X size={18} />
              </button>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <List title="Technical strengths" items={open.technical} />
              <List title="Non-technical strengths" items={open.nonTechnical} />
              <List title="Startup involvement" items={open.startups} />
              <List title="Hackathons" items={open.hackathons} />
              <List title="Awards and achievements" items={open.awards} />
              <List title="Projects" items={open.projects} />
            </div>
            <div className="mt-8 flex gap-3 text-sm">
              {open.links.linkedin ? (
                <a href={open.links.linkedin} className="flex items-center gap-2 hover:text-cyan"><Linkedin size={16} /> LinkedIn</a>
              ) : null}
              {open.links.github ? (
                <a href={open.links.github} className="flex items-center gap-2 hover:text-cyan"><Github size={16} /> GitHub</a>
              ) : null}
              {!open.links.linkedin && !open.links.github && <span className="text-muted">Profile links to be added.</span>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

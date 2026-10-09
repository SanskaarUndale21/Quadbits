"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { categories, projects } from "@/data/projects";
import { firstName } from "@/data/team";
import type { ProjectCategory } from "@/data/types";
import { Github, Heading, Reveal, Section } from "./ui";

export default function ProjectGallery() {
  const [cat, setCat] = useState<"All" | ProjectCategory>("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);

  return (
    <Section id="projects">
      <Heading sub="Entries marked awaiting team input are placeholders. No repositories, demos or results are shown until the team supplies them.">
        Ideas are cheap. Execution is the difference.
      </Heading>

      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`min-h-11 border px-4 text-sm transition-colors ${
              cat === c ? "border-blue bg-blue text-white" : "border-line text-muted hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="border border-dashed border-line p-8 text-muted">
          No projects in this category yet. Add one in data/projects.ts.
        </p>
      ) : (
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <li key={p.id} className="group bg-bg transition-colors hover:bg-surface">
              <Reveal delay={Math.min(i, 5) * 0.05} className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{p.category}</span>
                  <span className={p.status === "Awaiting team input" ? "" : "text-cyan"}>{p.status}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold transition-colors group-hover:text-cyan">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.problem}</p>
                <p className="mt-2 text-sm leading-relaxed">{p.solution}</p>
                {p.stack.length > 0 && (
                  <p className="mt-3 text-xs text-muted">{p.stack.join(", ")}</p>
                )}
                {p.outcome && <p className="mt-3 text-sm text-cyan">{p.outcome}</p>}
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted">
                  <span>{p.members.map(firstName).join(", ")}</span>
                  <span className="flex gap-3">
                    {p.github && (
                      <a href={p.github} aria-label={`${p.name} on GitHub`} className="grid size-11 place-items-center hover:text-cyan"><Github size={16} /></a>
                    )}
                    {p.demo && (
                      <a href={p.demo} aria-label={`${p.name} demo`} className="grid size-11 place-items-center hover:text-cyan"><ExternalLink size={16} /></a>
                    )}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

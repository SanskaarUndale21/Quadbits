"use client";
import { useState } from "react";
import Image from "next/image";
import { achievements, kindLabels } from "@/data/achievements";
import { firstName } from "@/data/team";
import type { AchievementKind } from "@/data/types";
import { Heading, Reveal, Section } from "./ui";

const filters: ("all" | AchievementKind)[] = ["all", "win", "participation", "in-progress", "planned"];
const kindColor: Record<AchievementKind, string> = {
  win: "text-cyan border-cyan",
  prize: "text-cyan border-cyan",
  participation: "text-ink border-line",
  "in-progress": "text-blue border-blue",
  planned: "text-muted border-line",
};

export default function AchievementTimeline() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const withImages = achievements.filter((a) => a.image);
  const shown = achievements.filter((a) => filter === "all" || a.kind === filter);

  return (
    <Section id="achievements">
      <Heading sub="Wins, prizes, participation and work in progress are labelled separately. Planned entries are never shown as results.">
        Pressure tested. Results delivered.
      </Heading>

      <div role="group" aria-label="Filter achievements" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`min-h-11 border px-4 text-sm transition-colors ${
              filter === f ? "border-blue bg-blue text-white" : "border-line text-muted hover:text-ink"
            }`}
          >
            {f === "all" ? "All" : kindLabels[f]}
          </button>
        ))}
      </div>

      <ol className="relative border-l border-line pl-6 sm:pl-10">
        {shown.map((a) => (
          <li key={a.id} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[31px] top-2 size-3 border border-bg bg-blue sm:-left-[47px]" aria-hidden="true" />
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`border px-2 py-0.5 text-xs ${kindColor[a.kind]}`}>{kindLabels[a.kind]}</span>
                {a.date && <span className="text-sm text-muted">{a.date}</span>}
              </div>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{a.title}</h3>
              {a.prize && <p className="mt-1 font-display text-xl text-cyan">{a.prize} reported prize</p>}
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{a.detail}</p>
              <p className="mt-2 text-sm text-muted">With {a.members.map(firstName).join(", ")}</p>
              {a.confirm && <p className="mt-2 text-xs text-muted">To confirm: {a.confirm}</p>}
            </Reveal>
          </li>
        ))}
        {shown.length === 0 && (
          <li className="text-muted">Nothing in this category yet. Add entries in data/achievements.ts.</li>
        )}
      </ol>

      {withImages.length > 0 ? (
        <ul className="mt-16 grid gap-4 sm:grid-cols-3">
          {withImages.map((a) => (
            <li key={a.id} className="relative aspect-[4/3] overflow-hidden border border-line">
              <Image src={a.image!} alt={`${a.title} certificate or photo`} fill sizes="(min-width:640px) 33vw, 100vw" className="object-cover" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-16 border border-dashed border-line p-8 text-sm text-muted">
          <p className="font-semibold text-ink">Certificates and photos</p>
          <p className="mt-1 max-w-lg">
            Add an image path to an achievement in data/achievements.ts and it will appear here.
          </p>
        </div>
      )}
    </Section>
  );
}

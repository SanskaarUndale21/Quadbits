"use client";
import { useState } from "react";
import { capabilities } from "@/data/capabilities";
import { team } from "@/data/team";
import { ClaimText, Heading, Section } from "./ui";

export default function CapabilityMap() {
  const [selectedId, setSelectedId] = useState(capabilities[0].id);
  const selected = capabilities.find((c) => c.id === selectedId)!;
  const related = new Set([selected.id, ...selected.pairsWith]);

  return (
    <Section id="capabilities">
      <Heading sub="Select a capability to see who contributes, the evidence behind it, and which capabilities it combines with. Dots appear only where the team has supplied evidence.">
        Four minds. Multiple engineering disciplines.
      </Heading>

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <caption className="sr-only">Which team member contributes to which capability</caption>
            <thead>
              <tr className="border-b border-line text-sm text-muted">
                <th scope="col" className="py-3 pr-4 font-normal">Capability</th>
                {team.map((m) => (
                  <th key={m.id} scope="col" className="px-2 py-3 text-center font-normal">{m.name.split(" ")[0]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {capabilities.map((c) => {
                const isSel = c.id === selectedId;
                const isRel = related.has(c.id);
                return (
                  <tr key={c.id} className={`border-b border-line transition-opacity ${isRel ? "opacity-100" : "opacity-40"}`}>
                    <th scope="row" className="py-1 pr-4 font-normal">
                      <button
                        onClick={() => setSelectedId(c.id)}
                        aria-pressed={isSel}
                        className={`min-h-11 w-full text-left transition-colors ${isSel ? "font-semibold text-cyan" : "hover:text-cyan"}`}
                      >
                        {c.label}
                        {c.group === "business" && <span className="ml-2 text-xs text-muted">business</span>}
                      </button>
                    </th>
                    {team.map((m) => {
                      const has = c.members.includes(m.id);
                      return (
                        <td key={m.id} className="px-2 text-center">
                          <span
                            role="img"
                            aria-label={has ? `${m.name} contributes` : `${m.name} not listed`}
                            className={`inline-block size-3 rounded-full ${has ? (isSel ? "bg-cyan" : "bg-blue") : "border border-line"}`}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <aside aria-live="polite" className="border border-line bg-surface p-6 sm:p-8">
          <h3 className="text-2xl font-bold">{selected.label}</h3>
          <p className="mt-4 text-sm text-muted">Contributors</p>
          <p className="mt-1">{selected.members.map((id) => team.find((m) => m.id === id)!.name).join(", ")}</p>
          <p className="mt-5 text-sm text-muted">Evidence</p>
          <p className="mt-1 text-sm leading-relaxed"><ClaimText claim={selected.evidence} /></p>
          {selected.pairsWith.length > 0 && (
            <>
              <p className="mt-5 text-sm text-muted">Combines with</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {selected.pairsWith.map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => setSelectedId(id)}
                      className="min-h-11 border border-line px-3 text-sm hover:border-cyan hover:text-cyan"
                    >
                      {capabilities.find((c) => c.id === id)!.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </div>
    </Section>
  );
}

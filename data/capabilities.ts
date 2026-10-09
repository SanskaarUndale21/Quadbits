import type { Capability } from "./types";

/**
 * Members are listed only where the supplied information supports it.
 * Extend `members` as each person confirms their experience.
 */
export const capabilities: Capability[] = [
  {
    id: "software",
    label: "Software and web",
    group: "technical",
    members: ["sanskaar", "aanchal", "pritam", "prithvi"],
    evidence: { text: "Freelance software work and hackathon builds." },
    pairsWith: ["security", "prototyping"],
  },
  {
    id: "security",
    label: "Cybersecurity and CTF",
    group: "technical",
    members: ["sanskaar", "aanchal", "prithvi"],
    evidence: { text: "First place, Agamya Cybertech Hackathon." },
    pairsWith: ["software"],
  },
  {
    id: "robotics",
    label: "Robotics and drones",
    group: "technical",
    members: ["sanskaar", "aanchal"],
    evidence: { text: "SkyX drone venture. Eyantra, NIDAR 2026 and ISRO related work, status to be confirmed.", confirm: true },
    pairsWith: ["embedded", "prototyping"],
  },
  {
    id: "embedded",
    label: "Electronics and embedded",
    group: "technical",
    members: ["sanskaar", "pritam"],
    evidence: { text: "Electronics and Communication Engineering student. Project evidence to be supplied.", confirm: true },
    pairsWith: ["robotics", "prototyping"],
  },
  {
    id: "prototyping",
    label: "Rapid prototyping",
    group: "technical",
    members: ["sanskaar", "prithvi"],
    evidence: { text: "Hackathon prototypes. Examples to be added under Projects.", confirm: true },
    pairsWith: ["software", "robotics", "embedded"],
  },
  {
    id: "business",
    label: "Entrepreneurship and pitching",
    group: "business",
    members: ["sanskaar", "aanchal", "pritam", "prithvi"],
    evidence: { text: "Three separate ventures with reported funding." },
    pairsWith: ["execution"],
  },
  {
    id: "execution",
    label: "Coordination and execution",
    group: "business",
    members: ["sanskaar", "aanchal", "pritam", "prithvi"],
    evidence: { text: "IEEE and MDCK leadership roles, to be confirmed.", confirm: true },
    pairsWith: ["business"],
  },
];

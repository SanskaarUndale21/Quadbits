import type { Project, ProjectCategory } from "./types";

export const categories: ProjectCategory[] = [
  "Robotics and drones",
  "Software and AI",
  "Cybersecurity",
  "Embedded systems",
  "Startup products",
  "Hackathon prototypes",
];

/**
 * Add real projects here. Entries with status "Awaiting team input"
 * render as honest placeholders. No repositories or results are invented.
 */
export const projects: Project[] = [
  {
    id: "scyce",
    name: "SkyX",
    category: "Startup products",
    problem: "To be supplied by the team.",
    solution: "A drone technology venture co-founded by Sanskaar and Aanchal.",
    stack: [],
    members: ["sanskaar", "aanchal"],
    status: "Awaiting team input",
  },
  {
    id: "orivolt",
    name: "OriVolt",
    category: "Startup products",
    problem: "To be supplied by the team.",
    solution: "A venture co-founded by Aanchal and Pritam.",
    stack: [],
    members: ["aanchal", "pritam"],
    status: "Awaiting team input",
  },
  {
    id: "code-bharta-build",
    name: "Code Bharta 2025 winning build",
    category: "Hackathon prototypes",
    problem: "To be supplied by the team.",
    solution: "To be supplied by the team.",
    stack: [],
    members: ["sanskaar"],
    status: "Awaiting team input",
  },
  {
    id: "agamya-ctf",
    name: "Agamya Cybertech CTF",
    category: "Cybersecurity",
    problem: "Capture the Flag challenges under time pressure.",
    solution: "First place finish by Sanskaar and Aanchal. Write-up to be added.",
    stack: [],
    members: ["sanskaar", "aanchal"],
    status: "Awaiting team input",
  },
  {
    id: "nidar-2026",
    name: "NIDAR 2026",
    category: "Robotics and drones",
    problem: "To be supplied by the team.",
    solution: "To be supplied by the team.",
    stack: [],
    members: ["sanskaar", "aanchal"],
    status: "Awaiting team input",
  },
];

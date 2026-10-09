import type { Achievement, AchievementKind } from "./types";

export const kindLabels: Record<AchievementKind, string> = {
  win: "Win",
  prize: "Prize money",
  participation: "Participation",
  "in-progress": "In progress",
  planned: "Planned",
};

export const achievements: Achievement[] = [
  {
    id: "code-bharat",
    title: "Code Bharat 2025",
    kind: "win",
    date: "2025",
    prize: "₹50,000",
    detail: "Team win. Described by the team as North Karnataka's biggest hackathon.",
    members: ["sanskaar"],
    confirm: "Confirm the organiser's exact title and winner designation before using superlatives.",
  },
  {
    id: "agamya",
    title: "Agamya Cybertech Hackathon",
    kind: "win",
    prize: "₹50,000",
    detail: "First place in a cybersecurity Capture the Flag competition.",
    members: ["sanskaar", "aanchal"],
  },
  {
    id: "spectra",
    title: "Ashta / Spectra award",
    kind: "win",
    detail: "Reported team achievement.",
    members: ["sanskaar", "aanchal", "pritam", "prithvi"],
    confirm: "Event name, award title and date to be confirmed.",
  },
  {
    id: "yantra",
    title: "Eyantra",
    kind: "participation",
    detail: "Robotics initiative.",
    members: ["sanskaar", "aanchal"],
    confirm: "Participation status to be confirmed.",
  },
  {
    id: "nidar",
    title: "NIDAR 2026",
    kind: "in-progress",
    date: "2026",
    detail: "Robotics and drone initiative.",
    members: ["sanskaar", "aanchal", "pritam", "prithvi"],
    confirm: "Participation status to be confirmed.",
  },
  {
    id: "isro",
    title: "ISRO robotics project",
    kind: "participation",
    detail: "Completed. Reached the top 30 teams, as reported by the team.",
    members: ["sanskaar", "aanchal"],
    confirm: "Exact project name, year and team members to be confirmed.",
  },
  {
    id: "srusthi",
    title: "Srusthi Hackathon",
    kind: "participation",
    detail: "Finished in the top 20 among 270 teams, as reported by the team.",
    members: ["pritam"],
    confirm: "Exact event name spelling, year and team members to be confirmed.",
  },
];

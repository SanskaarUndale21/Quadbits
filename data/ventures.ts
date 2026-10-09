import type { Venture } from "./types";

export const ventures: Venture[] = [
  {
    id: "oribold",
    name: "OriBold",
    founders: ["aanchal", "pritam"],
    fundingLakh: 4.5,
    source: { text: "Karnataka government support, as reported by the team", confirm: true },
    description: { text: "Product description to be supplied by the team.", confirm: true },
  },
  {
    id: "scyce",
    name: "SkyX",
    founders: ["sanskaar", "aanchal"],
    fundingLakh: 4.5,
    source: { text: "Funding scheme or awarding organisation to be supplied", confirm: true },
    description: { text: "A drone technology company. Product details to be supplied.", confirm: true },
  },
  {
    id: "prithvi-startup",
    name: "Venture name to be supplied",
    founders: ["prithvi"],
    fundingLakh: 4,
    source: { text: "Funding scheme to be supplied", confirm: true },
    description: { text: "Product and founding team to be supplied.", confirm: true },
  },
];

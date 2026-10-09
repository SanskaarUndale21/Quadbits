import type { Member } from "./types";

const tbc = (text: string) => ({ text, confirm: true });
const ok = (text: string) => ({ text });

export const team: Member[] = [
  {
    id: "sanskaar",
    name: "Sanskaar Undale",
    photo: "/team/sanskaar.jpeg",
    headline: "Co-founder of SkyX. Robotics, security and software.",
    statement: "Personal statement to be supplied.",
    technical: [ok("Cybersecurity and CTF problem-solving"), ok("Robotics and drones"), ok("Software development")],
    nonTechnical: [
      tbc("IEEE leadership and webmaster role"),
      ok("Freelancing experience, reported at about ₹30,000 per month"),
    ],
    startups: [
      ok("Co-founder of SkyX, a drone company"),
      tbc("Worked with QuietDesker, an IIT Madras associated startup"),
    ],
    hackathons: [ok("About 10 hackathons")],
    awards: [
      ok("Code Bharat 2025 winner with the team, ₹50,000"),
      ok("First place, Agamya Cybertech Hackathon (CTF) with Aanchal, ₹50,000"),
    ],
    projects: [tbc("Robotics: Eyantra, NIDAR 2026, ISRO related work. Participation status to be confirmed")],
    links: {},
  },
  {
    id: "aanchal",
    name: "Aanchal Gur",
    photo: "/team/aanchal.jpeg",
    headline: "Co-founder of SkyX.",
    statement: "Personal statement to be supplied.",
    technical: [ok("Cybersecurity and CTF problem-solving"), tbc("Robotics, with Sanskaar")],
    nonTechnical: [ok("Internship experience"), ok("Startup founder")],
    startups: [ok("Co-founder of SkyX")],
    hackathons: [ok("About 4 hackathons")],
    awards: [ok("First place, Agamya Cybertech Hackathon (CTF) with Sanskaar, ₹50,000")],
    projects: [tbc("Robotics initiatives with Sanskaar. Exact project and status to be confirmed")],
    links: {},
  },
  {
    id: "pritam",
    name: "Pritam Pattar",
    photo: "/team/pritam.jpeg",
    headline: "Co-founder of OriVolt (EV QUN). Electronics and Communication Engineering.",
    statement: "Personal statement to be supplied.",
    technical: [ok("Electronics and Communication Engineering student")],
    nonTechnical: [tbc("Strengths to be supplied")],
    startups: [ok("Co-founder of OriVolt (EV QUN)")],
    hackathons: [ok("Top 20 among 270 teams, Srusthi Hackathon")],
    awards: [tbc("Awards to be supplied")],
    projects: [tbc("Projects to be supplied")],
    links: {},
  },
  {
    id: "prithvi",
    name: "Prithvi H.",
    photo: "/team/prithvi.jpeg",
    headline: "Co-founder of a funded startup. Hackathon regular.",
    statement: "Personal statement to be supplied.",
    technical: [tbc("Technical strengths to be supplied")],
    nonTechnical: [ok("IEEE leadership"), ok("MDC Membership Drive Chair")],
    startups: [ok("Co-founder of a separate venture, reported ₹4 lakh in funding")],
    hackathons: [ok("About 7 hackathons")],
    awards: [tbc("Awards to be supplied")],
    projects: [tbc("Projects to be supplied")],
    links: {},
  },
];

export const memberById = (id: string) => team.find((m) => m.id === id)!;
export const firstName = (id: string) => memberById(id).name.split(" ")[0];

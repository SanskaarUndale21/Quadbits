export type MemberId = "sanskaar" | "aanchal" | "pritam" | "prithvi";

/** A claim shown on the site. `confirm: true` renders a "to be confirmed" marker. */
export interface Claim {
  text: string;
  confirm?: boolean;
}

export interface Member {
  id: MemberId;
  name: string;
  /** Short headline. Replace with the member's own role line. */
  headline: string;
  /** Path under /public, e.g. "/team/sanskaar.jpg". Leave undefined to show the placeholder. */
  photo?: string;
  statement: string;
  technical: Claim[];
  nonTechnical: Claim[];
  startups: Claim[];
  hackathons: Claim[];
  awards: Claim[];
  projects: Claim[];
  links: { linkedin?: string; github?: string };
}

export interface Venture {
  id: string;
  name: string;
  founders: MemberId[];
  /** Funding in lakh rupees. */
  fundingLakh: number;
  source: Claim;
  description: Claim;
  url?: string;
}

export type AchievementKind = "win" | "prize" | "participation" | "in-progress" | "planned";

export interface Achievement {
  id: string;
  title: string;
  kind: AchievementKind;
  date?: string;
  detail: string;
  prize?: string;
  members: MemberId[];
  confirm?: string;
  image?: string;
}

export interface Capability {
  id: string;
  label: string;
  group: "technical" | "business";
  members: MemberId[];
  evidence: Claim;
  /** Ids of capabilities this one combines with. */
  pairsWith: string[];
}

export type ProjectCategory =
  | "Robotics and drones"
  | "Software and AI"
  | "Cybersecurity"
  | "Embedded systems"
  | "Startup products"
  | "Hackathon prototypes";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  stack: string[];
  members: MemberId[];
  status: "Shipped" | "In progress" | "Awaiting team input";
  image?: string;
  github?: string;
  demo?: string;
  outcome?: string;
}

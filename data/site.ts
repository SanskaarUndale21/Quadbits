import { ventures } from "./ventures";

export const site = {
  name: "Squadbits",
  title: "Squadbits | Built to Solve. Proven to Execute.",
  description:
    "Squadbits is a team of four engineering student co-founders with hackathon wins, funded ventures and hands-on robotics, cybersecurity and software work.",
  /** Set to the deployed URL once known. Used for Open Graph. */
  url: "https://squadbits.vercel.app",
  /** Fill in when supplied. Hidden from the page while empty. */
  email: "" as string,
  video: {
    /** Direct file (mp4/webm) under /public, or an embeddable URL. Empty shows the placeholder. */
    url: "" as string,
    kind: "file" as "file" | "embed",
    poster: "" as string,
    subtitlesUrl: "" as string,
    transcriptUrl: "" as string,
    downloadUrl: "" as string,
    chapters: [
      { at: "0:00", label: "Who we are and why we build" },
      { at: "0:15", label: "Wins and funded ventures" },
      { at: "0:40", label: "The four founders" },
      { at: "1:10", label: "Why this team fits the problem" },
      { at: "1:40", label: "Closing statement" },
    ],
  },
};

/**
 * Derived from the venture entries so the headline can never drift from them.
 * To show a different reported figure, set `totalOverrideLakh`.
 */
const totalOverrideLakh: number | null = null;
export const totalFundingLakh =
  totalOverrideLakh ?? ventures.reduce((sum, v) => sum + v.fundingLakh, 0);

export const formatLakh = (n: number) => `₹${Number.isInteger(n) ? n : n.toFixed(1)} lakh`;

export const stats = [
  { value: "4", label: "Co-founders" },
  { value: formatLakh(totalFundingLakh), label: "Reported funding across three separate ventures" },
  { value: "2", label: "Reported hackathon wins with ₹50,000 prizes" },
  { value: "3", label: "Disciplines: software, hardware, security" },
];

export const navLinks = [
  { href: "#team", label: "The Team" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#achievements", label: "Achievements" },
  { href: "#ventures", label: "Ventures" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

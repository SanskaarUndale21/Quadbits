import { ventures } from "./ventures";

export const site = {
  name: "Quadbits",
  title: "Quadbits | Built to Solve. Proven to Execute.",
  description:
    "Quadbits is a team of four engineering student co-founders with hackathon wins, funded ventures and hands-on robotics, cybersecurity and software work.",
  /** Set to the deployed URL once known. Used for Open Graph. */
  url: "https://quadbits.vercel.app",
  /** Fill in when supplied. Hidden from the page while empty. */
  email: "" as string,
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

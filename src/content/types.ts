export type Pillar = "clarity" | "safety" | "belonging";

export type PageNode = {
  slug: string;
  title: string;
  pillar: Pillar;
  summary: string;
  /** Short hook that opens the curiosity gap */
  hook: string;
  body: string[];
  related: string[];
  hub?: boolean;
  tags: string[];
};

export const PILLARS: Record<
  Pillar,
  { title: string; promise: string; blurb: string; href: string }
> = {
  clarity: {
    title: "Clarity",
    promise: "Understand DOGE without jargon",
    blurb: "Plain English for the questions people actually ask.",
    href: "/clarity",
  },
  safety: {
    title: "Safety",
    promise: "Don’t get wrecked in a UK context",
    blurb: "Checklists, phishing patterns, and custody habits that stick.",
    href: "/safety",
  },
  belonging: {
    title: "Belonging",
    promise: "You’re not alone in the UK pack",
    blurb: "Culture, community pulse, and a welcome without the hard sell.",
    href: "/belonging",
  },
};

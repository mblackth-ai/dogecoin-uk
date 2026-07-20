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
  { title: string; promise: string; lever: string; href: string }
> = {
  clarity: {
    title: "Clarity",
    promise: "Understand DOGE without jargon",
    lever: "Cognitive ease + competence",
    href: "/clarity",
  },
  safety: {
    title: "Safety",
    promise: "Don’t get wrecked in a UK context",
    lever: "Anxiety reduction + control",
    href: "/safety",
  },
  belonging: {
    title: "Belonging",
    promise: "You’re not alone in the UK pack",
    lever: "Identity + social warmth",
    href: "/belonging",
  },
};

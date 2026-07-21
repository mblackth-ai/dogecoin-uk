"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DISCORD_INVITE = "https://discord.gg/x5D3gtH3";
const COMMUNITY_NAME = "The University of Life";

type Availability = {
  open: boolean;
  label: string;
  window: string;
};

function londonWindow(): Availability {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
      hour12: false,
    }).format(new Date()),
  );
  const open = hour >= 10 && hour < 20;
  return {
    open,
    label: open ? "Community pulse online" : "Night mode",
    window: open
      ? "Daily · 10:00–20:00 UK chatter peaks"
      : "Drop in anytime — threads wait for morning",
  };
}

const LANES = [
  {
    id: "clarity",
    title: "Clarity",
    blurb: "Plain-English DOGE — how it works without the jargon.",
    tag: "Learn DOGE",
  },
  {
    id: "safety",
    title: "Safety",
    blurb: "Scams, wallets, seed hygiene — ask before you click.",
    tag: "Stay safer",
  },
  {
    id: "belonging",
    title: "Belonging",
    blurb: "UK pack energy, meetups, culture — company without the hard sell.",
    tag: "Find people",
  },
  {
    id: "life",
    title: "Life & investing",
    blurb:
      "Wider University of Life rooms — money skills, mindset, and more than crypto alone.",
    tag: "Go broader",
  },
] as const;

export function LeadFunnel() {
  const [lane, setLane] = useState<(typeof LANES)[number]["id"]>("life");
  const [availability, setAvailability] = useState<Availability>(() =>
    londonWindow(),
  );

  useEffect(() => {
    const tick = () => setAvailability(londonWindow());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const chosen = LANES.find((item) => item.id === lane) ?? LANES[3];
  const discordHref = `${DISCORD_INVITE}?ref=dogecoin-uk-${chosen.id}`;

  return (
    <section className="funnel community-funnel" aria-label={`Join ${COMMUNITY_NAME}`}>
      <div className="funnel-main">
        <p className="funnel-brand">{COMMUNITY_NAME}</p>
        <h3 className="funnel-heading">Pick a lane. Meet the room.</h3>
        <p className="funnel-lede">
          This site teaches. The Discord is where the three pillars get loud —
          Clarity, Safety, Belonging — plus rooms for investing and the wider
          university of life. Bring curiosity; leave the carnival barkers.
        </p>

        <fieldset className="lane-picker">
          <legend>What are you looking for first?</legend>
          <div className="lane-grid" role="radiogroup" aria-label="Community lane">
            {LANES.map((item) => {
              const selected = lane === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  className={selected ? "lane-option is-selected" : "lane-option"}
                  onClick={() => setLane(item.id)}
                >
                  <span className="lane-tag">{item.tag}</span>
                  <strong>{item.title}</strong>
                  <span>{item.blurb}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <p className="funnel-chosen" aria-live="polite">
          Next stop: <strong>{chosen.title}</strong> energy inside{" "}
          {COMMUNITY_NAME}.
        </p>

        <p className="cta-row">
          <a
            className="btn btn-primary"
            href={discordHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Discord
          </a>
          <Link className="btn btn-ghost" href="/belonging">
            Browse Belonging guides
          </Link>
        </p>
        <p className="funnel-fineprint">
          Invite opens Discord in a new tab. Unofficial Dogecoin UK site — not
          financial advice. Verify channels; never share a seed phrase in DMs.
        </p>
      </div>

      <aside className="availability" aria-live="polite">
        <h3>UK community pulse</h3>
        <p className="live-pill">
          <i aria-hidden />
          {availability.open ? "Live now" : "Always open"}
        </p>
        <p>
          <strong>{availability.label}.</strong> {availability.window}
        </p>
        <p>
          Brawling-friendly learning: DOGE pillars first, then the rest of life
          — investing, habits, and honest questions.
        </p>
        <p>
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
            discord.gg/x5D3gtH3
          </a>
        </p>
      </aside>
    </section>
  );
}

const PATHS = [
  {
    id: "new",
    title: "Brand new to DOGE",
    detail: "Absolute beginner path, then a calm first checklist.",
    href: "/guide/dogecoin-for-absolute-beginners",
    next: "/guide/first-doge-checklist",
  },
  {
    id: "safe",
    title: "Worried about scams",
    detail: "Phishing patterns, fake giveaways, and seed-phrase red lines.",
    href: "/guide/phishing-red-flags",
    next: "/guide/dogecoin-faq-safety",
  },
  {
    id: "wallet",
    title: "Choosing a wallet",
    detail: "Custodial vs self-custody, phones, and hardware options.",
    href: "/guide/wallets-explained",
    next: "/guide/self-custody-checklist",
  },
  {
    id: "uk",
    title: "Why this .co.uk site",
    detail: "Unofficial on purpose — local tone, clear boundaries, no hype.",
    href: "/guide/why-uk-domain",
    next: "/guide/uk-community-pulse",
  },
] as const;

export function StartHerePaths() {
  return (
    <section className="pulse-panel" aria-label="Common visitor paths">
      {PATHS.map((path) => (
        <article key={path.id}>
          <h3>{path.title}</h3>
          <p>{path.detail}</p>
          <p className="cta-row" style={{ marginTop: "0.75rem" }}>
            <Link className="btn btn-ghost" href={path.href}>
              Open guide
            </Link>
            <Link className="btn btn-ghost" href={path.next}>
              Next step
            </Link>
          </p>
        </article>
      ))}
    </section>
  );
}

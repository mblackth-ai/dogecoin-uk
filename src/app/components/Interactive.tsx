"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

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
    label: open ? "Community desk open" : "Night queue",
    window: open
      ? "Daily · 10:00–20:00 UK"
      : "Messages land in the morning inbox",
  };
}

export function LeadFunnel() {
  const [sent, setSent] = useState(false);
  const [availability, setAvailability] = useState<Availability>(() => londonWindow());

  useEffect(() => {
    const tick = () => setAvailability(londonWindow());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const interest = String(data.get("interest") || "").trim();
    const subject = encodeURIComponent(`Dogecoin.uk — ${interest || "hello"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nI'd like updates from dogecoin.co.uk.`,
    );
    window.location.href = `mailto:hello@dogecoin.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="funnel" aria-label="Join the UK list">
      <form onSubmit={onSubmit} noValidate>
        <fieldset>
          <legend>Your details</legend>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@email.co.uk"
            />
          </label>
          <label>
            What you want first
            <select name="interest" defaultValue="explainers">
              <option value="explainers">Plain-English DOGE explainers</option>
              <option value="guides">UK wallet & safety guides</option>
              <option value="community">Community updates</option>
              <option value="builders">Builder / project news</option>
            </select>
          </label>
          <button className="btn btn-primary" type="submit">
            {sent ? "Opening mail…" : "Send my request"}
          </button>
        </fieldset>
      </form>

      <aside className="availability" aria-live="polite">
        <h3>UK desk hours</h3>
        <p className="live-pill">
          <i aria-hidden />
          {availability.open ? "Live now" : "Queued"}
        </p>
        <p>
          <strong>{availability.label}.</strong> {availability.window}
        </p>
        <p>Unofficial community site. No spam blasts — just useful drops.</p>
      </aside>
    </section>
  );
}

const PATHS = [
  {
    id: "new",
    title: "Brand new to DOGE",
    detail: "What it is, how a send works, then a calm first checklist.",
    href: "/guide/what-is-dogecoin",
    next: "/guide/first-doge-checklist",
  },
  {
    id: "safe",
    title: "Worried about scams",
    detail: "Phishing patterns, fake giveaways, and seed-phrase red lines.",
    href: "/guide/phishing-red-flags",
    next: "/guide/scam-patterns-uk",
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

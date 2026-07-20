"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";

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
    <section className="funnel" aria-label="Two-step lead funnel">
      <form onSubmit={onSubmit} noValidate>
        <fieldset>
          <legend>Step 1 — Join the UK list</legend>
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
        <h3>Step 2 — Availability</h3>
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

type PulseItem = {
  id: string;
  label: string;
  state: "live" | "build" | "queued";
  detail: string;
};

const PULSE: PulseItem[] = [
  { id: "1", label: "UK explainers", state: "build", detail: "drafting" },
  { id: "2", label: "Safety checklist", state: "live", detail: "published soon" },
  { id: "3", label: "Community board", state: "queued", detail: "next" },
];

export function AssetPipeline() {
  const [progress, setProgress] = useState(41);
  const stamp = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date()),
    [],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((value) => (value >= 93 ? 38 : value + 1));
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="pulse-panel" aria-label="Live build status assets">
      <article>
        <h3>Layout A · Status list</h3>
        <ul className="status-list">
          {PULSE.map((item) => (
            <li key={item.id}>
              <span className="dot" data-state={item.state} aria-hidden />
              <span>{item.label}</span>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="meter">
        <h3>Layout B · Meter</h3>
        <label htmlFor="doge-progress">Site build completion</label>
        <progress id="doge-progress" max={100} value={progress}>
          {progress}%
        </progress>
        <p className="ticker">{progress}% toward full UK hub</p>
      </article>

      <article>
        <h3>Layout C · Ticker</h3>
        <p className="ticker">
          {`[${stamp} UK]\nDomain: live\nCLS target < 0.1\nTTI budget < 2.5s\nCTA: #join`}
        </p>
      </article>
    </section>
  );
}

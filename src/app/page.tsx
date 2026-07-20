import Link from "next/link";
import {
  getGraphStats,
  getHubs,
  getPagesByPillar,
  PILLARS,
} from "../content";
import { AssetPipeline, LeadFunnel } from "./components/Interactive";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export default function Home() {
  const stats = getGraphStats();
  const hubs = getHubs();

  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-brand">
          <header className="hero-copy">
            <p className="hero-brand" id="hero-brand">
              Dogecoin
            </p>
            <h1>UK home for DOGE — clear, calm, useful.</h1>
            <p className="hero-lede">
              People land here for belonging, safety, and plain English — not
              carnival price calls. Three pillars. One growing graph of{" "}
              {stats.nodes} interlinked guides.
            </p>
            <p className="cta-row">
              <a className="btn btn-primary" href="#join">
                Join the UK list
              </a>
              <Link className="btn btn-ghost" href="/map">
                Open the living map
              </Link>
            </p>
          </header>

          <figure className="hero-visual" aria-label="Stylised Dogecoin disc">
            <DogeCoinVisual />
          </figure>
        </section>

        <section className="band band-alt" id="pillars" aria-labelledby="pillars-title">
          <p className="kicker">Three pillars of success</p>
          <h2 id="pillars-title">Clarity. Safety. Belonging.</h2>
          <p>
            Why this works: each pillar maps to a real psychological need —
            competence, control, and identity — then cross-links so curiosity
            never hits a dead end.
          </p>
          <section className="service-grid">
            {(Object.keys(PILLARS) as Array<keyof typeof PILLARS>).map((key) => {
              const pillar = PILLARS[key];
              const count = getPagesByPillar(key).length;
              return (
                <article key={key}>
                  <p className="benchmark">Value benchmark</p>
                  <h3>
                    <Link href={pillar.href}>{pillar.title}</Link>
                  </h3>
                  <p>
                    {pillar.promise}. Lever: {pillar.lever}. {count} guides in
                    this wing.
                  </p>
                </article>
              );
            })}
          </section>
        </section>

        <section className="band" id="hubs" aria-labelledby="hubs-title">
          <p className="kicker">Graph entry doors</p>
          <h2 id="hubs-title">Start at a hub. Wander by design.</h2>
          <p>
            Hubs are high-gravity pages. Every outbound link is a curiosity
            bridge into the wider conglomerate.
          </p>
          <ul className="hub-list">
            {hubs.map((page) => (
              <li key={page.slug}>
                <Link href={`/guide/${page.slug}`}>
                  <strong>
                    [{PILLARS[page.pillar].title}] {page.title}
                  </strong>
                  <span>{page.hook}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="band band-alt" id="status" aria-labelledby="status-title">
          <p className="kicker">Hyper-targeted asset pipeline</p>
          <h2 id="status-title">Live build signal — light on the wire.</h2>
          <p>
            {stats.nodes} nodes · {stats.edges} edges · self-growing on a
            heartbeat expansion loop.
          </p>
          <AssetPipeline />
        </section>

        <section className="band" id="proof" aria-labelledby="proof-title">
          <p className="kicker">Skeptic filter · Trust shield</p>
          <h2 id="proof-title">Proof matrix — why this site exists.</h2>
          <p>
            Clear operating rules so visitors know what they are getting — and
            what they are not.
          </p>
          <ul className="proof-matrix">
            <li>
              <strong>.co.uk</strong>
              <span>UK presence</span>
              <em>Local domain, UK-timed replies</em>
            </li>
            <li>
              <strong>0 hype</strong>
              <span>Price calls</span>
              <em>No charts that promise riches</em>
            </li>
            <li>
              <strong>{stats.nodes}</strong>
              <span>Guide pages</span>
              <em>Surface area for search + curiosity</em>
            </li>
            <li>
              <strong>Unofficial</strong>
              <span>Community site</span>
              <em>Not the Dogecoin Foundation</em>
            </li>
          </ul>
          <p className="cta-row" style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-ghost" href="/guide/proof-matrix">
              Read the full proof page
            </Link>
          </p>
        </section>

        <section className="band band-alt" id="join" aria-labelledby="join-title">
          <p className="kicker">Two-step frictionless funnel</p>
          <h2 id="join-title">Say what you want. See if we are live.</h2>
          <p>
            Step one: request the update that matches you. Step two: availability
            status for the UK desk.
          </p>
          <LeadFunnel />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function DogeCoinVisual() {
  return (
    <svg
      viewBox="0 0 520 520"
      role="img"
      aria-label="Stylised Dogecoin gold disc"
      width="520"
      height="520"
    >
      <defs>
        <radialGradient id="coinFace" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffe7a0" />
          <stop offset="55%" stopColor="#e2b43a" />
          <stop offset="100%" stopColor="#b8891a" />
        </radialGradient>
        <radialGradient id="coinRim" cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor="#c99620" />
          <stop offset="100%" stopColor="#8f6a12" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="270" r="190" fill="#1b2a4a" fillOpacity="0.1" />
      <circle cx="260" cy="260" r="188" fill="url(#coinRim)" />
      <circle cx="260" cy="260" r="164" fill="url(#coinFace)" />
      <circle
        cx="260"
        cy="260"
        r="146"
        fill="none"
        stroke="#fff6d4"
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      <text
        x="260"
        y="292"
        textAnchor="middle"
        fill="#1b2a4a"
        fontFamily="system-ui, sans-serif"
        fontSize="132"
        fontWeight="800"
      >
        Ð
      </text>
      <text
        x="260"
        y="348"
        textAnchor="middle"
        fill="#1b2a4a"
        fillOpacity="0.7"
        fontFamily="system-ui, sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="6"
      >
        DOGE
      </text>
    </svg>
  );
}

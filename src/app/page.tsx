import Link from "next/link";
import {
  getGraphStats,
  getHubs,
  getLatestGuides,
  getPagesByPillar,
  PILLARS,
} from "../content";
import { LeadFunnel, StartHerePaths } from "./components/Interactive";
import { LivePulse } from "./components/LivePulse";
import { NewsFeed } from "./components/NewsFeed";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export default function Home() {
  const stats = getGraphStats();
  const hubs = getHubs();
  const latest = getLatestGuides(5);

  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero" aria-labelledby="hero-brand">
          <div className="hero-frame shell">
            <header className="hero-copy">
              <p className="hero-brand" id="hero-brand">
                Dogecoin
              </p>
              <h1>UK home for DOGE — clear, calm, useful.</h1>
              <p className="hero-lede">
                People land here for belonging, safety, and plain English — not
                carnival price calls. Browse {stats.nodes} guides across Clarity,
                Safety, and Belonging.
              </p>
              <p className="cta-row">
                <a className="btn btn-primary" href="#join">
                  Join the community
                </a>
                <Link className="btn btn-ghost" href="/start">
                  Open start page
                </Link>
              </p>
            </header>

            <figure className="hero-visual" aria-label="Stylised Dogecoin disc">
              <span className="hero-visual-motion">
                <DogeCoinVisual />
              </span>
            </figure>
          </div>
        </section>

        <section className="band band-alt" id="pillars" aria-labelledby="pillars-title">
          <p className="kicker">How this site helps</p>
          <h2 id="pillars-title">Clarity. Safety. Belonging.</h2>
          <p>
            Three simple paths so you can learn DOGE, stay safer, and feel part
            of the UK pack — without the shouting.
          </p>
          <section className="service-grid">
            {(Object.keys(PILLARS) as Array<keyof typeof PILLARS>).map((key) => {
              const pillar = PILLARS[key];
              const count = getPagesByPillar(key).length;
              return (
                <article key={key}>
                  <p className="benchmark">{count} guides</p>
                  <h3>
                    <Link href={pillar.href}>{pillar.title}</Link>
                  </h3>
                  <p>
                    {pillar.promise}. {pillar.blurb}
                  </p>
                </article>
              );
            })}
          </section>
        </section>

        <section className="band" id="hubs" aria-labelledby="hubs-title">
          <p className="kicker">Best places to begin</p>
          <h2 id="hubs-title">Start here. Follow what you need next.</h2>
          <p>
            These hub guides answer the first big questions, then point you to
            the next useful page — so curiosity never hits a dead end.
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

        <section className="band band-alt" id="paths" aria-labelledby="paths-title">
          <p className="kicker">Common visitor paths</p>
          <h2 id="paths-title">Pick a question. We already wrote the answer.</h2>
          <p>
            Most people arrive with one of these intents. Each path opens a
            short trail of guides you can finish in one sitting.
          </p>
          <StartHerePaths />
        </section>

        <section className="band" id="proof" aria-labelledby="proof-title">
          <p className="kicker">What you can trust here</p>
          <h2 id="proof-title">Clear rules. No carnival.</h2>
          <p>
            Operating rules so you know what you are getting — and what you are
            not.
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
              <em>Practical answers, linked together</em>
            </li>
            <li>
              <strong>Unofficial</strong>
              <span>Community site</span>
              <em>Not the Dogecoin Foundation</em>
            </li>
          </ul>
          <p className="cta-row" style={{ marginTop: "1.25rem" }}>
            <Link className="btn btn-ghost" href="/guide/proof-matrix">
              Why trust this site
            </Link>
          </p>
        </section>

        <section className="band band-alt" id="faq" aria-labelledby="faq-title">
          <p className="kicker">Quick answers</p>
          <h2 id="faq-title">Questions visitors ask first</h2>
          <p>
            Short replies — each one opens a deeper guide when you want more.
          </p>
          <ul className="hub-list faq-list">
            <li>
              <Link href="/guide/what-is-dogecoin">
                <strong>What is Dogecoin, really?</strong>
                <span>
                  A cryptocurrency with a meme origin and a real network —
                  humour on the outside, machinery underneath.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/guide/unofficial-disclaimer">
                <strong>Is this the official Dogecoin site?</strong>
                <span>
                  No. dogecoin.co.uk is an unofficial UK community presence —
                  and we say that on purpose.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/guide/seed-phrase-never-share">
                <strong>Will anyone here ask for my seed phrase?</strong>
                <span>
                  Never. Anyone who asks is not support. Read the red-flag
                  guides before you click anything urgent.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/guide/not-financial-advice">
                <strong>Do you tell people what to buy?</strong>
                <span>
                  No price prophecy. We explain mechanics and risks so you can
                  think — we do not manage your money.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/guide/dogecoin-for-absolute-beginners">
                <strong>Where should a complete beginner start?</strong>
                <span>
                  A short honest on-ramp, then the first-DOGE checklist — slowly,
                  before any serious balance.
                </span>
              </Link>
            </li>
            <li>
              <Link href="/guide/dogecoin-faq-safety">
                <strong>Got a quick safety question?</strong>
                <span>
                  Short answers on seeds, giveaways, and what to do after a
                  sketchy click — without the lecture voice.
                </span>
              </Link>
            </li>
          </ul>
        </section>

        <section className="band band-alt" id="tools" aria-labelledby="tools-title">
          <p className="kicker">Daily tools</p>
          <h2 id="tools-title">Price pulse, news, and a start page.</h2>
          <p>
            Keep dogecoin.co.uk handy — live market context (not tips), a guide
            feed you can subscribe to, and a bookmarkable start page with Google
            / Gemini search.
          </p>
          <div className="shell">
            <div className="home-tools">
              <LivePulse compact />
              <div className="home-tools-card">
                <h3>Make this your launchpad</h3>
                <p>
                  Set{" "}
                  <Link href="/start">
                    <code>dogecoin.co.uk/start</code>
                  </Link>{" "}
                  as a homepage or bookmark. Search this site, Google, or Gemini —
                  then jump into the community when you want people, not pages.
                </p>
                <p className="cta-row">
                  <Link className="btn btn-primary" href="/start">
                    Open start page
                  </Link>
                  <a className="btn btn-ghost" href="/feed.xml">
                    RSS feed
                  </a>
                </p>
              </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <NewsFeed guides={latest} title="Latest guides" />
            </div>
          </div>
        </section>

        <section className="band" id="join" aria-labelledby="join-title">
          <p className="kicker">Belonging · live community</p>
          <h2 id="join-title">From guides to the room — The University of Life.</h2>
          <p>
            Finished reading? Jump into the Discord where Clarity, Safety, and
            Belonging meet a wider learning pack — including investing and life
            skills beyond DOGE alone.
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
      overflow="visible"
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
        <filter
          id="coinSoftShadow"
          x="-20%"
          y="-15%"
          width="140%"
          height="145%"
        >
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="16"
            floodColor="#1b2a4a"
            floodOpacity="0.18"
          />
        </filter>
      </defs>
      <g filter="url(#coinSoftShadow)">
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
          fontFamily="var(--font-display), system-ui, sans-serif"
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
          fontFamily="var(--font-body), system-ui, sans-serif"
          fontSize="24"
          fontWeight="700"
          letterSpacing="6"
        >
          DOGE
        </text>
      </g>
    </svg>
  );
}

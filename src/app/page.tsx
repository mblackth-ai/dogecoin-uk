import { AssetPipeline, LeadFunnel } from "./components/Interactive";

export default function Home() {
  return (
    <>
      <header className="shell site-header">
        <a className="brand" href="#top">
          Dogecoin
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#tracks">Tracks</a>
          <a href="#status">Status</a>
          <a href="#proof">Proof</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-brand">
          <header className="hero-copy">
            <p className="hero-brand" id="hero-brand">
              Dogecoin
            </p>
            <h1>UK home for DOGE — clear, calm, useful.</h1>
            <p className="hero-lede">
              dogecoin.co.uk is an unofficial community site: plain-English
              explainers, safety guides, and updates for people in the UK who
              want signal without the circus.
            </p>
            <p className="cta-row">
              <a className="btn btn-primary" href="#join">
                Join the UK list
              </a>
              <a className="btn btn-ghost" href="#proof">
                See the proof frame
              </a>
            </p>
          </header>

          <figure className="hero-visual" aria-label="Stylised Dogecoin disc">
            <DogeCoinVisual />
          </figure>
        </section>

        <section
          className="band band-alt"
          id="tracks"
          aria-labelledby="tracks-title"
        >
          <p className="kicker">Pattern interrupt · Core tracks</p>
          <h2 id="tracks-title">Three lanes. Zero meme fog.</h2>
          <p>
            Everything here is meant to be skimmed in under three seconds, then
            acted on — no filler paragraphs.
          </p>
          <section className="service-grid">
            <article>
              <p className="benchmark">Value benchmark</p>
              <h3>Explainers</h3>
              <p>
                How DOGE works in plain English — wallets, fees, and what “to
                the moon” actually means in practice.
              </p>
            </article>
            <article>
              <p className="benchmark">Value benchmark</p>
              <h3>UK safety</h3>
              <p>
                Phishing patterns, custody basics, and checklists that keep
                newcomers from expensive mistakes.
              </p>
            </article>
            <article>
              <p className="benchmark">Value benchmark</p>
              <h3>Community pulse</h3>
              <p>
                Builder notes and UK meetups energy — without pretending this is
                financial advice.
              </p>
            </article>
          </section>
        </section>

        <section className="band" id="status" aria-labelledby="status-title">
          <p className="kicker">Hyper-targeted asset pipeline</p>
          <h2 id="status-title">Live build signal — light on the wire.</h2>
          <p>
            Three status layouts. No chart libraries. No layout thrash while
            numbers tick.
          </p>
          <AssetPipeline />
        </section>

        <section
          className="band band-alt"
          id="proof"
          aria-labelledby="proof-title"
        >
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
              <strong>&lt;2.5s</strong>
              <span>TTI budget</span>
              <em>Fast enough for phone thumbs</em>
            </li>
            <li>
              <strong>Unofficial</strong>
              <span>Community site</span>
              <em>Not the Dogecoin Foundation</em>
            </li>
          </ul>
        </section>

        <section className="band" id="join" aria-labelledby="join-title">
          <p className="kicker">Two-step frictionless funnel</p>
          <h2 id="join-title">Say what you want. See if we are live.</h2>
          <p>
            Step one: request the update that matches you. Step two: availability
            status for the UK desk.
          </p>
          <LeadFunnel />
        </section>
      </main>

      <footer className="shell site-footer">
        <p>
          <strong>Dogecoin</strong> · dogecoin.co.uk · Unofficial
        </p>
        <p className="audit" aria-label="Velocity-check performance audit targets">
          Audit · TTI &lt;2.5s · CLS &lt;0.1 · Semantic DOM · CTA: #join
        </p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
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

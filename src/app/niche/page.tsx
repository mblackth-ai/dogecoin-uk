import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Niche path · Dogecoin UK",
  description:
    "How dogecoin.co.uk attracts and keeps DOGE fans: Clarity, Safety, Belonging, funnel logic into The University of Life, and permission for Bitcoin and alt lovers too.",
  alternates: { canonical: "https://dogecoin.co.uk/niche" },
};

export default function NichePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="band shell pillar-hero">
          <p className="kicker">SEO · GEO · retention</p>
          <h1>Own the lane. Keep the pack.</h1>
          <p className="hero-lede">
            Dogecoin × UK × Clarity / Safety / Belonging — unofficial education
            that earns authority, delivers free value, and gives permission to
            be yourself. Then a doorway to The University of Life.
          </p>
        </section>

        <section className="band band-alt">
          <article className="article" style={{ maxWidth: "46rem", marginInline: "auto" }}>
            <h2>Funnel logic</h2>
            <p>
              Attract with honest explainers. Keep with utilities (/start, RSS,
              Safety refreshers). Invite to Discord only after value — pick a
              lane, then join. Lurking is allowed; pressure is not.
            </p>
            <h2>Authority · value · permission</h2>
            <p>
              Authority: public rules, unofficial honesty, Safety procedures.
              Value: guides before the ask. Permission: Bitcoin lovers, alt
              explorers, and DOGE meme culture can share a roof without a purity
              tax — meme energy without the cult.
            </p>
            <h2>The three sections</h2>
            <ul className="hub-list">
              <li>
                <Link href="/clarity">
                  <strong>Clarity</strong>
                  <span>Definitions and bridges for BTC / alt / DOGE curiosity</span>
                </Link>
              </li>
              <li>
                <Link href="/safety">
                  <strong>Safety</strong>
                  <span>Why people stay — habits that beat hype loops</span>
                </Link>
              </li>
              <li>
                <Link href="/belonging">
                  <strong>Belonging</strong>
                  <span>Why they join — hospitality, culture home, community promise</span>
                </Link>
              </li>
            </ul>
            <h2>Start the stay loop</h2>
            <p className="cta-row" style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-primary" href="/guide/funnel-logic-uk">
                Funnel logic
              </Link>
              <Link className="btn btn-ghost" href="/guide/authority-value-permission">
                Authority · value · permission
              </Link>
              <Link className="btn btn-ghost" href="/#join">
                Community door
              </Link>
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

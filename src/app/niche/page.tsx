import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "How these guides are organised · Dogecoin UK",
  description:
    "Clarity, Safety, and Belonging — how dogecoin.co.uk organises calm UK Dogecoin guides without price tips.",
  alternates: { canonical: "https://dogecoin.co.uk/niche" },
};

export default function NichePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="band shell pillar-hero">
          <p className="kicker">How this library works</p>
          <h1>Three paths. One calm UK home.</h1>
          <p className="hero-lede">
            Every guide sits under Clarity, Safety, or Belonging — so you always
            know what kind of help you are getting. Unofficial on purpose. No
            price prophecy.
          </p>
        </section>

        <section className="band band-alt">
          <article className="article" style={{ maxWidth: "46rem", marginInline: "auto" }}>
            <h2>What you will find</h2>
            <p>
              Direct answers, short procedures, and related links so curiosity
              never hits a dead end. Start with a question, leave with a next
              useful step.
            </p>
            <h2>The three sections</h2>
            <ul className="hub-list">
              <li>
                <Link href="/clarity">
                  <strong>Clarity</strong>
                  <span>Plain-English definitions, how it works, beginner FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/safety">
                  <strong>Safety</strong>
                  <span>Scams, custody habits, phishing patterns for UK visitors</span>
                </Link>
              </li>
              <li>
                <Link href="/belonging">
                  <strong>Belonging</strong>
                  <span>UK culture, meetups, tone — welcome without the hard sell</span>
                </Link>
              </li>
            </ul>
            <h2>Where to go next</h2>
            <p>
              Browse the full library on{" "}
              <Link href="/map">All guides</Link>, or jump straight in:
            </p>
            <p className="cta-row" style={{ marginTop: "1.5rem" }}>
              <Link className="btn btn-primary" href="/guide/dogecoin-for-absolute-beginners">
                Absolute beginner path
              </Link>
              <Link className="btn btn-ghost" href="/guide/phishing-red-flags">
                Safety first
              </Link>
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

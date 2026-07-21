import type { Metadata } from "next";
import Link from "next/link";
import { getLatestGuides, getSearchIndex } from "../../content";
import { LivePulse } from "../components/LivePulse";
import { NewsFeed } from "../components/NewsFeed";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { StartSearch } from "../components/StartSearch";

export const metadata: Metadata = {
  title: "Start page · Dogecoin UK",
  description:
    "Bookmarkable UK Dogecoin start page: live DOGE price, guide RSS, site/Google/Gemini search, and The University of Life community.",
  alternates: {
    canonical: "https://dogecoin.co.uk/start",
    types: {
      "application/rss+xml": "https://dogecoin.co.uk/feed.xml",
    },
  },
};

export default function StartPage() {
  const latest = getLatestGuides(8);
  const searchIndex = getSearchIndex();

  return (
    <>
      <SiteHeader />
      <main className="start-page">
        <section className="start-hero shell" aria-labelledby="start-brand">
          <p className="hero-brand" id="start-brand">
            Dogecoin
          </p>
          <h1>Your UK DOGE start page</h1>
          <p className="hero-lede">
            Live price pulse, fresh guides, and search — then hop into The
            University of Life when you want the room. Not financial advice.
          </p>
          <StartSearch guides={searchIndex} />
        </section>

        <section className="band band-alt">
          <div className="shell start-grid">
            <LivePulse />
            <aside className="start-aside">
              <h2>Make this your default</h2>
              <ol className="homepage-steps">
                <li>
                  <strong>Bookmark</strong> this page (
                  <kbd>Ctrl</kbd>+<kbd>D</kbd> / <kbd>⌘</kbd>+<kbd>D</kbd>).
                </li>
                <li>
                  <strong>Chrome / Edge homepage:</strong> Settings → On startup
                  → Open a specific page → add{" "}
                  <code>https://dogecoin.co.uk/start</code>
                </li>
                <li>
                  <strong>Firefox:</strong> Settings → Home → Homepage and new
                  windows → Custom URLs → same address.
                </li>
                <li>
                  <strong>New tab:</strong> pin this tab, or use an extension that
                  opens a custom URL.
                </li>
              </ol>
              <p className="start-aside-note">
                Browsers block sites from setting your homepage automatically —
                that is a good thing. You choose.
              </p>
            </aside>
          </div>
        </section>

        <section className="band">
          <div className="shell">
            <NewsFeed guides={latest} />
            <p className="cta-row" style={{ marginTop: "1.25rem" }}>
              <a className="btn btn-ghost" href="/feed.xml">
                Subscribe via RSS
              </a>
              <Link className="btn btn-primary" href="/#join">
                Join the community
              </Link>
            </p>
          </div>
        </section>

        <section className="band band-alt">
          <div className="shell start-community">
            <p className="kicker">Belonging</p>
            <h2>More than price. More than DOGE alone.</h2>
            <p>
              Guides live here. Conversation lives in{" "}
              <a
                href="https://discord.gg/x5D3gtH3"
                target="_blank"
                rel="noopener noreferrer"
              >
                The University of Life
              </a>{" "}
              — Clarity, Safety, Belonging, plus investing and wider life
              learning.
            </p>
            <p className="cta-row">
              <a
                className="btn btn-primary"
                href="https://discord.gg/x5D3gtH3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Discord
              </a>
              <Link className="btn btn-ghost" href="/">
                Back to the landing story
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

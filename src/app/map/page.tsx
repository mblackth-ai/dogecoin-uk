import type { Metadata } from "next";
import Link from "next/link";
import { catalog, getGraphStats, PILLARS } from "../../content";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "All guides · Dogecoin UK",
  description:
    "Browse every Clarity, Safety, and Belonging guide on dogecoin.co.uk.",
};

export default function MapPage() {
  const stats = getGraphStats();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="band shell">
          <p className="kicker">Full library</p>
          <h1>All guides</h1>
          <p className="hero-lede">
            {stats.nodes} pages across Clarity, Safety, and Belonging — pick a
            topic or follow the related links at the end of each guide.
          </p>
          <ul className="proof-matrix map-stats">
            <li>
              <strong>{stats.byPillar.clarity}</strong>
              <span>Clarity</span>
              <em>{PILLARS.clarity.promise}</em>
            </li>
            <li>
              <strong>{stats.byPillar.safety}</strong>
              <span>Safety</span>
              <em>{PILLARS.safety.promise}</em>
            </li>
            <li>
              <strong>{stats.byPillar.belonging}</strong>
              <span>Belonging</span>
              <em>{PILLARS.belonging.promise}</em>
            </li>
            <li>
              <strong>{stats.edges}</strong>
              <span>Cross-links</span>
              <em>Paths between related guides</em>
            </li>
          </ul>
        </section>

        <section className="band band-alt">
          <ul className="hub-list">
            {catalog.map((page) => (
              <li key={page.slug}>
                <Link href={`/guide/${page.slug}`}>
                  <strong>
                    [{PILLARS[page.pillar].title}] {page.title}
                  </strong>
                  <span>{page.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

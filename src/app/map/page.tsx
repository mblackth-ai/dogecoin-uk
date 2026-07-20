import type { Metadata } from "next";
import Link from "next/link";
import { catalog, getGraphStats, PILLARS } from "../../content";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Site map · Dogecoin UK",
  description: "The interlinked graph of Clarity, Safety, and Belonging pages.",
};

export default function MapPage() {
  const stats = getGraphStats();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="band shell">
          <p className="kicker">Surface area</p>
          <h1>The living map</h1>
          <p className="hero-lede">
            {stats.nodes} pages · {stats.edges} directed links · average{" "}
            {stats.density.toFixed(1)} outbound edges per page.
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
              <span>Edges</span>
              <em>Curiosity bridges between pages</em>
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
                  <span>
                    → {page.related.length} links · {page.summary}
                  </span>
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

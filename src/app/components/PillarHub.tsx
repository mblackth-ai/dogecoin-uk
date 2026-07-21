import type { Metadata } from "next";
import Link from "next/link";
import { getPagesByPillar, PILLARS, type Pillar } from "../../content";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

type Props = {
  pillar: Pillar;
};

export function pillarMetadata(pillar: Pillar): Metadata {
  const meta = PILLARS[pillar];
  return {
    title: `${meta.title} · Dogecoin UK`,
    description: `${meta.promise}. ${meta.blurb}`,
  };
}

export function PillarHub({ pillar }: Props) {
  const meta = PILLARS[pillar];
  const pages = getPagesByPillar(pillar);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="band shell pillar-hero">
          <p className="kicker">{pages.length} guides in this section</p>
          <h1>{meta.title}</h1>
          <p className="hero-lede">{meta.promise}</p>
          <p className="article-summary">{meta.blurb}</p>
        </section>
        <section className="band band-alt">
          <ul className="hub-list">
            {pages.map((page) => (
              <li key={page.slug}>
                <Link href={`/guide/${page.slug}`}>
                  <strong>
                    {page.title}
                    {page.hub ? " · start here" : ""}
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

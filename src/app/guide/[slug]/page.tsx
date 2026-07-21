import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getBacklinks,
  getPage,
  getRelated,
  PILLARS,
} from "../../../content";
import { RelatedRail, SiteFooter, SiteHeader } from "../../components/SiteChrome";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return { title: "Not found" };
  return {
    title: `${page.title} · Dogecoin UK`,
    description: page.summary,
    openGraph: {
      title: page.title,
      description: page.summary,
      url: `https://dogecoin.co.uk/guide/${page.slug}`,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const related = getRelated(page);
  const backlinks = getBacklinks(page.slug);
  const pillar = PILLARS[page.pillar];

  return (
    <>
      <SiteHeader />
      <main className="article-main">
        <article className="article shell">
          <p className="kicker">
            <Link href={pillar.href}>{pillar.title}</Link>
            {" · "}
            Guide
          </p>
          <h1>{page.title}</h1>
          <p className="article-hook">{page.hook}</p>
          <p className="article-summary">{page.summary}</p>
          {page.body.map((paragraph, index) => (
            <p key={`${page.slug}-${index}`}>{paragraph}</p>
          ))}
          <p className="tag-row">
            {page.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
        </article>

        <section className="band">
          <RelatedRail title="Keep reading" pages={related} />
          <RelatedRail
            title="Also linked from"
            pages={backlinks.map((item) => ({
              slug: item.slug,
              title: item.title,
              summary: item.summary,
            }))}
          />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

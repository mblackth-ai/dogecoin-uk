import Link from "next/link";
import type { PageNode } from "../../content";
import { PILLARS } from "../../content";

export function NewsFeed({
  guides,
  title = "Fresh from the guide shelf",
}: {
  guides: PageNode[];
  title?: string;
}) {
  return (
    <section className="news-feed" aria-labelledby="news-feed-title">
      <div className="news-feed-head">
        <h2 id="news-feed-title">{title}</h2>
        <p>
          Subscribe in any reader via{" "}
          <a href="/feed.xml">RSS</a>
          {" · "}
          <Link href="/map">Full map</Link>
        </p>
      </div>
      <ul className="news-feed-list">
        {guides.map((page) => (
          <li key={page.slug}>
            <Link href={`/guide/${page.slug}`}>
              <span className="news-pillar">{PILLARS[page.pillar].title}</span>
              <strong>{page.title}</strong>
              <span>{page.hook}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

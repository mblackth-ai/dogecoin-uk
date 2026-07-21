import Link from "next/link";
import { getGraphStats } from "../../content";

export function SiteHeader() {
  return (
    <header className="shell site-header">
      <Link className="brand" href="/">
        Dogecoin
      </Link>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/clarity">Clarity</Link>
        <Link href="/safety">Safety</Link>
        <Link href="/belonging">Belonging</Link>
        <Link href="/map">Guides</Link>
        <Link href="/niche">Niche</Link>
        <Link href="/#join">Community</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const stats = getGraphStats();
  return (
    <footer className="shell site-footer">
      <p>
        <strong>Dogecoin</strong> · dogecoin.co.uk · Unofficial community site ·{" "}
        <Link href="/niche">Niche path</Link> ·{" "}
        <a href="/llms.txt">llms.txt</a>
      </p>
      <p className="audit" aria-label="Guide library size">
        {stats.nodes} guides · Clarity {stats.byPillar.clarity} · Safety{" "}
        {stats.byPillar.safety} · Belonging {stats.byPillar.belonging}
      </p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}

export function RelatedRail({
  title,
  pages,
}: {
  title: string;
  pages: { slug: string; title: string; summary: string }[];
}) {
  if (!pages.length) return null;
  return (
    <aside className="related-rail" aria-label={title}>
      <h2>{title}</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.slug}>
            <Link href={`/guide/${page.slug}`}>
              <strong>{page.title}</strong>
              <span>{page.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

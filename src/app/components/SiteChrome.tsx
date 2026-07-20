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
        <Link href="/map">Map</Link>
        <Link href="/#join">Join</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const stats = getGraphStats();
  return (
    <footer className="shell site-footer">
      <p>
        <strong>Dogecoin</strong> · dogecoin.co.uk · Unofficial
      </p>
      <p className="audit" aria-label="Graph and performance audit">
        Graph · {stats.nodes} pages · {stats.edges} links · C{stats.byPillar.clarity}/S
        {stats.byPillar.safety}/B{stats.byPillar.belonging} · TTI &lt;2.5s
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

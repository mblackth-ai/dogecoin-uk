import { getLatestGuides } from "../../content";

export const revalidate = 3600;

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const base = "https://dogecoin.co.uk";
  const items = getLatestGuides(40);
  const lastBuild = new Date().toUTCString();

  const entries = items
    .map((page) => {
      const link = `${base}/guide/${page.slug}`;
      return `    <item>
      <title>${escapeXml(page.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(page.summary)}</description>
      <category>${escapeXml(page.pillar)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dogecoin UK — guide feed</title>
    <link>${base}</link>
    <description>Unofficial UK Dogecoin guides: Clarity, Safety, Belonging. Not financial advice.</description>
    <language>en-gb</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

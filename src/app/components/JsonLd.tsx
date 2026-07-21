import type { PageNode, Pillar } from "../../content/types";
import { PILLARS } from "../../content/types";

const site = "https://dogecoin.co.uk";

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dogecoin UK",
    url: site,
    description:
      "Unofficial UK community site for Dogecoin: plain-English explainers, safety guides, and community notes. Not financial advice.",
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: "dogecoin.co.uk (unofficial)",
      url: site,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function GuideJsonLd({ page }: { page: PageNode }) {
  const url = `${site}/guide/${page.slug}`;
  const pillar = PILLARS[page.pillar as Pillar];

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.summary,
    url,
    mainEntityOfPage: url,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      name: "Dogecoin UK",
      url: site,
    },
    about: {
      "@type": "Thing",
      name: "Dogecoin",
    },
    articleSection: pillar.title,
    keywords: page.tags.join(", "),
  };

  const graph: object[] = [article];

  if (page.tags.includes("faq") || page.slug.includes("faq")) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.body.slice(0, 4).map((answer, i) => ({
        "@type": "Question",
        name: i === 0 ? page.hook : `${page.title} — point ${i + 1}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph.length === 1 ? graph[0] : graph) }}
    />
  );
}

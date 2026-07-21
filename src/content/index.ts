import { catalog } from "./catalog";
import { PILLARS, type PageNode, type Pillar } from "./types";

export { catalog, PILLARS };
export type { PageNode, Pillar };

export function getPage(slug: string): PageNode | undefined {
  return catalog.find((page) => page.slug === slug);
}

export function getAllSlugs(): string[] {
  return catalog.map((page) => page.slug);
}

export function getPagesByPillar(pillar: Pillar): PageNode[] {
  return catalog.filter((page) => page.pillar === pillar);
}

export function getHubs(): PageNode[] {
  return catalog.filter((page) => page.hub);
}

export function getRelated(page: PageNode): PageNode[] {
  return page.related
    .map((slug) => getPage(slug))
    .filter((item): item is PageNode => Boolean(item));
}

export function getBacklinks(slug: string): PageNode[] {
  return catalog.filter((page) => page.related.includes(slug) && page.slug !== slug);
}

export function getGraphStats() {
  const edges = catalog.reduce((sum, page) => sum + page.related.length, 0);
  return {
    nodes: catalog.length,
    edges,
    density: edges / Math.max(catalog.length, 1),
    byPillar: {
      clarity: getPagesByPillar("clarity").length,
      safety: getPagesByPillar("safety").length,
      belonging: getPagesByPillar("belonging").length,
    },
  };
}

/** Newest expansions sit at the end of the catalog — reverse for feeds. */
export function getLatestGuides(limit = 12): PageNode[] {
  return [...catalog].slice(-limit).reverse();
}

export function searchGuides(query: string, limit = 8): PageNode[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored = catalog
    .map((page) => {
      const hay = `${page.title} ${page.summary} ${page.hook} ${page.tags.join(" ")} ${page.slug}`.toLowerCase();
      let score = 0;
      if (page.title.toLowerCase().includes(q)) score += 5;
      if (page.slug.includes(q.replace(/\s+/g, "-"))) score += 4;
      if (hay.includes(q)) score += 2;
      for (const word of q.split(/\s+/)) {
        if (word.length > 2 && hay.includes(word)) score += 1;
      }
      return { page, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((row) => row.page);
}

export function getSearchIndex() {
  return catalog.map((page) => ({
    slug: page.slug,
    title: page.title,
    summary: page.summary,
    pillar: page.pillar,
  }));
}

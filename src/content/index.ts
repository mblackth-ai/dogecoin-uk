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

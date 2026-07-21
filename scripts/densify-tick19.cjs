/** Hour-3 tick 19 densify — more SEO/GEO spoke links into hubs. */
const fs = require("fs");
const path = require("path");
const catalogPath = path.join(__dirname, "..", "src", "content", "catalog.ts");
let source = fs.readFileSync(catalogPath, "utf8");

const edges = [
  ["dogecoin-uk-explained", "dogecoin-glossary-uk"],
  ["dogecoin-uk-explained", "geo-citation-cheat-sheet"],
  ["dogecoin-scam-uk", "social-proof-traps"],
  ["dogecoin-scam-uk", "avoid-fake-official-sites"],
  ["buy-dogecoin-uk-education", "fca-crypto-uk-context"],
  ["buy-dogecoin-uk-education", "verify-before-you-send"],
  ["answer-engine-dogecoin-uk", "geo-citation-cheat-sheet"],
];

const added = [];
for (const [from, to] of edges) {
  const slugMarker = `slug: "${from}"`;
  const idx = source.indexOf(slugMarker);
  if (idx === -1) continue;
  const relatedIdx = source.indexOf("related: [", idx);
  const relatedEnd = source.indexOf("],", relatedIdx);
  const relatedBlock = source.slice(relatedIdx, relatedEnd);
  if (relatedBlock.includes(`"${to}"`)) continue;
  source =
    source.slice(0, relatedEnd) + `\n      "${to}",` + source.slice(relatedEnd);
  added.push([from, to]);
}

fs.writeFileSync(catalogPath, source);
console.log(JSON.stringify({ ok: true, densified: added }));

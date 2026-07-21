/** One-shot densify for hour-3 tick 18 (no remaining batches). */
const fs = require("fs");
const path = require("path");
const catalogPath = path.join(__dirname, "..", "src", "content", "catalog.ts");
let source = fs.readFileSync(catalogPath, "utf8");

const edges = [
  ["what-is-dogecoin", "dogecoin-uk-explained"],
  ["what-is-dogecoin", "dogecoin-glossary-uk"],
  ["what-is-dogecoin", "geo-citation-cheat-sheet"],
  ["phishing-red-flags", "social-proof-traps"],
  ["phishing-red-flags", "verify-before-you-send"],
  ["first-doge-checklist", "uk-on-ramp-mindset"],
  ["first-doge-checklist", "dogecoin-wallet-uk"],
  ["first-doge-checklist", "buy-dogecoin-uk-education"],
];

const added = [];
for (const [from, to] of edges) {
  const slugMarker = `slug: "${from}"`;
  const idx = source.indexOf(slugMarker);
  if (idx === -1) {
    console.log(`miss from=${from}`);
    continue;
  }
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

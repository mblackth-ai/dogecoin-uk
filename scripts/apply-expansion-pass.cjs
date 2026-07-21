#!/usr/bin/env node
/**
 * Applies the next unused expansion batch into catalog.ts and densifies edges.
 * Usage: node scripts/apply-expansion-pass.cjs [pass-id]
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const catalogPath = path.join(root, "src", "content", "catalog.ts");
const statePath = path.join(__dirname, "expansion-state.json");
const { batches: batches1 } = require("./expansion-batches.cjs");
const { batches: batches2 } = require("./expansion-batches-hour2.cjs");
const { batches: batches3 } = require("./expansion-batches-hour3.cjs");
const { batches: batches4 } = require("./expansion-batches-retention.cjs");
const batches = [
  ...batches1.filter(Boolean),
  ...batches2.filter(Boolean),
  ...batches3.filter(Boolean),
  ...batches4.filter(Boolean),
];

const state = fs.existsSync(statePath)
  ? JSON.parse(fs.readFileSync(statePath, "utf8"))
  : { applied: [] };

const requested = process.argv[2];
const batch = requested
  ? batches.find((b) => b.id === requested)
  : batches.find((b) => !state.applied.includes(b.id));

if (!batch) {
  console.log(
    JSON.stringify({
      ok: false,
      reason: "no_batch",
      applied: state.applied,
      remaining: batches.filter((b) => !state.applied.includes(b.id)).map((b) => b.id),
    }),
  );
  process.exit(2);
}

let source = fs.readFileSync(catalogPath, "utf8");

function pageToTs(page) {
  const related = page.related.map((s) => `      "${s}",`).join("\n");
  const body = page.body.map((p) => `      ${JSON.stringify(p)},`).join("\n");
  const tags = page.tags.map((t) => `"${t}"`).join(", ");
  return `  {
    slug: "${page.slug}",
    title: ${JSON.stringify(page.title)},
    pillar: "${page.pillar}",
    summary: ${JSON.stringify(page.summary)},
    hook: ${JSON.stringify(page.hook)},
    tags: [${tags}],
    related: [
${related}
    ],
    body: [
${body}
    ],
  },`;
}

for (const page of batch.pages) {
  if (source.includes(`slug: "${page.slug}"`)) {
    console.log(`skip existing ${page.slug}`);
    continue;
  }
  const block = pageToTs(page);
  source = source.replace(/\n\];\s*$/, `\n${block}\n];\n`);
}

for (const [from, to] of batch.densify || []) {
  const slugMarker = `slug: "${from}"`;
  const idx = source.indexOf(slugMarker);
  if (idx === -1) {
    console.log(`densify miss from=${from}`);
    continue;
  }
  const relatedIdx = source.indexOf("related: [", idx);
  const relatedEnd = source.indexOf("],", relatedIdx);
  const relatedBlock = source.slice(relatedIdx, relatedEnd);
  if (relatedBlock.includes(`"${to}"`)) continue;
  source =
    source.slice(0, relatedEnd) +
    `\n      "${to}",` +
    source.slice(relatedEnd);
}

fs.writeFileSync(catalogPath, source);
state.applied.push(batch.id);
state.lastAppliedAt = new Date().toISOString();
fs.writeFileSync(statePath, JSON.stringify(state, null, 2));

const nodeCount = (source.match(/slug: "/g) || []).length;
console.log(
  JSON.stringify({
    ok: true,
    batch: batch.id,
    added: batch.pages.map((p) => p.slug),
    densify: batch.densify || [],
    approxNodes: nodeCount,
    applied: state.applied,
  }),
);

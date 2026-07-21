/**
 * Pass 3 — deepen subjects visitors ask about after the FAQ.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const catalogPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "content",
  "catalog.ts",
);

const newPages = [
  {
    slug: "dogecoin-and-banks-uk",
    title: "Dogecoin and UK banks",
    pillar: "clarity",
    summary: "How bank transfers and crypto accounts usually meet — calmly.",
    hook: "Your bank app and your wallet are different planets.",
    tags: ["uk", "banks", "basics"],
    related: [
      "uk-payment-rails",
      "uk-buying-basics",
      "exchange-account-hygiene",
      "not-financial-advice",
      "scam-patterns-uk",
    ],
    body: [
      "Banks move pounds. Crypto accounts and wallets move digital assets. The bridge is usually an exchange or similar service with its own rules.",
      "Unexpected bank messages about crypto can be phishing. Use numbers and apps you already trust — not the link in the text.",
      "Fees, freezes, and verification delays are normal friction, not always a conspiracy. Read the service’s own status notes.",
      "This is orientation, not banking advice. When money feels confusing, shrink the size and slow the clicks.",
    ],
  },
  {
    slug: "kids-and-crypto-talk",
    title: "Talking crypto with kids",
    pillar: "belonging",
    summary: "Age-appropriate honesty without fear theatre or hype.",
    hook: "Curiosity deserves a seatbelt.",
    tags: ["family", "uk", "teaching"],
    related: [
      "dogecoin-for-parents",
      "seed-phrase-never-share",
      "meme-literacy",
      "what-is-dogecoin",
      "phishing-red-flags",
    ],
    body: [
      "Explain that digital money is real enough to lose and meme-y enough to trick people.",
      "Teach the seed rule early. Treat giveaways as fiction until proven otherwise.",
      "Keep amounts educational if you experiment at all — never money meant for lunch or rent.",
      "Belonging includes protecting younger people from the carnival’s sharp edges.",
    ],
  },
  {
    slug: "bookmark-hygiene",
    title: "Bookmark hygiene",
    pillar: "safety",
    summary: "Type once, bookmark forever — starve phishing links of clicks.",
    hook: "Your bookmark bar is a security control.",
    tags: ["opsec", "habits"],
    related: [
      "phishing-red-flags",
      "stable-habits",
      "exchange-account-hygiene",
      "browser-extension-risk",
      "avoiding-urgency-traps",
    ],
    body: [
      "Save the real exchange, wallet docs, and explorer URLs yourself. Use those bookmarks when something urgent appears.",
      "Delete lookalike bookmarks you added in a rush. Check the domain characters slowly.",
      "On shared computers, prefer logged-out habits and no saved seeds — ever.",
      "A boring bookmark beats a clever memory when adrenaline is high.",
    ],
  },
  {
    slug: "dogecoin-history",
    title: "Dogecoin history (short)",
    pillar: "belonging",
    summary: "From joke coin to lasting culture — without the mythology fog.",
    hook: "Origins explain the tone. They do not excuse carelessness.",
    tags: ["history", "culture"],
    related: [
      "what-is-dogecoin",
      "is-dogecoin-a-joke",
      "culture-and-memes",
      "dogecoin-vs-bitcoin",
      "tipping-culture",
    ],
    body: [
      "Dogecoin launched as satire and found a community that liked tipping, humour, and lower intimidation than heavier crypto scenes.",
      "Attention waves came and went. The network and the culture both outlasted individual news cycles.",
      "History is useful for belonging — and for spotting people who rewrite it to sell something.",
      "Read the joke era as onboarding energy, then keep the safety habits of adults.",
    ],
  },
  {
    slug: "watching-without-watching",
    title: "Following DOGE without obsession",
    pillar: "belonging",
    summary: "Stay informed without letting charts rent your nervous system.",
    hook: "Attention is a balance you can overspend.",
    tags: ["psychology", "habits", "culture"],
    related: [
      "volatility-psychology",
      "hype-cycle-literacy",
      "stable-habits",
      "community-care",
      "reading-charts-calmly",
    ],
    body: [
      "Mute price bots if they make you worse at life. Check on a schedule, not a twitch.",
      "Prefer explainers and safety notes over minute-by-minute theatre.",
      "Belonging can be asynchronous — weekly community pulse beats hourly panic.",
      "If you only feel ‘in the pack’ while staring at candles, renegotiate the pack.",
    ],
  },
  {
    slug: "common-send-mistakes",
    title: "Common send mistakes",
    pillar: "safety",
    summary: "The errors that hurt even careful people.",
    hook: "Most losses are ordinary, not cinematic.",
    tags: ["checklist", "mistakes"],
    related: [
      "common-mistakes",
      "address-hygiene",
      "test-transactions",
      "address-poisoning",
      "fees-and-speed",
    ],
    body: [
      "Wrong address paste, skipped test send, rushed QR scan, and ‘I’ll move the rest later’ balances left hot.",
      "Sending under social pressure — livestreams, DMs, countdown pages — multiplies every mistake.",
      "Build a pre-flight: amount, asset, address compare, test dust, then the real send.",
      "Ordinary discipline beats rare genius.",
    ],
  },
];

function formatBody(lines) {
  return `body: [\n${lines.map((l) => `      ${JSON.stringify(l)},`).join("\n")}\n    ],`;
}

function formatPage(page) {
  const related = page.related.map((r) => `      "${r}",`).join("\n");
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
    ${formatBody(page.body)}
  },`;
}

let src = fs.readFileSync(catalogPath, "utf8");
const existing = new Set([...src.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]));

// dogecoin-history may already exist
const toAdd = newPages.filter((p) => !existing.has(p.slug));
for (const page of toAdd) {
  page.related = page.related.filter((r) => existing.has(r) || toAdd.some((x) => x.slug === r));
}

if (toAdd.length) {
  src = src.replace(/\];\s*$/, `${toAdd.map(formatPage).join("\n")}\n];\n`);
  for (const p of toAdd) {
    existing.add(p.slug);
    console.log("added", p.slug);
  }
} else {
  console.log("nothing new");
}

function addRelated(slug, extra) {
  const re = new RegExp(`(slug: "${slug}"[\\s\\S]*?related: \\[)([\\s\\S]*?)(\\],)`);
  const m = src.match(re);
  if (!m) return;
  const current = m[2];
  const missing = extra.filter((e) => existing.has(e) && !current.includes(`"${e}"`));
  if (!missing.length) return;
  src = src.replace(
    re,
    `$1${current.trimEnd()}${missing.map((e) => `\n      "${e}",`).join("")}\n    $3`,
  );
  console.log("linked", slug, "→", missing.join(", "));
}

addRelated("uk-buying-basics", ["dogecoin-and-banks-uk"]);
addRelated("dogecoin-for-parents", ["kids-and-crypto-talk"]);
addRelated("phishing-red-flags", ["bookmark-hygiene"]);
addRelated("common-mistakes", ["common-send-mistakes"]);
addRelated("volatility-psychology", ["watching-without-watching"]);
addRelated("is-dogecoin-a-joke", ["dogecoin-history"].filter((s) => existing.has(s)));

fs.writeFileSync(catalogPath, src);
console.log("total", [...src.matchAll(/slug: "/g)].length);

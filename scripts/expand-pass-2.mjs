/**
 * Second expansion pass — more visitor subjects + deepen thin newer pages.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.join(__dirname, "..", "src", "content", "catalog.ts");

const newPages = [
  {
    slug: "seed-phrase-never-share",
    title: "Never share a seed phrase",
    pillar: "safety",
    summary: "The one rule that prevents most total losses.",
    hook: "If they need your seed, they are not helping you.",
    tags: ["seed", "scams", "basics"],
    related: [
      "seed-phrases",
      "phishing-red-flags",
      "support-impersonation",
      "fake-giveaways",
      "first-doge-checklist",
    ],
    body: [
      "A seed phrase is the master key. Anyone who has it can empty the wallet — forever.",
      "Support staff, airdrops, ‘sync’ pages, and helpful strangers in DMs never need it.",
      "If a screen asks you to type twelve or twenty-four words to continue, close it.",
      "Teach this rule before you teach tips, tickers, or jokes. It is the belonging safety belt.",
    ],
  },
  {
    slug: "dogecoin-for-parents",
    title: "Dogecoin for parents",
    pillar: "belonging",
    summary: "A calm brief when your kid asks about DOGE.",
    hook: "Curiosity is good. Unverified apps are not.",
    tags: ["uk", "family", "beginner"],
    related: [
      "what-is-dogecoin",
      "phishing-red-flags",
      "seed-phrase-never-share",
      "not-financial-advice",
      "onboarding-a-friend",
    ],
    body: [
      "Dogecoin is digital money with a meme face. It can be fun to learn and risky to treat as guaranteed income.",
      "If a young person wants to explore, start with explainers and tiny amounts — not borrowed money or viral ‘giveaways.’",
      "Agree household rules: no seed sharing, no DM support, no skipping test sends.",
      "This is education culture, not a recommendation to buy. Calm beats cool.",
    ],
  },
  {
    slug: "avoiding-urgency-traps",
    title: "Avoiding urgency traps",
    pillar: "safety",
    summary: "Deadlines, countdowns, and ‘last chance’ scripts that empty wallets.",
    hook: "Legitimate help can wait five minutes.",
    tags: ["scams", "psychology", "opsec"],
    related: [
      "phishing-red-flags",
      "social-engineering",
      "volatility-psychology",
      "fake-giveaways",
      "support-impersonation",
    ],
    body: [
      "Urgency is the scam’s favourite font. Countdown timers and ‘account locked’ threats shrink your thinking.",
      "Create a personal rule: any money move that arrives with a deadline gets a pause and a second channel check.",
      "Call the institution on a number you looked up yourself — never the number in the scary message.",
      "Markets can move without you. Predators cannot eat what you refuse to rush.",
    ],
  },
  {
    slug: "how-confirmations-feel",
    title: "How confirmations feel",
    pillar: "clarity",
    summary: "Waiting for a send to settle without refreshing yourself into a mistake.",
    hook: "Pending is a status, not a personal insult.",
    tags: ["network", "basics"],
    related: [
      "confirmations-explained",
      "fees-and-speed",
      "network-congestion",
      "test-transactions",
      "reading-block-explorers",
    ],
    body: [
      "After you broadcast, the network needs time to include and bury your transaction under later blocks.",
      "Refreshing every second rarely speeds physics. It does increase the chance you double-send or click a phishing ‘speed up’ link.",
      "For everyday amounts, minutes are normal. For large amounts, patience is part of the fee you pay for calm.",
      "Use an explorer you typed yourself if you need a second opinion — not a link from a stranger.",
    ],
  },
  {
    slug: "uk-scam-reporting",
    title: "UK scam reporting basics",
    pillar: "safety",
    summary: "Where to point people after a loss — without fake recovery theatre.",
    hook: "Reporting is for patterns. Recovery DMs are often round two.",
    tags: ["uk", "scams", "incident"],
    related: [
      "if-you-got-scammed",
      "scam-patterns-uk",
      "recovery-scams",
      "support-impersonation",
      "screenshot-scams",
    ],
    body: [
      "If you were scammed, preserve evidence: addresses, txids, messages, and timelines. Do not pay a ‘recovery specialist’ who cold-contacts you.",
      "Use official UK reporting routes you navigate to yourself — Action Fraud and your bank/exchange support bookmarks.",
      "This page is orientation, not legal advice. A calm report helps investigators more than a panicked second payment.",
      "Tell friends the pattern. Belonging includes warning the pack.",
    ],
  },
  {
    slug: "meme-coins-vs-dogecoin",
    title: "Meme coins vs Dogecoin",
    pillar: "clarity",
    summary: "Same costume energy, different networks and risk profiles.",
    hook: "A doge face is not a network identity.",
    tags: ["basics", "risk", "compare"],
    related: [
      "what-is-dogecoin",
      "forks-and-clones",
      "what-dogecoin-is-not",
      "phishing-red-flags",
      "dogecoin-vs-bitcoin",
    ],
    body: [
      "‘Meme coin’ describes attention style. Dogecoin is a specific long-running cryptocurrency with its own history and network.",
      "Newer lookalikes can be harder to research, easier to abandon, and denser with fake listings.",
      "If someone says ‘it’s the same as DOGE,’ ask which chain, which ticker, and which download — then verify slowly.",
      "Clarity means naming the asset you mean, not the vibe you like.",
    ],
  },
  {
    slug: "community-care",
    title: "Community care",
    pillar: "belonging",
    summary: "Looking after people in DOGE spaces when markets get loud.",
    hook: "The pack is the product.",
    tags: ["community", "culture", "uk"],
    related: [
      "uk-community-pulse",
      "community-moderation",
      "volatility-psychology",
      "onboarding-a-friend",
      "dogecoin-etiquette",
    ],
    body: [
      "When price noise rises, so does loneliness, FOMO, and scam density. Care looks like slower answers and clearer boundaries.",
      "Check on quiet members. Repeat the seed rule. Pin the same safety links without shaming.",
      "Do not turn someone’s loss into content. Privacy is kindness.",
      "UK tone helps: understatement, practicality, and humour that does not punch down.",
    ],
  },
  {
    slug: "hardware-wallet-first-hour",
    title: "Hardware wallet first hour",
    pillar: "safety",
    summary: "Unbox, verify, initialise — without letting a YouTube tab drive.",
    hook: "The first hour teaches the habits that matter later.",
    tags: ["hardware", "custody", "checklist"],
    related: [
      "hardware-wallets",
      "seed-phrases",
      "backup-drill",
      "self-custody-checklist",
      "open-source-trust",
    ],
    body: [
      "Buy from a source you trust. Inspect packaging. Initialise on a device you control — never a ‘pre-set’ unit from a stranger.",
      "Write the seed offline. Do not photograph it. Confirm the device’s authenticity steps from official docs you typed.",
      "Practice a tiny receive and send before migrating serious balances.",
      "If a video asks you to enter the seed on a computer to ‘check,’ stop. That is the opposite of the product.",
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
const toAdd = newPages.filter((p) => !existing.has(p.slug));

// recovery-scams may not exist - check and retarget uk-scam-reporting related
function ensureRelatedExists(page) {
  page.related = page.related.filter((r) => existing.has(r) || toAdd.some((p) => p.slug === r));
  // If we filtered too hard, keep at least core links that exist
  if (page.related.length < 3) {
    const fallbacks = [
      "phishing-red-flags",
      "first-doge-checklist",
      "what-is-dogecoin",
      "self-custody-checklist",
      "uk-community-pulse",
    ].filter((r) => existing.has(r));
    page.related = [...new Set([...page.related, ...fallbacks])].slice(0, 5);
  }
}

for (const page of toAdd) ensureRelatedExists(page);

// Fix uk-scam-reporting if recovery-scams missing
const hasRecovery = existing.has("recovery-scams") || toAdd.some((p) => p.slug === "recovery-scams");
if (!hasRecovery) {
  const page = toAdd.find((p) => p.slug === "uk-scam-reporting");
  if (page) {
    page.related = page.related.map((r) =>
      r === "recovery-scams" ? "if-you-got-scammed" : r,
    );
    page.related = [...new Set(page.related)];
  }
}

if (toAdd.length) {
  const block = toAdd.map(formatPage).join("\n");
  src = src.replace(/\];\s*$/, `${block}\n];\n`);
  for (const p of toAdd) {
    existing.add(p.slug);
    console.log("added", p.slug);
  }
}

function addRelated(slug, extra) {
  const re = new RegExp(`(slug: "${slug}"[\\s\\S]*?related: \\[)([\\s\\S]*?)(\\],)`);
  const m = src.match(re);
  if (!m) return;
  const current = m[2];
  const missing = extra.filter((e) => existing.has(e) && !current.includes(`"${e}"`));
  if (!missing.length) return;
  const insertion = missing.map((e) => `\n      "${e}",`).join("");
  src = src.replace(re, `$1${current.trimEnd()}${insertion}\n    $3`);
  console.log("linked", slug, "→", missing.join(", "));
}

addRelated("seed-phrases", ["seed-phrase-never-share", "hardware-wallet-first-hour"]);
addRelated("phishing-red-flags", ["avoiding-urgency-traps", "seed-phrase-never-share"]);
addRelated("if-you-got-scammed", ["uk-scam-reporting"]);
addRelated("confirmations-explained", ["how-confirmations-feel"]);
addRelated("what-is-dogecoin", ["meme-coins-vs-dogecoin", "dogecoin-for-parents"]);
addRelated("uk-community-pulse", ["community-care"]);
addRelated("hardware-wallets", ["hardware-wallet-first-hour"]);
addRelated("social-engineering", ["avoiding-urgency-traps"]);

fs.writeFileSync(catalogPath, src);
console.log("pages now", [...src.matchAll(/slug: "/g)].length);

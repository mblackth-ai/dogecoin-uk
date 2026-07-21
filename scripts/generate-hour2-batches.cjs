#!/usr/bin/env node
/** Append pass-25..pass-50 into expansion-batches.cjs if missing. */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "expansion-batches.cjs");

const ideas = [
  ["hot-wallet-limits", "Hot wallet limits", "safety", "How much to keep online vs cold — a practical ceiling.", "Convenience has a balance cap.", ["custody", "limits"], ["cold-storage-tiers", "wallets-explained", "self-custody-checklist", "first-doge-checklist", "stable-habits"]],
  ["qr-code-hygiene", "QR code hygiene", "safety", "Scanning safely without feeding malware or wrong addresses.", "A QR is just text wearing sunglasses.", ["opsec", "addresses"], ["address-hygiene", "test-transactions", "phishing-red-flags", "mobile-wallet-hygiene", "common-mistakes"]],
  ["public-wifi-risks", "Public Wi‑Fi risks", "safety", "Cafés, airports, and the quiet ways sessions get stolen.", "Free Wi‑Fi is rarely free of intent.", ["opsec", "mobile"], ["mobile-wallet-hygiene", "password-and-2fa", "phishing-red-flags", "stable-habits", "support-impersonation"]],
  ["browser-extension-risk", "Browser extension risk", "safety", "Wallet extensions: power tools with sharp edges.", "If it can sign, it can also steal.", ["wallets", "browser"], ["wallets-explained", "phishing-red-flags", "open-source-trust", "seed-phrases", "hot-wallet-limits"]],
  ["backup-drill", "Backup drill", "safety", "Practice restoring a wallet before you need to.", "Untested backups are fan fiction.", ["custody", "checklist"], ["seed-phrases", "self-custody-checklist", "hardware-wallets", "first-doge-checklist", "stable-habits"]],
  ["transaction-notes", "Transaction notes", "clarity", "Labelling sends so future-you knows what happened.", "Memory is not a ledger.", ["habits", "records"], ["uk-tax-mindset", "reading-block-explorers", "first-doge-checklist", "stable-habits", "address-hygiene"]],
  ["utxo-mental-model", "UTXO mental model", "clarity", "Coins as notes, not a single bank balance number.", "Understanding inputs prevents weird fee surprises.", ["network", "basics"], ["how-dogecoin-works", "fees-and-speed", "reading-block-explorers", "dust-and-spam", "confirmations-explained"]],
  ["memo-and-messages", "Memos and messages", "clarity", "What can and cannot hitch a ride with a transfer.", "The chain is public; treat notes accordingly.", ["network", "privacy"], ["how-dogecoin-works", "address-hygiene", "reading-block-explorers", "dust-and-spam", "common-mistakes"]],
  ["market-orders-basics", "Market orders basics", "clarity", "Buy/sell buttons without pretending it’s advice.", "Execution mechanics ≠ destiny.", ["markets", "uk"], ["uk-buying-basics", "liquidity-basics", "not-financial-advice", "fees-and-speed", "volatility-psychology"]],
  ["spread-and-slippage", "Spread and slippage", "clarity", "The quiet cost between the price you saw and the fill you got.", "Screenshots are optimistic.", ["markets", "fees"], ["liquidity-basics", "market-orders-basics", "uk-buying-basics", "fees-and-speed", "common-mistakes"]],
  ["dogecoin-tips-irl", "DOGE tips IRL", "belonging", "Tipping in person without turning it into a scam demo.", "Warmth needs a verify step.", ["culture", "irl"], ["tipping-culture", "qr-code-hygiene", "meetups-and-irl", "test-transactions", "address-hygiene"]],
  ["uk-meetup-safety", "UK meetup safety", "belonging", "Run or attend a meetup without becoming a honeypot.", "Hospitality includes exits and boundaries.", ["uk", "irl"], ["meetups-and-irl", "community-moderation", "phishing-red-flags", "onboarding-a-friend", "uk-community-pulse"]],
  ["moderation-playbook", "Moderation playbook", "belonging", "Kick spam, keep kindness, refuse fake support theatre.", "Tone is infrastructure.", ["community", "trust"], ["community-moderation", "support-impersonation", "fake-giveaways", "uk-community-pulse", "proof-matrix"]],
  ["newcomer-script", "Newcomer script", "belonging", "What to say in the first five minutes to a curious friend.", "Teaching is belonging with a checklist.", ["teaching", "community"], ["onboarding-a-friend", "what-is-dogecoin", "first-doge-checklist", "phishing-red-flags", "meme-literacy"]],
  ["hype-cycle-literacy", "Hype cycle literacy", "belonging", "Recognising attention waves without riding them blind.", "Volume is not validation.", ["psychology", "culture"], ["volatility-psychology", "influencer-disclosures", "why-people-buy-doge", "myths-to-ignore", "not-financial-advice"]],
  ["screenshot-scams", "Screenshot scams", "safety", "Fake balances, fake tickets, fake ‘proof of send’.", "Pixels are costumes.", ["scams", "opsec"], ["reading-block-explorers", "fake-giveaways", "support-impersonation", "phishing-red-flags", "social-engineering"]],
  ["recovery-phrase-storage", "Recovery phrase storage", "safety", "Where to put seeds that isn’t ‘in photos’ or ‘in Slack’.", "Boring storage beats clever storage.", ["custody", "seed"], ["seed-phrases", "paper-wallets", "backup-drill", "family-and-inheritance", "self-custody-checklist"]],
  ["device-compromise", "If your device is compromised", "safety", "Assume malware, move funds, rotate everything.", "Speed matters; panic does not.", ["opsec", "incident"], ["if-you-got-scammed", "seed-phrases", "password-and-2fa", "hot-wallet-limits", "mobile-wallet-hygiene"]],
  ["exchange-outages", "Exchange outages", "clarity", "What ‘withdrawals paused’ really means for your plan.", "Convenience risk shows up on busy days.", ["exchange", "risk"], ["exchange-vs-wallet", "uk-buying-basics", "self-custody-checklist", "first-doge-checklist", "stable-habits"]],
  ["withdrawal-allowlists", "Withdrawal allowlists", "safety", "Friction that stops a hijacked account emptying overnight.", "Slow is a feature.", ["exchange", "opsec"], ["password-and-2fa", "exchange-vs-wallet", "exchange-outages", "stable-habits", "common-mistakes"]],
  ["address-poisoning", "Address poisoning", "safety", "Dust sends that trick you into copying a lookalike.", "History tabs can lie by proximity.", ["opsec", "addresses"], ["dust-and-spam", "address-hygiene", "test-transactions", "reading-block-explorers", "qr-code-hygiene"]],
  ["time-locked-habits", "Time-locked habits", "safety", "Cooling-off rules before large moves.", "Adrenaline is not a signing key.", ["habits", "psychology"], ["volatility-psychology", "stable-habits", "test-transactions", "hot-wallet-limits", "first-doge-checklist"]],
  ["dogecoin-faqs", "Dogecoin FAQs", "clarity", "Short answers to the questions UK newcomers actually ask.", "Clarity is a FAQ with spine.", ["basics", "faq"], ["what-is-dogecoin", "doge-glossary", "is-dogecoin-a-joke", "not-financial-advice", "uk-search-intent"]],
  ["supply-myths", "Supply myths", "clarity", "Issuance stories people weaponise in arguments.", "A schedule is not a sermon.", ["economics", "myths"], ["inflation-and-supply", "myths-to-ignore", "dogecoin-vs-bitcoin", "mining-and-security", "dogecoin-faqs"]],
  ["kindness-without-naivety", "Kindness without naivety", "belonging", "Do only good everyday — with verify steps attached.", "Warmth that checks twice.", ["culture", "trust"], ["tipping-culture", "charity-and-causes", "phishing-red-flags", "meme-literacy", "proof-matrix"]],
  ["uk-english-tone", "UK English tone", "belonging", "Why this site sounds dry on purpose.", "Dry humour is a trust signal here.", ["uk", "brand"], ["why-uk-domain", "uk-search-intent", "uk-community-pulse", "unofficial-disclaimer", "proof-matrix"]],
];

let src = fs.readFileSync(file, "utf8");
if (src.includes('"pass-25"') || src.includes("pass-25")) {
  console.log(JSON.stringify({ ok: true, already: true }));
  process.exit(0);
}

const start = 25;
const batches = ideas.map((idea, i) => {
  const [slug, title, pillar, summary, hook, tags, related] = idea;
  const id = `pass-${String(start + i).padStart(2, "0")}`;
  return {
    id,
    pages: [
      {
        slug,
        title,
        pillar,
        summary,
        hook,
        tags,
        related,
        body: [
          summary,
          `This page deepens the ${pillar} pillar and exists to catch a specific search or curiosity intent.`,
          "Follow at least two related links before you act on anything irreversible.",
          "UK frame: verify outside DMs, prefer boredom over bravado, and keep amounts you can emotionally delete while learning.",
        ],
      },
    ],
    densify: [
      [related[0], slug],
      [related[1], slug],
    ],
  };
});

const insert = ",\n" + batches.map((b) => JSON.stringify(b, null, 2)).join(",\n");
if (!src.trimEnd().endsWith("};")) {
  console.error("unexpected file ending");
  process.exit(1);
}
src = src.replace(/\n\};\s*$/, `${insert}\n  ],\n};\n`);
// The file structure is module.exports = { batches: [ ... ], }; 
// My replace might be wrong. Read end of file carefully.
fs.writeFileSync(file + ".bak", fs.readFileSync(file));

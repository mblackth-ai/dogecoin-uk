#!/usr/bin/env node
/** Generate pass-04..pass-20 into expansion-batches.cjs by appending. */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "expansion-batches.cjs");

const ideas = [
  ["paper-wallets","Paper wallets","safety","Paper backups: when they help and how they fail.","Analog is not automatically safe.",["custody","backup"],["seed-phrases","self-custody-checklist","hardware-wallets","common-mistakes","wallets-explained"]],
  ["multisig-basics","Multisig basics","safety","Shared control without shared chaos.","One key is a single story.",["custody","advanced"],["self-custody-checklist","hardware-wallets","seed-phrases","wallets-explained","exchange-vs-wallet"]],
  ["liquidity-basics","Liquidity basics","clarity","Why the price you see is not always the price you get.","Screens lie politely.",["markets","basics"],["uk-buying-basics","fees-and-speed","not-financial-advice","common-mistakes","why-people-buy-doge"]],
  ["volatility-psychology","Volatility psychology","belonging","How fear and euphoria hijack good procedures.","Your nervous system is part of the stack.",["psychology","culture"],["first-doge-checklist","common-mistakes","not-financial-advice","why-people-buy-doge","social-engineering"]],
  ["charity-and-causes","Charity and causes","belonging","DOGE charity energy — verify before you donate.","Kindness attracts counterfeits.",["culture","trust"],["tipping-culture","fake-giveaways","phishing-red-flags","culture-and-memes","uk-community-pulse"]],
  ["nodes-and-clients","Nodes and clients","clarity","What running software for the network actually means.","Participation has layers.",["network","software"],["how-dogecoin-works","mining-and-security","reading-block-explorers","what-is-dogecoin","confirmations-explained"]],
  ["mobile-wallet-hygiene","Mobile wallet hygiene","safety","Phones are convenient attack surfaces.","Your pocket computer is a fortress only if you treat it like one.",["mobile","opsec"],["wallets-explained","seed-phrases","phishing-red-flags","password-and-2fa","self-custody-checklist"]],
  ["uk-tax-mindset","UK tax mindset","clarity","Record-keeping mindset — not advice, just future-you kindness.","HMRC does not accept vibes.",["uk","records"],["uk-buying-basics","not-financial-advice","exchange-vs-wallet","first-doge-checklist","why-uk-domain"]],
  ["influencer-disclosures","Influencer disclosures","belonging","How to read paid enthusiasm without becoming the exit liquidity.","Charisma is not due diligence.",["culture","media"],["why-people-buy-doge","not-financial-advice","social-engineering","fake-giveaways","proof-matrix"]],
  ["test-transactions","Test transactions","safety","The tiny send that prevents the huge regret.","Ritual beats bravado.",["checklist","opsec"],["address-hygiene","fees-and-speed","first-doge-checklist","common-mistakes","confirmations-explained"]],
  ["forks-and-clones","Forks and clones","clarity","Lookalike coins and why names are not destiny.","Branding is cheap. Networks are not.",["basics","risk"],["what-is-dogecoin","dogecoin-vs-bitcoin","phishing-red-flags","myths-to-ignore","doge-glossary"]],
  ["community-moderation","Community moderation","belonging","Keeping UK spaces kind without becoming a cult.","Boundaries are hospitality.",["community","uk"],["uk-community-pulse","meetups-and-irl","phishing-red-flags","unofficial-disclaimer","creators-and-builders"]],
  ["cold-storage-tiers","Cold storage tiers","safety","Match custody tier to amount and life chaos.","Not everything needs a vault. Some things do.",["custody","tiers"],["hardware-wallets","paper-wallets","self-custody-checklist","exchange-vs-wallet","first-doge-checklist"]],
  ["meme-literacy","Meme literacy","belonging","Reading jokes so you do not fund them blindly.","Laughter is onboarding — and camouflage.",["culture","literacy"],["culture-and-memes","much-wow-lexicon","fake-giveaways","is-dogecoin-a-joke","tipping-culture"]],
  ["network-congestion","Network congestion","clarity","What busy moments feel like and how to respond.","Patience is a fee strategy.",["fees","network"],["fees-and-speed","confirmations-explained","how-dogecoin-works","reading-block-explorers","common-mistakes"]],
  ["family-and-inheritance","Family and inheritance","safety","Harsh topic, practical notes for shared reality.","Secrets that die with you are not a plan.",["custody","life"],["seed-phrases","self-custody-checklist","multisig-basics","hardware-wallets","not-financial-advice"]],
  ["onboarding-a-friend","Onboarding a friend","belonging","Teach DOGE without dunking or dumping risk on them.","The best flex is someone else staying safe.",["community","teaching"],["first-doge-checklist","phishing-red-flags","what-is-dogecoin","meetups-and-irl","tipping-culture"]],
  ["stable-habits","Stable habits","safety","Daily/weekly rituals that reduce unforced errors.","Discipline is a safety feature.",["habits","checklist"],["first-doge-checklist","password-and-2fa","address-hygiene","volatility-psychology","common-mistakes"]],
  ["open-source-trust","Open source trust","clarity","How to think about software trust without becoming a auditor cosplay.","Verify what you can. Contain what you cannot.",["software","trust"],["wallets-explained","nodes-and-clients","phishing-red-flags","self-custody-checklist","proof-matrix"]],
  ["uk-search-intent","UK search intent","belonging","Why people type dogecoin.co.uk — and how we answer.","The query is an emotion with keywords.",["uk","seo","psychology"],["why-uk-domain","what-is-dogecoin","phishing-red-flags","join-the-list","proof-matrix"]],
  ["dust-and-spam","Dust and spam","clarity","Tiny unexpected amounts and why they appear.","Not every surprise is a gift.",["network","privacy"],["address-hygiene","reading-block-explorers","phishing-red-flags","wallets-explained","common-mistakes"]],
];

const batches = [];
for (let i = 0; i < ideas.length; i += 1) {
  const [slug, title, pillar, summary, hook, tags, related] = ideas[i];
  const passNum = String(i + 4).padStart(2, "0");
  const densifyFrom = related[0];
  batches.push({
    id: `pass-${passNum}`,
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
          `${summary} This page exists so the graph has another door for that intent.`,
          `Pillar alignment: ${pillar}. Read it slowly, then follow two related links.`,
          `UK frame: keep procedures boring and verify outside DMs.`,
          `When in doubt, return to the Safety hub before acting.`,
        ],
      },
    ],
    densify: [
      [densifyFrom, slug],
      [related[1], slug],
    ],
  });
}

let src = fs.readFileSync(file, "utf8");
// Insert before final `};` of module.exports - actually file ends with `};` after batches array
if (src.includes("pass-04")) {
  console.log("already generated");
  process.exit(0);
}
const insert = batches
  .map((b) => JSON.stringify(b, null, 2))
  .join(",\n");
src = src.replace(/\n  \],\n\};\n?$/, `,\n${insert}\n  ],\n};\n`);
fs.writeFileSync(file, src);
console.log(`appended ${batches.length} batches`);

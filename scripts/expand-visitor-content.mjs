/**
 * One-shot expander: replace stub guide bodies + append new visitor guides.
 * Run from dogecoin/: node scripts/expand-visitor-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.join(__dirname, "..", "src", "content", "catalog.ts");

const bodies = {
  "paper-wallets": [
    "A paper wallet is usually a printed or handwritten backup of keys or a seed — useful when you want something offline that does not depend on a phone battery.",
    "Paper fails in ordinary ways: water, fire, fading ink, being photographed ‘just in case,’ or left in a drawer someone else can find.",
    "If you use paper, treat it like cash in a safe: offline, durable packaging, no cloud photos, and a tested restore path.",
    "For many people a metal seed backup plus a hardware wallet is calmer than a clever DIY printout. Pick boring on purpose.",
  ],
  "multisig-basics": [
    "Multisig means more than one key must approve a spend. It reduces the ‘one stolen phone empties everything’ failure mode.",
    "It also adds process: more devices, more backups, more ways to lock yourself out if you improvise.",
    "Start by understanding single-signature custody well. Multisig is for amounts and life situations that justify the extra ceremony.",
    "UK practical note: document who holds which key and how recovery works — secrets that only live in one head are not a plan.",
  ],
  "liquidity-basics": [
    "The price on a big chart is a headline. The price you get depends on how deep the market is when you trade and how large your order is.",
    "Thin liquidity means small buys or sells can move the price against you. That gap is not a conspiracy — it is market depth.",
    "Exchanges and pairs differ. A quiet Sunday and a viral Monday are not the same shopping trip.",
    "This is mechanics, not advice: size down when books look thin, and never treat a screenshot mid-candle as a promise.",
  ],
  "volatility-psychology": [
    "Price swings hijack attention. Fear and euphoria both push people to skip the boring checks they already know.",
    "A useful rule: when your body feels urgent, your procedure gets longer — not shorter. Verify addresses twice. Pause DMs.",
    "Belonging helps here: calm friends beat hype group chats. Mute threads that treat every candle as destiny.",
    "You are allowed to sit out a carnival. Literacy includes knowing when not to click.",
  ],
  "charity-and-causes": [
    "Dogecoin culture has a real kindness streak — tips, fundraisers, and cause energy that feels like the point.",
    "Scammers wear the same costume. Fake charity wallets, lookalike orgs, and ‘match my donation’ pressure are common.",
    "Verify the organisation independently, prefer known channels, and never send to an address that arrived only in a DM.",
    "Warmth without verification is how good people fund bad actors. Kindness still checks the invoice.",
  ],
  "nodes-and-clients": [
    "A node is software that talks to the Dogecoin network: it relays transactions, checks rules, and helps keep a shared history honest.",
    "Most people use a light wallet that trusts other infrastructure. Running a full client is optional participation, not a moral exam.",
    "If you run software, download it from sources you typed yourself and verify releases the way the project recommends.",
    "You do not need a rack of servers to belong here — understanding what a node is already removes a layer of mystery.",
  ],
  "mobile-wallet-hygiene": [
    "Phones are wonderful for small amounts and terrible as the only vault for life-changing balances.",
    "Keep the OS updated, lock the device, avoid random wallet apps, and never type a seed into a website ‘to restore.’",
    "Screen overlays, malicious keyboards, and fake apps exist. Install from places you navigated to on purpose.",
    "If you travel or use public Wi‑Fi, treat signing moments as higher risk — or wait until you are on trusted connectivity.",
  ],
  "uk-tax-mindset": [
    "This is not tax advice. It is a mindset: crypto activity can create records you will wish you had later.",
    "Note dates, amounts, fees, and why you moved funds — in a private system you control, not only in exchange UIs.",
    "Exchanges change products. Screenshots rot. A simple spreadsheet habit beats forensic archaeology.",
    "When in doubt, ask a qualified UK professional about your situation. Calm records make that conversation cheaper.",
  ],
  "influencer-disclosures": [
    "Charisma sells. Disclosures often arrive in tiny fonts — if they arrive at all.",
    "Treat loud certainty about price as entertainment until proven otherwise. Ask what they gain if you click.",
    "Paid promotions, referral links, and ‘educational’ channels can still be sales funnels with better lighting.",
    "Your belonging does not require you to copy anyone’s bag. Borrow curiosity; keep your own checklist.",
  ],
  "test-transactions": [
    "Before a meaningful send, ship a dust amount to the same address and wait for confirmation you can see.",
    "That ritual catches typos, wrong networks, malicious QR overlays, and ‘I pasted the old address’ mistakes.",
    "Scammers hate delays. Anyone who demands you skip the test is volunteering as a risk signal.",
    "Make the test send boring and automatic — like locking a door — so adrenaline cannot talk you out of it.",
  ],
  "forks-and-clones": [
    "A familiar doge face on a listing is not the same as Dogecoin. Names and memes are cheap to copy.",
    "Check tickers, contract or network details where relevant, and whether you are somehow off the asset you meant.",
    "Clones often appear during hype waves because attention is the distribution channel.",
    "If you are unsure, stop and re-read a primary explainer — confusion is cheaper than a wrong deposit.",
  ],
  "community-moderation": [
    "Good UK spaces feel welcoming and bounded: humour yes, fake support DMs no, seed requests never.",
    "Moderation is hospitality. Removing spam and pressure tactics protects newcomers without turning chats into purity contests.",
    "Pin plain rules. Repeat them when markets get loud. Consistency beats clever one-off judgements.",
    "Belonging scales when people know the room will not abandon them to predators for engagement metrics.",
  ],
  "cold-storage-tiers": [
    "Match custody to amount and chaos. Pocket change can live hot; rent money should not.",
    "Tier 1: exchange or phone wallet for learning amounts. Tier 2: self-custody with tested backups. Tier 3: hardware and offline habits for serious balances.",
    "Moving up a tier should be boring and rehearsed — not improvised during a spike.",
    "The goal is sleep, not maximal cosplay. Complexity you cannot operate is not security.",
  ],
  "meme-literacy": [
    "Memes onboard people faster than whitepapers. They also camouflage urgency, fake giveaways, and tribal pressure.",
    "Laugh, then verify. A joke that demands a seed, a connect, or an immediate send is not a joke.",
    "Learn the lexicon so slang cannot hide a scam script. Belonging includes shared language — and shared red lines.",
    "You can love the culture and still refuse to fund a punchline aimed at your wallet.",
  ],
  "network-congestion": [
    "Busy moments mean more competition for block space. Fees and wait times can rise; panic usually makes them feel worse.",
    "If a send is not urgent, waiting is a valid strategy. If it is urgent, pay for priority without rage-clicking twice.",
    "Double-broadcasting because you are impatient can create confusion — read your wallet’s status calmly.",
    "Congestion is weather. Pack a procedure, not a prophecy.",
  ],
  "family-and-inheritance": [
    "If only you know how to recover the wallet, your family inherits a mystery box.",
    "This is not legal advice. It is a prompt: document a recovery path a trusted person can follow without improvising under grief.",
    "Share enough to recover, not enough to casually spend. Multisig or sealed instructions can help some households.",
    "Have the awkward conversation once while everyone is calm. Future-you will not get a better moment.",
  ],
  "onboarding-a-friend": [
    "Teach the mental model and one safety rule before you teach the meme: never share a seed phrase.",
    "Offer a tiny practice send and two calm links — one clarity, one safety — instead of a portfolio pep talk.",
    "Do not dunk on beginners. Humiliation pushes people into the arms of louder, worse teachers.",
    "The flex is a friend who still has their coins and their dignity next month.",
  ],
  "stable-habits": [
    "Safety is mostly boring repetition: updates, locks, bookmarks, test sends, and not rushing DMs.",
    "Weekly: skim account alerts, confirm your backup still exists, delete a phishing email without clicking.",
    "During hype: shrink size, lengthen checks, mute the loudest rooms.",
    "Habits beat heroics. Design a routine you will actually keep on a tired Tuesday.",
  ],
  "open-source-trust": [
    "Open source means more eyes can look — not that you personally audited every line.",
    "Practical trust: known projects, official download paths, signed releases where offered, and small amounts while you learn.",
    "Closed apps can be fine for tiny experiments and terrible as unexplained vaults. Ask what failure looks like.",
    "Contain risk you cannot verify. That is clarity, not paranoia.",
  ],
  "uk-search-intent": [
    "People search for Dogecoin in the UK because they want a calm local explanation — not a carnival tip.",
    "Typical quiet questions: what is it, is it a scam, how do wallets work, and where do I start without looking foolish.",
    "This site answers those questions in plain English, marks itself unofficial, and refuses price prophecy on purpose.",
    "If that is why you arrived: you are in the right place. Pick Clarity, Safety, or Belonging and take the next link.",
  ],
  "dust-and-spam": [
    "Dust is a tiny unexpected amount landing in a wallet. Sometimes it is noise; sometimes it is a tracking or social trick.",
    "Do not rush to ‘claim,’ connect, or follow instructions that arrive with the surprise.",
    "Address hygiene and not publishing a hot wallet everywhere reduces how often strangers can poke you.",
    "If something looks like a gift with homework attached, assume the homework is the attack.",
  ],
};

const newPages = [
  {
    slug: "address-poisoning",
    title: "Address poisoning",
    pillar: "safety",
    summary: "Lookalike addresses in your history designed to trick a hasty paste.",
    hook: "Your transaction list can lie by omission — and by resemblance.",
    tags: ["scams", "addresses", "opsec"],
    related: [
      "address-hygiene",
      "test-transactions",
      "phishing-red-flags",
      "screenshot-scams",
      "common-mistakes",
    ],
    body: [
      "Attackers sometimes send tiny amounts from addresses that look like ones you use, hoping you copy the wrong one later.",
      "Always copy from your intended contact or wallet book — not from a random incoming line that ‘looks familiar.’",
      "Compare more than the first and last characters. Haste is the exploit.",
      "A dust test to a verified address beats a confident paste every time.",
    ],
  },
  {
    slug: "sim-swap-awareness",
    title: "SIM-swap awareness",
    pillar: "safety",
    summary: "When your phone number stops being a safe second factor.",
    hook: "If they can port your number, SMS codes become their codes.",
    tags: ["opsec", "uk", "2fa"],
    related: [
      "password-and-2fa",
      "support-impersonation",
      "mobile-wallet-hygiene",
      "exchange-vs-wallet",
      "stable-habits",
    ],
    body: [
      "SIM-swap attacks trick a mobile provider into moving your number so SMS codes and calls route to the attacker.",
      "Prefer app-based or hardware second factors over SMS where a service allows it.",
      "UK angle: set provider PINs/passwords and treat unexpected loss of signal as a possible security event.",
      "Exchanges and email are high-value targets — lock them down before you need the lesson.",
    ],
  },
  {
    slug: "exchange-account-hygiene",
    title: "Exchange account hygiene",
    pillar: "safety",
    summary: "Treat exchange logins like a bank tab you share with the internet.",
    hook: "Convenience accounts deserve boring paranoia.",
    tags: ["exchanges", "opsec", "uk"],
    related: [
      "exchange-vs-wallet",
      "password-and-2fa",
      "phishing-red-flags",
      "sim-swap-awareness",
      "uk-buying-basics",
    ],
    body: [
      "Use unique passwords, strong 2FA, and withdrawal allowlists if offered.",
      "Bookmark the real domain. Never log in from a DM link after a ‘security alert.’",
      "Keep only what you are actively using on an exchange; long-term idle balances raise the blast radius.",
      "Not advice to buy or sell — advice to not gift access to strangers.",
    ],
  },
  {
    slug: "reading-charts-calmly",
    title: "Reading charts calmly",
    pillar: "clarity",
    summary: "What candles show, what they don’t, and how to avoid fortune-teller brain.",
    hook: "A chart is a history sketch — not a prophecy engine.",
    tags: ["markets", "literacy"],
    related: [
      "liquidity-basics",
      "volatility-psychology",
      "not-financial-advice",
      "hype-cycle-literacy",
      "why-people-buy-doge",
    ],
    body: [
      "Charts summarise past trades. They do not owe you a future.",
      "Zoom level changes the story. A dramatic five-minute move can be a shrug on the weekly view.",
      "Indicators are opinions with maths. Treat them as questions, not orders.",
      "If a chart makes you feel certain, step away before you act — certainty is often the tell.",
    ],
  },
  {
    slug: "dogecoin-etiquette",
    title: "Dogecoin etiquette",
    pillar: "belonging",
    summary: "How to show up in DOGE spaces without being that person.",
    hook: "Kindness is the culture — urgency is usually the counterfeit.",
    tags: ["culture", "community"],
    related: [
      "culture-and-memes",
      "tipping-culture",
      "community-moderation",
      "onboarding-a-friend",
      "meme-literacy",
    ],
    body: [
      "Lead with curiosity, not flexes. Ask before you pitch. Never request seeds or ‘wallet verification.’",
      "Tips are optional joy — not an entrance fee. Pressure tips are a smell.",
      "Correct gently. Dunking on newcomers teaches them to hide questions until a scammer answers first.",
      "UK rooms especially reward dry humour and clear boundaries. Bring both.",
    ],
  },
  {
    slug: "weekend-safety-drill",
    title: "Weekend safety drill",
    pillar: "safety",
    summary: "A 20-minute Saturday checklist that prevents Monday regret.",
    hook: "Practice when nothing is on fire.",
    tags: ["habits", "checklist"],
    related: [
      "stable-habits",
      "backup-drill",
      "test-transactions",
      "password-and-2fa",
      "first-doge-checklist",
    ],
    body: [
      "Confirm backups still exist. Update phone and wallet apps. Review exchange 2FA.",
      "Delete one risky browser extension or leftover ‘research’ bookmark that looks sketchy.",
      "Send yourself a dust test on a wallet you actually use — keep the muscle memory warm.",
      "End by muting one hype source. Calm is a security control.",
    ],
  },
  {
    slug: "what-dogecoin-is-not",
    title: "What Dogecoin is not",
    pillar: "clarity",
    summary: "Clear negatives so the mental model stops leaking.",
    hook: "Defining the edges makes the centre easier.",
    tags: ["basics", "myths"],
    related: [
      "what-is-dogecoin",
      "myths-to-ignore",
      "is-dogecoin-a-joke",
      "not-financial-advice",
      "unofficial-disclaimer",
    ],
    body: [
      "Dogecoin is not a guaranteed return, not a bank with UK deposit protection, and not ‘official support’ in your DMs.",
      "It is not financial advice when someone on a stage shouts a number.",
      "This site is not the Foundation and not your broker.",
      "Once the negatives are clear, the useful positives — digital cash, culture, open network — sit still long enough to learn.",
    ],
  },
  {
    slug: "uk-payment-rails",
    title: "UK payment rails to crypto",
    pillar: "clarity",
    summary: "How pounds usually meet DOGE — without turning it into a shopping list of tips.",
    hook: "The on-ramp is where many first mistakes happen.",
    tags: ["uk", "buying", "basics"],
    related: [
      "uk-buying-basics",
      "exchange-vs-wallet",
      "not-financial-advice",
      "exchange-account-hygiene",
      "first-doge-checklist",
    ],
    body: [
      "Most UK newcomers meet crypto through an exchange account funded by familiar payment methods — with fees, delays, and verification steps.",
      "Read the fee schedule before you cheer the ticker. Spreads hide in ‘zero fee’ marketing sometimes.",
      "This is not a recommendation of any platform — only a reminder that the rail you use is part of the risk story.",
      "When in doubt, start tiny, enable 2FA first, and keep a written note of what you did.",
    ],
  },
  {
    slug: "community-glossary-uk",
    title: "UK community glossary",
    pillar: "belonging",
    summary: "Local flavour words and phrases you will hear in British DOGE chats.",
    hook: "Shared slang is a door — unless someone weaponises it.",
    tags: ["uk", "culture", "glossary"],
    related: [
      "much-wow-lexicon",
      "uk-community-pulse",
      "meme-literacy",
      "dogecoin-etiquette",
      "doge-glossary",
    ],
    body: [
      "You will hear global meme words and British understatement in the same thread — both are normal.",
      "‘Having a look’ can mean serious research or polite curiosity. Ask which.",
      "If slang is used to rush you past a safety step, translate it back to plain English and slow down.",
      "Belonging is easier when you can laugh at the lexicon without letting it override your checklist.",
    ],
  },
  {
    slug: "confirm-before-connect",
    title: "Confirm before you connect",
    pillar: "safety",
    summary: "Wallet-connect prompts: when to pause and what to read.",
    hook: "A connect button is a power tool, not a welcome mat.",
    tags: ["wallets", "phishing", "browser"],
    related: [
      "browser-extension-risk",
      "phishing-red-flags",
      "open-source-trust",
      "hot-wallet-limits",
      "fake-giveaways",
    ],
    body: [
      "Connecting a wallet tells a site who you are on-chain and often asks permission to propose transactions.",
      "Read the origin. Prefer typed bookmarks. Reject surprise prompts after a link from a stranger.",
      "You can disconnect. You can use a burner wallet for experiments. You can refuse.",
      "If the site needs your seed to ‘connect,’ it is not connecting — it is draining.",
    ],
  },
];

function formatBody(lines) {
  return `body: [\n${lines.map((l) => `      ${JSON.stringify(l)},`).join("\n")}\n    ],`;
}

function formatPage(page) {
  return `  {
    slug: ${JSON.stringify(page.slug)},
    title: ${JSON.stringify(page.title)},
    pillar: ${JSON.stringify(page.pillar)},
    summary: ${JSON.stringify(page.summary)},
    hook: ${JSON.stringify(page.hook)},
    tags: ${JSON.stringify(page.tags)},
    related: ${JSON.stringify(page.related, null, 6).replace(/^/gm, "    ").trimStart()},
    ${formatBody(page.body)}
  },`;
}

let src = fs.readFileSync(catalogPath, "utf8");

// Soften catalog header comment (builder → maintainer, not visitor-facing anyway)
src = src.replace(
  /\/\*\*[\s\S]*?\*\/\s*export const catalog/,
  `/** Visitor-facing guide library. Every page links out via \`related\`. */\nexport const catalog`,
);

for (const [slug, lines] of Object.entries(bodies)) {
  const re = new RegExp(
    `(slug: "${slug}"[\\s\\S]*?)body: \\[[\\s\\S]*?\\],\\n  \\}`,
    "m",
  );
  if (!re.test(src)) {
    console.warn("missing stub", slug);
    continue;
  }
  src = src.replace(re, `$1${formatBody(lines)}\n  }`);
  console.log("expanded", slug);
}

// Fix visitor-facing meta phrases in otherwise good pages
const replacements = [
  [
    "Want updates? The join funnel on the home page is the quiet doorbell.",
    "Want updates? Use Join on the home page — the quiet doorbell for the UK list.",
  ],
  [
    "Use the home page funnel to request the update stream that matches you: explainers, safety, community, or builders.",
    "Use Join on the home page to request the update stream that matches you: explainers, safety, community, or builders.",
  ],
  [
    "A safe meetup grows the graph offline.",
    "A safe meetup grows the community offline.",
  ],
];

for (const [from, to] of replacements) {
  if (!src.includes(from)) console.warn("phrase missing:", from.slice(0, 40));
  src = src.split(from).join(to);
}

// Retitle uk-search-intent for visitors
src = src.replace(
  `slug: "uk-search-intent",
    title: "UK search intent",
    pillar: "belonging",
    summary: "Why people type dogecoin.co.uk — and how we answer.",
    hook: "The query is an emotion with keywords.",
    tags: ["uk", "seo", "psychology"],`,
  `slug: "uk-search-intent",
    title: "Finding DOGE answers in the UK",
    pillar: "belonging",
    summary: "Why UK visitors look for a calm local explanation — and how this site responds.",
    hook: "The search is usually a feeling wearing keywords.",
    tags: ["uk", "beginner", "trust"],`,
);

// join-the-list tags
src = src.replace('tags: ["funnel", "community"],', 'tags: ["updates", "community"],');

// Append new pages before closing ];
const existing = new Set([...src.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]));
const toAdd = newPages.filter((p) => !existing.has(p.slug));
if (toAdd.length) {
  const block = toAdd.map(formatPage).join("\n");
  if (!src.trimEnd().endsWith("];")) throw new Error("catalog end marker missing");
  src = src.replace(/\];\s*$/, `${block}\n];\n`);
  for (const p of toAdd) console.log("added", p.slug);
}

// Wire a few hub related links to new pages
function addRelated(slug, extra) {
  const re = new RegExp(`(slug: "${slug}"[\\s\\S]*?related: \\[)([\\s\\S]*?)(\\],)`);
  const m = src.match(re);
  if (!m) return;
  const current = m[2];
  const missing = extra.filter((e) => !current.includes(`"${e}"`));
  if (!missing.length) return;
  const insertion = missing.map((e) => `\n      "${e}",`).join("");
  src = src.replace(re, `$1${current.trimEnd()}${insertion}\n    $3`);
  console.log("linked", slug, "→", missing.join(", "));
}

addRelated("phishing-red-flags", ["address-poisoning", "confirm-before-connect"]);
addRelated("what-is-dogecoin", ["what-dogecoin-is-not", "reading-charts-calmly"]);
addRelated("uk-community-pulse", ["dogecoin-etiquette", "community-glossary-uk"]);
addRelated("password-and-2fa", ["sim-swap-awareness", "exchange-account-hygiene"]);
addRelated("first-doge-checklist", ["weekend-safety-drill", "uk-payment-rails"]);
addRelated("address-hygiene", ["address-poisoning"]);
addRelated("uk-buying-basics", ["uk-payment-rails", "exchange-account-hygiene"]);

fs.writeFileSync(catalogPath, src);
console.log("done", catalogPath);

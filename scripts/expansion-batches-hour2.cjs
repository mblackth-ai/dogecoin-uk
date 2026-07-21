/** Hour-2 expansion batches (pass-25+). Merged by apply-expansion-pass.cjs */
module.exports = {
  batches: [
    {
      id: "pass-25",
      pages: [
        {
          slug: "hot-wallet-limits",
          title: "Hot wallet limits",
          pillar: "safety",
          summary: "How much to keep online vs cold — a practical ceiling.",
          hook: "Convenience has a balance cap.",
          tags: ["custody", "limits"],
          related: [
            "cold-storage-tiers",
            "wallets-explained",
            "self-custody-checklist",
            "first-doge-checklist",
            "stable-habits",
          ],
          body: [
            "Hot wallets are for spending and learning amounts. Cold storage is for sleep-at-night amounts.",
            "Pick a personal ceiling you can lose without wrecking your month — then enforce it.",
            "When the hot balance creeps up ‘temporarily,’ schedule the move before the next hype wave.",
            "Safety is a limit you honour when markets are loud.",
          ],
        },
      ],
      densify: [
        ["cold-storage-tiers", "hot-wallet-limits"],
        ["wallets-explained", "hot-wallet-limits"],
      ],
    },
    {
      id: "pass-26",
      pages: [
        {
          slug: "qr-code-hygiene",
          title: "QR code hygiene",
          pillar: "safety",
          summary: "Scanning safely without feeding malware or wrong addresses.",
          hook: "A QR is just text wearing sunglasses.",
          tags: ["opsec", "addresses"],
          related: [
            "address-hygiene",
            "test-transactions",
            "phishing-red-flags",
            "mobile-wallet-hygiene",
            "common-mistakes",
          ],
          body: [
            "Read the decoded address before you confirm. Stickers and overlays exist in the wild.",
            "Prefer showing your receive QR from your own wallet — not a PDF someone emailed.",
            "For large moves, still do a dust test after scanning.",
            "QR convenience dies the moment you stop verifying.",
          ],
        },
      ],
      densify: [
        ["address-hygiene", "qr-code-hygiene"],
        ["test-transactions", "qr-code-hygiene"],
      ],
    },
    {
      id: "pass-27",
      pages: [
        {
          slug: "public-wifi-risks",
          title: "Public Wi‑Fi risks",
          pillar: "safety",
          summary: "Cafés, airports, and the quiet ways sessions get stolen.",
          hook: "Free Wi‑Fi is rarely free of intent.",
          tags: ["opsec", "mobile"],
          related: [
            "mobile-wallet-hygiene",
            "password-and-2fa",
            "phishing-red-flags",
            "stable-habits",
            "support-impersonation",
          ],
          body: [
            "Avoid wallet ops on open networks when you can. Use trusted mobile data for signing moments.",
            "Captive portals are phishing theatres. Type known URLs yourself.",
            "VPN helps some threats and none of social engineering.",
            "If you must act on public Wi‑Fi, keep amounts tiny and eyes open.",
          ],
        },
      ],
      densify: [
        ["mobile-wallet-hygiene", "public-wifi-risks"],
        ["password-and-2fa", "public-wifi-risks"],
      ],
    },
    {
      id: "pass-28",
      pages: [
        {
          slug: "browser-extension-risk",
          title: "Browser extension risk",
          pillar: "safety",
          summary: "Wallet extensions: power tools with sharp edges.",
          hook: "If it can sign, it can also steal.",
          tags: ["wallets", "browser"],
          related: [
            "wallets-explained",
            "phishing-red-flags",
            "open-source-trust",
            "seed-phrases",
            "hot-wallet-limits",
          ],
          body: [
            "Install only from sources you typed. Fake extensions clone icons for a living.",
            "Lock the extension when idle. Review connected sites periodically.",
            "A malicious page plus a confused click is enough — slow down on connect prompts.",
            "Serious balances do not live in the browser long-term.",
          ],
        },
      ],
      densify: [
        ["wallets-explained", "browser-extension-risk"],
        ["phishing-red-flags", "browser-extension-risk"],
      ],
    },
    {
      id: "pass-29",
      pages: [
        {
          slug: "backup-drill",
          title: "Backup drill",
          pillar: "safety",
          summary: "Practice restoring a wallet before you need to.",
          hook: "Untested backups are fan fiction.",
          tags: ["custody", "checklist"],
          related: [
            "seed-phrases",
            "self-custody-checklist",
            "hardware-wallets",
            "first-doge-checklist",
            "stable-habits",
          ],
          body: [
            "Fund a tiny wallet, back it up, wipe the device path, restore, and confirm the dust is there.",
            "Do this before the balance is emotionally expensive.",
            "Note how long it took and where you got stuck — fix the process, not just the mood.",
            "A drill turns panic into muscle memory.",
          ],
        },
      ],
      densify: [
        ["seed-phrases", "backup-drill"],
        ["self-custody-checklist", "backup-drill"],
      ],
    },
    {
      id: "pass-30",
      pages: [
        {
          slug: "transaction-notes",
          title: "Transaction notes",
          pillar: "clarity",
          summary: "Labelling sends so future-you knows what happened.",
          hook: "Memory is not a ledger.",
          tags: ["habits", "records"],
          related: [
            "uk-tax-mindset",
            "reading-block-explorers",
            "first-doge-checklist",
            "stable-habits",
            "address-hygiene",
          ],
          body: [
            "Keep a private note of date, amount, counterparty label, and why — not on the public chain.",
            "UK angle: good notes reduce future stress. This is not tax advice.",
            "Screenshots alone rot. Structured notes survive.",
            "Clarity compounds when your history is readable.",
          ],
        },
      ],
      densify: [
        ["uk-tax-mindset", "transaction-notes"],
        ["reading-block-explorers", "transaction-notes"],
      ],
    },
    {
      id: "pass-31",
      pages: [
        {
          slug: "utxo-mental-model",
          title: "UTXO mental model",
          pillar: "clarity",
          summary: "Coins as notes, not a single bank balance number.",
          hook: "Understanding inputs prevents weird fee surprises.",
          tags: ["network", "basics"],
          related: [
            "how-dogecoin-works",
            "fees-and-speed",
            "reading-block-explorers",
            "dust-and-spam",
            "confirmations-explained",
          ],
          body: [
            "Many cryptocurrencies track unspent outputs. Your ‘balance’ is the sum of notes you can spend.",
            "Sending may consume multiple notes and create change — explorers make this visible.",
            "Dust and spam interact with this model; that’s why address hygiene matters.",
            "You do not need to be an engineer — just stop expecting a bank UI under the hood.",
          ],
        },
      ],
      densify: [
        ["how-dogecoin-works", "utxo-mental-model"],
        ["fees-and-speed", "utxo-mental-model"],
      ],
    },
    {
      id: "pass-32",
      pages: [
        {
          slug: "market-orders-basics",
          title: "Market orders basics",
          pillar: "clarity",
          summary: "Buy/sell buttons without pretending it’s advice.",
          hook: "Execution mechanics ≠ destiny.",
          tags: ["markets", "uk"],
          related: [
            "uk-buying-basics",
            "liquidity-basics",
            "not-financial-advice",
            "fees-and-speed",
            "volatility-psychology",
          ],
          body: [
            "A market order prioritises fill speed over exact price. Spreads and depth matter.",
            "During chaos, the fill can surprise you. Size down or wait.",
            "This page explains mechanics, not whether you should trade.",
            "If urgency is emotional, step away before you click.",
          ],
        },
      ],
      densify: [
        ["uk-buying-basics", "market-orders-basics"],
        ["liquidity-basics", "market-orders-basics"],
      ],
    },
    {
      id: "pass-33",
      pages: [
        {
          slug: "spread-and-slippage",
          title: "Spread and slippage",
          pillar: "clarity",
          summary: "The quiet cost between the price you saw and the fill you got.",
          hook: "Screenshots are optimistic.",
          tags: ["markets", "fees"],
          related: [
            "liquidity-basics",
            "market-orders-basics",
            "uk-buying-basics",
            "fees-and-speed",
            "common-mistakes",
          ],
          body: [
            "Spread is the gap between buy and sell quotes. Slippage is movement while your order executes.",
            "Thin books and big size make both worse.",
            "Not advice — just the maths of impatience.",
            "Compare total cost, not the headline ticker alone.",
          ],
        },
      ],
      densify: [
        ["liquidity-basics", "spread-and-slippage"],
        ["market-orders-basics", "spread-and-slippage"],
      ],
    },
    {
      id: "pass-34",
      pages: [
        {
          slug: "dogecoin-tips-irl",
          title: "DOGE tips IRL",
          pillar: "belonging",
          summary: "Tipping in person without turning it into a scam demo.",
          hook: "Warmth needs a verify step.",
          tags: ["culture", "irl"],
          related: [
            "tipping-culture",
            "qr-code-hygiene",
            "meetups-and-irl",
            "test-transactions",
            "address-hygiene",
          ],
          body: [
            "Show a receive address from your own wallet. Confirm on both screens.",
            "Start tiny. Celebrate the ritual more than the amount.",
            "Never ‘match’ a tip to a stranger’s urgent address.",
            "IRL kindness plus verify steps is the UK brand of belonging.",
          ],
        },
      ],
      densify: [
        ["tipping-culture", "dogecoin-tips-irl"],
        ["meetups-and-irl", "dogecoin-tips-irl"],
      ],
    },
    {
      id: "pass-35",
      pages: [
        {
          slug: "uk-meetup-safety",
          title: "UK meetup safety",
          pillar: "belonging",
          summary: "Run or attend a meetup without becoming a honeypot.",
          hook: "Hospitality includes exits and boundaries.",
          tags: ["uk", "irl"],
          related: [
            "meetups-and-irl",
            "community-moderation",
            "phishing-red-flags",
            "onboarding-a-friend",
            "uk-community-pulse",
          ],
          body: [
            "Public venue, clear end time, no seed phrases on stage, no pressure to install apps on the spot.",
            "Announce that support never DMs first — say it out loud every time.",
            "Pair newcomers with a buddy for their first questions.",
            "A safe meetup grows the graph offline.",
          ],
        },
      ],
      densify: [
        ["meetups-and-irl", "uk-meetup-safety"],
        ["community-moderation", "uk-meetup-safety"],
      ],
    },
    {
      id: "pass-36",
      pages: [
        {
          slug: "moderation-playbook",
          title: "Moderation playbook",
          pillar: "belonging",
          summary: "Kick spam, keep kindness, refuse fake support theatre.",
          hook: "Tone is infrastructure.",
          tags: ["community", "trust"],
          related: [
            "community-moderation",
            "support-impersonation",
            "fake-giveaways",
            "uk-community-pulse",
            "proof-matrix",
          ],
          body: [
            "Pin rules: no price calls as gospel, no seed requests, no ‘support’ in DMs.",
            "Remove giveaway bots quickly — engagement is their oxygen.",
            "Document patterns so new mods inherit judgement, not vibes alone.",
            "Belonging scales when moderation is calm and consistent.",
          ],
        },
      ],
      densify: [
        ["community-moderation", "moderation-playbook"],
        ["fake-giveaways", "moderation-playbook"],
      ],
    },
    {
      id: "pass-37",
      pages: [
        {
          slug: "newcomer-script",
          title: "Newcomer script",
          pillar: "belonging",
          summary: "What to say in the first five minutes to a curious friend.",
          hook: "Teaching is belonging with a checklist.",
          tags: ["teaching", "community"],
          related: [
            "onboarding-a-friend",
            "what-is-dogecoin",
            "first-doge-checklist",
            "phishing-red-flags",
            "meme-literacy",
          ],
          body: [
            "Start with what DOGE is, what it isn’t, and one safety rule: never share a seed.",
            "Offer a tiny practice send, not a portfolio plan.",
            "Send them two links from this site — one clarity, one safety.",
            "Your tone teaches more than your tips.",
          ],
        },
      ],
      densify: [
        ["onboarding-a-friend", "newcomer-script"],
        ["what-is-dogecoin", "newcomer-script"],
      ],
    },
    {
      id: "pass-38",
      pages: [
        {
          slug: "hype-cycle-literacy",
          title: "Hype cycle literacy",
          pillar: "belonging",
          summary: "Recognising attention waves without riding them blind.",
          hook: "Volume is not validation.",
          tags: ["psychology", "culture"],
          related: [
            "volatility-psychology",
            "influencer-disclosures",
            "why-people-buy-doge",
            "myths-to-ignore",
            "not-financial-advice",
          ],
          body: [
            "Attention arrives in waves. Each wave onboard predators as well as people.",
            "When every chat is certain, raise your verify standards — not your size.",
            "This is literacy, not a timing strategy.",
            "Belonging includes permission to sit out the carnival.",
          ],
        },
      ],
      densify: [
        ["volatility-psychology", "hype-cycle-literacy"],
        ["influencer-disclosures", "hype-cycle-literacy"],
      ],
    },
    {
      id: "pass-39",
      pages: [
        {
          slug: "screenshot-scams",
          title: "Screenshot scams",
          pillar: "safety",
          summary: "Fake balances, fake tickets, fake ‘proof of send’.",
          hook: "Pixels are costumes.",
          tags: ["scams", "opsec"],
          related: [
            "reading-block-explorers",
            "fake-giveaways",
            "support-impersonation",
            "phishing-red-flags",
            "social-engineering",
          ],
          body: [
            "Never accept a cropped image as settlement. Check a txid on an explorer you typed.",
            "Fake support tickets use official-looking templates. Hang up and reopen from a bookmark.",
            "If someone rushes you to ‘confirm you received it’ via screenshot, assume theatre.",
            "Explorers gossip; screenshots perform.",
          ],
        },
      ],
      densify: [
        ["reading-block-explorers", "screenshot-scams"],
        ["support-impersonation", "screenshot-scams"],
      ],
    },
    {
      id: "pass-40",
      pages: [
        {
          slug: "recovery-phrase-storage",
          title: "Recovery phrase storage",
          pillar: "safety",
          summary: "Where to put seeds that isn’t ‘in photos’ or ‘in Slack’.",
          hook: "Boring storage beats clever storage.",
          tags: ["custody", "seed"],
          related: [
            "seed-phrases",
            "paper-wallets",
            "backup-drill",
            "family-and-inheritance",
            "self-custody-checklist",
          ],
          body: [
            "Offline, durable, findable by the right person, invisible to the wrong one.",
            "Cloud photos and chat apps are common failure modes.",
            "Metal backups help against fire and coffee — still protect against theft.",
            "Test retrieval in a drill before you trust the stash.",
          ],
        },
      ],
      densify: [
        ["seed-phrases", "recovery-phrase-storage"],
        ["backup-drill", "recovery-phrase-storage"],
      ],
    },
    {
      id: "pass-41",
      pages: [
        {
          slug: "device-compromise",
          title: "If your device is compromised",
          pillar: "safety",
          summary: "Assume malware, move funds, rotate everything.",
          hook: "Speed matters; panic does not.",
          tags: ["opsec", "incident"],
          related: [
            "if-you-got-scammed",
            "seed-phrases",
            "password-and-2fa",
            "hot-wallet-limits",
            "mobile-wallet-hygiene",
          ],
          body: [
            "From a clean device, move funds to a fresh wallet. Retire the old seed.",
            "Rotate exchange passwords and 2FA. Check allowlists and devices sessions.",
            "Do not ‘scan’ with random fix tools from DMs.",
            "Write the timeline down — patterns help later even when funds don’t return.",
          ],
        },
      ],
      densify: [
        ["if-you-got-scammed", "device-compromise"],
        ["mobile-wallet-hygiene", "device-compromise"],
      ],
    },
    {
      id: "pass-42",
      pages: [
        {
          slug: "exchange-outages",
          title: "Exchange outages",
          pillar: "clarity",
          summary: "What ‘withdrawals paused’ really means for your plan.",
          hook: "Convenience risk shows up on busy days.",
          tags: ["exchange", "risk"],
          related: [
            "exchange-vs-wallet",
            "uk-buying-basics",
            "self-custody-checklist",
            "first-doge-checklist",
            "stable-habits",
          ],
          body: [
            "Venues pause under load, maintenance, or risk controls. Your coins may be unreachable on their schedule.",
            "That is a reason many people withdraw learning amounts to self-custody — not a conspiracy theory.",
            "Plan ahead of volatility if access matters to you.",
            "Clarity: platform risk is real even when the chain is fine.",
          ],
        },
      ],
      densify: [
        ["exchange-vs-wallet", "exchange-outages"],
        ["uk-buying-basics", "exchange-outages"],
      ],
    },
    {
      id: "pass-43",
      pages: [
        {
          slug: "withdrawal-allowlists",
          title: "Withdrawal allowlists",
          pillar: "safety",
          summary: "Friction that stops a hijacked account emptying overnight.",
          hook: "Slow is a feature.",
          tags: ["exchange", "opsec"],
          related: [
            "password-and-2fa",
            "exchange-vs-wallet",
            "exchange-outages",
            "stable-habits",
            "common-mistakes",
          ],
          body: [
            "Allowlist known addresses so new destinations need extra confirmation time.",
            "Pair with strong 2FA and unique passwords.",
            "Update the list carefully — phishing loves ‘urgent allowlist changes.’",
            "Boring account hygiene beats clever recovery stories.",
          ],
        },
      ],
      densify: [
        ["password-and-2fa", "withdrawal-allowlists"],
        ["exchange-vs-wallet", "withdrawal-allowlists"],
      ],
    },
    {
      id: "pass-44",
      pages: [
        {
          slug: "address-poisoning",
          title: "Address poisoning",
          pillar: "safety",
          summary: "Dust sends that trick you into copying a lookalike.",
          hook: "History tabs can lie by proximity.",
          tags: ["opsec", "addresses"],
          related: [
            "dust-and-spam",
            "address-hygiene",
            "test-transactions",
            "reading-block-explorers",
            "qr-code-hygiene",
          ],
          body: [
            "Attackers send tiny amounts from lookalike addresses so you copy the wrong one from history.",
            "Always copy from your saved label or QR — not from a random inbound dust row.",
            "Verify first and last characters slowly every time.",
            "If something feels off by one glyph, abort.",
          ],
        },
      ],
      densify: [
        ["dust-and-spam", "address-poisoning"],
        ["address-hygiene", "address-poisoning"],
      ],
    },
    {
      id: "pass-45",
      pages: [
        {
          slug: "time-locked-habits",
          title: "Time-locked habits",
          pillar: "safety",
          summary: "Cooling-off rules before large moves.",
          hook: "Adrenaline is not a signing key.",
          tags: ["habits", "psychology"],
          related: [
            "volatility-psychology",
            "stable-habits",
            "test-transactions",
            "hot-wallet-limits",
            "first-doge-checklist",
          ],
          body: [
            "Set personal rules: sleep on large transfers; never sign during an argument or a hyped livestream.",
            "Use allowlist delays and dust tests as technical cooling-off.",
            "Write the rule down when you are calm so future-you cannot negotiate it away.",
            "Safety is often just time.",
          ],
        },
      ],
      densify: [
        ["volatility-psychology", "time-locked-habits"],
        ["stable-habits", "time-locked-habits"],
      ],
    },
    {
      id: "pass-46",
      pages: [
        {
          slug: "dogecoin-faqs",
          title: "Dogecoin FAQs",
          pillar: "clarity",
          summary: "Short answers to the questions UK newcomers actually ask.",
          hook: "Clarity is a FAQ with spine.",
          tags: ["basics", "faq"],
          related: [
            "what-is-dogecoin",
            "doge-glossary",
            "is-dogecoin-a-joke",
            "not-financial-advice",
            "uk-search-intent",
          ],
          body: [
            "Is it a joke? Origin yes; network no. Is it advice? Never here. Is .co.uk official? No — unofficial on purpose.",
            "Where do I start? Clarity hub, then Safety checklist, then a tiny practice send.",
            "What about price? We don’t do prophecy.",
            "More questions belong in the graph — follow related links.",
          ],
        },
      ],
      densify: [
        ["what-is-dogecoin", "dogecoin-faqs"],
        ["uk-search-intent", "dogecoin-faqs"],
      ],
    },
    {
      id: "pass-47",
      pages: [
        {
          slug: "supply-myths",
          title: "Supply myths",
          pillar: "clarity",
          summary: "Issuance stories people weaponise in arguments.",
          hook: "A schedule is not a sermon.",
          tags: ["economics", "myths"],
          related: [
            "inflation-and-supply",
            "myths-to-ignore",
            "dogecoin-vs-bitcoin",
            "mining-and-security",
            "dogecoin-faqs",
          ],
          body: [
            "People flatten issuance into morality plays. Design trade-offs are not destiny tattoos.",
            "Compare mechanisms, incentives, and use-cases — skip the purity contest.",
            "If a chart claims certainty, it is selling something.",
            "Clarity names trade-offs out loud.",
          ],
        },
      ],
      densify: [
        ["inflation-and-supply", "supply-myths"],
        ["myths-to-ignore", "supply-myths"],
      ],
    },
    {
      id: "pass-48",
      pages: [
        {
          slug: "kindness-without-naivety",
          title: "Kindness without naivety",
          pillar: "belonging",
          summary: "Do only good everyday — with verify steps attached.",
          hook: "Warmth that checks twice.",
          tags: ["culture", "trust"],
          related: [
            "tipping-culture",
            "charity-and-causes",
            "phishing-red-flags",
            "meme-literacy",
            "proof-matrix",
          ],
          body: [
            "Generosity is the brand. Predators know that and cosplay it.",
            "Give time, links, and small tips — not seeds, remote access, or rushed sends.",
            "Verify charities and addresses like you’d verify a bank transfer.",
            "Belonging that survives contact with scammers is the goal.",
          ],
        },
      ],
      densify: [
        ["tipping-culture", "kindness-without-naivety"],
        ["charity-and-causes", "kindness-without-naivety"],
      ],
    },
    {
      id: "pass-49",
      pages: [
        {
          slug: "uk-english-tone",
          title: "UK English tone",
          pillar: "belonging",
          summary: "Why this site sounds dry on purpose.",
          hook: "Dry humour is a trust signal here.",
          tags: ["uk", "brand"],
          related: [
            "why-uk-domain",
            "uk-search-intent",
            "uk-community-pulse",
            "unofficial-disclaimer",
            "proof-matrix",
          ],
          body: [
            "UK readers often distrust carnival barking. Calm precision reads as respect.",
            "We keep jokes, but we won’t sell certainty.",
            "Tone is part of the product — same as page speed.",
            "If we ever sound like a hyped funnel, call it out.",
          ],
        },
      ],
      densify: [
        ["why-uk-domain", "uk-english-tone"],
        ["uk-search-intent", "uk-english-tone"],
      ],
    },
    {
      id: "pass-50",
      pages: [
        {
          slug: "graph-how-to-wander",
          title: "How to wander the graph",
          pillar: "belonging",
          summary: "A map habit: hub → two links → one safety check.",
          hook: "Curiosity with a seatbelt.",
          tags: ["map", "habits"],
          related: [
            "proof-matrix",
            "what-is-dogecoin",
            "phishing-red-flags",
            "join-the-list",
            "uk-search-intent",
          ],
          body: [
            "Start at a pillar hub or /map. Open one guide. Follow two related links. End on a safety page before acting.",
            "That loop is how the site turns into a self-guided curriculum.",
            "Bookmark the hubs. Ignore urgency from strangers.",
            "The graph grows; your habit keeps you oriented.",
          ],
        },
      ],
      densify: [
        ["proof-matrix", "graph-how-to-wander"],
        ["what-is-dogecoin", "graph-how-to-wander"],
      ],
    },
  ],
};

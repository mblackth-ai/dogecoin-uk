/**
 * Heartbeat expansion seeds — each pass consumes the next unused batch,
 * densifies links, then deploys. Agent appends consumed batches into catalog.ts.
 */
module.exports = {
  batches: [
    {
      id: "pass-01",
      pages: [
        {
          slug: "tipping-culture",
          title: "Tipping culture",
          pillar: "belonging",
          summary: "How DOGE tip culture works — and how scammers counterfeit it.",
          hook: "Generosity is the brand. Impersonation is the parasite.",
          tags: ["culture", "tips"],
          related: ["culture-and-memes", "fake-giveaways", "much-wow-lexicon", "phishing-red-flags", "uk-community-pulse"],
          body: [
            "Dogecoin’s tip culture taught a generation that micro-generosity can be playful.",
            "Scammers copy the warmth and add a payment demand. Real tips never require you to send first to a stranger’s ‘matching’ address.",
            "If a tip request arrives with urgency, it is not a tip.",
            "Belonging means protecting the generous impulse from becoming an attack surface.",
          ],
        },
        {
          slug: "hardware-wallets",
          title: "Hardware wallets",
          pillar: "safety",
          summary: "When a hardware device is worth it — and when it is theatre.",
          hook: "Cold storage is a tool, not a personality.",
          tags: ["hardware", "custody"],
          related: ["self-custody-checklist", "seed-phrases", "wallets-explained", "exchange-vs-wallet", "first-doge-checklist"],
          body: [
            "Hardware wallets keep keys offline for most signing flows. That reduces malware risk for larger balances.",
            "They do not fix bad habits: phishing sites, photographed seeds, or blind trust in ‘setup helpers.’",
            "Buy from official channels. Used devices are a horror genre.",
            "Start with software for learning amounts; graduate hardware when the sleep-at-night number demands it.",
          ],
        },
        {
          slug: "confirmations-explained",
          title: "Confirmations explained",
          pillar: "clarity",
          summary: "Why waits exist, and how many is ‘enough’ for different stakes.",
          hook: "Finality is a gradient, not a gong.",
          tags: ["network", "basics"],
          related: ["how-dogecoin-works", "fees-and-speed", "address-hygiene", "first-doge-checklist", "common-mistakes"],
          body: [
            "Each new block buried on top of your transaction makes reversal harder.",
            "Coffee-money and house-money deserve different patience. Match confirmation depth to consequence.",
            "Exchanges set their own deposit thresholds. Those rules are risk policies, not cosmic law.",
            "If someone demands you treat an unconfirmed tx as sacred settlement, slow down.",
          ],
        },
      ],
      densify: [
        ["what-is-dogecoin", "tipping-culture"],
        ["culture-and-memes", "tipping-culture"],
        ["wallets-explained", "hardware-wallets"],
        ["how-dogecoin-works", "confirmations-explained"],
      ],
    },
    {
      id: "pass-02",
      pages: [
        {
          slug: "social-engineering",
          title: "Social engineering 101",
          pillar: "safety",
          summary: "How trust is hacked without touching code.",
          hook: "The vulnerability is often kindness.",
          tags: ["scams", "psychology"],
          related: ["scam-patterns-uk", "support-impersonation", "phishing-red-flags", "if-you-got-scammed", "fake-giveaways"],
          body: [
            "Social engineering scripts borrow authority, fear, romance, or greed — then ask for a small irreversible step.",
            "UK phone and WhatsApp vectors are common. Verify through a second channel you initiate.",
            "Practice saying ‘I’ll call you back on the official number.’ It feels rude. It is adult.",
            "Safety literacy is emotional literacy under pressure.",
          ],
        },
        {
          slug: "dogecoin-history",
          title: "A short Dogecoin history",
          pillar: "clarity",
          summary: "From joke fork to cultural fixture — the arc without mythology overload.",
          hook: "Origin stories explain tone. They do not predict price.",
          tags: ["history", "culture"],
          related: ["what-is-dogecoin", "is-dogecoin-a-joke", "culture-and-memes", "dogecoin-vs-bitcoin", "why-uk-domain"],
          body: [
            "Dogecoin launched in 2013 as a light-hearted fork culture experiment and somehow refused to die.",
            "Attention cycles came in waves. Each wave onboarded new humans and new predators.",
            "History helps you spot recycled narratives dressed as novelty.",
            "Read it for orientation, not nostalgia investment thesis cosplay.",
          ],
        },
        {
          slug: "meetups-and-irl",
          title: "Meetups and IRL",
          pillar: "belonging",
          summary: "How to gather in the UK without turning into a pitch room.",
          hook: "The best meetup ends with people safer than they arrived.",
          tags: ["uk", "community", "irl"],
          related: ["uk-community-pulse", "phishing-red-flags", "first-doge-checklist", "why-uk-domain", "tipping-culture"],
          body: [
            "Open with a safety five minutes. Normalise seed hygiene talk like you normalise fire exits.",
            "Avoid on-stage price prophecy. Teach a skill: address verify, wallet backup, scam teardown.",
            "Publish notes afterward so remote UK folks inherit the signal.",
            "Belonging scales when IRL generosity meets online clarity.",
          ],
        },
      ],
      densify: [
        ["scam-patterns-uk", "social-engineering"],
        ["what-is-dogecoin", "dogecoin-history"],
        ["uk-community-pulse", "meetups-and-irl"],
        ["is-dogecoin-a-joke", "dogecoin-history"],
      ],
    },
    {
      id: "pass-03",
      pages: [
        {
          slug: "password-and-2fa",
          title: "Passwords and 2FA",
          pillar: "safety",
          summary: "Exchange hygiene that prevents the boring disasters.",
          hook: "Most ‘hacks’ are reused passwords with better marketing.",
          tags: ["opsec", "exchange"],
          related: ["exchange-vs-wallet", "scam-patterns-uk", "support-impersonation", "self-custody-checklist", "common-mistakes"],
          body: [
            "Unique passwords. A manager. App-based or hardware 2FA over SMS when you can.",
            "SIM-swap is a UK-relevant threat. SMS 2FA is better than nothing and worse than app 2FA.",
            "Withdrawal allowlists add friction that saves careers.",
            "Boring security is elite security.",
          ],
        },
        {
          slug: "reading-block-explorers",
          title: "Reading block explorers",
          pillar: "clarity",
          summary: "How to verify a send yourself without trusting a screenshot.",
          hook: "Screenshots lie. Explorers gossip truthfully.",
          tags: ["tools", "network"],
          related: ["confirmations-explained", "how-dogecoin-works", "address-hygiene", "fees-and-speed", "common-mistakes"],
          body: [
            "Paste a txid into a reputable explorer. Confirm amount, addresses, and confirmation count.",
            "Never trust a cropped image from a stranger as proof of payment.",
            "Learn the difference between ‘broadcast’ and ‘confirmed.’",
            "Clarity tools turn anxiety into checkable facts.",
          ],
        },
        {
          slug: "creators-and-builders",
          title: "Creators and builders",
          pillar: "belonging",
          summary: "Making things in the DOGE orbit without extractive hustle energy.",
          hook: "Build for the pack, not the extract.",
          tags: ["builders", "community"],
          related: ["uk-community-pulse", "join-the-list", "culture-and-memes", "why-uk-domain", "proof-matrix"],
          body: [
            "Tools, explainers, art, and meetup ops all count as building.",
            "Disclose affiliations. Hidden bags plus loud advice is a trust tax.",
            "Ship useful docs. Memes without manuals strand newcomers.",
            "UK builders: document in .co.uk English — dry, clear, kind.",
          ],
        },
      ],
      densify: [
        ["exchange-vs-wallet", "password-and-2fa"],
        ["how-dogecoin-works", "reading-block-explorers"],
        ["uk-community-pulse", "creators-and-builders"],
        ["join-the-list", "creators-and-builders"],
      ],
    },
{
  "id": "pass-04",
  "pages": [
    {
      "slug": "paper-wallets",
      "title": "Paper wallets",
      "pillar": "safety",
      "summary": "Paper backups: when they help and how they fail.",
      "hook": "Analog is not automatically safe.",
      "tags": [
        "custody",
        "backup"
      ],
      "related": [
        "seed-phrases",
        "self-custody-checklist",
        "hardware-wallets",
        "common-mistakes",
        "wallets-explained"
      ],
      "body": [
        "Paper backups: when they help and how they fail. This page exists so the graph has another door for that intent.",
        "Pillar alignment: safety. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "seed-phrases",
      "paper-wallets"
    ],
    [
      "self-custody-checklist",
      "paper-wallets"
    ]
  ]
},
{
  "id": "pass-05",
  "pages": [
    {
      "slug": "multisig-basics",
      "title": "Multisig basics",
      "pillar": "safety",
      "summary": "Shared control without shared chaos.",
      "hook": "One key is a single story.",
      "tags": [
        "custody",
        "advanced"
      ],
      "related": [
        "self-custody-checklist",
        "hardware-wallets",
        "seed-phrases",
        "wallets-explained",
        "exchange-vs-wallet"
      ],
      "body": [
        "Shared control without shared chaos. This page exists so the graph has another door for that intent.",
        "Pillar alignment: safety. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "self-custody-checklist",
      "multisig-basics"
    ],
    [
      "hardware-wallets",
      "multisig-basics"
    ]
  ]
},
{
  "id": "pass-06",
  "pages": [
    {
      "slug": "liquidity-basics",
      "title": "Liquidity basics",
      "pillar": "clarity",
      "summary": "Why the price you see is not always the price you get.",
      "hook": "Screens lie politely.",
      "tags": [
        "markets",
        "basics"
      ],
      "related": [
        "uk-buying-basics",
        "fees-and-speed",
        "not-financial-advice",
        "common-mistakes",
        "why-people-buy-doge"
      ],
      "body": [
        "Why the price you see is not always the price you get. This page exists so the graph has another door for that intent.",
        "Pillar alignment: clarity. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "uk-buying-basics",
      "liquidity-basics"
    ],
    [
      "fees-and-speed",
      "liquidity-basics"
    ]
  ]
},
{
  "id": "pass-07",
  "pages": [
    {
      "slug": "volatility-psychology",
      "title": "Volatility psychology",
      "pillar": "belonging",
      "summary": "How fear and euphoria hijack good procedures.",
      "hook": "Your nervous system is part of the stack.",
      "tags": [
        "psychology",
        "culture"
      ],
      "related": [
        "first-doge-checklist",
        "common-mistakes",
        "not-financial-advice",
        "why-people-buy-doge",
        "social-engineering"
      ],
      "body": [
        "How fear and euphoria hijack good procedures. This page exists so the graph has another door for that intent.",
        "Pillar alignment: belonging. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "first-doge-checklist",
      "volatility-psychology"
    ],
    [
      "common-mistakes",
      "volatility-psychology"
    ]
  ]
},
{
  "id": "pass-08",
  "pages": [
    {
      "slug": "charity-and-causes",
      "title": "Charity and causes",
      "pillar": "belonging",
      "summary": "DOGE charity energy — verify before you donate.",
      "hook": "Kindness attracts counterfeits.",
      "tags": [
        "culture",
        "trust"
      ],
      "related": [
        "tipping-culture",
        "fake-giveaways",
        "phishing-red-flags",
        "culture-and-memes",
        "uk-community-pulse"
      ],
      "body": [
        "DOGE charity energy — verify before you donate. This page exists so the graph has another door for that intent.",
        "Pillar alignment: belonging. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "tipping-culture",
      "charity-and-causes"
    ],
    [
      "fake-giveaways",
      "charity-and-causes"
    ]
  ]
},
{
  "id": "pass-09",
  "pages": [
    {
      "slug": "nodes-and-clients",
      "title": "Nodes and clients",
      "pillar": "clarity",
      "summary": "What running software for the network actually means.",
      "hook": "Participation has layers.",
      "tags": [
        "network",
        "software"
      ],
      "related": [
        "how-dogecoin-works",
        "mining-and-security",
        "reading-block-explorers",
        "what-is-dogecoin",
        "confirmations-explained"
      ],
      "body": [
        "What running software for the network actually means. This page exists so the graph has another door for that intent.",
        "Pillar alignment: clarity. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "how-dogecoin-works",
      "nodes-and-clients"
    ],
    [
      "mining-and-security",
      "nodes-and-clients"
    ]
  ]
},
{
  "id": "pass-10",
  "pages": [
    {
      "slug": "mobile-wallet-hygiene",
      "title": "Mobile wallet hygiene",
      "pillar": "safety",
      "summary": "Phones are convenient attack surfaces.",
      "hook": "Your pocket computer is a fortress only if you treat it like one.",
      "tags": [
        "mobile",
        "opsec"
      ],
      "related": [
        "wallets-explained",
        "seed-phrases",
        "phishing-red-flags",
        "password-and-2fa",
        "self-custody-checklist"
      ],
      "body": [
        "Phones are convenient attack surfaces. This page exists so the graph has another door for that intent.",
        "Pillar alignment: safety. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "wallets-explained",
      "mobile-wallet-hygiene"
    ],
    [
      "seed-phrases",
      "mobile-wallet-hygiene"
    ]
  ]
},
{
  "id": "pass-11",
  "pages": [
    {
      "slug": "uk-tax-mindset",
      "title": "UK tax mindset",
      "pillar": "clarity",
      "summary": "Record-keeping mindset — not advice, just future-you kindness.",
      "hook": "HMRC does not accept vibes.",
      "tags": [
        "uk",
        "records"
      ],
      "related": [
        "uk-buying-basics",
        "not-financial-advice",
        "exchange-vs-wallet",
        "first-doge-checklist",
        "why-uk-domain"
      ],
      "body": [
        "Record-keeping mindset — not advice, just future-you kindness. This page exists so the graph has another door for that intent.",
        "Pillar alignment: clarity. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "uk-buying-basics",
      "uk-tax-mindset"
    ],
    [
      "not-financial-advice",
      "uk-tax-mindset"
    ]
  ]
},
{
  "id": "pass-12",
  "pages": [
    {
      "slug": "influencer-disclosures",
      "title": "Influencer disclosures",
      "pillar": "belonging",
      "summary": "How to read paid enthusiasm without becoming the exit liquidity.",
      "hook": "Charisma is not due diligence.",
      "tags": [
        "culture",
        "media"
      ],
      "related": [
        "why-people-buy-doge",
        "not-financial-advice",
        "social-engineering",
        "fake-giveaways",
        "proof-matrix"
      ],
      "body": [
        "How to read paid enthusiasm without becoming the exit liquidity. This page exists so the graph has another door for that intent.",
        "Pillar alignment: belonging. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "why-people-buy-doge",
      "influencer-disclosures"
    ],
    [
      "not-financial-advice",
      "influencer-disclosures"
    ]
  ]
},
{
  "id": "pass-13",
  "pages": [
    {
      "slug": "test-transactions",
      "title": "Test transactions",
      "pillar": "safety",
      "summary": "The tiny send that prevents the huge regret.",
      "hook": "Ritual beats bravado.",
      "tags": [
        "checklist",
        "opsec"
      ],
      "related": [
        "address-hygiene",
        "fees-and-speed",
        "first-doge-checklist",
        "common-mistakes",
        "confirmations-explained"
      ],
      "body": [
        "The tiny send that prevents the huge regret. This page exists so the graph has another door for that intent.",
        "Pillar alignment: safety. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "address-hygiene",
      "test-transactions"
    ],
    [
      "fees-and-speed",
      "test-transactions"
    ]
  ]
},
{
  "id": "pass-14",
  "pages": [
    {
      "slug": "forks-and-clones",
      "title": "Forks and clones",
      "pillar": "clarity",
      "summary": "Lookalike coins and why names are not destiny.",
      "hook": "Branding is cheap. Networks are not.",
      "tags": [
        "basics",
        "risk"
      ],
      "related": [
        "what-is-dogecoin",
        "dogecoin-vs-bitcoin",
        "phishing-red-flags",
        "myths-to-ignore",
        "doge-glossary"
      ],
      "body": [
        "Lookalike coins and why names are not destiny. This page exists so the graph has another door for that intent.",
        "Pillar alignment: clarity. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "what-is-dogecoin",
      "forks-and-clones"
    ],
    [
      "dogecoin-vs-bitcoin",
      "forks-and-clones"
    ]
  ]
},
{
  "id": "pass-15",
  "pages": [
    {
      "slug": "community-moderation",
      "title": "Community moderation",
      "pillar": "belonging",
      "summary": "Keeping UK spaces kind without becoming a cult.",
      "hook": "Boundaries are hospitality.",
      "tags": [
        "community",
        "uk"
      ],
      "related": [
        "uk-community-pulse",
        "meetups-and-irl",
        "phishing-red-flags",
        "unofficial-disclaimer",
        "creators-and-builders"
      ],
      "body": [
        "Keeping UK spaces kind without becoming a cult. This page exists so the graph has another door for that intent.",
        "Pillar alignment: belonging. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "uk-community-pulse",
      "community-moderation"
    ],
    [
      "meetups-and-irl",
      "community-moderation"
    ]
  ]
},
{
  "id": "pass-16",
  "pages": [
    {
      "slug": "cold-storage-tiers",
      "title": "Cold storage tiers",
      "pillar": "safety",
      "summary": "Match custody tier to amount and life chaos.",
      "hook": "Not everything needs a vault. Some things do.",
      "tags": [
        "custody",
        "tiers"
      ],
      "related": [
        "hardware-wallets",
        "paper-wallets",
        "self-custody-checklist",
        "exchange-vs-wallet",
        "first-doge-checklist"
      ],
      "body": [
        "Match custody tier to amount and life chaos. This page exists so the graph has another door for that intent.",
        "Pillar alignment: safety. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "hardware-wallets",
      "cold-storage-tiers"
    ],
    [
      "paper-wallets",
      "cold-storage-tiers"
    ]
  ]
},
{
  "id": "pass-17",
  "pages": [
    {
      "slug": "meme-literacy",
      "title": "Meme literacy",
      "pillar": "belonging",
      "summary": "Reading jokes so you do not fund them blindly.",
      "hook": "Laughter is onboarding — and camouflage.",
      "tags": [
        "culture",
        "literacy"
      ],
      "related": [
        "culture-and-memes",
        "much-wow-lexicon",
        "fake-giveaways",
        "is-dogecoin-a-joke",
        "tipping-culture"
      ],
      "body": [
        "Reading jokes so you do not fund them blindly. This page exists so the graph has another door for that intent.",
        "Pillar alignment: belonging. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "culture-and-memes",
      "meme-literacy"
    ],
    [
      "much-wow-lexicon",
      "meme-literacy"
    ]
  ]
},
{
  "id": "pass-18",
  "pages": [
    {
      "slug": "network-congestion",
      "title": "Network congestion",
      "pillar": "clarity",
      "summary": "What busy moments feel like and how to respond.",
      "hook": "Patience is a fee strategy.",
      "tags": [
        "fees",
        "network"
      ],
      "related": [
        "fees-and-speed",
        "confirmations-explained",
        "how-dogecoin-works",
        "reading-block-explorers",
        "common-mistakes"
      ],
      "body": [
        "What busy moments feel like and how to respond. This page exists so the graph has another door for that intent.",
        "Pillar alignment: clarity. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "fees-and-speed",
      "network-congestion"
    ],
    [
      "confirmations-explained",
      "network-congestion"
    ]
  ]
},
{
  "id": "pass-19",
  "pages": [
    {
      "slug": "family-and-inheritance",
      "title": "Family and inheritance",
      "pillar": "safety",
      "summary": "Harsh topic, practical notes for shared reality.",
      "hook": "Secrets that die with you are not a plan.",
      "tags": [
        "custody",
        "life"
      ],
      "related": [
        "seed-phrases",
        "self-custody-checklist",
        "multisig-basics",
        "hardware-wallets",
        "not-financial-advice"
      ],
      "body": [
        "Harsh topic, practical notes for shared reality. This page exists so the graph has another door for that intent.",
        "Pillar alignment: safety. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "seed-phrases",
      "family-and-inheritance"
    ],
    [
      "self-custody-checklist",
      "family-and-inheritance"
    ]
  ]
},
{
  "id": "pass-20",
  "pages": [
    {
      "slug": "onboarding-a-friend",
      "title": "Onboarding a friend",
      "pillar": "belonging",
      "summary": "Teach DOGE without dunking or dumping risk on them.",
      "hook": "The best flex is someone else staying safe.",
      "tags": [
        "community",
        "teaching"
      ],
      "related": [
        "first-doge-checklist",
        "phishing-red-flags",
        "what-is-dogecoin",
        "meetups-and-irl",
        "tipping-culture"
      ],
      "body": [
        "Teach DOGE without dunking or dumping risk on them. This page exists so the graph has another door for that intent.",
        "Pillar alignment: belonging. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "first-doge-checklist",
      "onboarding-a-friend"
    ],
    [
      "phishing-red-flags",
      "onboarding-a-friend"
    ]
  ]
},
{
  "id": "pass-21",
  "pages": [
    {
      "slug": "stable-habits",
      "title": "Stable habits",
      "pillar": "safety",
      "summary": "Daily/weekly rituals that reduce unforced errors.",
      "hook": "Discipline is a safety feature.",
      "tags": [
        "habits",
        "checklist"
      ],
      "related": [
        "first-doge-checklist",
        "password-and-2fa",
        "address-hygiene",
        "volatility-psychology",
        "common-mistakes"
      ],
      "body": [
        "Daily/weekly rituals that reduce unforced errors. This page exists so the graph has another door for that intent.",
        "Pillar alignment: safety. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "first-doge-checklist",
      "stable-habits"
    ],
    [
      "password-and-2fa",
      "stable-habits"
    ]
  ]
},
{
  "id": "pass-22",
  "pages": [
    {
      "slug": "open-source-trust",
      "title": "Open source trust",
      "pillar": "clarity",
      "summary": "How to think about software trust without becoming a auditor cosplay.",
      "hook": "Verify what you can. Contain what you cannot.",
      "tags": [
        "software",
        "trust"
      ],
      "related": [
        "wallets-explained",
        "nodes-and-clients",
        "phishing-red-flags",
        "self-custody-checklist",
        "proof-matrix"
      ],
      "body": [
        "How to think about software trust without becoming a auditor cosplay. This page exists so the graph has another door for that intent.",
        "Pillar alignment: clarity. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "wallets-explained",
      "open-source-trust"
    ],
    [
      "nodes-and-clients",
      "open-source-trust"
    ]
  ]
},
{
  "id": "pass-23",
  "pages": [
    {
      "slug": "uk-search-intent",
      "title": "UK search intent",
      "pillar": "belonging",
      "summary": "Why people type dogecoin.co.uk — and how we answer.",
      "hook": "The query is an emotion with keywords.",
      "tags": [
        "uk",
        "seo",
        "psychology"
      ],
      "related": [
        "why-uk-domain",
        "what-is-dogecoin",
        "phishing-red-flags",
        "join-the-list",
        "proof-matrix"
      ],
      "body": [
        "Why people type dogecoin.co.uk — and how we answer. This page exists so the graph has another door for that intent.",
        "Pillar alignment: belonging. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "why-uk-domain",
      "uk-search-intent"
    ],
    [
      "what-is-dogecoin",
      "uk-search-intent"
    ]
  ]
},
{
  "id": "pass-24",
  "pages": [
    {
      "slug": "dust-and-spam",
      "title": "Dust and spam",
      "pillar": "clarity",
      "summary": "Tiny unexpected amounts and why they appear.",
      "hook": "Not every surprise is a gift.",
      "tags": [
        "network",
        "privacy"
      ],
      "related": [
        "address-hygiene",
        "reading-block-explorers",
        "phishing-red-flags",
        "wallets-explained",
        "common-mistakes"
      ],
      "body": [
        "Tiny unexpected amounts and why they appear. This page exists so the graph has another door for that intent.",
        "Pillar alignment: clarity. Read it slowly, then follow two related links.",
        "UK frame: keep procedures boring and verify outside DMs.",
        "When in doubt, return to the Safety hub before acting."
      ]
    }
  ],
  "densify": [
    [
      "address-hygiene",
      "dust-and-spam"
    ],
    [
      "reading-block-explorers",
      "dust-and-spam"
    ]
  ]
}
  ],
};

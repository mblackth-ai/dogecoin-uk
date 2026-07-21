import { NextResponse } from "next/server";

export const revalidate = 60;

type CoinGeckoPrice = {
  dogecoin?: {
    gbp?: number;
    usd?: number;
    gbp_24h_change?: number;
    usd_24h_change?: number;
  };
};

export async function GET() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=gbp,usd&include_24hr_change=true",
      {
        next: { revalidate: 60 },
        headers: { Accept: "application/json" },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "upstream", status: res.status },
        { status: 502 },
      );
    }

    const data = (await res.json()) as CoinGeckoPrice;
    const doge = data.dogecoin;
    if (!doge?.gbp || !doge?.usd) {
      return NextResponse.json({ ok: false, error: "empty" }, { status: 502 });
    }

    return NextResponse.json(
      {
        ok: true,
        asset: "DOGE",
        gbp: doge.gbp,
        usd: doge.usd,
        change24hGbp: doge.gbp_24h_change ?? null,
        change24hUsd: doge.usd_24h_change ?? null,
        source: "CoinGecko",
        updatedAt: new Date().toISOString(),
        disclaimer: "Market data only — not financial advice.",
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      },
    );
  } catch {
    return NextResponse.json({ ok: false, error: "fetch_failed" }, { status: 502 });
  }
}

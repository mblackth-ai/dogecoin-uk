"use client";

import { useEffect, useState } from "react";

type PricePayload = {
  ok: boolean;
  gbp?: number;
  usd?: number;
  change24hGbp?: number | null;
  updatedAt?: string;
  source?: string;
  error?: string;
};

function formatGbp(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 4,
    maximumFractionDigits: 6,
  }).format(value);
}

function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 4,
    maximumFractionDigits: 6,
  }).format(value);
}

function formatChange(value: number | null | undefined) {
  if (value == null || Number.isNaN(value)) return null;
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

export function LivePulse({ compact = false }: { compact?: boolean }) {
  const [data, setData] = useState<PricePayload | null>(null);
  const [status, setStatus] = useState<"loading" | "live" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/doge-price", { cache: "no-store" });
        const json = (await res.json()) as PricePayload;
        if (cancelled) return;
        if (!res.ok || !json.ok) {
          setStatus("error");
          setData(json);
          return;
        }
        setData(json);
        setStatus("live");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    const id = window.setInterval(load, 60_000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  const change = formatChange(data?.change24hGbp);
  const changeClass =
    data?.change24hGbp == null
      ? ""
      : data.change24hGbp >= 0
        ? "is-up"
        : "is-down";

  return (
    <section
      className={compact ? "live-pulse is-compact" : "live-pulse"}
      aria-label="Live Dogecoin market pulse"
      aria-live="polite"
    >
      <div className="live-pulse-head">
        <p className="live-pill">
          <i aria-hidden />
          {status === "live" ? "Live" : status === "loading" ? "Connecting…" : "Paused"}
        </p>
        <p className="live-pulse-kicker">DOGE market pulse</p>
      </div>

      {status === "error" ? (
        <p className="live-pulse-error">
          Price feed resting. Try again shortly — or ignore it; learning first.
        </p>
      ) : data?.gbp != null && data.usd != null ? (
        <p className="live-pulse-prices">
          <strong>{formatGbp(data.gbp)}</strong>
          <span aria-hidden>·</span>
          <span>{formatUsd(data.usd)}</span>
          {change ? (
            <span className={`live-pulse-change ${changeClass}`}>{change} 24h</span>
          ) : null}
        </p>
      ) : (
        <p className="live-pulse-prices">Fetching CoinGecko…</p>
      )}

      {!compact ? (
        <p className="live-pulse-note">
          Via {data?.source ?? "CoinGecko"}. Market data only — not a buy/sell tip.
          Not financial advice.
        </p>
      ) : (
        <p className="live-pulse-note">Not financial advice.</p>
      )}
    </section>
  );
}

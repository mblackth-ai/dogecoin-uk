"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState, type FormEvent } from "react";

export type SearchGuide = {
  slug: string;
  title: string;
  summary: string;
  pillar: string;
};

type Engine = "site" | "google" | "gemini";

const ENGINES: { id: Engine; label: string; hint: string }[] = [
  { id: "site", label: "This site", hint: "Search Clarity, Safety & Belonging guides" },
  { id: "google", label: "Google", hint: "Open Google with your query" },
  {
    id: "gemini",
    label: "Gemini",
    hint: "Open Google AI / Gemini mode with your query",
  },
];

function scoreGuides(guides: SearchGuide[], query: string): SearchGuide[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return guides
    .map((page) => {
      const hay = `${page.title} ${page.summary} ${page.slug} ${page.pillar}`.toLowerCase();
      let score = 0;
      if (page.title.toLowerCase().includes(q)) score += 5;
      if (hay.includes(q)) score += 2;
      for (const word of q.split(/\s+/)) {
        if (word.length > 2 && hay.includes(word)) score += 1;
      }
      return { page, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((row) => row.page);
}

export function StartSearch({ guides }: { guides: SearchGuide[] }) {
  const [engine, setEngine] = useState<Engine>("site");
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  const results = useMemo(
    () => (engine === "site" ? scoreGuides(guides, deferred) : []),
    [guides, deferred, engine],
  );

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    if (!q) return;

    if (engine === "google") {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(q)}`,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    if (engine === "gemini") {
      // Google AI Mode / Gemini-facing search surface
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(q)}&udm=50`,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }
  }

  const activeHint = ENGINES.find((item) => item.id === engine)?.hint;

  return (
    <section className="start-search" aria-label="Search">
      <form className="start-search-form" onSubmit={onSubmit} role="search">
        <div className="engine-tabs" role="tablist" aria-label="Search engine">
          {ENGINES.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={engine === item.id}
              className={engine === item.id ? "is-active" : undefined}
              onClick={() => setEngine(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <label className="start-search-field">
          <span className="sr-only">Search query</span>
          <input
            type="search"
            name="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              engine === "site"
                ? "Search DOGE guides…"
                : engine === "google"
                  ? "Search Google…"
                  : "Ask Gemini / Google AI…"
            }
            autoComplete="off"
            enterKeyHint={engine === "site" ? "search" : "go"}
          />
          {engine !== "site" ? (
            <button className="btn btn-primary" type="submit">
              Go
            </button>
          ) : null}
        </label>
        <p className="start-search-hint">{activeHint}</p>
      </form>

      {engine === "site" && deferred.trim() ? (
        <ul className="start-search-results" aria-live="polite">
          {results.length ? (
            results.map((page) => (
              <li key={page.slug}>
                <Link href={`/guide/${page.slug}`}>
                  <strong>{page.title}</strong>
                  <span>{page.summary}</span>
                </Link>
              </li>
            ))
          ) : (
            <li className="start-search-empty">No guides matched — try Google or Gemini.</li>
          )}
        </ul>
      ) : null}
    </section>
  );
}

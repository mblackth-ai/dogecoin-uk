import fs from "node:fs";

const s = fs.readFileSync("src/content/catalog.ts", "utf8");
const slugs = [...s.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
const set = new Set(slugs);
const missing = new Set();
for (const m of s.matchAll(/related: \[([\s\S]*?)\]/g)) {
  for (const r of m[1].matchAll(/"([a-z0-9-]+)"/g)) {
    if (!set.has(r[1])) missing.add(r[1]);
  }
}
const dupes = slugs.filter((x, i) => slugs.indexOf(x) !== i);
console.log({ pages: slugs.length, unique: set.size, dupes, broken: [...missing] });

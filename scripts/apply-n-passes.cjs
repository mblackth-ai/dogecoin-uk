#!/usr/bin/env node
/** Apply many expansion passes in sequence. Usage: node scripts/apply-n-passes.cjs 30 */
const { spawnSync } = require("child_process");
const path = require("path");

const n = Math.max(1, Number(process.argv[2] || 30));
const script = path.join(__dirname, "apply-expansion-pass.cjs");
const results = [];

for (let i = 0; i < n; i++) {
  const run = spawnSync(process.execPath, [script], {
    encoding: "utf8",
    cwd: path.join(__dirname, ".."),
  });
  const line = (run.stdout || "").trim().split("\n").pop() || "";
  let parsed;
  try {
    parsed = JSON.parse(line);
  } catch {
    parsed = { ok: false, raw: line, stderr: run.stderr };
  }
  results.push(parsed);
  if (!parsed.ok) break;
}

console.log(
  JSON.stringify(
    {
      attempted: n,
      applied: results.filter((r) => r.ok).map((r) => r.batch),
      last: results[results.length - 1],
      count: results.filter((r) => r.ok).length,
    },
    null,
    2,
  ),
);
process.exit(results.some((r) => r.ok) && results[results.length - 1]?.ok !== false || results[results.length - 1]?.reason === "no_batch" ? 0 : 1);

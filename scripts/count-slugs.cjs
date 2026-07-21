const fs = require("fs");
const s = fs.readFileSync("src/content/catalog.ts", "utf8");
const n = (s.match(/slug: "/g) || []).length;
console.log(JSON.stringify({ slugs: n }));

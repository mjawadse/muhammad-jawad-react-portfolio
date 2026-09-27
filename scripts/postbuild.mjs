import { access, readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const assets = resolve(dist, "assets");
const siteUrl = (process.env.URL || process.env.SITE_URL || "https://muhammad-jawad-portfolio.netlify.app").replace(/\/$/, "");

const files = await readdir(assets);
const script = files.find((file) => file === "portfolio.js");
const stylesheet = files.find((file) => file === "portfolio.css");

if (!script || !stylesheet) {
  throw new Error(`Expected production assets were not found: ${JSON.stringify(files)}`);
}

let html = await readFile(resolve(root, "index.html"), "utf8");
html = html
  .replaceAll("{{SITE_URL}}", siteUrl)
  .replace('<script type="module" src="/src/main.jsx"></script>', `<link rel="stylesheet" href="./assets/${stylesheet}" />\n    <script src="./assets/${script}" defer></script>`);

await writeFile(resolve(dist, "index.html"), html);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>
`;
await writeFile(resolve(dist, "sitemap.xml"), sitemap);

const robots = `User-agent: *\nAllow: /\nDisallow: /manage-portfolio/\nSitemap: ${siteUrl}/sitemap.xml\n`;
await writeFile(resolve(dist, "robots.txt"), robots);

await access(resolve(dist, "favicon.svg"));
console.log(`Production portfolio built at ${dist}`);


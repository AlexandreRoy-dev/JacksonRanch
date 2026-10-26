import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const errors = [];

const routes = [
  "/",
  "/chasse-wapiti-cerf-rouge/",
  "/chasse-wapiti/",
  "/chasse-cerf-rouge/",
  "/forfaits-tarifs/",
  "/jackson-lodge/",
  "/activites/",
  "/votre-sejour/",
  "/galerie/",
  "/a-propos/",
  "/faq/",
  "/reserver/",
  "/conditions-generales/",
  "/declaration-de-confidentialite-ca/",
  "/politique-de-cookies-ca/",
  "/credits/",
  "/en/",
  "/en/elk-red-deer-hunting/",
  "/en/elk-hunting/",
  "/en/red-stag-hunting/",
  "/en/packages/",
  "/en/jackson-lodge/",
  "/en/activities/",
  "/en/your-stay/",
  "/en/gallery/",
  "/en/about/",
  "/en/faq/",
  "/en/book/",
  "/en/terms-and-conditions/",
  "/en/privacy-policy-ca/",
  "/en/cookie-policy-ca/",
  "/en/credits/",
];

function walk(dir, skip = new Set()) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function isText(file) {
  return /\.(html|css|js|mjs|cjs|ts|astro|md|json|txt|xml|svg|yml|yaml)$/i.test(file);
}

const em = Buffer.from([0xe2, 0x80, 0x94]);
const en = Buffer.from([0xe2, 0x80, 0x93]);

function hasDash(buf) {
  const s = buf.toString("latin1");
  return s.includes(em.toString("latin1")) || s.includes(en.toString("latin1"));
}

const scanRoots = ["src", "public", "scripts", ".github"];
const extra = ["README.md", "LICENSES.md", "package.json", "astro.config.mjs"];
const files = [];
for (const dir of scanRoots) files.push(...walk(path.join(root, dir)));
for (const file of extra) {
  const full = path.join(root, file);
  if (fs.existsSync(full)) files.push(full);
}
files.push(...walk(dist));

for (const file of files) {
  if (!isText(file)) continue;
  const buf = fs.readFileSync(file);
  if (hasDash(buf)) errors.push(`dash: ${path.relative(root, file)}`);
  if (file.endsWith(`${path.sep}check-dist.mjs`)) continue;
  const text = buf.toString("utf8");
  if (/\$\s?\d/.test(text)) errors.push(`price: ${path.relative(root, file)}`);
  if (/\b(acres?|hectares?|superficie|acreage)\b/i.test(text)) {
    errors.push(`acreage: ${path.relative(root, file)}`);
  }
}

function pageFile(route) {
  if (route === "/") return path.join(dist, "index.html");
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}

for (const route of routes) {
  if (!fs.existsSync(pageFile(route))) errors.push(`missing route ${route}`);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  if (/http-equiv="refresh"/i.test(html)) continue;
  for (const needle of [
    'rel="canonical"',
    'hreflang="fr-CA"',
    'hreflang="en"',
    'hreflang="x-default"',
    "<title>",
    'name="description"',
    "<h1",
  ]) {
    if (!html.includes(needle)) errors.push(`${rel} missing ${needle}`);
  }
  if (/garanti|guaranteed/i.test(html) && !/confirm/i.test(html)) {
    errors.push(`${rel} says garantie without a confirmation marker`);
  }
  if (/2\s*h\s*30|2 hours 30/i.test(html) && !/confirm/i.test(html)) {
    errors.push(`${rel} states a 2 h 30 drive without a confirmation marker`);
  }
}

function localExists(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  if (!clean.startsWith("/")) return true;
  const rel = clean.replace(/^\/+/, "");
  const abs = path.join(dist, rel);
  if (clean.endsWith("/")) return fs.existsSync(path.join(abs, "index.html"));
  if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return true;
  if (fs.existsSync(path.join(abs, "index.html"))) return true;
  return false;
}

function collectUrls(text) {
  const found = new Set();
  const attr = /(?:src|href|poster|data-src-mp4|data-src-webm)=["']([^"']+)["']/gi;
  const srcset = /(?:srcset|imagesrcset)=["']([^"']+)["']/gi;
  const css = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;
  let match;
  while ((match = attr.exec(text))) found.add(match[1].trim());
  while ((match = srcset.exec(text))) {
    for (const part of match[1].split(",")) {
      const url = part.trim().split(/\s+/)[0];
      if (url) found.add(url);
    }
  }
  while ((match = css.exec(text))) found.add(match[1].trim());
  return found;
}

const assetFiles = walk(dist).filter((file) => /\.(html|css|js)$/i.test(file));
const missingAssets = new Set();
for (const file of assetFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const url of collectUrls(text)) {
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    if (url.startsWith("/404")) continue;
    if (!localExists(url)) missingAssets.add(`${url} (from ${path.relative(root, file)})`);
  }
}
for (const item of missingAssets) errors.push(`missing asset ${item}`);

const sitemap = path.join(dist, "sitemap.xml");
if (!fs.existsSync(sitemap) || !fs.statSync(sitemap).isFile()) {
  errors.push("missing dist/sitemap.xml");
} else {
  const xml = fs.readFileSync(sitemap, "utf8");
  for (const route of routes) {
    const loc = route === "/" ? "https://jacksonranch.roymarketing.ca/" : `https://jacksonranch.roymarketing.ca${route}`;
    if (!xml.includes(`<loc>${loc}</loc>`)) errors.push(`sitemap missing ${loc}`);
  }
  if (!xml.includes('hreflang="fr-CA"') || !xml.includes('hreflang="en"') || !xml.includes('hreflang="x-default"')) {
    errors.push("sitemap missing hreflang");
  }
}

const robots = path.join(dist, "robots.txt");
if (!fs.existsSync(robots) || !fs.readFileSync(robots, "utf8").includes("sitemap.xml")) {
  errors.push("robots.txt missing sitemap");
}

const cname = fs.readFileSync(path.join(root, "CNAME"));
const publicCname = fs.readFileSync(path.join(root, "public", "CNAME"));
if (!cname.equals(publicCname)) errors.push("public/CNAME differs from CNAME");
if (cname.toString("utf8").trim() !== "jacksonranch.roymarketing.ca") {
  errors.push("CNAME was changed");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`ok ${routes.length} routes, ${htmlFiles.length} html files`);

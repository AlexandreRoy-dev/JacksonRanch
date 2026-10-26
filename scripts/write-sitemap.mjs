import fs from "node:fs";
import path from "node:path";

const site = "https://jacksonranch.roymarketing.ca";

const pairs = [
  ["/", "/en/"],
  ["/chasse-wapiti-cerf-rouge/", "/en/elk-red-deer-hunting/"],
  ["/chasse-wapiti/", "/en/elk-hunting/"],
  ["/chasse-cerf-rouge/", "/en/red-stag-hunting/"],
  ["/forfaits-tarifs/", "/en/packages/"],
  ["/jackson-lodge/", "/en/jackson-lodge/"],
  ["/activites/", "/en/activities/"],
  ["/votre-sejour/", "/en/your-stay/"],
  ["/galerie/", "/en/gallery/"],
  ["/a-propos/", "/en/about/"],
  ["/faq/", "/en/faq/"],
  ["/reserver/", "/en/book/"],
  ["/conditions-generales/", "/en/terms-and-conditions/"],
  ["/declaration-de-confidentialite-ca/", "/en/privacy-policy-ca/"],
  ["/politique-de-cookies-ca/", "/en/cookie-policy-ca/"],
  ["/credits/", "/en/credits/"],
];

function loc(pathname) {
  return pathname === "/" ? `${site}/` : `${site}${pathname}`;
}

function entry(fr, en) {
  const links = [
    `    <xhtml:link rel="alternate" hreflang="fr-CA" href="${loc(fr)}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${loc(en)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(fr)}" />`,
  ].join("\n");
  const block = (pathname) => `  <url>\n    <loc>${loc(pathname)}</loc>\n${links}\n  </url>`;
  return `${block(fr)}\n${block(en)}`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pairs.map(([fr, en]) => entry(fr, en)).join("\n")}
</urlset>
`;

const dist = path.resolve("dist");
const target = path.join(dist, "sitemap.xml");
if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
  fs.rmSync(target, { recursive: true, force: true });
}
fs.writeFileSync(target, xml);
console.log(`sitemap ${pairs.length * 2} urls`);

import { defineConfig } from "astro/config";

// TODO: au lancement, basculer `site` vers https://www.jacksonranchelkoutfitters.com
// seulement avec l'accord du proprietaire. Le domaine de previsualisation reste
// celui de GitHub Pages. Ne pas changer le CNAME ni les reglages Pages.
export default defineConfig({
  site: "https://jacksonranch.roymarketing.ca",
  trailingSlash: "always",
  build: { format: "directory" },
  compressHTML: true,
});

export const SITE = "https://jacksonranch.roymarketing.ca";

export type Locale = "fr" | "en";

export const routes = {
  home: { fr: "/", en: "/en/" },
  hunt: { fr: "/chasse-wapiti-cerf-rouge/", en: "/en/elk-red-deer-hunting/" },
  elk: { fr: "/chasse-wapiti/", en: "/en/elk-hunting/" },
  stag: { fr: "/chasse-cerf-rouge/", en: "/en/red-stag-hunting/" },
  packages: { fr: "/forfaits-tarifs/", en: "/en/packages/" },
  lodge: { fr: "/jackson-lodge/", en: "/en/jackson-lodge/" },
  activities: { fr: "/activites/", en: "/en/activities/" },
  stay: { fr: "/votre-sejour/", en: "/en/your-stay/" },
  gallery: { fr: "/galerie/", en: "/en/gallery/" },
  about: { fr: "/a-propos/", en: "/en/about/" },
  faq: { fr: "/faq/", en: "/en/faq/" },
  book: { fr: "/reserver/", en: "/en/book/" },
  terms: { fr: "/conditions-generales/", en: "/en/terms-and-conditions/" },
  privacy: { fr: "/declaration-de-confidentialite-ca/", en: "/en/privacy-policy-ca/" },
  cookies: { fr: "/politique-de-cookies-ca/", en: "/en/cookie-policy-ca/" },
  credits: { fr: "/credits/", en: "/en/credits/" },
} as const;

export type RouteId = keyof typeof routes;

export function route(locale: Locale, id: RouteId) {
  return routes[id][locale];
}

export function absolute(path: string) {
  if (path === "/") return `${SITE}/`;
  return `${SITE}${path}`;
}

export const clips = {
  autumn: { id: "01_hero_automne_drone_mixkit-45613", h: 720, webm: false },
  lake: { id: "02_lac_brume_mixkit-34841", h: 720, webm: true },
  elk: { id: "03_wapiti_pexels-17619629", h: 720, webm: true },
  stag: { id: "04_cerf_rouge_pexels-39298952", h: 720, webm: true },
  fire: { id: "05_foyer_bois_mixkit-30252", h: 720, webm: true },
  camp: { id: "06_feu_de_camp_nuit_mixkit-47818", h: 720, webm: true },
  atv: { id: "07_vtt_foret_pexels-9839433", h: 720, webm: false },
  rays: { id: "08_rayons_soleil_foret_mixkit-3009", h: 720, webm: true },
  fish: { id: "09_peche_lac_brume_mixkit-48822", h: 720, webm: true },
  snow: { id: "10_chalet_bois_neige_pexels-6650198", h: 676, webm: true },
} as const;

export type ClipKey = keyof typeof clips;

export const contact = {
  email: "info@jacksonranchelkoutfitters.com",
  // TODO: Vanessa. Le site publie 819 580-9218. Une signature courriel indique 819 565-9076. GHL a aussi note 819 580-9210. A confirmer.
  vanessaTel: "+18195809218",
  vanessaDisplay: "819 580-9218",
  vanessaAlt: "819 565-9076",
  // Charles, numero publie, aucun conflit releve.
  charlesTel: "+18198228051",
  charlesDisplay: "819 822-8051",
  // TODO: Jonathan. 819 572-9076 a certains endroits, 819 580-9218 a cote de son nom sur A propos. A confirmer. Ne pas en choisir un.
  jonathanCandidates: ["819 572-9076", "819 580-9218"],
  // TODO: adresse. Site: 375, 9e Rang, Saint-Isidore-de-Clifton (Quebec) J0B 2X0.
  // Signature courriel: 23, rue des Perles, Sherbrooke (non reprise sur les pages marketing).
  // Declaration actuelle: 2295, chemin Saint-Roch Nord, Sherbrooke (Quebec) J1N 0H2.
  ranch: {
    street: "375, 9e Rang",
    locality: "Saint-Isidore-de-Clifton",
    region: "QC",
    postal: "J0B 2X0",
    country: "CA",
  },
  legalStreet: "2295, chemin Saint-Roch Nord, Sherbrooke (Québec) J1N 0H2",
  maps: "https://www.google.com/maps/search/?api=1&query=375+9e+Rang,+Saint-Isidore-de-Clifton,+QC+J0B+2X0",
  facebook: "https://www.facebook.com/JacksonRanchELKoutfitters/",
  instagram: "https://www.instagram.com/jackson.ranch_elk_outfitters/",
  youtubeChannel: "https://www.youtube.com/@jacksonranchelkoutfitters2014",
  chassomaniak: "https://www.chassomaniak.com/",
};

export const youtube = [
  {
    id: "7xS4wMvpqHY",
    title: "Jackson Ranch Elk Outfitters, Chasse Cerf Rouge / Wapiti",
    poster: "/photos/chasseurs-duo-cerf-rouge-trophee-1200.webp",
    w: 1200,
    h: 1200,
  },
  {
    id: "HxsEL0PPPlc",
    title: "Vivez l'expérience Jackson Ranch Elk Outfitters, Chasse Cerf Rouge / Wapiti",
    poster: "/photos/chasseurs-trio-wapiti-fougeres-large-1200.webp",
    w: 1200,
    h: 618,
  },
] as const;

export const ogImage = "/photos/lodge-exterieur-soir-1200.webp";

export type LicenseRow = {
  n: number;
  file: string;
  ideaFr: string;
  ideaEn: string;
  source: string;
  author: string;
  authorUrl?: string;
  license: string;
  licenseUrl: string;
};

export const licenses: LicenseRow[] = [
  {
    n: 1,
    file: "01_hero_automne_drone_mixkit-45613.mp4",
    ideaFr: "Forêt d'automne en drone (hero de l'accueil)",
    ideaEn: "Autumn forest by drone (home hero)",
    source: "https://mixkit.co/free-stock-video/drone-flying-over-an-autumn-forest-45613/",
    author: "Mixkit",
    license: "Mixkit Free License",
    licenseUrl: "https://mixkit.co/license/#videoFree",
  },
  {
    n: 2,
    file: "02_lac_brume_mixkit-34841.mp4",
    ideaFr: "Lac et brume (activités, pêche)",
    ideaEn: "Lake and mist (activities, fishing)",
    source: "https://mixkit.co/free-stock-video/mysterious-forest-with-a-lake-and-mist-34841/",
    author: "Mixkit",
    license: "Mixkit Free License",
    licenseUrl: "https://mixkit.co/license/#videoFree",
  },
  {
    n: 3,
    file: "03_wapiti_pexels-17619629.mp4",
    ideaFr: "Wapitis mâles (ambiance des pages chasse et wapiti)",
    ideaEn: "Bull elk (atmosphere on the hunt and elk pages)",
    source: "https://www.pexels.com/video/bull-elk-17619629/",
    author: "Dean Diemert",
    authorUrl: "https://www.pexels.com/@dean-diemert-36424310/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    n: 4,
    file: "04_cerf_rouge_pexels-39298952.mp4",
    ideaFr: "Cerf avec bois (ambiance de la page cerf rouge)",
    ideaEn: "Stag with antlers (atmosphere on the red stag page)",
    source: "https://www.pexels.com/video/majestic-stag-grazing-in-forest-clearing-39298952/",
    author: "Jonathan Rodrigues",
    authorUrl: "https://www.pexels.com/@jonathan-rodrigues-553088958/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    n: 5,
    file: "05_foyer_bois_mixkit-30252.mp4",
    ideaFr: "Feu de foyer (lodge)",
    ideaEn: "Fireplace (lodge)",
    source: "https://mixkit.co/free-stock-video/firewood-burning-in-the-fireplace-30252/",
    author: "Mixkit",
    license: "Mixkit Free License",
    licenseUrl: "https://mixkit.co/license/#videoFree",
  },
  {
    n: 6,
    file: "06_feu_de_camp_nuit_mixkit-47818.mp4",
    ideaFr: "Feu de camp la nuit (espace feu et appel à réserver)",
    ideaEn: "Campfire at night (fire pit and booking band)",
    source: "https://mixkit.co/free-stock-video/campfire-in-the-woods-at-night-47818/",
    author: "Mixkit",
    license: "Mixkit Free License",
    licenseUrl: "https://mixkit.co/license/#videoFree",
  },
  {
    n: 7,
    file: "07_vtt_foret_pexels-9839433.mp4",
    ideaFr: "VTT en forêt (section Mont Hereford)",
    ideaEn: "ATV in a forest (Mont Hereford section)",
    source: "https://www.pexels.com/video/a-man-driving-an-all-terrain-vehicle-in-a-forest-9839433/",
    author: "Vadim Mishin",
    authorUrl: "https://www.pexels.com/@vadim-mishin-95411827/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    n: 8,
    file: "08_rayons_soleil_foret_mixkit-3009.mp4",
    ideaFr: "Rayons de soleil en forêt (notre histoire)",
    ideaEn: "Sun rays in a forest (our story)",
    source: "https://mixkit.co/free-stock-video/the-suns-rays-in-the-forest-3009/",
    author: "Mixkit",
    license: "Mixkit Free License",
    licenseUrl: "https://mixkit.co/license/#videoFree",
  },
  {
    n: 9,
    file: "09_peche_lac_brume_mixkit-48822.mp4",
    ideaFr: "Pêche sur un lac brumeux",
    ideaEn: "Fishing on a misty lake",
    source: "https://mixkit.co/free-stock-video/a-person-fishing-on-a-boat-on-a-misty-early-48822/",
    author: "Mixkit",
    license: "Mixkit Free License",
    licenseUrl: "https://mixkit.co/license/#videoFree",
  },
  {
    n: 10,
    file: "10_chalet_bois_neige_pexels-6650198.mp4",
    ideaFr: "Chalet en bois sous la neige (chasse tardive). Ce n'est pas le Jackson Lodge.",
    ideaEn: "Log cabin in snow (late-season hunt). This is not the Jackson Lodge.",
    source: "https://www.pexels.com/video/a-snow-covered-log-cabin-6650198/",
    author: "KATRIN BOLOVTSOVA",
    authorUrl: "https://www.pexels.com/@ekaterina-bolovtsova/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
];

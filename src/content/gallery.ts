export type GalleryItem = {
  src: string;
  w: number;
  h: number;
  crop?: boolean;
  alt: { fr: string; en: string };
};

export const gallery: GalleryItem[] = [
  {
    src: "/photos/chasseurs-trio-wapiti-fougeres-large-1200.webp",
    w: 1200,
    h: 618,
    alt: {
      fr: "Trois chasseurs avec un trophée de wapiti dans les fougères, au ranch",
      en: "Three hunters with an elk trophy in the ferns at the ranch",
    },
  },
  {
    src: "/photos/lodge-exterieur-soir-1200.webp",
    w: 1200,
    h: 700,
    alt: {
      fr: "Le Jackson Lodge éclairé au crépuscule",
      en: "Jackson Lodge lit at dusk",
    },
  },
  {
    src: "/photos/panorama-automne-vallee-1200.webp",
    w: 1200,
    h: 502,
    alt: {
      fr: "Vallée et feuillage d'automne vus du ranch",
      en: "Valley and autumn foliage seen from the ranch",
    },
  },
  {
    src: "/photos/trophee-wapiti-chasseur-automne-1200.webp",
    w: 1200,
    h: 688,
    alt: {
      fr: "Chasseur avec un trophée de wapiti dans le feuillage d'automne",
      en: "Hunter with an elk trophy among autumn leaves",
    },
  },
  {
    src: "/photos/chasseurs-duo-cerf-rouge-trophee-1200.webp",
    w: 1200,
    h: 1200,
    alt: {
      fr: "Deux chasseurs avec un trophée de cerf rouge",
      en: "Two hunters with a red stag trophy",
    },
  },
  {
    src: "/photos/chasseurs-camouflage-foret-1200.webp",
    w: 1200,
    h: 1200,
    alt: {
      fr: "Deux chasseurs de dos, en camouflage, dans la forêt du ranch",
      en: "Two hunters from behind, in camouflage, in the ranch forest",
    },
  },
  {
    src: "/photos/accueil-hero-chasseur-wapiti-trophee-1200.webp",
    w: 1200,
    h: 900,
    crop: true,
    alt: {
      fr: "Chasseur en dossard orange avec un trophée de wapiti, forêt d'automne",
      en: "Hunter in an orange vest with an elk trophy, autumn forest",
    },
  },
  {
    src: "/photos/chasseur-arbalete-wapiti-trophee-1200.webp",
    w: 1200,
    h: 900,
    crop: true,
    alt: {
      fr: "Chasseur à l'arbalète avec un trophée de wapiti",
      en: "Hunter with a crossbow and an elk trophy",
    },
  },
  {
    src: "/photos/trophee-wapiti-chasseur-foret-1200.webp",
    w: 1200,
    h: 688,
    alt: {
      fr: "Chasseur derrière un trophée de wapiti, en forêt",
      en: "Hunter behind an elk trophy in the forest",
    },
  },
  {
    src: "/photos/lodge-interieur-cuisine-trophees-1200.webp",
    w: 1200,
    h: 700,
    alt: {
      fr: "Cuisine ouverte du Jackson Lodge et trophées au mur",
      en: "Open kitchen at Jackson Lodge and trophies on the wall",
    },
  },
  {
    src: "/photos/chasseurs-trio-wapiti-fougeres-1200.webp",
    w: 1200,
    h: 1200,
    alt: {
      fr: "Groupe de chasseurs avec un wapiti, cadrage rapproché",
      en: "Hunting party with an elk, closer frame",
    },
  },
  {
    src: "/photos/panorama-automne-chemin-1200.webp",
    w: 1200,
    h: 360,
    alt: {
      fr: "Chemin, clôture et vallée en automne au ranch",
      en: "Lane, fence and valley in autumn at the ranch",
    },
  },
];

export const lodgePhotos: GalleryItem[] = [
  {
    src: "/photos/lodge-salon-poele-465.webp",
    w: 465,
    h: 349,
    alt: { fr: "Salon du lodge et poêle à bois", en: "Lodge living room and wood stove" },
  },
  {
    src: "/photos/lodge-salle-grandes-fenetres-465.webp",
    w: 465,
    h: 349,
    alt: { fr: "Salle principale du lodge, grandes fenêtres", en: "Main room of the lodge, large windows" },
  },
  {
    src: "/photos/lodge-cuisine-464.webp",
    w: 464,
    h: 348,
    alt: { fr: "Cuisine du lodge et îlot", en: "Lodge kitchen and island" },
  },
  {
    src: "/photos/lodge-chambre-465.webp",
    w: 465,
    h: 348,
    alt: { fr: "Une chambre du Jackson Lodge", en: "A bedroom at Jackson Lodge" },
  },
  {
    src: "/photos/lodge-salle-de-bain-465.webp",
    w: 465,
    h: 348,
    alt: { fr: "Salle de bain du lodge", en: "Lodge bathroom" },
  },
  {
    src: "/photos/lodge-terrasse-chaise-rouge-464.webp",
    w: 464,
    h: 348,
    alt: { fr: "Terrasse du lodge et chaise rouge", en: "Lodge deck and a red chair" },
  },
  {
    src: "/photos/lodge-table-repas-464.webp",
    w: 464,
    h: 349,
    alt: { fr: "Table du lodge et gratin", en: "Lodge table and a gratin" },
  },
  {
    src: "/photos/lodge-salon-trophees-465.webp",
    w: 465,
    h: 300,
    alt: { fr: "Salon du lodge et trophées, vue en hauteur", en: "Lodge living room and trophies, from above" },
  },
];

export const team = [
  {
    name: "Vanessa Garneau",
    src: "/photos/equipe-vanessa-1200.webp",
    w: 1200,
    h: 1258,
    kind: "vanessa" as const,
    alt: { fr: "Portrait de Vanessa Garneau", en: "Portrait of Vanessa Garneau" },
  },
  {
    name: "Charles Verdo",
    src: "/photos/equipe-charles-verdo-1200.webp",
    w: 1200,
    h: 1258,
    kind: "charles" as const,
    alt: { fr: "Portrait de Charles Verdo", en: "Portrait of Charles Verdo" },
  },
  {
    name: "Jonathan Verdo",
    src: "/photos/equipe-jonathan-verdo-1200.webp",
    w: 1200,
    h: 1258,
    kind: "jonathan" as const,
    alt: { fr: "Portrait de Jonathan Verdo", en: "Portrait of Jonathan Verdo" },
  },
];

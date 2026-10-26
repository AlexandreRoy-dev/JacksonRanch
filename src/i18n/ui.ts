import type { Locale, RouteId } from "../data/site";

export type NavItem = { id: RouteId; label: string };

export type Copy = {
  skip: string;
  menu: string;
  close: string;
  nav: NavItem[];
  footerLinks: NavItem[];
  book: string;
  bookLong: string;
  packagesCta: string;
  rateCard: string;
  onRequest: string;
  langLabel: string;
  langShort: string;
  call: string;
  callName: string;
  stickyBook: string;
  home: string;
  crumbs: string;
  footerExplore: string;
  footerContact: string;
  footerFollow: string;
  pending: string;
  atmosphere: string;
  privacy: string;
  terms: string;
  cookies: string;
  credits: string;
  newTab: string;
  ctaTitle: string;
  ctaText: string;
  ogAlt: string;
  addressLabel: string;
  map: string;
  emailLabel: string;
  vanessaRole: string;
  charlesRole: string;
  jonathanRole: string;
  jonathanNote: string;
  vanessaNote: string;
  addressNote: string;
  notFoundTitle: string;
  notFoundText: string;
  form: {
    title: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    language: string;
    languageFr: string;
    languageEn: string;
    species: string;
    speciesElk: string;
    speciesStag: string;
    speciesBoth: string;
    sci: string;
    sciOptions: { value: string; label: string }[];
    hunters: string;
    companions: string;
    plan: string;
    planEu: string;
    planUs: string;
    planDiscuss: string;
    weapon: string;
    weaponOptions: { value: string; label: string }[];
    start: string;
    end: string;
    activities: string;
    actFish: string;
    actAtv: string;
    actBird: string;
    actNone: string;
    message: string;
    consentBefore: string;
    consentLink: string;
    consentAfter: string;
    submit: string;
    endpointNote: string;
    status: string;
    noscript: string;
    summary: string;
    choose: string;
    errors: {
      name: string;
      email: string;
      phone: string;
      required: string;
      dates: string;
      consent: string;
    };
  };
};

const sciFr = [
  { value: "discuss", label: "À discuter" },
  { value: "elk-400", label: "Wapiti, 400 et plus" },
  { value: "elk-450", label: "Wapiti, 450 et plus" },
  { value: "elk-500", label: "Wapiti, 500 et plus" },
  { value: "stag-350", label: "Cerf rouge, 350 et plus" },
  { value: "stag-450", label: "Cerf rouge, 450 et plus" },
  { value: "stag-525", label: "Cerf rouge, 525 et plus" },
];

const sciEn = [
  { value: "discuss", label: "To be discussed" },
  { value: "elk-400", label: "Elk, 400 and up" },
  { value: "elk-450", label: "Elk, 450 and up" },
  { value: "elk-500", label: "Elk, 500 and up" },
  { value: "stag-350", label: "Red stag, 350 and up" },
  { value: "stag-450", label: "Red stag, 450 and up" },
  { value: "stag-525", label: "Red stag, 525 and up" },
];

const weaponsFr = [
  { value: "rifle", label: "Carabine" },
  { value: "muzzle", label: "Poudre noire" },
  { value: "bow", label: "Arc" },
  { value: "crossbow", label: "Arbalète" },
  { value: "loan", label: "Prêt ou location" },
  { value: "unsure", label: "À déterminer" },
];

const weaponsEn = [
  { value: "rifle", label: "Rifle" },
  { value: "muzzle", label: "Muzzleloader" },
  { value: "bow", label: "Bow" },
  { value: "crossbow", label: "Crossbow" },
  { value: "loan", label: "Loan or rental" },
  { value: "unsure", label: "Not decided" },
];

export const ui: Record<Locale, Copy> = {
  fr: {
    skip: "Aller au contenu",
    menu: "Menu",
    close: "Fermer",
    nav: [
      { id: "hunt", label: "La chasse" },
      { id: "packages", label: "Forfaits" },
      { id: "lodge", label: "Jackson Lodge" },
      { id: "activities", label: "Activités" },
      { id: "about", label: "Notre histoire" },
      { id: "faq", label: "FAQ" },
    ],
    footerLinks: [
      { id: "hunt", label: "La chasse" },
      { id: "elk", label: "Wapiti" },
      { id: "stag", label: "Cerf rouge" },
      { id: "packages", label: "Forfaits et tarifs" },
      { id: "lodge", label: "Jackson Lodge" },
      { id: "activities", label: "Activités" },
      { id: "stay", label: "Votre séjour" },
      { id: "gallery", label: "Galerie" },
      { id: "about", label: "Notre histoire" },
      { id: "faq", label: "FAQ" },
    ],
    book: "Réserver",
    bookLong: "Planifier ma chasse",
    packagesCta: "Voir les forfaits",
    rateCard: "Recevoir la grille tarifaire",
    onRequest: "Sur demande",
    langLabel: "English",
    langShort: "EN",
    call: "Appeler",
    callName: "Appeler Vanessa",
    stickyBook: "Réserver",
    home: "Accueil",
    crumbs: "Fil d'Ariane",
    footerExplore: "Explorer",
    footerContact: "Coordonnées",
    footerFollow: "Suivre",
    pending: "À confirmer",
    atmosphere: "Ambiance",
    privacy: "Déclaration de confidentialité",
    terms: "Conditions générales",
    cookies: "Politique de témoins",
    credits: "Crédits médias",
    newTab: "nouvel onglet",
    ctaTitle: "La saison du rut se réserve tôt.",
    ctaText: "Septembre et octobre partent en premier. Parlez-nous de vos dates et du trophée que vous visez.",
    ogAlt: "Le Jackson Lodge éclairé au crépuscule, Saint-Isidore-de-Clifton",
    addressLabel: "Adresse publiée pour le ranch",
    map: "Voir l'itinéraire",
    emailLabel: "Courriel",
    vanessaRole: "Français",
    charlesRole: "English",
    jonathanRole: "Jonathan Verdo",
    vanessaNote: "Le site actuel publie le 819 580-9218. Une signature courriel indique le 819 565-9076.",
    jonathanNote: "Le numéro publié n'est pas le même partout : 819 572-9076, et le 819 580-9218 à côté de son nom sur la page À propos.",
    addressNote: "Cette adresse est celle du site actuel. Une signature courriel et la déclaration de confidentialité en indiquent d'autres, à Sherbrooke.",
    notFoundTitle: "Page introuvable",
    notFoundText: "Cette adresse ne correspond à aucune page. Revenez à l'accueil ou planifiez une chasse.",
    form: {
      title: "Votre demande",
      intro: "Dites-nous vos dates, votre groupe et le trophée visé. Nous vous répondons personnellement. Le délai de réponse est à confirmer.",
      name: "Nom",
      email: "Courriel",
      phone: "Téléphone",
      language: "Langue préférée",
      languageFr: "Français",
      languageEn: "Anglais",
      species: "Espèce",
      speciesElk: "Wapiti",
      speciesStag: "Cerf rouge",
      speciesBoth: "Les deux",
      sci: "Palier SCI visé",
      sciOptions: sciFr,
      hunters: "Nombre de chasseurs",
      companions: "Accompagnateurs",
      plan: "Plan",
      planEu: "Européen",
      planUs: "Américain",
      planDiscuss: "À discuter",
      weapon: "Arme",
      weaponOptions: weaponsFr,
      start: "Date de début souhaitée",
      end: "Date de fin souhaitée",
      activities: "Activités d'intérêt",
      actFish: "Pêche à la truite",
      actAtv: "VTT au Mont Hereford",
      actBird: "Perdrix en Argo",
      actNone: "Aucune",
      message: "Message",
      consentBefore: "J'accepte que Jackson Ranch Elk Outfitters utilise mon nom, mon courriel et mon téléphone pour répondre à cette demande de séjour. Je peux retirer ce consentement en écrivant à info@jacksonranchelkoutfitters.com. Voir la",
      consentLink: "déclaration de confidentialité",
      consentAfter: ".",
      submit: "Envoyer ma demande",
      endpointNote: "L'envoi en ligne sera branché quand le destinataire sera confirmé. D'ici là, la demande ne part pas du site.",
      status: "L'envoi en ligne n'est pas encore activé : le destinataire reste à confirmer. Appelez Vanessa au 819 580-9218 ou écrivez à info@jacksonranchelkoutfitters.com. Vos réponses restent affichées ici.",
      noscript: "Le formulaire a besoin de JavaScript pour la validation. Appelez le 819 580-9218 ou écrivez à info@jacksonranchelkoutfitters.com.",
      summary: "Le formulaire contient des erreurs.",
      choose: "Choisir",
      errors: {
        name: "Inscrivez votre nom.",
        email: "Inscrivez un courriel valide.",
        phone: "Inscrivez un téléphone.",
        required: "Choisissez une option.",
        dates: "La date de fin précède la date de début.",
        consent: "Le consentement est nécessaire pour donner suite à la demande.",
      },
    },
  },
  en: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    nav: [
      { id: "hunt", label: "The hunt" },
      { id: "packages", label: "Packages" },
      { id: "lodge", label: "Jackson Lodge" },
      { id: "activities", label: "Activities" },
      { id: "about", label: "Our story" },
      { id: "faq", label: "FAQ" },
    ],
    footerLinks: [
      { id: "hunt", label: "The hunt" },
      { id: "elk", label: "Elk" },
      { id: "stag", label: "Red stag" },
      { id: "packages", label: "Packages and rates" },
      { id: "lodge", label: "Jackson Lodge" },
      { id: "activities", label: "Activities" },
      { id: "stay", label: "Your stay" },
      { id: "gallery", label: "Gallery" },
      { id: "about", label: "Our story" },
      { id: "faq", label: "FAQ" },
    ],
    book: "Book",
    bookLong: "Plan my hunt",
    packagesCta: "View packages",
    rateCard: "Request the rate card",
    onRequest: "On request",
    langLabel: "Français",
    langShort: "FR",
    call: "Call",
    callName: "Call Charles",
    stickyBook: "Book",
    home: "Home",
    crumbs: "Breadcrumb",
    footerExplore: "Explore",
    footerContact: "Contact",
    footerFollow: "Follow",
    pending: "To be confirmed",
    atmosphere: "Atmosphere",
    privacy: "Privacy statement",
    terms: "Terms and conditions",
    cookies: "Cookie policy",
    credits: "Media credits",
    newTab: "new tab",
    ctaTitle: "The rut season is booked early.",
    ctaText: "September and October go first. Tell us your dates and the trophy you are aiming for.",
    ogAlt: "Jackson Lodge lit at dusk in Saint-Isidore-de-Clifton",
    addressLabel: "Ranch address published on the current site",
    map: "Get directions",
    emailLabel: "Email",
    vanessaRole: "French",
    charlesRole: "English",
    jonathanRole: "Jonathan Verdo",
    vanessaNote: "The current site lists 819 580-9218. An email signature lists 819 565-9076.",
    jonathanNote: "The published number is not the same everywhere: 819 572-9076, and 819 580-9218 next to his name on the About page.",
    addressNote: "This is the address on the current site. An email signature and the privacy statement list other addresses in Sherbrooke.",
    notFoundTitle: "Page not found",
    notFoundText: "This address does not match a page. Return home or plan a hunt.",
    form: {
      title: "Your request",
      intro: "Tell us your dates, your group and the trophy you want. We reply in person. The response time is to be confirmed.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      language: "Preferred language",
      languageFr: "French",
      languageEn: "English",
      species: "Species",
      speciesElk: "Elk",
      speciesStag: "Red stag",
      speciesBoth: "Both",
      sci: "Target SCI class",
      sciOptions: sciEn,
      hunters: "Number of hunters",
      companions: "Non-hunting guests",
      plan: "Plan",
      planEu: "European",
      planUs: "American",
      planDiscuss: "To be discussed",
      weapon: "Weapon",
      weaponOptions: weaponsEn,
      start: "Preferred start date",
      end: "Preferred end date",
      activities: "Activities of interest",
      actFish: "Trout fishing",
      actAtv: "ATV to Mont Hereford",
      actBird: "Partridge from an Argo",
      actNone: "None",
      message: "Message",
      consentBefore: "I agree that Jackson Ranch Elk Outfitters may use my name, email and phone number to answer this request. I can withdraw this consent by writing to info@jacksonranchelkoutfitters.com. See the",
      consentLink: "privacy statement",
      consentAfter: ".",
      submit: "Send my request",
      endpointNote: "Online sending will be connected once the recipient is confirmed. Until then, the request does not leave this page.",
      status: "Online sending is not active yet: the recipient is still to be confirmed. Call Charles at 819 822-8051 or write to info@jacksonranchelkoutfitters.com. Your answers stay on this page.",
      noscript: "The form needs JavaScript for validation. Call 819 822-8051 or write to info@jacksonranchelkoutfitters.com.",
      summary: "The form has errors.",
      choose: "Choose",
      errors: {
        name: "Enter your name.",
        email: "Enter a valid email.",
        phone: "Enter a phone number.",
        required: "Choose an option.",
        dates: "The end date is before the start date.",
        consent: "Consent is required before we can follow up.",
      },
    },
  },
};

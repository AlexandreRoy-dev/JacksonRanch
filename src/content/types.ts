import type { ClipKey, RouteId } from "../data/site";

export type Photo = {
  src: string;
  w: number;
  h: number;
  alt: string;
  crop?: boolean;
  srcset?: string;
};

export type Block =
  | { type: "prose"; title?: string; paragraphs: string[] }
  | { type: "split"; title: string; paragraphs: string[]; photo: Photo; reverse?: boolean }
  | { type: "cards"; title?: string; intro?: string; items: { title: string; text: string }[] }
  | { type: "photos"; title?: string; intro?: string; items: { title: string; text: string; photo: Photo }[] }
  | { type: "steps"; title: string; intro?: string; items: { when: string; what: string }[] }
  | {
      type: "plans";
      title: string;
      intro: string;
      leftTitle: string;
      leftPoints: string[];
      rightTitle: string;
      rightPoints: string[];
      foot: string;
    }
  | { type: "list"; title: string; intro?: string; items: string[] }
  | { type: "note"; text: string; href?: string; hrefLabel?: string }
  | { type: "gallery" }
  | { type: "team" }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "videos" }
  | { type: "sci"; title: string; elkLabel: string; elk: string[]; stagLabel: string; stag: string[]; note: string }
  | { type: "band"; clip: ClipKey; title: string; text: string }
  | { type: "links"; title?: string; items: { id: RouteId; label: string; text: string }[] }
  | { type: "form" }
  | { type: "credits" };

export type Page = {
  id: RouteId;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  tone: "story" | "doc";
  clip?: ClipKey;
  photo?: Photo;
  cta: boolean;
  blocks: Block[];
};

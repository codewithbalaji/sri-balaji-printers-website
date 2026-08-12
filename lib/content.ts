import {
  Heart,
  Briefcase,
  Megaphone,
  Sticker,
  Gift,
  Layers,
  Grid3x3,
  MonitorSmartphone,
} from "lucide-react";

export const printingMethods = [
  {
    icon: Layers,
    name: "Offset Printing",
    description:
      "Ink transferred via plates to a rubber blanket, then to paper. Best for large-volume jobs where cost-per-piece drops at scale and color consistency matters.",
    bestFor: "Invitation cards, bill books, brochures, books",
  },
  {
    icon: Grid3x3,
    name: "Screen Printing",
    description:
      "Ink pushed through a mesh stencil for bold, durable, opaque color on varied surfaces.",
    bestFor: "Banners, cloth & bag printing",
  },
  {
    icon: MonitorSmartphone,
    name: "Multicolor / Digital Printing",
    description:
      "Direct digital output, no plates needed — best for short runs, quick turnaround, and variable data.",
    bestFor: "ID cards, stickers, proofs, short-run jobs",
  },
] as const;

export const serviceCategories = [
  {
    slug: "wedding-and-event",
    icon: Heart,
    title: "Wedding & Event Printing",
    tint: "bg-surface-magenta",
    iconColor: "text-primary",
    items: [
      "Wedding invitation cards",
      "Birthday & function invitation cards",
      "Wedding banners",
      "Event banners",
    ],
  },
  {
    slug: "thamboolam",
    icon: Gift,
    title: "Thamboolam Bags",
    tint: "bg-surface-cyan",
    iconColor: "text-accent-cyan",
    items: [
      "Custom-printed wedding return-gift bags",
      "Names, date or a motif printed to order",
      "Traditional South Indian thamboolam / tamblam style",
    ],
  },
  {
    slug: "business-and-corporate",
    icon: Briefcase,
    title: "Business & Corporate Printing",
    tint: "bg-muted",
    iconColor: "text-foreground",
    items: [
      "Visiting cards / business cards",
      "Bill books (duplicate / triplicate, carbonless)",
      "ID cards",
      "Brochures",
      "Catalogs",
      "Books",
    ],
  },
  {
    slug: "banners-and-signage",
    icon: Megaphone,
    title: "Banners & Signage",
    tint: "bg-surface-magenta",
    iconColor: "text-primary",
    items: ["Commercial banners", "Promotional / advertisement banners", "Flex banners"],
  },
  {
    slug: "stickers-and-labels",
    icon: Sticker,
    title: "Stickers & Labels",
    tint: "bg-surface-cyan",
    iconColor: "text-accent-cyan",
    items: ["Product labels", "Vinyl stickers", "Decorative stickers", "All types — ask us"],
  },
] as const;

export const galleryCategories = [
  { title: "Wedding Invitation Cards", tint: "bg-surface-magenta", accent: "bg-primary" },
  { title: "Thamboolam Bags", tint: "bg-surface-cyan", accent: "bg-accent-cyan" },
  { title: "Bill Books", tint: "bg-muted", accent: "bg-foreground" },
  { title: "ID Cards", tint: "bg-surface-magenta", accent: "bg-accent-yellow" },
  { title: "Banners", tint: "bg-surface-cyan", accent: "bg-primary" },
  { title: "Stickers & Labels", tint: "bg-muted", accent: "bg-accent-cyan" },
] as const;

export const jobTypeOptions = [
  "Wedding invitation cards",
  "Thamboolam bags",
  "Bill books",
  "Visiting cards / ID cards",
  "Brochures / catalogs / books",
  "Banners & signage",
  "Stickers & labels",
  "Something else",
] as const;

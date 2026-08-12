---
name: Sri Balaji Printers
description: Warm, trustworthy local-business site for a Chennai commercial print shop, carrying a vivid CMYK-inspired palette in a conventional layout grammar.
colors:
  ink: "#1C1917"
  ink-soft: "#57534E"
  paper: "#FFFDF9"
  surface-magenta: "#FFF1F7"
  surface-cyan: "#EEFBFD"
  primary: "#E11D74"
  primary-deep: "#B8155E"
  primary-foreground: "#FFFDF9"
  accent-cyan: "#0891B2"
  accent-cyan-soft: "#CFF4FA"
  accent-yellow: "#F0B100"
  accent-yellow-foreground: "#1C1917"
  border: "#EDE6DD"
typography:
  display:
    fontFamily: "Poppins, 'Noto Sans Tamil', system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.01em"
    lineHeight: 1.05
  heading:
    fontFamily: "Poppins, 'Noto Sans Tamil', system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Inter, 'Noto Sans Tamil', system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, 'Noto Sans Tamil', system-ui, sans-serif"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  section-y-mobile: "64px"
  section-y-desktop: "112px"
  gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
---

## Overview

Sri Balaji Printers is a 25+ year old commercial print shop in Ambattur, Chennai. The client asked for a "CMYK" theme; the site expresses that as a vivid, confident four-hue palette (magenta, cyan, yellow, ink) rather than literal print-production motifs (no halftones, registration marks, or crop marks). Structurally the site follows the category-standard local-business template — conventional hero, service cards, trust strip, CTA band — a deliberate choice made after an unconventional "kolam dot-grid" concept was offered and declined; craft and polish carry the distinction instead of an unusual structure. Voice is warm but professional: this is a shop for weddings and businesses alike, not a hobbyist print stall.

## Colors

- **Primary — Magenta (`#E11D74`)**: carries primary CTAs (Call/WhatsApp buttons), the header accent, and any single dominant brand mark. Never used for large background fields — it stays a high-energy, focused color, not a wash.
- **Accent — Cyan (`#0891B2`)**: secondary actions, links, icons, and one alternating section background tint (`surface-cyan`, `#EEFBFD`). Reads as trustworthy/informational next to magenta's urgency.
- **Highlight — Yellow (`#F0B100`)**: sparingly, for the one real proof point that deserves a badge (Justdial 4.6★, "Since 2001"). Pair with dark ink text (`accent-yellow-foreground`) for contrast — never white-on-yellow.
- **Ink (`#1C1917`) / Ink-soft (`#57534E`)**: all body text. Ink-soft is the only permitted secondary-text tone; never gray text on colored surfaces — tint from ink or the section's own hue instead.
- **Paper (`#FFFDF9`)**: base background, warm off-white rather than stark white.
- **Section tints** (`surface-magenta`, `surface-cyan`): used to alternate section backgrounds for rhythm, always at this very light tint — never a saturated background field behind body copy.

Strategy: **Committed** — magenta is the one saturated color carrying real weight (all primary buttons, key badges), cyan and yellow stay strictly secondary. This is a Persuade surface; the palette is allowed to commit.

## Typography

- **Display/Heading — Poppins** (600–700): hero headline, section titles. Confident, rounded, geometric — reads modern and friendly rather than corporate-cold. Bilingual fallback to Noto Sans Tamil so any Tamil text (business name, addresses) renders natively rather than tofu.
- **Body/Label — Inter** (400–600): all body copy, nav, buttons. Highly legible at small sizes on the phones most visitors will use.
- Headline scale caps around 3.5rem desktop / 2.25rem mobile — this is a local-business hero, not an editorial cover. Tracking stays neutral to tight (max -0.01em); no wide tracked eyebrows as a system.

## Layout

- Single-column scroll: Header (sticky, with Call/WhatsApp always visible) → Hero → Service category teasers → Why-choose-us / trust strip → CTA band → Footer (contact, hours, map link).
- Section vertical rhythm: 64px mobile / 112px desktop between major sections, more space above a heading than below it.
- Body measure capped ~65–75ch for any paragraph copy.
- Mobile-first: single column throughout on small screens; service teasers and trust points move to 2–4 column grids only at `md`+.

## Elevation & Depth

Flat by default. The only shadows are soft, offset card shadows (`0 8px 24px -4px rgba(28,25,23,0.10)`) on service-teaser cards and the sticky header's scroll-state shadow. No glass/blur decoration, no zero-offset colored halos.

## Shapes

- Buttons and pills: fully rounded (`rounded.pill`) — this is the shop's primary "come talk to us" gesture and should feel welcoming, not boxy.
- Cards and image frames: `rounded.lg` (20px).
- Small chips/badges (rating, "Since 2001"): `rounded.md`.

## Components

- **button-primary**: magenta fill, paper text, pill radius — used only for Call/WhatsApp and other primary contact actions.
- **button-secondary**: paper fill, ink text, ink/10 border, pill radius — used for "View services," "See gallery" style secondary links.
- **Service teaser card**: `surface-*` tint background OR paper with a colored icon chip (never a same-size icon+heading+text card repeated 8+ times identically — vary at least one card's size/emphasis if the grid grows past the homepage's ~4–6 teasers).
- **Trust badge**: yellow chip, ink text, used only for the two real proof points (years in business, Justdial rating) — never invented stats.

## Do's and Don'ts

- Do keep magenta reserved for action/emphasis; don't let it become a full-bleed background wash.
- Do use the real Justdial rating (4.6★, 3 reviews) as the only review-based trust signal; don't invent testimonials, review counts, or customer names.
- Do keep Call/WhatsApp reachable from the header on every viewport; don't bury contact behind a hamburger-only mobile nav.
- Do use generic/placeholder press imagery clearly generic in style; don't caption placeholder photos as if they were this shop's real work.
- Don't display a GST number anywhere (client preference).
- Don't reintroduce print-production literalism (halftone textures, registration marks, crop marks) — the brief pinned "vibrant palette, not literal motifs."

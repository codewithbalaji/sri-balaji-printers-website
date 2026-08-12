---
version: 1
slug: "app-about-page-tsx"
primary_target: "app/about/page.tsx"
related_targets: ["app/services/page.tsx","app/gallery/page.tsx","app/contact/page.tsx"]
---

## Scope & visitor mode

About, Services, Gallery, Contact (`app/about`, `app/services`, `app/gallery`, `app/contact`) — Persuade. Inherit the homepage's established world (DESIGN.md) as-is; no new visual-world decision made for these pages.

## Audience, job, action, proof, constraints

Same audience as homepage. Each page ends in (or embeds) a Call/WhatsApp path. Services has no pricing anywhere — every category ends in a "Get a Quote" call CTA. Gallery has no real photography yet.

## Chosen direction / notable decisions

- **Gallery**: no image-generation or reliable stock-photo sourcing tool was available in this environment, so placeholders are abstract illustrative mockups (`components/sections/sample-mockup.tsx`, reusing the homepage hero's visual language) captioned "Sample coming soon" — an honest placeholder, not a fake photo. Swap for real client photography later; the component and page copy are both written to make that swap trivial (just replace `SampleMockup` with an `<Image>`).
- **Contact**: built a working enquiry form (`components/forms/contact-form.tsx` → `app/api/contact/route.ts`) using Resend (added to `package.json`), matching the intent already hinted at in `.env.local.example`. Destination is `info@sribalajiprinters.in`. The API route fails gracefully with a clear "call/WhatsApp us instead" message when `RESEND_API_KEY` isn't set — the client hasn't configured Resend yet, so this is the current live behavior until they do.
- **About**: kept strictly to confirmed facts (owner name, years, since-2001, real rating) — no invented origin story or milestones, per PRODUCT.md's evidence constraints.

## Unresolved decisions

- `RESEND_API_KEY` needs to be set in production (Resend account + verified sending domain) before the contact form actually sends email. The `from` address currently uses Resend's shared `onboarding@resend.dev` sandbox sender — swap once the client's own domain is verified in Resend.
- Gallery images are placeholders; swap for real work photos when the client provides them.
- Services category anchors (`#slug`) exist but nothing currently deep-links to them from elsewhere.

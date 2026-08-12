import type { Metadata } from "next";
import { MapPin, Star } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us | Sri Balaji Printers",
  description:
    "25+ years of offset, screen & digital printing in Ambattur, Chennai — run by Dhanasekaran V.",
};

const points = [
  {
    title: "One shop, every method",
    body: "Offset, screen and digital printing under one roof, so you never have to go elsewhere for a different job type or a different volume.",
  },
  {
    title: "25+ years in Ambattur",
    body: `Sri Balaji Printers has been at the same South Park Street location since ${business.since.replace("Since ", "")} — not a franchise, not a chain, the same shop your neighbours have used for a generation.`,
  },
  {
    title: "Every size of job",
    body: "From a single visiting card to a hall full of wedding invitations or a 5,000-copy bill book order — we quote it, print it, and get it right the first time.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Run by a printer, not a franchise."
        description="Sri Balaji Printers has been printing Ambattur's wedding cards, bill books and banners for 25+ years — one shop, three printing methods, no outsourcing."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Dhanasekaran V, Proprietor
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-ink-soft">
              Dhanasekaran V has worked the presses for 25+ years, and has run Sri Balaji
              Printers at its South Park Street location in Venkatapuram, Ambattur since{" "}
              {business.since.replace("Since ", "")}. The shop runs offset, screen and digital
              presses under one roof, so a customer with a wedding order and a customer with a
              bill-book order can both get exactly the press their job needs, in the same visit.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-ink-soft">
              That&rsquo;s still how the shop runs today: whatever the job, ask first — chances
              are there&rsquo;s already a press for it.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-foreground">
              <div className="flex items-center gap-0.5 text-accent-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="font-semibold">{business.rating.value}/{business.rating.outOf}</span>
              <span className="text-ink-soft">on {business.rating.source}</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Find us in Ambattur</p>
                {business.addressLines.map((line) => (
                  <span key={line} className="block text-sm text-ink-soft">
                    {line}
                  </span>
                ))}
                <span className="block text-sm text-ink-soft">{business.addressLandmark}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-border pt-6">
              {points.map((point) => (
                <div key={point.title}>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

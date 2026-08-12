import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SampleMockup } from "@/components/sections/sample-mockup";
import { CtaBand } from "@/components/sections/cta-band";
import { galleryCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery | Sri Balaji Printers",
  description:
    "A look at what Sri Balaji Printers prints — wedding cards, thamboolam bags, bill books, banners and more.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at the kind of work we do."
        description="Real photos of finished jobs are on the way — for now, here's a sense of the categories we print in."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((category) => (
              <figure key={category.title} className="overflow-hidden rounded-lg border border-border">
                <SampleMockup tint={category.tint} accent={category.accent} className="rounded-none" />
                <figcaption className="flex items-center justify-between bg-background px-4 py-3">
                  <span className="font-heading text-sm font-semibold text-foreground">
                    {category.title}
                  </span>
                  <span className="text-xs text-ink-soft">Sample coming soon</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-soft">
            Have a job you&rsquo;d like to see before you order? Bring a reference or ask us for
            past samples in-store — real photos of finished work will be added here soon.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

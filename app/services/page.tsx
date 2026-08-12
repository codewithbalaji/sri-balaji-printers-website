import type { Metadata } from "next";
import { Phone, MessageCircle, Check } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { business } from "@/lib/business";
import { printingMethods, serviceCategories } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Sri Balaji Printers",
  description:
    "Offset, screen & digital printing services in Ambattur, Chennai — wedding cards, thamboolam bags, bill books, banners, stickers and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Whatever the job, we've got the press for it."
        description="From a single visiting card to a 5,000-copy wedding order — every job below is printed in-house, and every quote is a call or WhatsApp away."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-6">
            {serviceCategories.map((category) => (
              <div
                key={category.slug}
                id={category.slug}
                className="grid gap-6 rounded-lg border border-border bg-muted/20 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-8"
              >
                <div className={cn("inline-flex size-12 items-center justify-center rounded-md", category.tint)}>
                  <category.icon className={cn("size-6", category.iconColor)} aria-hidden="true" />
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {category.title}
                  </h2>
                  <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-ink-soft">
                        <Check className="mt-1 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={business.phoneHref}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:self-start"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How we print it
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-soft">
              Three methods, one shop — we&rsquo;ll tell you which one your job actually needs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {printingMethods.map((method) => (
              <div key={method.name} className="rounded-lg border border-border bg-background p-6">
                <method.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">
                  {method.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{method.description}</p>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Best for: <span className="font-normal text-ink-soft">{method.bestFor}</span>
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-soft">
            Not sure which one your job needs?{" "}
            <a href={business.whatsappHref} className="font-semibold text-primary underline-offset-2 hover:underline">
              <MessageCircle className="mb-0.5 inline size-3.5" aria-hidden="true" /> WhatsApp us
            </a>{" "}
            a description or photo and we&rsquo;ll tell you.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

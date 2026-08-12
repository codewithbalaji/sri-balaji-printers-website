import { Phone, MessageCircle, Star } from "lucide-react";
import { business } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-md bg-accent-yellow px-3 py-1 text-sm font-semibold text-accent-yellow-foreground">
            {business.since} · {business.yearsInBusiness} in printing
          </span>

          <h1 className="font-heading mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl lg:text-[3.35rem]">
            One press for every print job — offset, screen &amp; digital, under one roof.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-ink-soft sm:text-lg">
            From a single wedding invitation to a 5,000-copy bill book order — Sri Balaji
            Printers has served Ambattur and Tamil Nadu for {business.yearsInBusiness}. Talk to
            us and get it printed right.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_rgba(225,29,116,0.5)] transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <MessageCircle className="size-5 text-accent-cyan" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 text-accent-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">{business.rating.value}/{business.rating.outOf}</span>
              <span>on {business.rating.source}</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
            <span>Statewide delivery across Tamil Nadu</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none" aria-hidden="true">
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute inset-4 rounded-lg bg-surface-cyan sm:inset-8" />
            <div className="absolute left-[6%] top-[8%] w-[62%] -rotate-6 rounded-lg bg-white p-4 shadow-[0_20px_40px_-16px_rgba(28,25,23,0.25)]">
              <div className="h-2 w-1/2 rounded-full bg-accent-cyan" />
              <div className="mt-3 h-24 w-full rounded-md bg-surface-cyan" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-border" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-border" />
            </div>
            <div className="absolute right-[4%] top-[22%] w-[58%] rotate-3 rounded-lg bg-white p-4 shadow-[0_20px_40px_-16px_rgba(28,25,23,0.25)]">
              <div className="h-2 w-1/2 rounded-full bg-primary" />
              <div className="mt-3 h-28 w-full rounded-md bg-surface-magenta" />
              <div className="mt-3 h-2 w-2/3 rounded-full bg-border" />
            </div>
            <div className="absolute bottom-[8%] left-[16%] w-[56%] rotate-2 rounded-lg bg-white p-4 shadow-[0_20px_40px_-16px_rgba(28,25,23,0.25)]">
              <div className="h-2 w-1/3 rounded-full bg-accent-yellow" />
              <div className="mt-3 h-20 w-full rounded-md bg-muted" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-border" />
              <div className="mt-2 h-2 w-1/2 rounded-full bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

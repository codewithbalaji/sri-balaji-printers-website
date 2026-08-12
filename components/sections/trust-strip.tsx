import { Star, MapPin } from "lucide-react";
import { business } from "@/lib/business";

export function TrustStrip() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 rounded-lg border border-border bg-muted/30 p-8 sm:grid-cols-[1.3fr_1fr] sm:gap-10 sm:p-10">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Run by a printer, not a salesperson.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-ink-soft">
              Dhanasekaran V has worked the presses at Sri Balaji Printers since {business.since.replace("Since ", "")} —
              {" "}{business.yearsInBusiness} spent getting jobs right the first time, from a single visiting
              card to a hall full of wedding invitations.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:border-l sm:border-border sm:pl-8">
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-0.5 text-accent-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm leading-6 text-foreground">
                <span className="font-semibold">{business.rating.value}/{business.rating.outOf} on {business.rating.source}</span>
                {" "}— real customer feedback, not a manufactured score.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-6 text-foreground">
                <span className="font-semibold">We deliver across Tamil Nadu</span> — not just
                walk-ins from Ambattur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

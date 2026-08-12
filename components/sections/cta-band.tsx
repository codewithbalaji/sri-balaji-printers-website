import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/lib/business";

export function CtaBand() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-heading mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Got a print job? Let&rsquo;s talk about it today.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg">
          Call or WhatsApp us with what you need — we&rsquo;ll tell you exactly which press it
          needs and when it&rsquo;ll be ready.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-base font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-5" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

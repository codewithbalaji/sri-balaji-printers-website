import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us | Sri Balaji Printers",
  description:
    "Call, WhatsApp or visit Sri Balaji Printers in Ambattur, Chennai. Open daily 9 AM – 9 PM.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your print job."
        description="Call or WhatsApp for the fastest response, or send us the details below and we'll get back to you."
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-surface-magenta">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-heading text-base font-semibold text-foreground">Visit us</h2>
                <a
                  href={business.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm leading-6 text-ink-soft hover:text-foreground"
                >
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">{business.addressLandmark}</span>
                  <span className="mt-1 inline-block font-semibold text-primary">
                    Open in Google Maps →
                  </span>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-surface-cyan">
                <Clock className="size-5 text-accent-cyan" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-heading text-base font-semibold text-foreground">Hours</h2>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{business.hours}</p>
                <p className="text-sm leading-6 text-ink-soft">Delivery across Tamil Nadu on request.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted">
                <Phone className="size-5 text-foreground" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-heading text-base font-semibold text-foreground">Reach us directly</h2>
                <a href={business.phoneHref} className="mt-1 flex items-center gap-2 text-sm text-ink-soft hover:text-foreground">
                  <Phone className="size-3.5" aria-hidden="true" /> {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 text-sm text-ink-soft hover:text-foreground"
                >
                  <MessageCircle className="size-3.5" aria-hidden="true" /> WhatsApp
                </a>
                <a href={`mailto:${business.email}`} className="mt-1 flex items-center gap-2 text-sm text-ink-soft hover:text-foreground">
                  <Mail className="size-3.5" aria-hidden="true" /> {business.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/20 p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">Send an enquiry</h2>
            <p className="mt-1 text-sm leading-6 text-ink-soft">
              Tell us what you need and we&rsquo;ll call you back with a quote.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

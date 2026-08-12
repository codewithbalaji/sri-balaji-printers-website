import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Mail, AtSign } from "lucide-react";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-heading text-lg font-bold tracking-tight">
              Sri Balaji <span className="text-primary">Printers</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-6 text-background/70">
              Offset, screen &amp; digital printing in Ambattur, Chennai — {business.yearsInBusiness} serving
              Tamil Nadu.
            </p>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
            >
              <AtSign className="size-4" aria-hidden="true" />
              @sribalajiprinters_chennai
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-background/50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {business.nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-background/50">
              Visit Us
            </h3>
            <div className="mt-4 flex gap-3 text-sm text-background/80">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-cyan" aria-hidden="true" />
              <a href={business.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-background">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block text-background/60">{business.addressLandmark}</span>
              </a>
            </div>
            <div className="mt-3 flex gap-3 text-sm text-background/80">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent-cyan" aria-hidden="true" />
              <span>{business.hours}</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-background/50">
              Get In Touch
            </h3>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-background"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-background"
              >
                <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                WhatsApp us
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-sm text-background/80 transition-colors hover:text-background"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {business.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-xs text-background/50">
          © {new Date().getFullYear()} Sri Balaji Printers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

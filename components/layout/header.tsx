"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-shadow",
        scrolled
          ? "border-border bg-background/95 shadow-[0_1px_0_0_rgba(28,25,23,0.04),0_8px_24px_-16px_rgba(28,25,23,0.25)] backdrop-blur-sm"
          : "border-transparent bg-background/95 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Sri Balaji <span className="text-primary">Printers</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {business.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 sm:flex">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <MessageCircle className="size-4 text-accent-cyan" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {business.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-2.5">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground"
            >
              <MessageCircle className="size-4 text-accent-cyan" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

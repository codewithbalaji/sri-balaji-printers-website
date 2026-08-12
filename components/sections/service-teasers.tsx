import Link from "next/link";
import { Heart, Briefcase, Megaphone, Sticker, Gift, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    icon: Heart,
    title: "Wedding & Event",
    description: "Invitation cards, function invites, wedding banners and event banners.",
    tint: "bg-surface-magenta",
    iconColor: "text-primary",
  },
  {
    icon: Gift,
    title: "Thamboolam Bags",
    description: "Custom-printed wedding return-gift bags with names, date or a motif.",
    tint: "bg-surface-cyan",
    iconColor: "text-accent-cyan",
  },
  {
    icon: Briefcase,
    title: "Business & Corporate",
    description: "Visiting cards, bill books, ID cards, brochures, catalogs and books.",
    tint: "bg-muted",
    iconColor: "text-foreground",
  },
  {
    icon: Megaphone,
    title: "Banners & Signage",
    description: "Commercial, promotional and flex banners for shops and events.",
    tint: "bg-surface-magenta",
    iconColor: "text-primary",
  },
  {
    icon: Sticker,
    title: "Stickers & Labels",
    description: "Product labels, vinyl and decorative stickers — all types.",
    tint: "bg-surface-cyan",
    iconColor: "text-accent-cyan",
  },
] as const;

export function ServiceTeasers() {
  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Whatever the job, we&rsquo;ve got the press for it.
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-soft sm:text-lg">
            One shop, three printing methods — offset, screen and digital — so you never have
            to go elsewhere for a different job type or a different volume.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/services"
              className="group relative flex flex-col justify-between rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(28,25,23,0.18)]"
            >
              <div>
                <div className={cn("inline-flex size-11 items-center justify-center rounded-md", category.tint)}>
                  <category.icon className={cn("size-5", category.iconColor)} aria-hidden="true" />
                </div>
                <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{category.description}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}

          <Link
            href="/services"
            className="group relative flex flex-col items-start justify-between rounded-lg bg-primary p-6 transition-all hover:-translate-y-1"
          >
            <div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                See everything we print
              </h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80">
                Full price list, samples and specs for every service — offset, screen &amp;
                digital.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-foreground">
              Explore all services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

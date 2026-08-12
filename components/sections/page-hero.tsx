export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-surface-magenta/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <span className="text-sm font-semibold text-primary">{eyebrow}</span>
        <h1 className="font-heading mt-2 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

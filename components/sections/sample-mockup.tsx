import { cn } from "@/lib/utils";

/**
 * Abstract, clearly-illustrative stand-in for real work photography.
 * Not a photo — swap for real client-supplied images once available.
 */
export function SampleMockup({
  tint,
  accent,
  className,
}: {
  tint: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={cn("relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg", tint, className)}
      aria-hidden="true"
    >
      <div className="w-[70%] -rotate-3 rounded-md bg-white p-3 shadow-[0_12px_24px_-8px_rgba(28,25,23,0.18)]">
        <div className={cn("h-1.5 w-2/5 rounded-full", accent)} />
        <div className="mt-2 h-10 w-full rounded-sm bg-muted" />
        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-border" />
      </div>
    </div>
  );
}

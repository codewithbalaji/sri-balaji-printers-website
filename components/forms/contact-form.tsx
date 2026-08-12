"use client";

import * as React from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { jobTypeOptions } from "@/lib/content";
import { business } from "@/lib/business";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      jobType: (form.elements.namedItem("jobType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try calling or WhatsApp instead.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try calling or WhatsApp instead."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-lg border border-border bg-surface-cyan p-6">
        <CheckCircle2 className="size-8 text-accent-cyan" aria-hidden="true" />
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">Message sent.</p>
          <p className="mt-1 text-sm leading-6 text-ink-soft">
            We&rsquo;ll get back to you shortly. For anything urgent, call or WhatsApp{" "}
            {business.phoneDisplay} directly.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="jobType" className="text-sm font-medium text-foreground">
          What do you need printed?
        </label>
        <select
          id="jobType"
          name="jobType"
          required
          defaultValue=""
          className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="" disabled>
            Select a category
          </option>
          {jobTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Tell us more (quantity, size, deadline)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 block w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-destructive">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        Send message
      </button>
    </form>
  );
}

import { useState } from "react";
import { toast } from "sonner";

export type LeadSource =
  | "contact"
  | "resource-download"
  | "footer"
  | "roi-calculator"
  | "newsletter";

export interface LeadPayload {
  source: LeadSource;
  email: string;
  name?: string | null;
  company?: string | null;
  phone?: string | null;
  bottleneck?: string | null;
  resource_slug?: string | null;
  role?: string | null;
}

function utm() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? undefined,
    utm_medium: p.get("utm_medium") ?? undefined,
    utm_campaign: p.get("utm_campaign") ?? undefined,
  };
}

export function useLeadSubmit() {
  const [submitting, setSubmitting] = useState(false);

  async function submit(payload: LeadPayload) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, ...utm() }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.");
        return false;
      }
      toast.success("Got it — we'll be in touch within 1 business hour.");
      return true;
    } catch (e) {
      console.error(e);
      toast.error("Network error. Please try again.");
      return false;
    } finally {
      setSubmitting(false);
    }
  }

  return { submit, submitting };
}

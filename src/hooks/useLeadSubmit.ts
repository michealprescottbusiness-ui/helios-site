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

// Helios ops intake — leads land in the operations dashboard Client Pipeline.
const INTAKE_URL = "https://ssgceutucmsrleeopujl.supabase.co/functions/v1/intake";

function utm() {
  if (typeof window === "undefined") return {} as Record<string, string | undefined>;
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
      const u = utm();
      const notesParts = [
        `form: ${payload.source}`,
        payload.role ? `role: ${payload.role}` : null,
        payload.phone ? `phone: ${payload.phone}` : null,
        payload.resource_slug ? `resource: ${payload.resource_slug}` : null,
        u.utm_campaign ? `campaign: ${u.utm_campaign}` : null,
        payload.bottleneck || null,
      ].filter(Boolean);

      const res = await fetch(INTAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name ?? undefined,
          email: payload.email,
          company: payload.company ?? undefined,
          notes: notesParts.join(" | "),
          source: u.utm_source ? "meta_ad" : "website",
        }),
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

import { createFileRoute } from "@tanstack/react-router";

// Legacy endpoint. Forms now post directly to the Helios ops intake; anything
// still posting here gets forwarded so no lead is ever lost.
const INTAKE_URL = "https://ssgceutucmsrleeopujl.supabase.co/functions/v1/intake";

export const Route = createFileRoute("/api/public/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: Record<string, unknown>;
        try {
          raw = (await request.json()) as Record<string, unknown>;
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const s = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
        const notes = [
          s(raw.source) ? `form: ${s(raw.source)}` : null,
          s(raw.role) ? `role: ${s(raw.role)}` : null,
          s(raw.phone) ? `phone: ${s(raw.phone)}` : null,
          s(raw.resource_slug) ? `resource: ${s(raw.resource_slug)}` : null,
          s(raw.utm_campaign) ? `campaign: ${s(raw.utm_campaign)}` : null,
          s(raw.bottleneck) ?? null,
        ]
          .filter(Boolean)
          .join(" | ");

        const res = await fetch(INTAKE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: s(raw.name),
            email: s(raw.email),
            company: s(raw.company),
            notes,
            source: s(raw.utm_source) ? "meta_ad" : "website",
          }),
        });

        if (!res.ok) {
          return Response.json({ error: "Could not save" }, { status: 500 });
        }
        return Response.json({ ok: true });
      },
    },
  },
});

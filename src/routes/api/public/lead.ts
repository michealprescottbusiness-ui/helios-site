import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { createHash } from "crypto";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadSchema = z.object({
  source: z.enum([
    "contact",
    "resource-download",
    "footer",
    "roi-calculator",
    "newsletter",
  ]),
  name: z.string().trim().max(120).optional().nullable(),
  email: z.string().trim().toLowerCase().email().max(255),
  company: z.string().trim().max(160).optional().nullable(),
  phone: z.string().trim().max(40).optional().nullable(),
  bottleneck: z.string().trim().max(2000).optional().nullable(),
  resource_slug: z.string().trim().max(120).optional().nullable(),
  role: z.string().trim().max(80).optional().nullable(),
  utm_source: z.string().trim().max(120).optional().nullable(),
  utm_medium: z.string().trim().max(120).optional().nullable(),
  utm_campaign: z.string().trim().max(120).optional().nullable(),
});

// Simple in-memory rate limit per IP (best-effort; resets on cold start).
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  arr.push(now);
  hits.set(key, arr);
  return arr.length > RATE_MAX;
}

export const Route = createFileRoute("/api/public/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = LeadSchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", issues: parsed.error.flatten() },
            { status: 400 },
          );
        }

        const ip =
          request.headers.get("cf-connecting-ip") ??
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          "unknown";
        const ipHash = createHash("sha256").update(ip).digest("hex").slice(0, 32);

        if (rateLimited(ipHash)) {
          return Response.json(
            { error: "Too many submissions. Please try again shortly." },
            { status: 429 },
          );
        }

        const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

        const { error } = await supabaseAdmin.from("leads").insert({
          ...parsed.data,
          user_agent: userAgent,
          ip_hash: ipHash,
        });

        if (error) {
          console.error("[lead] insert failed", error);
          return Response.json({ error: "Could not save lead" }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
import { createFileRoute } from "@tanstack/react-router";

// Retired: the Lovable email queue is no longer used. Kept as a stub so the
// generated route tree stays valid.
export const Route = createFileRoute("/lovable/email/queue/process")({
  server: {
    handlers: {
      POST: async () => Response.json({ error: "retired" }, { status: 410 }),
      GET: async () => Response.json({ error: "retired" }, { status: 410 }),
    },
  },
});

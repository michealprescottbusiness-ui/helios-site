import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Notice — Helios Assistants" },
      { name: "description", content: "How Helios Assistants uses cookies and similar technologies on heliosassistants.com." },
      { property: "og:title", content: "Cookie Notice — Helios Assistants" },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <article className="px-6 py-20 lg:py-28 mx-auto max-w-3xl">
      <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Legal</p>
      <h1 className="text-5xl font-extrabold tracking-tight mb-3">Cookie Notice</h1>
      <p className="text-sm text-navy/50 mb-10">Last updated: June 2026</p>

      <Section title="Essential cookies">
        Required for the site to function — session, security, and form submission. These are always on.
      </Section>
      <Section title="Analytics cookies (opt-in)">
        With your consent we use privacy-friendly analytics to understand which pages are working and
        which aren't. You can decline these via the consent banner without breaking the site.
      </Section>
      <Section title="Managing your choices">
        Update your choice anytime by clearing site data in your browser or emailing{" "}
        <a className="text-teal-deep underline" href="mailto:privacy@heliosassistants.com">privacy@heliosassistants.com</a>.
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-extrabold mb-3">{title}</h2>
      <div className="text-navy/70 leading-relaxed">{children}</div>
    </section>
  );
}
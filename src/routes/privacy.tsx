import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Helios Assistants" },
      { name: "description", content: "How Helios Assistants collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy - Helios Assistants" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="px-6 py-20 lg:py-28 mx-auto max-w-3xl prose-styles">
      <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Legal</p>
      <h1 className="text-5xl font-extrabold tracking-tight mb-3">Privacy Policy</h1>
      <p className="text-sm text-navy/50 mb-10">Last updated: June 2026</p>

      <Section title="1. Who we are">
        Helios Assistants ("Helios Assistants", "we", "us") is a US-registered company that places and manages
        dedicated virtual assistants. This policy explains what we collect when you visit our
        website, request a strategy call, or download a resource.
      </Section>

      <Section title="2. Information we collect">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Contact info you submit</strong> - name, email, company, phone, and any notes you share via our forms or scheduling tool.</li>
          <li><strong>Usage data</strong> - IP address (hashed), browser type, pages visited, and referral source.</li>
          <li><strong>Marketing attribution</strong> - UTM parameters and campaign identifiers passed in URLs.</li>
        </ul>
      </Section>

      <Section title="3. How we use it">
        <ul className="list-disc pl-5 space-y-2">
          <li>Reply to your inquiries and schedule strategy calls.</li>
          <li>Send the resources you request and occasional educational emails (you can unsubscribe at any time).</li>
          <li>Measure marketing performance and improve our website.</li>
        </ul>
      </Section>

      <Section title="4. Who has access">
        Your data is stored on our backend infrastructure and accessible only to Helios Assistants team members
        who need it to serve you. We never sell your personal information.
      </Section>

      <Section title="5. Your rights">
        You can request access, correction, or deletion of your personal data at any time by emailing{" "}
        <a className="text-teal-deep underline" href="mailto:privacy@heliosassistants.com">privacy@heliosassistants.com</a>.
        EU and California residents have additional rights under GDPR and CCPA.
      </Section>

      <Section title="6. Cookies">
        See our <a className="text-teal-deep underline" href="/cookies">Cookie Notice</a> for details on
        the cookies we use and how to control them.
      </Section>

      <Section title="7. Contact">
        Questions? <a className="text-teal-deep underline" href="mailto:privacy@heliosassistants.com">privacy@heliosassistants.com</a>
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
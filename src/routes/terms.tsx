import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Helios Assistants" },
      { name: "description", content: "Terms of service for Helios Assistants VA management." },
      { property: "og:title", content: "Terms of Service — Helios Assistants" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="px-6 py-20 lg:py-28 mx-auto max-w-3xl">
      <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Legal</p>
      <h1 className="text-5xl font-extrabold tracking-tight mb-3">Terms of Service</h1>
      <p className="text-sm text-navy/50 mb-10">Last updated: June 2026</p>

      <Section title="1. Service Agreement">
        Helios Assistants provides fully managed VA placement and management services. Clients enter a month-to-month
        agreement cancellable with 30 days notice. All services are as described on our pricing page.
      </Section>

      <Section title="2. Payment">
        Invoices are issued monthly and due within 15 days. Payment is collected via ACH. Late payments may result
        in service suspension. Refunds are not provided for partial months.
      </Section>

      <Section title="3. Replacement Guarantee">
        If your VA is not a good fit, we replace them at no cost within 3–7 business days (depending on role). This
        guarantee covers up to one replacement in the first 90 days.
      </Section>

      <Section title="4. Confidentiality">
        Both parties agree to maintain confidentiality of business information shared during the engagement. VAs sign
        an NDA as a condition of employment.
      </Section>

      <Section title="5. Limitation of Liability">
        Helios Assistants' liability is limited to the fees paid in the 12 months preceding the claim. We are not
        liable for indirect, consequential, or punitive damages.
      </Section>

      <Section title="6. Termination">
        Either party may terminate with 30 days notice. Upon termination, clients retain no ownership of the VA's time
        or training; all SOPs and playbooks created during the engagement belong to Helios Assistants.
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
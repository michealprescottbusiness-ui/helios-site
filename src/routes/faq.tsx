import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ - Helios Assistants VA Agency" },
      { name: "description", content: "Answers about pricing, replacements, onboarding, security, contracts and how the Helios Assistants managed model actually works." },
      { property: "og:title", content: "Frequently Asked Questions - Helios Assistants" },
      { property: "og:description", content: "Pricing, replacements, onboarding, security - answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: groups.flatMap((g) =>
            g.items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Pricing & Contracts",
    items: [
      { q: "Is the monthly fee really all-in?", a: "Yes. Your monthly retainer covers the VA's salary, our PH payroll & HR, your dedicated success manager, training, and replacements. No setup fees, no per-hour overages." },
      { q: "What's the contract length?", a: "Month-to-month. Cancel anytime with 30 days notice - no long-term lock-in." },
      { q: "Do you bill the VA directly or do I?", a: "We bill you. You never deal with PH payroll, taxes, or contractor compliance. One invoice, one ACH." },
    ],
  },
  {
    title: "Management & Replacement",
    items: [
      { q: "What does 'fully managed' actually mean?", a: "We hire, train, and supervise your VA. You give them work; we make sure it's done well, on time, and to your standards." },
      { q: "What if my VA isn't a good fit?", a: "Tell your success manager. We deploy a replacement within 3-7 days, depending on the role. No extra cost." },
      { q: "Can I talk to the VA directly?", a: "Absolutely. They're embedded in your Slack/email and operate like a member of your team." },
    ],
  },
  {
    title: "Onboarding & Security",
    items: [
      { q: "How fast can I have someone working?", a: "Most clients have their VA fully onboarded within 10 business days of their strategy call." },
      { q: "Are VAs vetted for security & background?", a: "Yes - every VA passes a 5-stage assessment including ID verification, reference checks, and a confidentiality NDA." },
      { q: "What about my passwords and tools?", a: "We require 1Password (or similar) for credential sharing and recommend role-based access in your tools. Your success manager helps set this up on day one." },
      { q: "What hours do VAs work?", a: "Most of our VAs work US business hours (Eastern, Central, Mountain, or Pacific). Specify your preferred timezone on the call." },
    ],
  },
];

function FaqPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">FAQ</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            Questions, <span className="text-teal">answered.</span>
          </h1>
          <p className="text-lg text-navy/70 text-pretty">
            Don't see yours? Book a free call - we'll answer it on the spot.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-deep mb-4">{g.title}</h2>
              <Accordion type="single" collapsible className="bg-white rounded-2xl border border-navy/5 px-2">
                {g.items.map((it, i) => (
                  <AccordionItem key={i} value={`${g.title}-${i}`} className="border-navy/5">
                    <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline px-4 py-5">
                      {it.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-5 text-navy/70 leading-relaxed">
                      {it.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Still wondering?" subtitle="A 20-minute call beats any FAQ." />
    </>
  );
}
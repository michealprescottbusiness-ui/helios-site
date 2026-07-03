import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Settings, Headphones, Megaphone, Phone, Calculator, Home, ShoppingBag } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import vaPortrait from "@/assets/va-portrait.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "VA Roles & Specialties — Helios Assistants" },
      { name: "description", content: "Executive Assistants, Sales Setters, Bookkeepers, Copywriters, Developers, and more. Browse every VA specialty we staff, pre-vetted and fully managed." },
      { property: "og:title", content: "VA Roles & Specialties — Helios Assistants" },
      { property: "og:description", content: "Every VA specialty we staff: EAs, Sales, Bookkeeping, Development, and more." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const roles = [
  { icon: Briefcase, title: "Executive Assistant", desc: "Inbox management, calendar blocking, travel booking, exec briefings, meeting prep. Runs your day." },
  { icon: Phone, title: "Sales Setter / Lead Gen", desc: "Cold outreach, call booking, pipeline qualification, CRM data hygiene. Fills your calendar." },
  { icon: Calculator, title: "Bookkeeper / Accountant", desc: "Invoice tracking, expense coding, financial reporting, tax prep. Keeps books clean." },
  { icon: Megaphone, title: "Content / Copywriter", desc: "Email sequences, landing pages, social copy, blog posts. Words that convert." },
  { icon: Home, title: "Real Estate ISA", desc: "Lead follow-up, showing coordination, CRM updates, transaction management. Closes deals." },
  { icon: ShoppingBag, title: "E-commerce Specialist", desc: "Product uploads, inventory, customer support, returns processing. Runs your shop." },
  { icon: Settings, title: "Tech / WordPress Dev", desc: "Website updates, plugin setup, technical support, site optimization. Builds & fixes." },
  { icon: Headphones, title: "Customer Support / CS", desc: "Ticket triage, chat support, refund decisions, quality assurance. Delights customers." },
];

function ServicesPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Our VA Specialties</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            Every role you need. <span className="text-teal">Fully vetted.</span>
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto text-pretty">
            We staff specialists across 30+ roles. If you don't see yours, book a call — we've probably trained it.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <img src={vaPortrait} alt="Helios Assistants virtual assistants team" width={1280} height={720} loading="lazy" className="w-full aspect-video object-cover rounded-3xl shadow-xl shadow-navy/10" />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r) => (
              <div key={r.title} className="p-7 rounded-2xl bg-white border border-navy/5">
                <div className="size-11 rounded-xl bg-teal/15 text-teal-deep grid place-items-center mb-5">
                  <r.icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's match you with the right VA." />
    </>
  );
}
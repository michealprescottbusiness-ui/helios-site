import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Calculator, ListChecks, BookOpen, ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free VA Resources - Salary Guides, SOPs & Playbooks | Helios Assistants" },
      { name: "description", content: "Download free overseas VA salary guides, role playbooks, SOP templates, and the ROI calculator. Built by the Helios Assistants managed team." },
      { property: "og:title", content: "Free VA Resources, Playbooks & SOPs | Helios Assistants" },
      { property: "og:description", content: "Free guides, SOP templates, and ROI calculator for delegating to an overseas VA." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const downloads = [
  { slug: "salary-guide-2026", icon: FileText, title: "2026 VA Salary Guide", desc: "Compensation benchmarks for every role, by experience tier." },
  { slug: "role-playbooks", icon: BookOpen, title: "Role Playbooks (8)", desc: "Day-one playbooks for EAs, Sales Setters, Bookkeepers, and more." },
  { slug: "sop-templates", icon: ListChecks, title: "SOP Templates Pack", desc: "30 plug-and-play SOPs across Ops, Sales, Marketing, Customer Support." },
  { slug: "roi-calculator", icon: Calculator, title: "VA ROI Calculator", desc: "Plug in your hourly rate. See exactly how many hours/dollars a VA returns." },
  { slug: "delegation-checklist", icon: Download, title: "Delegation Checklist", desc: "The 50-task audit that uncovers what to off-load first." },
  { slug: "onboarding-kit", icon: FileText, title: "Onboarding Kit", desc: "Templates for your first 30-, 60-, and 90-day VA reviews." },
];

const categories = ["Executive", "Sales", "Marketing", "Operations", "Customer Service"] as const;

const sopByCategory: Record<(typeof categories)[number], string[]> = {
  Executive: ["Inbox Triage System", "Calendar Defense Protocol", "Travel Booking SOP", "Weekly Exec Briefing"],
  Sales: ["Outbound Cold Email", "CRM Hygiene Daily", "Lead Qualification Script", "Discovery Booking SOP"],
  Marketing: ["Content Calendar Setup", "Email Campaign Build", "Social Scheduling SOP", "Newsletter QA Checklist"],
  Operations: ["Vendor Onboarding", "KPI Reporting Weekly", "SOP Documentation", "Team Standup Format"],
  "Customer Service": ["Ticket Triage SOP", "Refund Decision Tree", "CSAT Survey Loop", "Escalation Routing"],
};

const blog = [
  { title: "Why managed beats matchmaking, every time", read: "5 min read" },
  { title: "The 22 tasks every founder should off-load this week", read: "7 min read" },
  { title: "What actually makes overseas VAs world-class", read: "6 min read" },
];

function ResourcesPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Executive");
  const { submit, submitting } = useLeadSubmit();
  const [sentSlug, setSentSlug] = useState<string | null>(null);

  async function handleDownload(e: React.FormEvent<HTMLFormElement>, slug: string) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    const ok = await submit({ source: "resource-download", email, resource_slug: slug });
    if (ok) setSentSlug(slug);
  }

  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Resources</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            Free playbooks. <span className="text-teal">Real frameworks.</span>
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto text-pretty">
            Everything you'd hand a brand-new VA on day one - built from 500+ real client deployments.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((d) => (
              <div key={d.slug} className="p-7 rounded-2xl bg-white border border-navy/5 flex flex-col">
                <div className="size-11 rounded-xl bg-teal/15 text-teal-deep grid place-items-center mb-5">
                  <d.icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed mb-6 flex-1">{d.desc}</p>
                {sentSlug === d.slug ? (
                  <p className="text-sm font-semibold text-teal-deep">
                    ✓ You're on the list - we'll email it the moment it drops.
                  </p>
                ) : (
                  <form onSubmit={(e) => handleDownload(e, d.slug)} className="flex gap-2">
                    <input
                      type="email" required name="email"
                      placeholder="you@company.com"
                      className="flex-1 px-3 py-2.5 bg-paper border border-navy/10 rounded-lg text-sm focus:outline-none focus:border-teal"
                    />
                    <button
                      type="submit" disabled={submitting}
                      className="bg-navy text-white text-sm font-bold px-4 rounded-lg hover:bg-navy-soft disabled:opacity-60"
                    >
                      Get
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6 border-y border-navy/5">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">SOP Library</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              Browse SOPs by function.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={
                  active === c
                    ? "bg-navy text-white text-sm font-semibold px-4 py-2 rounded-full"
                    : "bg-paper text-navy/70 text-sm font-medium px-4 py-2 rounded-full border border-navy/10 hover:border-navy/30"
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {sopByCategory[active].map((sop) => (
              <div key={sop} className="flex items-center justify-between p-4 bg-paper border border-navy/5 rounded-xl">
                <span className="font-medium text-sm">{sop}</span>
                <button className="text-teal-deep text-xs font-bold uppercase tracking-widest hover:underline">Open</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">From the Blog</p>
              <h2 className="text-4xl font-extrabold tracking-tight">Fresh thinking on delegation.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blog.map((b) => (
              <article key={b.title} className="p-7 rounded-2xl bg-white border border-navy/5 hover:border-teal/40 transition-colors">
                <p className="text-xs text-navy/40 uppercase tracking-widest mb-3">{b.read}</p>
                <h3 className="font-bold text-lg mb-4 leading-snug">{b.title}</h3>
                <span className="text-teal-deep font-semibold text-sm inline-flex items-center gap-1">
                  Read <ArrowRight size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Skip ahead" title="Or just talk to us." subtitle="A 20-minute call beats any PDF. We'll diagnose where to delegate first." />
    </>
  );
}
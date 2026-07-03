import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import teamCollab from "@/assets/team-collab.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works - Helios Assistants VAs" },
      { name: "description", content: "From strategy call to a fully onboarded dedicated VA in under 10 business days. See exactly how the Helios Assistants managed model works." },
      { property: "og:title", content: "How It Works - Helios Assistants VAs" },
      { property: "og:description", content: "From strategy call to a fully onboarded dedicated VA in under 10 business days." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

const steps = [
  { n: "01", title: "Free Strategy Call", body: "20 minutes. We map your bottlenecks, the tasks you should off-load first, and the exact VA profile you need.", deliverable: "Custom delegation plan PDF" },
  { n: "02", title: "Talent Matching", body: "We select the top 1% from our pre-vetted global talent pool - Filipino and Colombian specialists included - and present 2-3 finalist candidates for you to interview.", deliverable: "Hand-picked shortlist within 5 days" },
  { n: "03", title: "Onboarding & Setup", body: "Your dedicated success manager handles tool access, communication setup, and the first 30-day training plan.", deliverable: "Day-one productive VA" },
  { n: "04", title: "Ongoing Management", body: "Daily check-ins, weekly performance reports, quarterly SOP audits. We coach. We measure. We replace if needed.", deliverable: "Compounding output, every month" },
];

const who = [
  { they: "Recruit, vet & background-check VAs", us: true, you: false },
  { they: "Run payroll, taxes & benefits in PH", us: true, you: false },
  { they: "Provide tools, training & SOPs", us: true, you: false },
  { they: "Daily performance monitoring & coaching", us: true, you: false },
  { they: "Instant replacement if it isn't working", us: true, you: false },
  { they: "Define what tasks to delegate", us: false, you: true },
  { they: "Give feedback on completed work", us: false, you: true },
];

function HowItWorksPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">How It Works</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            From overwhelmed to off-loaded in <span className="text-teal">10 days</span>.
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto text-pretty">
            No job-board scrolling. No interview marathons. No 3am payroll spreadsheets. We do all of it - and
            keep doing it - for one flat monthly fee.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <img src={teamCollab} alt="Helios Assistants managed team" width={1280} height={896} loading="lazy" className="w-full aspect-[16/9] object-cover rounded-3xl shadow-xl shadow-navy/10" />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-16">
          {steps.map((s, i) => (
            <div key={s.n} className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start">
              <div>
                <div className="size-20 rounded-2xl bg-navy text-teal font-extrabold text-2xl grid place-items-center">{s.n}</div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-2">Step {i+1}</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{s.title}</h2>
                <p className="text-navy/70 leading-relaxed mb-5">{s.body}</p>
                <div className="inline-flex items-center gap-2 text-sm bg-teal/10 text-teal-deep font-semibold px-3 py-2 rounded-full">
                  <Check size={14} /> Deliverable: {s.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 px-6 border-y border-navy/5">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">Who Does What</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              The clearest division of labor in the industry.
            </h2>
          </div>
          <div className="rounded-2xl border border-navy/10 overflow-hidden">
            <div className="grid grid-cols-[1fr_100px_100px] bg-navy text-white text-xs font-bold uppercase tracking-widest">
              <div className="p-4">Task</div>
              <div className="p-4 text-center">Helios Assistants</div>
              <div className="p-4 text-center">You</div>
            </div>
            {who.map((row, i) => (
              <div key={i} className={`grid grid-cols-[1fr_100px_100px] text-sm ${i%2 ? "bg-paper" : "bg-white"}`}>
                <div className="p-4 font-medium">{row.they}</div>
                <div className="p-4 grid place-items-center">{row.us ? <Check className="text-teal" size={18}/> : <X className="text-navy/20" size={18}/>}</div>
                <div className="p-4 grid place-items-center">{row.you ? <Check className="text-teal" size={18}/> : <X className="text-navy/20" size={18}/>}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/faq" className="text-teal-deep font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              Common questions, answered <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Ready for your first hand-off?" />
    </>
  );
}
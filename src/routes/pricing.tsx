import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { RoiCalculator } from "@/components/site/RoiCalculator";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing - One Flat Monthly Fee | Helios Assistants" },
      { name: "description", content: "Transparent monthly pricing for fully managed overseas VAs. Starter $1,499, Growth $1,999, Premium $2,499. Payroll, training, and management included." },
      { property: "og:title", content: "Pricing - One Flat Monthly Fee | Helios Assistants" },
      { property: "og:description", content: "Transparent monthly pricing for fully managed overseas VAs. No setup fees. No hidden costs." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    price: "$1,499",
    desc: "Part-time dedicated VA · 20 hrs/week",
    best: "Solopreneurs starting to delegate",
    features: [
      "Dedicated VA assigned only to you",
      "Fully managed payroll & HR",
      "Tool training (Slack, Notion, GSuite, etc.)",
      "Weekly performance check-ins",
      "Instant replacement guarantee",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,999",
    desc: "Full-time dedicated VA · 40 hrs/week",
    best: "Founders ready to systematize",
    features: [
      "Everything in Starter, plus:",
      "Full-time exclusive talent",
      "Dedicated US-based Success Manager",
      "Quarterly SOP audits & playbooks",
      "Priority replacement (under 7 days)",
      "Slack + phone support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$2,499",
    desc: "Specialist full-time talent · 40 hrs/week",
    best: "Teams hiring for specialty roles",
    features: [
      "Everything in Growth, plus:",
      "Specialist role (Bookkeeper, Sales Setter, RE ISA, etc.)",
      "Priority onboarding (5 day match)",
      "Monthly strategic consultation",
      "Custom KPI dashboard & reporting",
      "Dedicated account director",
    ],
    popular: false,
  },
];

const compare = [
  { label: "Recruitment & vetting", apex: true, diy: false, matchmaking: true },
  { label: "Managed payroll & PH compliance", apex: true, diy: false, matchmaking: false },
  { label: "Daily performance management", apex: true, diy: false, matchmaking: false },
  { label: "Weekly coaching & SOP audits", apex: true, diy: false, matchmaking: false },
  { label: "Instant replacement guarantee", apex: true, diy: false, matchmaking: false },
  { label: "Dedicated US success manager", apex: true, diy: false, matchmaking: false },
  { label: "Flat monthly fee (no surprise costs)", apex: true, diy: false, matchmaking: false },
];

function PricingPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-28 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Pricing</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            One flat fee. <span className="text-teal">Everything</span> handled.
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto text-pretty">
            No setup fees. No payroll. No long-term contracts. Just a dedicated, fully managed VA at a
            predictable monthly price.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                t.popular
                  ? "relative rounded-3xl bg-navy text-white p-8 shadow-2xl shadow-navy/30 md:-mt-4"
                  : "relative rounded-3xl bg-white p-8 border border-navy/10"
              }
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-navy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${t.popular ? "text-teal" : "text-teal-deep"}`}>{t.name}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">{t.price}</span>
                <span className={t.popular ? "text-white/50 text-sm" : "text-navy/40 text-sm"}>/mo</span>
              </div>
              <p className={`mt-2 text-sm ${t.popular ? "text-white/70" : "text-navy/60"}`}>{t.desc}</p>
              <div className={`mt-1 mb-6 text-xs font-medium ${t.popular ? "text-teal" : "text-teal-deep"}`}>Best for: {t.best}</div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-teal mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  t.popular
                    ? "block w-full text-center bg-teal text-navy font-bold py-3 rounded-full"
                    : "block w-full text-center bg-navy text-white font-bold py-3 rounded-full"
                }
              >
                Book a Free Call
              </Link>
            </div>
          ))}
        </div>
      </section>

      <RoiCalculator />

      <section className="bg-white py-24 px-6 border-y border-navy/5">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">Compare</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              Helios Assistants vs. doing it yourself.
            </h2>
          </div>
          <div className="rounded-2xl border border-navy/10 overflow-hidden">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-navy text-white text-xs font-bold uppercase tracking-widest">
              <div className="p-4">What you get</div>
              <div className="p-4 text-center bg-teal/20 text-teal">Helios Assistants</div>
              <div className="p-4 text-center">DIY Hire</div>
              <div className="p-4 text-center">Matchmaking Only</div>
            </div>
            {compare.map((row, i) => (
              <div key={i} className={`grid grid-cols-[2fr_1fr_1fr_1fr] text-sm ${i%2 ? "bg-paper" : "bg-white"}`}>
                <div className="p-4 font-medium">{row.label}</div>
                <div className="p-4 grid place-items-center">{row.apex ? <Check className="text-teal" size={18}/> : <X className="text-navy/20" size={18}/>}</div>
                <div className="p-4 grid place-items-center">{row.diy ? <Check className="text-teal" size={18}/> : <X className="text-navy/20" size={18}/>}</div>
                <div className="p-4 grid place-items-center">{row.matchmaking ? <Check className="text-teal" size={18}/> : <X className="text-navy/20" size={18}/>}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-navy/50">
            "Matchmaking only" = services that introduce you to a VA but don't manage payroll, performance, or replacements.
          </p>
        </div>
      </section>

      <CtaBand title="Not sure which tier fits?" subtitle="Book a free call. We'll tell you straight." />
    </>
  );
}
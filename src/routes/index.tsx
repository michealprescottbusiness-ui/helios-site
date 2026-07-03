import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star, Shield, Zap, Users, Award, Clock, ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import heroVa from "@/assets/hero-va.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helios Assistants - Dedicated Overseas Virtual Assistants, Fully Managed" },
      { name: "description", content: "Buy back 20+ hours a week. We recruit, train, and fully manage your dedicated overseas VA. One flat monthly fee. Instant replacement guarantee." },
      { property: "og:title", content: "Helios Assistants - Dedicated Overseas Virtual Assistants, Fully Managed" },
      { property: "og:description", content: "Buy back 20+ hours a week. We recruit, train, and fully manage your dedicated overseas VA. One flat monthly fee." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const benefits = [
  { icon: Shield, title: "Fully Managed", body: "We're not a job board. We manage the human, the performance, and the output - daily." },
  { icon: Zap, title: "Instant Replacement", body: "Not the right fit? We swap your VA in days at no extra cost. Your business never stalls." },
  { icon: Award, title: "70% Cost Savings", body: "Executive-level support for a fraction of the cost of a US-based hire. No hidden fees." },
  { icon: Users, title: "Dedicated Success Manager", body: "A US-based account lead handles coaching, escalations, and continuous improvement." },
  { icon: Star, title: "Top 1% Vetted Talent", body: "We screen thousands monthly. Only the top 1% ever reach your interview." },
  { icon: Clock, title: "10-Day Onboarding", body: "From strategy call to your first dedicated VA up and running in under two weeks." },
];

const steps = [
  { n: "01", title: "Audit & Match", body: "We analyze your bottlenecks and pair you with a pre-vetted specialist who fits your role and culture." },
  { n: "02", title: "The Quickstart", body: "Your dedicated success manager handles onboarding, tool setup, and the first 30 days of training." },
  { n: "03", title: "Managed Growth", body: "Daily performance tracking, weekly coaching, and quarterly SOP audits - all included." },
  { n: "04", title: "Scale Out", body: "As you grow, we deploy additional talent using the same playbooks your first VA helped build." },
];

const tiers = [
  { name: "Starter", price: "$1,499", desc: "Part-time (20 hrs/wk)", features: ["Dedicated VA", "Managed payroll & HR", "Replacement guarantee"], popular: false },
  { name: "Growth", price: "$1,999", desc: "Full-time (40 hrs/wk)", features: ["Full-time dedicated VA", "Dedicated success manager", "Tool training & SOPs"], popular: true },
  { name: "Premium", price: "$2,499", desc: "Specialist full-time", features: ["Specialist role (Sales, Bookkeeping...)", "Priority onboarding", "Strategic consultation"], popular: false },
];

const testimonials = [
  { quote: "I got 22 hours a week back in the first month. My Helios Assistants basically runs ops now.", name: "Sarah Chen", role: "Founder, Loop Studio", result: "+22 hrs/week" },
  { quote: "We tried two other agencies. Helios Assistants is the first one that actually manages the work - not just the hire.", name: "Marcus Hall", role: "CEO, Greenline Realty", result: "3 VAs hired" },
  { quote: "My e-com support tickets went from 48hr response time to under 4. Game changer.", name: "Priya Patel", role: "Founder, Saltwater Goods", result: "12x faster CX" },
];

const roles = [
  "Virtual Assistant", "Amazon Expert", "Facebook Ads Manager", "Copywriter",
  "Wordpress Developer", "Sales Representative", "Lead Generation", "Quickbooks",
  "SEO", "Marketing Specialist", "Email Marketer", "PPC",
  "Graphic Designer", "Shopify Developer", "eBay Virtual Assistant", "Ecommerce",
  "Social Media Marketer", "Video Editor", "Customer Service", "Researcher",
  "PHP Developer", "Data Entry", "Google Ads Manager", "Accountant",
  "Real Estate Virtual Assistant", "Web Developer", "iOS Developer", "Content Writer",
  "Project Manager", "Web Designer", "AI", "GoHighLevel",
  "Receptionist",
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-reveal">
            <span className="inline-block px-3 py-1 bg-teal/10 text-teal-deep text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
              The Managed Advantage
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-balance">
              Your full-time <span className="text-teal">overseas talent</span>, managed by us.
            </h1>
            <p className="text-lg sm:text-xl text-navy/70 leading-relaxed mb-8 max-w-xl text-pretty">
              We recruit, train, and fully manage premium English-fluent virtual assistants from the Philippines, Colombia, and beyond so you can finally step out
              of the weeds and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-teal text-navy font-bold py-4 px-7 rounded-full shadow-xl shadow-teal/20 hover:scale-[1.02] transition-transform"
              >
                Book Your Free Strategy Call <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center bg-white border border-navy/10 text-navy font-semibold py-4 px-7 rounded-full hover:border-navy/30 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-navy/60">
              <div className="flex">{[0,1,2,3,4].map(i=> <Star key={i} size={16} className="fill-teal text-teal" />)}</div>
              <span>4.9/5 · Trusted by 500+ US founders</span>
            </div>
          </div>
          <div className="animate-reveal lg:[animation-delay:200ms]">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal/10 rounded-3xl -rotate-2" />
              <img
                src={heroVa}
                alt="Professional overseas virtual assistant working with a US-based client"
                width={1024}
                height={1280}
                className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl shadow-navy/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { v: "4.9/5", l: "Average Rating" },
            { v: "500+", l: "Clients Served" },
            { v: "$12k/mo", l: "Average Client ROI" },
            { v: "100%", l: "Vetted Talent" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl lg:text-4xl font-extrabold text-teal">{s.v}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              The simple path to freedom.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="size-12 rounded-full bg-navy text-white text-sm font-bold grid place-items-center mb-5">{s.n}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/how-it-works" className="text-teal-deep font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              See the full process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32 px-6 border-y border-navy/5">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">Why Helios Assistants</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              Most agencies match. We manage.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="p-7 rounded-2xl bg-paper border border-navy/5">
                <div className="size-11 rounded-xl bg-teal/15 text-teal-deep grid place-items-center mb-5">
                  <b.icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">Roles We Staff</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-balance">
              Every specialty we currently employ.
            </h2>
            <p className="text-navy/60">
              Click any role to book a free strategy call and get matched with a vetted specialist.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {roles.map((role) => (
              <Link
                key={role}
                to="/contact"
                search={{ role }}
                className="text-center px-4 py-4 rounded-xl bg-paper border border-navy/10 font-bold text-sm text-navy hover:border-teal hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                {role}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-navy/50">
            Don't see your role? <Link to="/contact" className="text-teal-deep font-semibold underline">Tell us what you need →</Link>
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">Pricing</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-balance">
              Simple monthly pricing.
            </h2>
            <p className="text-navy/60">No hidden fees. No setup costs. Fully managed payroll.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  t.popular
                    ? "relative rounded-2xl bg-navy text-white p-8 shadow-2xl shadow-navy/20 md:-mt-4"
                    : "relative rounded-2xl bg-white p-8 border border-navy/5"
                }
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-navy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${t.popular ? "text-teal" : "text-teal-deep"}`}>{t.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold">{t.price}</span>
                  <span className={t.popular ? "text-white/50 text-sm" : "text-navy/40 text-sm"}>/mo</span>
                </div>
                <p className={t.popular ? "text-white/60 text-sm mb-6" : "text-navy/60 text-sm mb-6"}>{t.desc}</p>
                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-teal mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing"
                  className={
                    t.popular
                      ? "block w-full text-center bg-teal text-navy font-bold py-3 rounded-full"
                      : "block w-full text-center bg-navy text-white font-bold py-3 rounded-full"
                  }
                >
                  See {t.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32 px-6 border-y border-navy/5">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">Real Results</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              Founders who finally got out of the weeds.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="p-7 rounded-2xl bg-paper border border-navy/5 flex flex-col">
                <div className="text-teal text-3xl font-serif leading-none mb-3">"</div>
                <blockquote className="text-base leading-relaxed text-navy mb-6 flex-1">{t.quote}</blockquote>
                <div className="inline-block self-start text-[10px] font-bold uppercase tracking-widest text-teal-deep bg-teal/10 px-2 py-1 rounded mb-4">
                  {t.result}
                </div>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-navy/10">
                  <div className="size-10 rounded-full bg-navy text-teal font-bold grid place-items-center text-sm">
                    {t.name.split(" ").map(p=>p[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-navy/50">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/testimonials" className="text-teal-deep font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read full case studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
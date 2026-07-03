import { createFileRoute } from "@tanstack/react-router";
import { Heart, Globe, Target } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import teamCollab from "@/assets/team-collab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Helios Assistants — Why We Built a Fully Managed VA Agency" },
      { name: "description", content: "Helios Assistants was built by founders for founders. The story behind why managed beats matchmaking — and how we treat our overseas talent like family." },
      { property: "og:title", content: "About Helios Assistants — The Managed VA Agency Story" },
      { property: "og:description", content: "Why we built a fully managed VA agency — and how we treat our overseas talent like family." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "People First", body: "Our VAs stay 3+ years on average because we pay above-market and treat careers like careers." },
  { icon: Target, title: "Outcomes Over Hours", body: "We measure ourselves by client ROI — not seats filled." },
  { icon: Globe, title: "Two Coasts, One Team", body: "US-based success management, Philippines and Colombia talent hubs, one shared playbook." },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">About Us</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            Founders building for <span className="text-teal">founders</span>.
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto text-pretty">
            We started Helios Assistants after burning out trying to manage offshore talent ourselves. The matchmaking
            agencies left us holding the bag. So we built the agency we wished existed.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <img src={teamCollab} alt="The Helios Assistants team" width={1280} height={896} loading="lazy" className="w-full aspect-[16/9] object-cover rounded-3xl shadow-xl shadow-navy/10" />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-navy/80 leading-relaxed">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep">Our Story</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-navy text-balance">
            We hired our first VA in 2019. It was a disaster.
          </h2>
          <p>
            Not because the VA was bad — she was incredible. The problem was us. We had no SOPs, no onboarding,
            no review process, and no idea how to manage someone 9,000 miles away. Within six months she
            quit, and we were back to drowning.
          </p>
          <p>
            That's when we realized: the people who need delegation the most are the worst-equipped to manage
            it. The whole industry was selling the <em>matchmaking</em> — and quietly leaving founders to figure
            out the <em>managing</em>.
          </p>
          <p>
            Helios Assistants is the fix. We do the recruiting, the training, the payroll, the coaching, the SOPs, the
            performance reviews, and the replacements. You give us your bottleneck. We give you back your time.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6 border-y border-navy/5">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl mb-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-3">What We Believe</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
              Three rules we run by.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl bg-paper border border-navy/5">
                <div className="size-11 rounded-xl bg-teal/15 text-teal-deep grid place-items-center mb-5">
                  <v.icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Come build with us." />
    </>
  );
}
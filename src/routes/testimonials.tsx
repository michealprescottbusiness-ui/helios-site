import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import clientFounder from "@/assets/client-founder.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Case Studies & Testimonials — Helios Assistants" },
      { name: "description", content: "Real stories from founders and CEOs who hired a Helios Assistants VA. ROI metrics, time savings, and real results." },
      { property: "og:title", content: "Case Studies & Testimonials — Helios Assistants" },
      { property: "og:description", content: "Real results from 500+ US founders who hired a managed Helios Assistants VA." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  { name: "Sarah Chen", role: "Founder, Loop Studio", quote: "I got 22 hours a week back in the first month. My VA basically runs ops now. Helios Assistants handles everything — I just work with the output.", metrics: "+22 hrs/wk", img: clientFounder },
  { name: "Marcus Hall", role: "CEO, Greenline Realty", quote: "We tried two other agencies. Helios Assistants is the first one that actually manages the work — not just the hire. The difference is night and day.", metrics: "3 VAs hired", img: clientFounder },
  { name: "Priya Patel", role: "Founder, Saltwater Goods", quote: "My e-com support tickets went from 48-hour response time to under 4 hours. Game changer for customer retention.", metrics: "12x faster CX", img: clientFounder },
];

function TestimonialsPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Case Studies</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-balance">
            Founders who finally <span className="text-teal">got back their time.</span>
          </h1>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto text-pretty">
            Real stories. Real metrics. Real delegation that actually works.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-20">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 ? "lg:order-last" : ""}>
                <img src={t.img} alt={t.name} width={600} height={600} loading="lazy" className="w-full aspect-square object-cover rounded-3xl shadow-xl shadow-navy/10" />
              </div>
              <div>
                <div className="flex mb-4">
                  {[0,1,2,3,4].map(j => <Star key={j} size={18} className="fill-teal text-teal" />)}
                </div>
                <blockquote className="text-2xl sm:text-3xl font-extrabold leading-snug mb-6 text-navy">
                  "{t.quote}"
                </blockquote>
                <div className="inline-block bg-teal/10 text-teal-deep font-bold text-sm px-4 py-2 rounded-full mb-8">
                  {t.metrics}
                </div>
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-navy/60 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Your story could be next." />
    </>
  );
}
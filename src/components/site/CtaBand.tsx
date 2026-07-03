import { Link } from "@tanstack/react-router";

export function CtaBand({
  eyebrow = "Ready when you are",
  title = "Buy back your time.",
  subtitle = "One 20-minute strategy call. Walk away with a custom delegation plan — even if you don't hire us.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-teal mb-4">{eyebrow}</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5 text-balance">
          {title}
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-pretty">{subtitle}</p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-teal text-navy font-bold px-7 py-4 rounded-full shadow-xl shadow-teal/20 hover:scale-[1.02] transition-transform"
        >
          Book Your Free Strategy Call →
        </Link>
        <p className="mt-4 text-xs text-white/50">No commitment. No pressure. Just clarity.</p>
      </div>
    </section>
  );
}
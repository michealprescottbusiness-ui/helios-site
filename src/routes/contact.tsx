import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Mail, Check } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { CalendlyInline } from "@/components/site/CalendlyEmbed";

export const Route = createFileRoute("/contact")({
  validateSearch: zodValidator(
    z.object({ role: fallback(z.string().max(80), "").optional() }),
  ),
  head: () => ({
    meta: [
      { title: "Book Your Free Strategy Call — Helios Assistants" },
      { name: "description", content: "20 minutes. Custom delegation plan. Zero pressure. Book your free strategy call with the Helios Assistants team." },
      { property: "og:title", content: "Book Your Free Strategy Call — Helios Assistants" },
      { property: "og:description", content: "20 minutes. Custom delegation plan. Zero pressure." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { role } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    bottleneck: role ? `I'm interested in hiring a ${role}.` : "",
  });
  const { submit, submitting } = useLeadSubmit();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await submit({ source: "contact", ...form, role: role || null });
    if (ok) setSent(true);
  }

  function update(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  }
  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">Book a Free Call</p>
          {role && (
            <div className="inline-flex items-center gap-2 bg-teal/10 text-teal-deep text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Interested in: {role}
            </div>
          )}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-balance">
            20 minutes. Custom delegation plan. <span className="text-teal">Zero pressure.</span>
          </h1>
          <p className="text-lg text-navy/70 mb-8 text-pretty">
            We'll audit your bottlenecks, recommend the right role to off-load first, and ballpark the ROI —
            even if you never hire us.
          </p>
          <ul className="space-y-3 text-sm">
            {[
              "No sales pressure — most calls don't become clients",
              "Walk away with a 1-page delegation plan",
              "Get matched with a real VA shortlist if you want",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check size={18} className="text-teal mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 bg-paper border border-navy/10 rounded-2xl">
            <div className="flex items-center gap-2 text-sm font-bold text-navy mb-3">
              <Calendar size={16} className="text-teal" /> Schedule directly
            </div>
            <CalendlyInline />
            <p className="mt-3 text-xs text-navy/50">Or use the form on the right — we'll reply within one business hour.</p>
          </div>
        </div>

        <div className="bg-white border border-navy/10 rounded-3xl p-8 lg:p-10 self-start sticky top-24">
          {sent ? (
            <div className="py-16 text-center">
              <div className="size-14 rounded-full bg-teal/15 text-teal grid place-items-center mx-auto mb-5">
                <Check size={28} />
              </div>
              <h2 className="text-2xl font-extrabold mb-2">You're in.</h2>
              <p className="text-navy/60">We'll be in touch within one business hour.</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="space-y-5"
            >
              <h2 className="text-2xl font-extrabold flex items-center gap-2">
                <Mail size={20} className="text-teal" /> Tell us about you
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="name" placeholder="Alex Johnson" value={form.name} onChange={update("name")} />
                <Field label="Work email" name="email" type="email" placeholder="alex@company.com" value={form.email} onChange={update("email")} />
              </div>
              <Field label="Company" name="company" placeholder="Acme Inc." value={form.company} onChange={update("company")} />
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">
                  Biggest bottleneck right now
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.bottleneck}
                  onChange={update("bottleneck")}
                  placeholder="e.g. inbox is buried, can't keep up with leads…"
                  className="w-full px-4 py-3 bg-paper border border-navy/10 rounded-xl text-sm focus:outline-none focus:border-teal resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-teal text-navy font-bold py-4 rounded-full shadow-lg shadow-teal/20 hover:scale-[1.01] transition-transform disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Book Your Free Strategy Call"}
              </button>
              <p className="text-xs text-navy/40 text-center">🔒 We'll reply within one business hour. We never share your email.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, value, onChange }: {
  label: string; name: string; type?: string; placeholder?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={name !== "company"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-paper border border-navy/10 rounded-xl text-sm focus:outline-none focus:border-teal"
      />
    </div>
  );
}
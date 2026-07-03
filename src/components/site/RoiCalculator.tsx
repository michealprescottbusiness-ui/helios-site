import { useMemo, useState } from "react";
import { useLeadSubmit } from "@/hooks/useLeadSubmit";
import { Calculator, TrendingUp } from "lucide-react";

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
function dollars(n: number) {
  return `$${fmt(Math.max(0, Math.round(n)))}}`;
}

// Assumes a Growth-tier full-time VA at $1,999/mo as the comparison baseline.
const APEXVA_MONTHLY = 1999;

export function RoiCalculator({ id = "roi" }: { id?: string }) {
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(150);
  const [usCost, setUsCost] = useState(6500);
  const [email, setEmail] = useState("");
  const { submit, submitting } = useLeadSubmit();

  const calc = useMemo(() => {
    const monthlyHours = hours * 4.33;
    const timeValue = monthlyHours * rate;
    const savingsVsUs = Math.max(0, usCost - APEXVA_MONTHLY);
    const totalImpact = (timeValue + savingsVsUs) * 12;
    return { monthlyHours, timeValue, savingsVsUs, totalImpact };
  }, [hours, rate, usCost]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const ok = await submit({
      source: "roi-calculator",
      email,
      bottleneck: JSON.stringify({
        hoursPerWeek: hours,
        hourlyRate: rate,
        currentUsCost: usCost,
        monthlyHoursReclaimed: Math.round(calc.monthlyHours),
        monthlyTimeValue: Math.round(calc.timeValue),
        monthlySavings: Math.round(calc.savingsVsUs),
        twelveMonthImpact: Math.round(calc.totalImpact),
      }),
    });
    if (ok) setEmail("");
  }

  return (
    <section id={id} className="px-6 py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl bg-white border border-navy/10 rounded-3xl p-8 lg:p-12 shadow-xl shadow-navy/5">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-deep mb-4">
              <Calculator size={14} /> ROI Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-balance">
              See exactly what your time is worth.
            </h2>
            <p className="text-navy/60 mb-8 text-pretty">
              Move the sliders. We'll calculate how many hours and dollars a fully managed Helios Assistants puts back on your books.
            </p>

            <div className="space-y-6">
              <Slider
                label="Hours/week you spend on tasks a VA could own"
                value={hours} onChange={setHours} min={1} max={60} suffix="hrs"
              />
              <Slider
                label="Your effective hourly value"
                value={rate} onChange={setRate} min={25} max={750} step={5} prefix="$" suffix="/hr"
              />
              <Slider
                label="Current US assistant cost (optional)"
                value={usCost} onChange={setUsCost} min={0} max={12000} step={250} prefix="$" suffix="/mo"
              />
            </div>
          </div>

          <div className="bg-navy text-white rounded-2xl p-8 flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-widest text-teal mb-5">Your results</p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Stat label="Hours reclaimed / mo" value={`${fmt(calc.monthlyHours)} hrs`} />
              <Stat label="Time value recovered / mo" value={dollars(calc.timeValue)} />
              <Stat label="Savings vs. US hire / mo" value={dollars(calc.savingsVsUs)} />
              <Stat label="12-month total impact" value={dollars(calc.totalImpact)} highlight />
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3 text-sm text-white/80">
                <TrendingUp size={16} className="text-teal" />
                Email me a copy + book my free strategy call
              </div>
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/15 text-sm placeholder:text-white/40 focus:outline-none focus:border-teal"
                />
                <button
                  type="submit" disabled={submitting}
                  className="bg-teal text-navy text-sm font-bold px-5 rounded-full disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send"}
                </button>
              </form>
              <p className="mt-3 text-[11px] text-white/40">
                Comparison assumes Growth tier ($1,999/mo). No spam — one email, then a calendar link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label, value, onChange, min, max, step = 1, prefix = "", suffix = "",
}: {
  label: string; value: number; onChange: (n: number) => void;
  min: number; max: number; step?: number; prefix?: string; suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-xs font-bold uppercase tracking-widest text-navy/60">{label}</label>
        <span className="font-extrabold tabular-nums text-navy">
          {prefix}{fmt(value)}{suffix}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-teal"
      />
    </div>
  );
}

function Stat({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{label}</p>
      <p className={highlight ? "text-3xl font-extrabold text-teal tabular-nums" : "text-2xl font-extrabold tabular-nums"}>
        {value}
      </p>
    </div>
  );
}
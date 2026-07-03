import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import heliosLogo from "@/assets/helios-logo.png.asset.json";

const nav = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/services", label: "Our VAs" },
  { to: "/pricing", label: "Pricing" },
  { to: "/resources", label: "Resources" },
  { to: "/testimonials", label: "Results" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tighter text-navy">
          <img src={heliosLogo.url} alt="Helios Assistants" className="h-9 w-auto" width={36} height={36} />
          <span>HELIOS<span className="text-teal ml-1 text-base font-semibold tracking-normal">Assistants</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-navy/70">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-navy transition-colors"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-navy text-white text-sm font-bold px-4 py-2.5 rounded-full hover:bg-navy-soft transition-colors"
          >
            Book a Free Call
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-navy"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-navy/5 bg-paper">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-navy font-medium border-b border-navy/5"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-teal text-navy text-center font-bold py-3 rounded-xl"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
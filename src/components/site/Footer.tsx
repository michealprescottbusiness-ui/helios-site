import { Link } from "@tanstack/react-router";
import heliosLogo from "@/assets/helios-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3 font-extrabold text-2xl tracking-tighter">
              <img src={heliosLogo.url} alt="Helios Assistants" className="h-11 w-auto" width={44} height={44} />
              <span>HELIOS<span className="text-teal ml-1 text-base font-semibold tracking-normal">Assistants</span></span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Dedicated overseas virtual assistants — fully managed for US founders, coaches,
              and operators ready to buy back their time.
            </p>
            <Link
              to="/contact"
              className="self-start bg-teal text-navy font-bold px-5 py-3 rounded-full text-sm"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal">Company</p>
              <Link to="/about" className="block text-white/60 hover:text-white">About Us</Link>
              <Link to="/services" className="block text-white/60 hover:text-white">Our VAs</Link>
              <Link to="/pricing" className="block text-white/60 hover:text-white">Pricing</Link>
              <Link to="/how-it-works" className="block text-white/60 hover:text-white">How It Works</Link>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal">Resources</p>
              <Link to="/resources" className="block text-white/60 hover:text-white">Free Downloads</Link>
              <Link to="/testimonials" className="block text-white/60 hover:text-white">Case Studies</Link>
              <Link to="/faq" className="block text-white/60 hover:text-white">FAQ</Link>
            </div>
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal">Get In Touch</p>
              <Link to="/contact" className="block text-white/60 hover:text-white">Book a Call</Link>
              <a href="mailto:hello@heliosassistants.com" className="block text-white/60 hover:text-white">hello@heliosassistants.com</a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40">
          <p>&copy; {new Date().getFullYear()} Helios Assistants. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useEffect, useRef } from "react";

// TODO: replace with your real Calendly URL once the brand name + domain are finalized.
// Example: "https://calendly.com/apexva/strategy-call"
export const CALENDLY_URL =
  "https://calendly.com/apexva-strategy/30min";

export function CalendlyInline({ url = CALENDLY_URL }: { url?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = "calendly-widget-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget rounded-xl overflow-hidden bg-white"
      data-url={`${url}?hide_gdpr_banner=1&primary_color=0fb5a8`}
      style={{ minWidth: "320px", height: "680px" }}
    />
  );
}
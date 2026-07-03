import { useEffect, useState } from "react";

const KEY = "apexva-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-navy text-white rounded-2xl shadow-2xl shadow-navy/30 p-5 border border-white/10">
      <p className="text-sm leading-relaxed">
        We use essential cookies to run the site and (with your consent) analytics to improve it.{" "}
        <a href="/cookies" className="text-teal underline underline-offset-2">Read more</a>.
      </p>
      <div className="mt-4 flex gap-2 justify-end">
        <button
          onClick={() => decide("declined")}
          className="text-xs font-semibold px-4 py-2 rounded-full text-white/70 hover:text-white"
        >
          Decline
        </button>
        <button
          onClick={() => decide("accepted")}
          className="bg-teal text-navy text-xs font-bold px-4 py-2 rounded-full"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
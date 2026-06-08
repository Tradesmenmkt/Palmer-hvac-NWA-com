import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CallBanner() {
  return (
    <section aria-label="Call Palmer HVAC now" className="relative isolate overflow-hidden bg-[hsl(208_79%_18%)]">
      <div className="absolute inset-0 bg-grain opacity-30 -z-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
            Need Service Today?
          </div>
          <h3 className="mt-2 font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Talk to a real HVAC tech in minutes.
          </h3>
          <p className="mt-3 text-white/75 max-w-xl">
            Emergency repairs, replacements, tune-ups — our team answers fast and shows up on time. No call centers. No pressure.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end items-start lg:items-center">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="phone-pulse inline-flex items-center gap-3 rounded-full bg-[hsl(16_100%_56%)] hover:bg-[hsl(16_100%_50%)] text-white px-7 py-4 font-display font-extrabold text-2xl sm:text-3xl transition-all active:scale-95"
            data-testid="callbanner-phone-cta"
          >
            <Phone className="h-7 w-7" />
            {SITE.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/30 text-white px-6 py-3.5 font-bold text-sm hover:bg-white/10 transition-all"
          >
            Or Send a Request
          </a>
        </div>
      </div>
    </section>
  );
}

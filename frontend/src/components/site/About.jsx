import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

const points = [
  "Honest, straightforward pricing — no surprises",
  "Experienced, background-checked technicians",
  "Same-day & emergency HVAC service available",
  "Quality workmanship backed by guarantees",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
              <img
                src={SITE.aboutImg}
                alt="Palmer HVAC air conditioning installation — outdoor AC condenser units installed by Palmer HVAC technicians in Northwest Arkansas"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-[hsl(208_79%_18%)] px-6 py-5 text-white shadow-2xl">
              <div className="text-xs uppercase tracking-[0.18em] text-orange-300">Local Since</div>
              <div className="font-display font-black text-3xl">NW Arkansas</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(16_100%_50%)]">
              About Palmer HVAC
            </div>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 text-balance">
              Honest service. Quality workmanship. Dependable comfort.
            </h2>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              At Palmer HVAC, we believe customers deserve honest service, quality
              workmanship, and dependable comfort solutions. Whether you need a quick
              repair, routine maintenance, or a complete system replacement, our team is
              ready to help.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We're a local HVAC contractor — your neighbors. That means we show up on
              time, treat your home like ours, and stand behind every job we do.
            </p>

            <ul className="mt-7 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(16_100%_50%)] mt-0.5 shrink-0" />
                  <span className="text-slate-800 font-semibold">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(208_79%_28%)] hover:bg-[hsl(208_79%_22%)] text-white px-7 py-3.5 font-bold text-sm transition-all active:scale-95"
              >
                Schedule a Visit
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-300 text-slate-800 px-7 py-3.5 font-bold text-sm hover:bg-slate-50"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

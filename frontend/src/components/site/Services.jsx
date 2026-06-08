import * as Icons from "lucide-react";
import { SERVICES } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(16_100%_50%)]">
            HVAC Services
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 text-balance">
            Heating, Cooling & Indoor Comfort — Done Right
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            From emergency AC repair to full furnace installation, Palmer HVAC is your
            trusted local HVAC contractor for residential and light commercial systems
            throughout Northwest Arkansas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = Icons[svc.icon] || Icons.Wrench;
            return (
              <article
                key={svc.title}
                data-testid={`service-card-${i}`}
                className="card-hover group rounded-2xl border border-slate-200 bg-white p-7 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(208_79%_28%)] text-white group-hover:bg-[hsl(16_100%_56%)] transition-colors">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    0{(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-slate-900">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[hsl(208_79%_28%)] hover:text-[hsl(16_100%_50%)]"
                >
                  Request service
                  <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

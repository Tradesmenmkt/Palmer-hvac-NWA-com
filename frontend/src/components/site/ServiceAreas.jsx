import { MapPin } from "lucide-react";
import { SERVICE_AREAS, SEO_AREA_PHRASES } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(16_100%_50%)]">
            HVAC Services Near You
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 text-balance">
            Local HVAC Contractor Serving Northwest Arkansas
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Palmer HVAC proudly serves homeowners and businesses throughout Northwest
            Arkansas and surrounding communities — fast, reliable, and local.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {SERVICE_AREAS.map((area, i) => (
            <li
              key={area}
              data-testid={`area-${i}`}
              className="group rounded-xl bg-white border border-slate-200 px-4 py-4 flex items-center gap-3 hover:border-[hsl(208_79%_28%)] hover:shadow-sm transition-all"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(208_79%_28%)]/8 text-[hsl(208_79%_28%)] group-hover:bg-[hsl(16_100%_56%)] group-hover:text-white transition-colors">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="font-semibold text-slate-800 text-sm">{area}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
          <h3 className="font-display font-bold text-lg text-slate-900">
            HVAC services we provide across NW Arkansas
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SEO_AREA_PHRASES.map((phrase) => (
              <li
                key={phrase}
                className="text-xs font-semibold text-slate-700 bg-slate-100 rounded-full px-3 py-1.5"
              >
                {phrase}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

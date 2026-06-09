import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/site";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(16_100%_50%)]">
            Customer Reviews
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 text-balance">
            Real Reviews From Palmer HVAC Customers
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            See what local customers have to say about working with Palmer HVAC.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[hsl(16_100%_56%)] text-[hsl(16_100%_56%)]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700">
              5-star service across Northwest Arkansas
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              data-testid={`review-${i}`}
              className="rounded-2xl bg-white border border-slate-200 p-7 card-hover relative flex flex-col"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-slate-100" />
              <div className="flex">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[hsl(16_100%_56%)] text-[hsl(16_100%_56%)]" />
                ))}
              </div>
              <p className="mt-4 text-slate-800 leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(208_79%_28%)] text-white font-display font-bold text-sm">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <div className="font-display font-bold text-slate-900 leading-tight">{r.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Verified Google Review</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

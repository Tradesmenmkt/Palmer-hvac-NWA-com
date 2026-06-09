import { useState } from "react";
import { X } from "lucide-react";
import { GALLERY } from "@/lib/site";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(16_100%_50%)]">
            Project Gallery
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 text-balance">
            Real Palmer HVAC Jobs in Northwest Arkansas
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            A look at recent installations, ductwork, and service calls completed by
            the Palmer HVAC team across Siloam Springs, Bentonville, Rogers, Springdale,
            Fayetteville, and the surrounding NW Arkansas communities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setActive(i)}
              data-testid={`gallery-item-${i}`}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 hover:ring-[hsl(208_79%_28%)] transition-all ${
                i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <div className="text-[10px] uppercase tracking-[0.18em] text-orange-300 font-bold">
                  Palmer HVAC
                </div>
                <div className="mt-1 font-display font-bold text-white text-lg leading-tight">
                  {g.caption}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            data-testid="gallery-close"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="max-h-[85vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <div className="font-display font-bold text-lg">{GALLERY[active].caption}</div>
            <div className="text-xs text-white/70 mt-1">{GALLERY[active].alt}</div>
          </div>
        </div>
      )}
    </section>
  );
}

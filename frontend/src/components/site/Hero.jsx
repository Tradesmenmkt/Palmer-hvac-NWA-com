import { Phone, CalendarCheck, FileText, ShieldCheck, Clock, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { HERO } from "@/constants/testIds";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[hsl(208_79%_14%)]"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={SITE.heroBg}
          alt="HVAC technician servicing a residential air conditioning system in Northwest Arkansas"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(208_79%_14%)] via-[hsl(208_79%_14%)]/85 to-[hsl(208_79%_14%)]/30" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white/90 uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[hsl(16_100%_60%)] animate-pulse" />
              {SITE.hours}
            </div>

            <h1 className="mt-6 font-display font-black text-white text-balance text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Palmer HVAC
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/85">
                Reliable Heating & Cooling Services You Can Trust
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
              Local HVAC contractor serving Northwest Arkansas with honest pricing,
              fast response, and quality workmanship — from emergency AC repair to full
              furnace and heat pump installation.
            </p>

            {/* Phone CTA — large + clickable */}
            <div className="mt-8">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300/90">
                Call Now
              </div>
              <a
                href={`tel:${SITE.phoneTel}`}
                data-testid={HERO.phoneCta}
                className="mt-2 inline-flex items-center gap-3 group"
              >
                <span className="phone-pulse inline-flex items-center justify-center h-14 w-14 rounded-full bg-[hsl(16_100%_56%)] text-white shadow-lg">
                  <Phone className="h-6 w-6" />
                </span>
                <span className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight group-hover:text-[hsl(16_100%_70%)] transition-colors">
                  {SITE.phoneDisplay}
                </span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                data-testid={HERO.scheduleBtn}
                className="inline-flex items-center gap-2 rounded-full bg-white text-[hsl(208_79%_18%)] px-7 py-3.5 font-bold text-sm transition-all active:scale-95 hover:bg-white/90 shadow-md"
              >
                <CalendarCheck className="h-4 w-4" /> Schedule Service
              </a>
              <a
                href="#contact"
                data-testid={HERO.estimateBtn}
                className="inline-flex items-center gap-2 rounded-full bg-transparent ring-1 ring-white/40 text-white px-7 py-3.5 font-bold text-sm transition-all active:scale-95 hover:bg-white/10"
              >
                <FileText className="h-4 w-4" /> Request a Free Estimate
              </a>
            </div>

            {/* Trust micro signals */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-white/80">
              <span className="inline-flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-[hsl(16_100%_60%)]" /> Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-[hsl(16_100%_60%)]" /> 24/7 Emergency Response
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-[hsl(16_100%_60%)]" /> Local, Family-Run
              </span>
            </div>
          </div>

          {/* Floating logo card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative mx-auto w-full max-w-sm aspect-square rounded-3xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur-sm p-10 flex items-center justify-center">
              <img
                src={SITE.logoWhite}
                alt="Palmer HVAC logo"
                className="w-full h-full object-contain drop-shadow-[0_8px_30px_rgba(255,103,31,0.25)]"
                style={{ filter: "invert(1) brightness(2)" }}
              />
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[hsl(16_100%_56%)] px-5 py-3 text-white shadow-xl">
                <div className="text-[10px] uppercase tracking-[0.18em] opacity-90">Serving</div>
                <div className="text-sm font-extrabold">NW Arkansas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

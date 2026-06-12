import { useEffect } from "react";
import * as Icons from "lucide-react";
import { Phone, ArrowRight, CheckCircle2, FileText, ShieldCheck, Target, Zap } from "lucide-react";
import SealHeader from "@/components/seal/SealHeader";
import SealFooter from "@/components/seal/SealFooter";
import {
  SEAL_TEAM,
  SEAL_FEATURES,
  SEAL_SERVICES,
  SEAL_PROCESS,
  SEAL_AREAS,
} from "@/lib/sealTeam";

function useSealSEO() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Seal Team Insulation | Spray Foam Insulation Services";

    const upsertMeta = (selector, attr, name, content) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      const prev = tag.getAttribute("content");
      tag.setAttribute("content", content);
      return [tag, prev];
    };

    const [descTag, prevDesc] = upsertMeta(
      'meta[name="description"]',
      "name",
      "description",
      "Professional spray foam insulation for homes, attics, crawlspaces, garages, shops, metal buildings, remodels, and new construction. Get a free estimate from Seal Team Insulation."
    );
    const [kwTag, prevKw] = upsertMeta(
      'meta[name="keywords"]',
      "name",
      "keywords",
      "spray foam insulation, spray foam insulation services, attic insulation, crawlspace insulation, metal building insulation, garage insulation, shop insulation, residential spray foam insulation, Northwest Arkansas insulation, Seal Team Insulation"
    );
    const [ogTitle, prevOgT] = upsertMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      "Seal Team Insulation | Spray Foam Insulation Services"
    );
    const [ogDesc, prevOgD] = upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      "Spray foam insulation built to seal, protect, and perform. Homes, shops, metal buildings, attics, and crawlspaces — Northwest Arkansas."
    );

    return () => {
      document.title = prevTitle;
      if (prevDesc != null) descTag.setAttribute("content", prevDesc);
      if (prevKw != null) kwTag.setAttribute("content", prevKw);
      if (prevOgT != null) ogTitle.setAttribute("content", prevOgT);
      if (prevOgD != null) ogDesc.setAttribute("content", prevOgD);
    };
  }, []);
}

export default function SealTeamInsulation() {
  useSealSEO();

  return (
    <div className="bg-stone-50 text-stone-900">
      <SealHeader />
      <main>
        <Hero />
        <WhySprayFoam />
        <Services />
        <TrustBand />
        <Process />
        <Areas />
        <CTA />
      </main>
      <SealFooter />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#0b1220]">
      <div className="absolute inset-0 -z-10">
        <img
          src={SEAL_TEAM.heroBg}
          alt="Spray foam insulation being applied in a residential attic by Seal Team Insulation"
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0b1220]/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/85 to-[#0b1220]/35" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 fade-up">
            <div className="inline-flex items-center gap-2 rounded-sm border border-amber-300/40 bg-amber-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-200">
              <Target className="h-3.5 w-3.5" />
              Spray Foam · Sealed Tight · NW Arkansas
            </div>

            <h1 className="mt-6 font-display font-black text-white text-balance text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight">
              Seal Team
              <span className="block text-amber-300">Insulation</span>
            </h1>

            <p className="mt-5 font-display font-bold text-white/95 text-xl sm:text-2xl max-w-2xl leading-snug">
              Professional Spray Foam Insulation Built to Seal, Protect, and Perform.
            </p>

            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
              Stop air leaks, lower energy waste, and make your home, shop, or building
              more comfortable year-round with high-performance spray foam insulation.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#estimate"
                data-testid="seal-hero-estimate"
                className="inline-flex items-center gap-2 rounded-sm bg-amber-300 hover:bg-amber-200 text-stone-900 px-7 py-3.5 font-extrabold text-sm uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-amber-900/30"
              >
                <FileText className="h-4 w-4" /> Get a Free Estimate
              </a>
              <a
                href={`tel:${SEAL_TEAM.phoneTel}`}
                data-testid="seal-hero-call"
                className="inline-flex items-center gap-2 rounded-sm bg-transparent ring-1 ring-white/40 text-white px-7 py-3.5 font-extrabold text-sm uppercase tracking-wider transition-all active:scale-95 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-white/80">
              <span className="inline-flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-amber-300" /> Open & Closed Cell Foam
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-amber-300" /> Higher R-Value Per Inch
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-amber-300" /> Homes · Shops · Metal Buildings
              </span>
            </div>
          </div>

          {/* Badge / logo card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative mx-auto w-full max-w-sm rounded-xl bg-white p-8 shadow-2xl shadow-amber-900/20 ring-1 ring-white/10 rotate-[1.5deg]">
              <img
                src={SEAL_TEAM.logo}
                alt="Seal Team Insulation logo — spray foam contractor"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY ---------- */
function WhySprayFoam() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#1e3a8a]">
            Why Spray Foam
          </div>
          <h2 className="mt-3 font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-stone-900 text-balance">
            Why Choose Spray Foam Insulation?
          </h2>
          <p className="mt-4 text-stone-600 text-lg leading-relaxed">
            Spray foam creates an airtight seal that traditional insulation cannot match.
            It helps reduce drafts, improves comfort, strengthens energy efficiency, and
            can protect your property from moisture and outside air infiltration.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEAL_FEATURES.map((f, i) => {
            const Icon = Icons[f.icon] || Icons.Shield;
            return (
              <article
                key={f.title}
                data-testid={`seal-feature-${i}`}
                className="group rounded-sm bg-white border border-stone-200 p-7 card-hover relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 h-1 w-12 bg-amber-300" />
                <span className="absolute top-0 left-12 h-1 w-6 bg-[#1e3a8a]" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-stone-900 text-amber-300 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-display font-extrabold uppercase tracking-tight text-lg text-stone-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#1e3a8a]">
            Insulation Services
          </div>
          <h2 className="mt-3 font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-stone-900 text-balance">
            Our Insulation Services
          </h2>
          <p className="mt-4 text-stone-600 text-lg leading-relaxed">
            Spray foam insulation services for residential, agricultural, light
            commercial, and metal building applications across Northwest Arkansas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEAL_SERVICES.map((svc, i) => {
            const Icon = Icons[svc.icon] || Icons.Shield;
            return (
              <article
                key={svc.title}
                data-testid={`seal-service-${i}`}
                className="card-hover group rounded-sm border border-stone-200 bg-stone-50 p-7 flex flex-col relative overflow-hidden"
              >
                <span className="absolute -right-6 -top-6 h-16 w-16 rounded-sm bg-[#1e3a8a]/5 rotate-12" />
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#1e3a8a] text-white group-hover:bg-stone-900 transition-colors">
                    <Icon className="h-6 w-6" strokeWidth={2.25} />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
                    OPS · {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-extrabold uppercase tracking-tight text-lg text-stone-900">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{svc.desc}</p>
                <a
                  href="#estimate"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1e3a8a] hover:text-stone-900"
                >
                  Request estimate
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BAND ---------- */
function TrustBand() {
  return (
    <section className="relative isolate bg-stone-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
            Local Trust
          </div>
          <h2 className="mt-3 font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-balance">
            Built for Hardworking Homes and Buildings
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-2xl">
            Seal Team Insulation provides dependable spray foam insulation for homeowners,
            builders, property owners, and businesses who want the job done right. Whether
            you are insulating a home, shop, garage, attic, crawlspace, or metal building,
            our goal is simple: <span className="text-amber-300 font-semibold">seal it tight, make it efficient, and help it perform.</span>
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: "R-7", l: "per inch closed-cell" },
              { v: "100%", l: "air-seal coverage" },
              { v: "NW AR", l: "locally operated" },
            ].map((s) => (
              <div key={s.v} className="rounded-sm bg-white/[0.04] ring-1 ring-white/10 p-5">
                <div className="font-display font-black text-2xl sm:text-3xl text-amber-300">
                  {s.v}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/65 font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#1e3a8a]">
            How We Work
          </div>
          <h2 className="mt-3 font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-stone-900 text-balance">
            Our Simple Process
          </h2>
          <p className="mt-4 text-stone-600 text-lg leading-relaxed">
            Four steps from first call to finished job — no surprises.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEAL_PROCESS.map((p, i) => (
            <li
              key={p.step}
              data-testid={`seal-process-${i}`}
              className="relative rounded-sm bg-white border border-stone-200 p-7 card-hover"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-5xl text-amber-300 leading-none">
                  {p.step}
                </span>
                <span className="h-px flex-1 bg-stone-200" />
              </div>
              <h3 className="mt-4 font-display font-extrabold uppercase tracking-tight text-lg text-stone-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- AREAS ---------- */
function Areas() {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#1e3a8a]">
            Areas We Insulate
          </div>
          <h2 className="mt-3 font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-stone-900 text-balance">
            Perfect For:
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {SEAL_AREAS.map((area, i) => (
            <li
              key={area}
              data-testid={`seal-area-${i}`}
              className="group rounded-sm border border-stone-200 bg-stone-50 px-4 py-4 flex items-center gap-3 hover:border-[#1e3a8a] hover:bg-white transition-all"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-stone-900 text-amber-300 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <span className="font-semibold text-stone-800 text-sm">{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="estimate" className="relative isolate overflow-hidden bg-[#0b1220]">
      <div className="absolute inset-0 bg-grain opacity-25" />
      <div
        className="absolute -right-32 -bottom-32 w-[28rem] h-[28rem] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(252,211,77,0.18), transparent)" }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <div className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
            Get In Touch
          </div>
          <h2 className="mt-3 font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white text-balance">
            Ready to Seal Your Building the Right Way?
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed max-w-2xl">
            Get professional spray foam insulation designed to improve comfort, reduce
            energy waste, and protect your space for years to come.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="rounded-sm bg-white/[0.04] ring-1 ring-white/10 p-6 flex flex-col gap-3">
            <a
              href="/#contact"
              data-testid="seal-cta-estimate"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-amber-300 hover:bg-amber-200 text-stone-900 px-6 py-3.5 font-extrabold text-sm uppercase tracking-wider transition-all active:scale-95"
            >
              <FileText className="h-4 w-4" /> Get a Free Estimate
            </a>
            <a
              href={`tel:${SEAL_TEAM.phoneTel}`}
              data-testid="seal-cta-call"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-white text-stone-900 px-6 py-3.5 font-extrabold text-sm uppercase tracking-wider transition-all active:scale-95 hover:bg-stone-100"
            >
              <Phone className="h-4 w-4" /> Call Seal Team Insulation
            </a>
            <div className="mt-2 text-center text-white/70 text-xs uppercase tracking-[0.2em]">
              {SEAL_TEAM.phoneDisplay} · NW Arkansas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

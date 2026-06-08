import { Phone, MapPin, Clock } from "lucide-react";
import { SITE, SERVICES, SERVICE_AREAS } from "@/lib/site";
import { FOOTER } from "@/constants/testIds";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={SITE.logoIcon} alt="Palmer HVAC" className="h-12 w-12 object-contain" style={{ filter: "invert(1) brightness(2)" }} />
              <div>
                <div className="font-display font-extrabold text-white text-xl">PALMER HVAC</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-orange-300/90 font-semibold">NW Arkansas</div>
              </div>
            </div>
            <p className="mt-5 text-slate-400 leading-relaxed text-sm max-w-sm">
              Local HVAC contractor providing AC repair, heating repair, installation,
              and 24/7 emergency HVAC service throughout Northwest Arkansas.
            </p>

            <a
              href={`tel:${SITE.phoneTel}`}
              data-testid={FOOTER.phone}
              className="mt-6 inline-flex items-center gap-3 group"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(16_100%_56%)] text-white">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-display font-extrabold text-white text-2xl group-hover:text-[hsl(16_100%_60%)] transition-colors">
                {SITE.phoneDisplay}
              </span>
            </a>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4 text-[hsl(16_100%_56%)]" />
              {SITE.hours}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Quick Links</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#service-areas", label: "Service Areas" },
                { href: "#about", label: "About" },
                { href: "#reviews", label: "Reviews" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Services</div>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
              {SERVICES.slice(0, 9).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Service Areas</div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {SERVICE_AREAS.slice(0, 12).map((a) => (
                <li key={a} className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="h-3 w-3 text-[hsl(16_100%_56%)]" /> {a}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              data-testid={FOOTER.contact}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(16_100%_56%)] hover:bg-[hsl(16_100%_50%)] text-white px-5 py-2.5 font-bold text-sm transition-all active:scale-95"
            >
              Contact Palmer HVAC
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
          <div className="text-xs text-slate-500">
            © {year} Palmer HVAC. All rights reserved. Reliable HVAC contractor serving Northwest Arkansas.
          </div>
          <div
            data-testid={FOOTER.credit}
            className="flex items-center gap-2 text-[11px] text-slate-500"
          >
            <img
              src={SITE.tradesmenLogo}
              alt="Tradesmen Marketing"
              className="h-5 w-5 object-contain rounded-sm"
            />
            <span>
              This website was designed and operated by{" "}
              <span className="text-slate-300 font-semibold">Tradesmen Marketing</span>, a division of the{" "}
              <span className="text-slate-300 font-semibold">Tradesmen Wealth Company</span>.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { SEAL_TEAM, SEAL_SERVICES, SEAL_AREAS } from "@/lib/sealTeam";
import { SITE } from "@/lib/site";

export default function SealFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#070b14] text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={SEAL_TEAM.logo}
                alt="Seal Team Insulation"
                className="h-14 w-14 object-contain rounded-md bg-white p-1"
              />
              <div>
                <div className="font-display font-black text-white text-lg uppercase tracking-tight">
                  Seal Team Insulation
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-bold">
                  Spray Foam Insulation
                </div>
              </div>
            </div>
            <p className="mt-5 text-stone-400 leading-relaxed text-sm max-w-sm">
              Professional spray foam insulation for homes, shops, garages, attics,
              crawlspaces, metal buildings, remodels, and new construction in Northwest
              Arkansas.
            </p>
            <a
              href={`tel:${SEAL_TEAM.phoneTel}`}
              className="mt-6 inline-flex items-center gap-3 group"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-amber-300 text-stone-900">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-display font-extrabold text-white text-2xl group-hover:text-amber-200 transition-colors">
                {SEAL_TEAM.phoneDisplay}
              </span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Insulation Services</div>
            <ul className="mt-4 grid gap-2 text-sm">
              {SEAL_SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Perfect For</div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {SEAL_AREAS.map((a) => (
                <li key={a} className="flex items-center gap-1.5 text-stone-400">
                  <MapPin className="h-3 w-3 text-amber-300" /> {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Sister Company</div>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Palmer HVAC
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-white transition-colors">
                  HVAC Services
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
          <div className="text-xs text-stone-500">
            © {year} Seal Team Insulation. Spray foam insulation contractor serving Northwest Arkansas.
          </div>
          <div className="flex items-center gap-2 text-[11px] text-stone-500">
            <img
              src={SITE.tradesmenLogo}
              alt="Tradesmen Marketing"
              className="h-5 w-5 object-contain rounded-sm"
            />
            <span>
              This website was designed and operated by{" "}
              <span className="text-stone-300 font-semibold">Tradesmen Marketing</span>, a division of the{" "}
              <span className="text-stone-300 font-semibold">Tradesmen Wealth Company</span>.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

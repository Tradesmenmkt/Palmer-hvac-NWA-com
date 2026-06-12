import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Phone, X, ArrowLeft } from "lucide-react";
import { SEAL_TEAM } from "@/lib/sealTeam";

const navItems = [
  { id: "why", label: "Why Spray Foam" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "areas", label: "Where We Insulate" },
  { id: "estimate", label: "Get Estimate" },
];

export default function SealHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const headerBg = scrolled
    ? "bg-white shadow-md border-b border-stone-200"
    : "bg-[#0b1220]";
  const textBrand = scrolled ? "text-stone-900" : "text-white";
  const textSub = scrolled ? "text-[#1e3a8a]" : "text-amber-200/90";
  const navLink = scrolled
    ? "text-stone-700 hover:text-[#1e3a8a]"
    : "text-white/85 hover:text-white";
  const iconBtn = scrolled
    ? "text-stone-900 hover:bg-stone-100"
    : "text-white hover:bg-white/10";
  const phoneCta = scrolled
    ? "bg-[#1e3a8a] hover:bg-[#172d6e] text-white shadow"
    : "bg-amber-300 hover:bg-amber-200 text-stone-900 shadow-lg shadow-amber-900/20";
  const backBtn = scrolled
    ? "text-stone-600 hover:text-[#1e3a8a]"
    : "text-white/70 hover:text-white";

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <button
              type="button"
              onClick={() => navigate("/")}
              data-testid="seal-back-to-palmer"
              className={`hidden md:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${backBtn}`}
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Palmer HVAC
            </button>
            <span className={`hidden md:block h-6 w-px ${scrolled ? "bg-stone-200" : "bg-white/15"}`} />
            <Link to="/seal-team-insulation" data-testid="seal-nav-logo" className="flex items-center gap-3 min-w-0">
              <img
                src={SEAL_TEAM.logo}
                alt="Seal Team Insulation — spray foam insulation logo"
                className="h-12 w-12 object-contain rounded-md bg-white p-0.5"
              />
              <div className="leading-tight min-w-0">
                <div className={`font-display font-black text-base sm:text-lg tracking-tight uppercase truncate ${textBrand}`}>
                  Seal Team Insulation
                </div>
                <div className={`text-[10px] uppercase tracking-[0.22em] font-bold ${textSub}`}>
                  Spray Foam · NW Arkansas
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={`seal-nav-${item.id}`}
                className={`text-sm font-semibold transition-colors ${navLink}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SEAL_TEAM.phoneTel}`}
              data-testid="seal-nav-phone"
              className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-bold text-sm uppercase tracking-wider transition-all active:scale-95 ${phoneCta}`}
            >
              <Phone className="h-4 w-4" />
              {SEAL_TEAM.phoneDisplay}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            data-testid="seal-mobile-toggle"
            aria-label="Toggle menu"
            className={`lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md ${iconBtn}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-5 fade-up">
            <div className={`flex flex-col gap-1 pt-2 border-t ${scrolled ? "border-stone-200" : "border-white/10"}`}>
              <button
                type="button"
                onClick={() => { setOpen(false); navigate("/"); }}
                className={`text-left px-3 py-3 rounded-md text-sm font-bold uppercase tracking-wider ${scrolled ? "text-stone-700" : "text-white/80"}`}
              >
                ← Back to Palmer HVAC
              </button>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={close}
                  className={`px-3 py-3 rounded-md text-base font-semibold ${
                    scrolled ? "text-stone-800 hover:bg-stone-100" : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${SEAL_TEAM.phoneTel}`}
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-amber-300 text-stone-900 px-5 py-3 font-bold uppercase tracking-wider"
              >
                <Phone className="h-4 w-4" /> Call {SEAL_TEAM.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

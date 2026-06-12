import { useEffect, useState } from "react";
import { Menu, Phone, X, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import { NAV } from "@/constants/testIds";

const navItems = [
  { id: "home", label: "Home", testId: NAV.home },
  { id: "services", label: "Services", testId: NAV.services },
  { id: "service-areas", label: "Service Areas", testId: NAV.serviceAreas },
  { id: "about", label: "About", testId: NAV.about },
  { id: "gallery", label: "Gallery", testId: "nav-gallery" },
  { id: "reviews", label: "Reviews", testId: NAV.reviews },
  { id: "contact", label: "Contact", testId: NAV.contact },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  // Theme-aware classes
  const headerBg = scrolled
    ? "bg-white shadow-md border-b border-slate-200"
    : "bg-[hsl(208_79%_14%)]";
  const brandTextMain = scrolled ? "text-slate-900" : "text-white";
  const brandTextSub = scrolled ? "text-[hsl(16_100%_50%)]" : "text-orange-300/90";
  const navLink = scrolled
    ? "text-slate-700 hover:text-[hsl(208_79%_28%)]"
    : "text-white/85 hover:text-white";
  const mobileIcon = scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10";
  const logoFilter = scrolled
    ? "brightness(0)"
    : "brightness(0) invert(1)";
  const phoneCta = scrolled
    ? "bg-[hsl(208_79%_28%)] hover:bg-[hsl(208_79%_22%)] text-white shadow-md"
    : "bg-[hsl(16_100%_56%)] hover:bg-[hsl(16_100%_50%)] text-white shadow-lg shadow-orange-900/20";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" data-testid={NAV.logo} className="flex items-center gap-3 group">
            <img
              src={SITE.logoIcon}
              alt="Palmer HVAC palm tree logo"
              className="h-11 w-11 object-contain transition-[filter] duration-300"
              style={{ filter: logoFilter }}
            />
            <div className="leading-tight">
              <div className={`font-display font-extrabold text-lg tracking-tight transition-colors ${brandTextMain}`}>
                PALMER HVAC
              </div>
              <div className={`text-[10px] uppercase tracking-[0.18em] font-semibold transition-colors ${brandTextSub}`}>
                NW Arkansas
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={item.testId}
                className={`text-sm font-semibold transition-colors ${navLink}`}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/seal-team-insulation"
              data-testid="nav-spray-foam"
              className={`inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                scrolled ? "text-[#1e3a8a] hover:text-stone-900" : "text-amber-200 hover:text-amber-100"
              }`}
            >
              <Snowflake className="h-3.5 w-3.5" /> Spray Foam
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              data-testid={NAV.phoneCta}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold text-sm transition-all active:scale-95 ${phoneCta}`}
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md transition-colors ${mobileIcon}`}
            data-testid={NAV.mobileToggle}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-5 fade-up">
            <div className={`flex flex-col gap-1 pt-2 border-t ${scrolled ? "border-slate-200" : "border-white/10"}`}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={close}
                  data-testid={`m-${item.testId}`}
                  className={`px-3 py-3 rounded-md text-base font-semibold ${
                    scrolled ? "text-slate-800 hover:bg-slate-100" : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/seal-team-insulation"
                onClick={close}
                data-testid="m-nav-spray-foam"
                className={`px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider ${
                  scrolled ? "text-[#1e3a8a] hover:bg-stone-100" : "text-amber-200 hover:bg-white/5"
                }`}
              >
                Spray Foam Insulation →
              </Link>
              <a
                href={`tel:${SITE.phoneTel}`}
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(16_100%_56%)] text-white px-5 py-3 font-bold"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

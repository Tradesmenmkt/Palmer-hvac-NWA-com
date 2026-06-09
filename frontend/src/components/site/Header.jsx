import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-[hsl(208_79%_18%)]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(208_79%_18%)]/85"
          : "bg-[hsl(208_79%_18%)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" data-testid={NAV.logo} className="flex items-center gap-3 group">
            <img
              src={SITE.logoIcon}
              alt="Palmer HVAC palm tree logo"
              className="h-11 w-11 object-contain"
              style={{ filter: "invert(1) brightness(2)" }}
            />
            <div className="leading-tight">
              <div className="text-white font-display font-extrabold text-lg tracking-tight">
                PALMER HVAC
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-orange-300/90 font-semibold">
                NW Arkansas
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={item.testId}
                className="text-sm font-semibold text-white/85 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              data-testid={NAV.phoneCta}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(16_100%_56%)] hover:bg-[hsl(16_100%_50%)] text-white px-5 py-2.5 font-bold text-sm transition-all active:scale-95 shadow-lg shadow-orange-900/20"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md text-white hover:bg-white/10"
            data-testid={NAV.mobileToggle}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-5 fade-up">
            <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={close}
                  data-testid={`m-${item.testId}`}
                  className="px-3 py-3 rounded-md text-white/90 hover:bg-white/5 text-base font-semibold"
                >
                  {item.label}
                </a>
              ))}
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

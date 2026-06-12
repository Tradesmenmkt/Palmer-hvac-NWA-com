import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

/**
 * Small floating cross-promo button that slides in after scrolling.
 * Dismiss state persisted to sessionStorage per `storageKey`.
 *
 * Props:
 *  - to: route to navigate to
 *  - eyebrow: small uppercase label (e.g. "Sister Company")
 *  - title: bold line (e.g. "Spray Foam Insulation")
 *  - storageKey: sessionStorage key to remember dismissal
 *  - theme: "dark" (navy/amber) or "blue" (palmer blue/orange)
 *  - testId: data-testid root
 */
export default function FloatingPromo({
  to,
  eyebrow,
  title,
  storageKey,
  theme = "dark",
  testId = "floating-promo",
  logoSrc,
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey) === "1") {
        setDismissed(true);
        return;
      }
    } catch (_) {}
    // Show immediately on page load, with a small delay so the slide-in animation plays.
    const t = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(t);
  }, [storageKey]);

  if (dismissed) return null;

  const palette =
    theme === "blue"
      ? {
          card: "bg-white ring-1 ring-slate-200 shadow-2xl shadow-slate-900/15",
          eyebrow: "text-[hsl(16_100%_50%)]",
          title: "text-slate-900",
          cta: "bg-[hsl(208_79%_28%)] hover:bg-[hsl(208_79%_22%)] text-white",
          close: "text-slate-400 hover:text-slate-700 hover:bg-slate-100",
          logoBg: "bg-[hsl(208_79%_18%)]",
        }
      : {
          card: "bg-[#0b1220] ring-1 ring-white/10 shadow-2xl shadow-black/30",
          eyebrow: "text-amber-300",
          title: "text-white",
          cta: "bg-amber-300 hover:bg-amber-200 text-stone-900",
          close: "text-white/50 hover:text-white hover:bg-white/10",
          logoBg: "bg-white",
        };

  const dismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch (_) {}
    setDismissed(true);
  };

  return (
    <div
      data-testid={testId}
      aria-live="polite"
      className={`fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        to={to}
        data-testid={`${testId}-link`}
        className={`group flex items-center gap-3 rounded-full pl-2 pr-4 py-2 max-w-[20rem] ${palette.card}`}
      >
        {logoSrc ? (
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full overflow-hidden ${palette.logoBg}`}>
            <img
              src={logoSrc}
              alt=""
              className="h-9 w-9 object-contain"
              loading="lazy"
              decoding="async"
            />
          </span>
        ) : (
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${palette.cta}`}>
            <ArrowRight className="h-5 w-5" />
          </span>
        )}
        <span className="min-w-0 leading-tight">
          <span className={`block text-[10px] font-bold uppercase tracking-[0.18em] ${palette.eyebrow}`}>
            {eyebrow}
          </span>
          <span className={`block text-sm font-extrabold truncate ${palette.title}`}>
            {title}
          </span>
        </span>
        <span className={`hidden sm:inline-flex items-center gap-1 ml-1 text-[11px] font-bold uppercase tracking-wider transition-colors ${
          theme === "blue" ? "text-[hsl(208_79%_28%)] group-hover:text-[hsl(16_100%_50%)]" : "text-amber-300 group-hover:text-amber-200"
        }`}>
          Visit
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
        <button
          type="button"
          onClick={dismiss}
          data-testid={`${testId}-dismiss`}
          aria-label="Dismiss"
          className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors ${palette.close}`}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </Link>
    </div>
  );
}

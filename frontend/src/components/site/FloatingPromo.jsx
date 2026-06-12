import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Sparkles } from "lucide-react";

/**
 * Eye-catching floating cross-promo button.
 * Slides in shortly after page load, pulses for attention.
 * Dismiss state persisted to sessionStorage per `storageKey`.
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
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, [storageKey]);

  if (dismissed) return null;

  const palette =
    theme === "blue"
      ? {
          card: "bg-white ring-2 ring-[hsl(16_100%_56%)]/40",
          glow: "promo-glow-blue",
          badge: "bg-[hsl(16_100%_56%)] text-white",
          eyebrow: "text-[hsl(16_100%_50%)]",
          title: "text-slate-900",
          subtitle: "text-slate-600",
          cta: "bg-[hsl(208_79%_28%)] hover:bg-[hsl(208_79%_22%)] text-white",
          close: "text-slate-400 hover:text-slate-700 hover:bg-slate-100",
          logoBg: "bg-[hsl(208_79%_18%)]",
          sparkle: "text-[hsl(16_100%_56%)]",
        }
      : {
          card: "bg-[#0b1220] ring-2 ring-amber-300/60",
          glow: "promo-glow-amber",
          badge: "bg-amber-300 text-stone-900",
          eyebrow: "text-amber-300",
          title: "text-white",
          subtitle: "text-white/65",
          cta: "bg-amber-300 hover:bg-amber-200 text-stone-900",
          close: "text-white/50 hover:text-white hover:bg-white/10",
          logoBg: "bg-white",
          sparkle: "text-amber-300",
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
      className={`fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-[calc(100vw-2rem)] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0 promo-enter" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Floating "NEW" badge */}
      <div className={`absolute -top-3 -left-3 z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] shadow-lg ${palette.badge}`}>
        <Sparkles className={`h-3 w-3 promo-sparkle ${palette.sparkle === "text-amber-300" ? "text-stone-900" : "text-white"}`} />
        Also Available
      </div>

      <Link
        to={to}
        data-testid={`${testId}-link`}
        className={`group relative flex items-center gap-3 sm:gap-4 rounded-2xl pl-3 pr-3 py-3 w-[19rem] sm:w-[22rem] ${palette.card} ${palette.glow}`}
      >
        {/* Logo block */}
        {logoSrc ? (
          <span className={`inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl overflow-hidden shrink-0 ${palette.logoBg}`}>
            <img
              src={logoSrc}
              alt=""
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              loading="lazy"
              decoding="async"
            />
          </span>
        ) : (
          <span className={`inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl ${palette.cta}`}>
            <ArrowRight className="h-7 w-7" />
          </span>
        )}

        {/* Copy */}
        <span className="min-w-0 leading-tight flex-1">
          <span className={`block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] ${palette.eyebrow}`}>
            {eyebrow}
          </span>
          <span className={`block text-base sm:text-lg font-display font-extrabold leading-tight ${palette.title}`}>
            {title}
          </span>
          <span className={`mt-0.5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider ${
            theme === "blue" ? "text-[hsl(208_79%_28%)] group-hover:text-[hsl(16_100%_50%)]" : "text-amber-300 group-hover:text-amber-200"
          }`}>
            Visit site
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </span>

        {/* Close */}
        <button
          type="button"
          onClick={dismiss}
          data-testid={`${testId}-dismiss`}
          aria-label="Dismiss"
          className={`absolute top-1.5 right-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors ${palette.close}`}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </Link>
    </div>
  );
}

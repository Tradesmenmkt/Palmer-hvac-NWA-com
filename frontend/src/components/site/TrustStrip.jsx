import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured HVAC Contractor" },
  { icon: Clock, label: "24/7 Emergency HVAC Service" },
  { icon: Award, label: "Quality Workmanship, Guaranteed" },
  { icon: Users, label: "Locally Owned • NW Arkansas" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Why choose Palmer HVAC" className="border-y border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(208_79%_28%)]/8 text-[hsl(208_79%_28%)]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-slate-800 leading-tight">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { useState } from "react";
import axios from "axios";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SITE, SERVICES } from "@/lib/site";
import { FORM } from "@/constants/testIds";

const URGENCY_OPTIONS = [
  "Emergency – ASAP",
  "Same day",
  "Within 2-3 days",
  "Flexible / scheduling",
];
const PREF_OPTIONS = ["Phone call", "Text message", "Email"];

const initial = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  service_needed: "",
  urgency: "",
  preferred_contact: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

  const handleChange = (key) => (e) => {
    const val = e?.target?.value ?? e;
    setForm((f) => ({ ...f, [key]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service_needed || !form.urgency || !form.preferred_contact) {
      toast.error("Please complete the required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = { ...form };
      if (!payload.email) delete payload.email;
      await axios.post(`${API}/leads`, payload);
      setSuccess(true);
      setForm(initial);
      toast.success("Request received! Palmer HVAC will contact you shortly.");
    } catch (err) {
      console.error(err);
      toast.error("Could not submit. Please call us directly at " + SITE.phoneDisplay);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(16_100%_50%)]">
              Contact
            </div>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 text-balance">
              Schedule HVAC Service
            </h2>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Fill out the form and Palmer HVAC will contact you as soon as possible.
              For faster service, call us directly.
            </p>

            <a
              href={`tel:${SITE.phoneTel}`}
              data-testid={FORM.phoneCta}
              className="mt-7 inline-flex items-center gap-3 group"
            >
              <span className="phone-pulse inline-flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(16_100%_56%)] text-white">
                <Phone className="h-6 w-6" />
              </span>
              <span className="font-display font-black text-3xl sm:text-4xl text-slate-900 group-hover:text-[hsl(16_100%_50%)] transition-colors">
                {SITE.phoneDisplay}
              </span>
            </a>

            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Hours</div>
              <div className="mt-1 font-semibold text-slate-900">{SITE.hours}</div>
            </div>

            <div className="mt-5 rounded-2xl bg-[hsl(208_79%_18%)] text-white p-5">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                Service Area
              </div>
              <div className="mt-1 font-semibold">
                Siloam Springs, Bentonville, Rogers, Springdale, Fayetteville & all of NW Arkansas
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {success ? (
              <div
                data-testid={FORM.success}
                className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center"
              >
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
                <h3 className="mt-4 font-display font-black text-2xl text-slate-900">
                  Request received!
                </h3>
                <p className="mt-2 text-slate-700">
                  Thank you — a Palmer HVAC team member will reach out shortly.
                  For faster service, call <span className="font-bold">{SITE.phoneDisplay}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(208_79%_28%)] text-white px-6 py-3 font-bold text-sm"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid={FORM.root}
                className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <Field label="Name *" htmlFor={FORM.name}>
                  <Input
                    id={FORM.name}
                    data-testid={FORM.name}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange("name")}
                    required
                  />
                </Field>
                <Field label="Phone Number *" htmlFor={FORM.phone}>
                  <Input
                    id={FORM.phone}
                    data-testid={FORM.phone}
                    type="tel"
                    placeholder="(479) 555-0123"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    required
                  />
                </Field>
                <Field label="Email" htmlFor={FORM.email}>
                  <Input
                    id={FORM.email}
                    data-testid={FORM.email}
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange("email")}
                  />
                </Field>
                <Field label="Address" htmlFor={FORM.address}>
                  <Input
                    id={FORM.address}
                    data-testid={FORM.address}
                    placeholder="123 Main St"
                    value={form.address}
                    onChange={handleChange("address")}
                  />
                </Field>
                <Field label="City" htmlFor={FORM.city}>
                  <Input
                    id={FORM.city}
                    data-testid={FORM.city}
                    placeholder="Siloam Springs, Bentonville, etc."
                    value={form.city}
                    onChange={handleChange("city")}
                  />
                </Field>
                <Field label="Service Needed *" htmlFor={FORM.service}>
                  <Select value={form.service_needed} onValueChange={handleChange("service_needed")}>
                    <SelectTrigger id={FORM.service} data-testid={FORM.service}>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.title} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="Other / Not sure">Other / Not sure</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Urgency *" htmlFor={FORM.urgency}>
                  <Select value={form.urgency} onValueChange={handleChange("urgency")}>
                    <SelectTrigger id={FORM.urgency} data-testid={FORM.urgency}>
                      <SelectValue placeholder="How soon?" />
                    </SelectTrigger>
                    <SelectContent>
                      {URGENCY_OPTIONS.map((u) => (
                        <SelectItem key={u} value={u}>
                          {u}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Preferred Contact *" htmlFor={FORM.preferred}>
                  <Select value={form.preferred_contact} onValueChange={handleChange("preferred_contact")}>
                    <SelectTrigger id={FORM.preferred} data-testid={FORM.preferred}>
                      <SelectValue placeholder="How should we reach you?" />
                    </SelectTrigger>
                    <SelectContent>
                      {PREF_OPTIONS.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <div className="md:col-span-2">
                  <Field label="Message / Additional Details" htmlFor={FORM.message}>
                    <Textarea
                      id={FORM.message}
                      data-testid={FORM.message}
                      placeholder="Tell us what's going on — symptoms, equipment age, any specifics."
                      rows={5}
                      value={form.message}
                      onChange={handleChange("message")}
                    />
                  </Field>
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-2">
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted by Palmer HVAC about your request.
                  </p>
                  <button
                    type="submit"
                    data-testid={FORM.submit}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(16_100%_56%)] hover:bg-[hsl(16_100%_50%)] text-white px-8 py-3.5 font-bold text-sm transition-all active:scale-95 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : (<><Send className="h-4 w-4" /> Send Request</>)}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
        {label}
      </Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

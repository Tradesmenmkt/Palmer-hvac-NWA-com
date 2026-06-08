# Palmer HVAC — PRD

## Original Problem Statement
Build a professional, high-converting HVAC website for Palmer HVAC (NW Arkansas).
Multi-section homepage: Home, Services, Service Areas, About, Reviews, Contact form.
Lead generation focus: prominent phone CTAs (click-to-call), Schedule Service / Free Estimate buttons,
9-field lead form that saves to backend. Local SEO copy. Tradesmen Marketing footer credit.
Remove all "Made with Emergent" watermarks.

## User Choices (Dec 2025)
- Phone: 479-200-5421 (displayed as (479) 200-5421, tel: +14792005421)
- Save lead form submissions to MongoDB
- Hours: "24/7 Emergency Service Available • Mon–Sat 7am–7pm"
- Palette: Cool blue (HSL 208 79% 28%) + warm orange accent (HSL 16 100% 56%) over clean whites/grays

## Architecture
- Backend: FastAPI + Motor (Mongo). Routes: `GET /api/`, `POST /api/leads`, `GET /api/leads`
- Frontend: React (CRA + craco), Tailwind, shadcn/ui, single route `/` with anchor-scrolled sections
- Fonts: Work Sans (display), Manrope (body) — Google Fonts
- Assets: Palmer HVAC palm logo, Tradesmen "T" logo from emergent assets CDN

## What's Implemented (2025-12-08)
- Sticky header with brand, nav links (Home/Services/Service Areas/About/Reviews/Contact), large orange phone CTA, mobile menu
- Hero: dark blue + photo bg, big phone number with pulse, Schedule + Free Estimate CTAs, trust signals
- Trust strip (Licensed, 24/7, Quality, Local)
- 15 service cards (AC repair → Light commercial HVAC) with lucide icons
- Mid-page call banner (phone CTA repeat)
- Service Areas: 16 NW Arkansas cities + SEO keyword chips
- About section with technician photo
- Reviews (4 placeholder testimonials, easy to replace)
- Contact form (9 fields, saves to `/api/leads`, success state)
- Footer with logo, phone, quick links, services, areas, Tradesmen credit, copyright
- SEO: page title, meta description, keywords, OG tags, JSON-LD HVACBusiness schema
- Removed Emergent watermark and PostHog analytics from index.html

## Verified
- Backend: 6/6 tests pass (validations, persistence, list order)
- Frontend: end-to-end form submission saves lead and shows success state
- Mobile menu toggle works
- Footer credit line exact match

## Backlog (P1)
- Replace placeholder reviews with real customer testimonials
- Add real hero/about photography of actual Palmer HVAC technicians
- Add Google Business Profile link + map embed
- Reviews schema markup (AggregateRating)
- Twilio/SendGrid notification when a new lead arrives (so phone rings/email fires)
- Lead admin dashboard at `/admin` (auth + CSV export)
- Service-specific landing pages for top SEO terms (e.g., `/ac-repair-bentonville`)
- A/B test phone CTA copy and color

## Backlog (P2)
- Blog / resources for HVAC SEO
- Financing CTA section
- Maintenance plan signup
- Live chat / SMS widget

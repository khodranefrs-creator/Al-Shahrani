# AUDIT.md — Existing Site Analysis

**Site audited:** https://lawmoh09.my.canva.site/  
**Date:** 2025-07-15  
**Platform:** Canva Website Builder (hosted on `my.canva.site`)

---

## Current State (Confirmed Facts)

### Architecture

- Single-page Canva microsite: one long scroll, 6 sections, no routing, no distinct pages
- No blog, no admin, no contact form — contact is exposed only as raw WhatsApp/tel/email links
- No CMS — any copy change requires manually editing the Canva site
- No sitemap, no robots.txt, no structured data, no SEO infrastructure beyond a single generic description

### Content Structure (6 Sections, in Order)

| # | Section | Content |
|---|---------|---------|
| 1 | Hero/Landing | Logo, firm name (AR/EN), tagline "الثقة اساس العمل" |
| 2 | About Us | Introduction, Vision, Mission — Arabic with inline English translation |
| 3 | Services Overview | Service categories list, delivery method description |
| 4 | Detailed Services | 6 service descriptions (litigation, debt collection, documentation, consultations, companies, labor) |
| 5 | Additional Services | Continuation of service details |
| 6 | Contact | Phone numbers, email, social handle, office address, Google Maps link |

### Content Observations

- Arabic and English are mixed inline as stacked paragraph translations — not a true bilingual/RTL-LTR architecture
- The Arabic copy is substantive and well-written: vision, mission, and service descriptions demonstrate genuine legal expertise
- The English translations are literal and awkward (e.g., "faith after the Lord of the Worlds" for a closing phrase) — need professional adaptation, not machine translation
- No visual hierarchy system: headings, body copy, and section breaks rely on plain stacked text blocks

### Imagery

- All generic stock photography: "Law" (hero), "Female Lawyer looking at her Client," "Person Signing a Contract"
- No brand identity, no real team photography, no wordmark/logo system
- Repeated decorative images used as spacers
- No original art direction

### Contact Information (Verified)

| Field | Value |
|-------|-------|
| Phone 1 | 0555745209 |
| Phone 2 | 0502446030 |
| WhatsApp | +966555745209 (wa.me/966555745209) |
| WhatsApp Business | wa.me/message/ZYCIF6ODALF5B1 |
| Email | lowmohsh09@gmail.com |
| Social | @lawyershmoh (text only, not linked to any platform) |
| Google Maps | maps.app.goo.gl/mQ95bx8SeDhEnMkG6 |
| Address (AR) | خميس مشيط حي حسام طريق المحالة مقابل المستشفى بعد العثيم مكتب رقم 5 الدور الارضي |
| Address (EN) | Khamis Mushait, Al-Hussam District, Al-Mahala Road, opposite the hospital after Al-Othaim, Office No. 5, Ground Floor |

### SEO & Technical

- HTML lang set to `en` despite Arabic-first content
- Title: Arabic firm name only
- Meta description: single generic Arabic description
- OG image: 1200x630 social sharing image present
- No structured data (JSON-LD)
- No hreflang tags
- No per-service indexable pages
- No local SEO signals for Khamis Mushait / Aseer region
- reCAPTCHA key exposed in page source (site key only, not a vulnerability)
- 29 woff2 font files loaded (Canva-managed, not controllable)
- Responsive breakpoints at 375px, 480px, 768px, 1024px
- CSS animations: drift (hero text), pulse (hero image) — minimal, acceptable

### Lead Capture

- No contact form — every prospective client is pushed off-site to WhatsApp
- No qualification step (service type, urgency, case category)
- No lead magnet or content offer
- No email capture mechanism

---

## Opportunities for Rebuild

1. **Information Architecture:** Establish indexable, individually-optimized service pages (huge SEO advantage over a single scroll page)
2. **Bilingual System:** True RTL Arabic + LTR English experiences with proper routing (`/ar`, `/en`), not stacked translation blocks
3. **Lead Funnel:** Structured consultation request form with service-type selection replacing raw WhatsApp links (while offering WhatsApp as a fast channel)
4. **Brand Identity:** Replace generic stock imagery with an original, restrained art-direction system — typography-led, gold/navy accents, custom iconography
5. **Content Management:** CMS-backed blog ("Legal Insights") for topical authority and long-term organic traffic
6. **Local SEO + Schema:** LegalService/Attorney schema markup, local SEO signals for Khamis Mushait and Aseer region
7. **Performance:** Modern framework (Next.js) with server components, image optimization, proper font loading strategy

---

## What to Preserve (Content, Not Design)

> **Do not visually copy the old design.** Only carry forward the verified factual content:

- **Vision:** The office aspires to be the nucleus of a Saudi firm built on honesty, integrity, and a scientific approach — expanding across the Kingdom while offering a specialized legal ecosystem for commercial, corporate, and institutional law.
- **Mission:** To represent the legal affairs of companies, commercial institutions, business leaders, and public figures through continuous legal support, consultation, contract drafting, and management.
- **Practice areas:** Criminal, civil/rights-based, administrative, commercial and corporate, property, personal status and inheritance, labor, and medical cases
- **Service descriptions:** All 6 service blocks (litigation, debt collection, documentation, consultations, companies, labor)
- **Contact details:** All verified above
- **Tagline:** "الثقة اساس العمل" (Trust is the foundation of work)

---

## Technical Baseline

| Aspect | Current State | Target State |
|--------|---------------|--------------|
| Platform | Canva hosted microsite | Next.js App Router (self-hosted) |
| Routing | None (single scroll) | `/ar/*` and `/en/*` route trees |
| CMS | None (manual Canva edits) | Admin dashboard with CRUD for services, blog, testimonials |
| SEO | Single meta description | Per-page title/meta/schema/sitemap/hreflang |
| Forms | None | Consultation request form with validation |
| Database | None | PostgreSQL via Prisma/Drizzle |
| Auth | None | Admin authentication for dashboard |
| Performance | Canva-managed (uncontrollable) | Core Web Vitals targets |
| Accessibility | Not addressed | WCAG 2.1 AA compliance |

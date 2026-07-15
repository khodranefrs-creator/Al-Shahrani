# ARCHITECTURE.md — Al-Shahrani Law Firm Platform

## Overview

Production-grade, bilingual (Arabic RTL / English LTR) legal corporate platform built with Next.js App Router, TypeScript, Prisma + PostgreSQL, and next-intl.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 with custom design tokens |
| ORM | Prisma 5 with PostgreSQL |
| i18n | next-intl (server-side locale routing) |
| Icons | Lucide React |
| Forms | Native React + Zod validation |
| Auth | Custom HMAC-signed cookies |

---

## Directory Structure

```
src/
├── app/
│   ├── [locale]/              # Bilingual route tree (/ar, /en)
│   │   ├── layout.tsx         # Locale-aware root layout (RTL/LTR)
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── services/          # Services index + [slug] detail pages
│   │   ├── blog/              # Blog index + [slug] article pages
│   │   └── contact/           # Contact + consultation form
│   ├── admin/                 # Admin dashboard (protected)
│   │   ├── layout.tsx         # Auth-gated admin layout
│   │   ├── page.tsx           # Dashboard overview
│   │   ├── services/          # Service management
│   │   ├── blog/              # Blog management
│   │   ├── consultations/     # Consultation inbox
│   │   ├── testimonials/      # Testimonial management
│   │   └── login/             # Admin login
│   ├── api/                   # API routes
│   │   ├── auth/              # Authentication
│   │   ├── consultation/      # Consultation form submissions
│   │   ├── services/          # Services CRUD
│   │   └── blog/              # Blog CRUD
│   ├── sitemap.ts             # Dynamic sitemap generation
│   ├── robots.ts              # Dynamic robots.txt
│   └── globals.css            # Design system + Tailwind config
├── components/
│   ├── ui/                    # Reusable primitives (Button, Card, Badge, SectionHeading)
│   ├── layout/                # Header, Footer
│   ├── home/                  # Home page sections (Hero, WhyUs, PracticeAreas, etc.)
│   ├── forms/                 # ConsultationForm
│   └── admin/                 # Admin-specific components
├── lib/
│   ├── db.ts                  # Prisma client singleton
│   ├── auth.ts                # Authentication utilities
│   ├── utils.ts               # cn(), formatDate, getWhatsAppUrl, etc.
│   ├── validations.ts         # Zod schemas for all forms
│   ├── seo.ts                 # JSON-LD structured data generators
│   └── metadata.ts            # OpenGraph + meta tag helpers
├── i18n/
│   ├── request.ts             # next-intl server config
│   ├── routing.ts             # Locale routing definition
│   ├── navigation.ts          # Locale-aware Link, redirect, useRouter
│   └── messages/              # ar.json, en.json translation files
├── types/
│   └── index.ts               # Locale types, siteConfig, firm data
└── data/
    └── seed.ts                # Database seed script
```

---

## Routing

- **Public pages**: `/[locale]/*` — Arabic (`/ar`) is default, English (`/en`) is alternate
- **Admin pages**: `/admin/*` — Not under locale prefix, always LTR, auth-protected
- **API routes**: `/api/*` — Excluded from locale middleware

Middleware (`middleware.ts`) uses `next-intl/middleware` to:
1. Detect locale from URL prefix
2. Redirect locale-less requests to `/ar` (default)
3. Exclude `/api`, `/admin`, `/_next` from locale handling

---

## Database Schema (Prisma)

### Models

| Model | Purpose |
|-------|---------|
| `Service` | Practice area pages with bilingual content |
| `BlogPost` | Legal insights articles |
| `Testimonial` | Client testimonials |
| `TeamMember` | Firm team profiles |
| `ConsultationRequest` | Form submissions from contact page |
| `AdminUser` | Admin authentication |

### Key Design Decisions

- All content models support `locale` field for bilingual content
- `slug` + `locale` is a unique compound index (same slug, different locale = separate records)
- `isPublished` flag for draft/publish workflow
- `isFeatured` for homepage highlighting
- `metaTitle` / `metaDesc` per-page SEO fields
- `faqs` as JSON field on Services for expandable FAQ sections
- `sortOrder` for manual ordering control
- `createdAt` / `updatedAt` timestamps on all models

---

## Design System

### Color Palette (Tailwind custom tokens)

- **Navy** (primary): `navy-50` through `navy-950` — authority, trust
- **Gold** (accent): `gold-50` through `gold-900` — used sparingly for CTAs, dividers, icons
- **Warm** (neutrals): `warm-50` through `warm-300` — backgrounds, borders

### Typography

- **Arabic headings**: Noto Naskh Arabic (serif, Google Fonts)
- **English headings**: Inter (sans-serif, variable weight)
- **Body**: IBM Plex Sans Arabic / Inter
- **Font stack**: Configured via CSS custom properties `--font-noto-naskh`, `--font-inter`

### Component Library

| Component | Type | Purpose |
|-----------|------|---------|
| `Button` | Client | 5 variants (primary, secondary, outline, ghost, gold), 3 sizes |
| `Card` | Server | Container with border, padding, optional hover |
| `Badge` | Server | Status/label badges |
| `SectionHeading` | Server | Section title + subtitle with gold divider |

---

## i18n Strategy

- Arabic is the primary experience (default locale)
- English is an adaptation for investors/international clients, not machine translation
- All translations stored in `src/i18n/messages/{ar,en}.json`
- Server components use `getTranslations()` (async)
- Client components use `useTranslations()` (hook)
- RTL layout via `dir="rtl"` on `<html>` element for Arabic

---

## SEO Infrastructure

- **Per-page metadata**: Unique title, description, OG tags per locale
- **Structured data**: JSON-LD for Attorney, Service, and Article schemas
- **Sitemap**: Dynamic `sitemap.ts` generating entries for all public routes
- **Robots.txt**: Dynamic with `/admin` and `/api` disallowed
- **Hreflang**: Alternates between `/ar` and `/en` versions
- **Local SEO**: NAP consistency, Khamis Mushait / Aseer region signals

---

## Admin Dashboard

- Protected by HMAC-signed session cookie
- Login at `/admin/login`
- CRUD for: Services, Blog Posts, Testimonials, Consultation Requests
- All admin routes marked `dynamic = 'force-dynamic'` (no static generation)

---

## Environment Variables

See `.env.example` for all required variables:
- `DATABASE_URL` — PostgreSQL connection string
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_NAME` — Seed admin credentials
- `NEXT_PUBLIC_SITE_URL` — Canonical site URL
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp click-to-chat number

---

## Build & Development

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint

# Database
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema to database
npx tsx src/data/seed.ts   # Seed database
```

---

## Performance Targets

- All public pages are statically generated (SSG) at build time
- Admin pages are server-rendered on demand (dynamic)
- Images optimized via Next.js Image component with AVIF/WebP
- Font loading with `display: swap` for CLS prevention
- Tailwind CSS purging for minimal CSS bundle

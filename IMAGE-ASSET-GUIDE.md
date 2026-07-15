# IMAGE ASSET GUIDE — مكتب المحامي محمد حمود الشهراني

**Purpose:** This document lists every photograph required to complete the website's visual identity. All image paths are already wired into the codebase. Replace placeholder files with real photography.

---

## Quick Reference

| Priority | Count | Impact on Score |
|---|---|---|
| P0 — Must Have | 4 images | +1.5 → 9.0/10 |
| P1 — Should Have | 5 images | +0.5 → 9.5/10 |
| P2 — Nice to Have | 13 images | +0.5 → 10/10 |

---

## P0 — MUST HAVE (4 images)

These 4 images transform the site from "template" to "premium brand."

### 1. Hero Background — `law-firm-office.jpg`

- **Path:** `public/images/hero/law-firm-office.jpg`
- **Dimensions:** 1920 x 1080px minimum (16:9)
- **Used in:** Homepage hero background, Services index hero background
- **Display:** Full-bleed behind dark overlay (80% navy opacity)
- **Style direction:** Professional exterior shot of the office building OR Khamis Mushait cityscape. Golden hour lighting preferred. The image will be heavily darkened — composition and color temperature matter more than detail.
- **Alt text (AR):** "مبنى مكتب الشهراني للمحاماة والاستشارات القانونية في خميس مشيط"
- **Alt text (EN):** "Al-Shahrani Law Firm office building in Khamis Mushait"

### 2. Founder Portrait — `founder.jpg`

- **Path:** `public/images/team/founder.jpg`
- **Dimensions:** 800 x 1067px (3:4 portrait)
- **Used in:** About page — "Who We Are" section, displayed as a portrait card
- **Display:** 3/4 aspect ratio, object-position: top (face-focused), rounded-2xl with shadow
- **Style direction:** Professional headshot or half-body portrait. Business formal attire (thobe + bisht or suit). Neutral background. Confident, approachable expression. Studio lighting or soft natural light.
- **Alt text (AR):** "المحامي محمد حمود الشهراني، مؤسس المكتب"
- **Alt text (EN):** "Attorney Mohammed Hamad Al-Shahrani, Firm Founder"

### 3. Reception/Office — `reception.jpg`

- **Path:** `public/images/office/reception.jpg`
- **Dimensions:** 1920 x 823px (21:9 ultrawide)
- **Used in:** About page hero background (15% opacity), Contact page hero card
- **Display:** Full-width with dark overlay (hero) or rounded-2xl shadow card (contact)
- **Style direction:** Clean, modern office interior. Reception area or main lobby. Warm lighting. No people (or minimal, blurred). The image should communicate institutional quality and professionalism.
- **Alt text (AR):** "مكتب الاستقبال في مكتب الشهراني للمحاماة"
- **Alt text (EN):** "Reception area at Al-Shahrani Law Firm"

### 4. Corporate Meeting — `corporate-law.jpg`

- **Path:** `public/images/services/corporate-law.jpg`
- **Dimensions:** 800 x 600px (4:3)
- **Used in:** Homepage CorporateSpotlight section — replaces the SVG illustration
- **Display:** 4:3 aspect ratio, rounded-2xl with shadow, gold border accents
- **Style direction:** Professional meeting setting. Lawyers in discussion around a conference table. Documents visible. Warm, institutional lighting. No identifiable third-party logos or faces (or get model releases).
- **Alt text (AR):** "اجتماع قانوني مؤسسي في مكتب الشهراني"
- **Alt text (EN):** "Corporate legal meeting at Al-Shahrani Law Firm"

---

## P1 — SHOULD HAVE (5 images)

These add depth and authenticity to inner pages.

### 5. Team Meeting — `team-meeting.jpg`

- **Path:** `public/images/office/team-meeting.jpg`
- **Dimensions:** 1920 x 640px (3:1)
- **Used in:** About page — full-width team section between Mission and Values
- **Display:** Full-width banner with 60% navy overlay and centered white text
- **Style direction:** Group of lawyers in a professional setting. Collaboration, discussion. Could be around a table or in a standing meeting. Diverse team. Professional attire.
- **Alt text (AR):** "فريق مكتب الشهراني للمحاماة في اجتماع عمل"
- **Alt text (EN):** "Al-Shahrani Law Firm team in a work meeting"

### 6-9. Service Detail Hero Images

Each service page has a background image at 15% opacity in the hero section.

| File | Dimensions | Alt (AR) | Alt (EN) |
|---|---|---|---|
| `public/images/services/governance.jpg` | 1920x1080 | حوكمة مؤسسية - وثائق رسمية | Corporate governance - official documents |
| `public/images/services/contracts.jpg` | 1920x1080 | عقود قانونية - توقيع مستندات | Legal contracts - document signing |
| `public/images/services/ma.jpg` | 1920x1080 | اندماج واستحواذ - صفقة مؤسسية | Mergers and acquisitions - corporate deal |
| `public/images/services/litigation.jpg` | 1920x1080 | تقاضي ومنازعات - قاعة المحكمة | Litigation and disputes - courtroom |

**Style direction for all service images:**
- Professional, institutional photography
- Warm color temperature to match navy+gold palette
- Abstract or metaphorical (documents, scales, handshakes) preferred over literal
- Will be displayed at 15% opacity — color and composition matter more than detail

---

## P2 — NICE TO HAVE (13 images)

### Remaining Service Hero Images

| File | Alt (AR) | Alt (EN) |
|---|---|---|
| `public/images/services/debt-collection.jpg` | تحصيل الديون - معاملات مالية | Debt collection - financial transactions |
| `public/images/services/notarization.jpg` | توثيق قانوني - مستندات رسمية | Legal notarization - official documents |
| `public/images/services/labor.jpg` | قانون العمل - علاقات عمالية | Labor law - employment relations |
| `public/images/services/personal-status.jpg` | أحوال شخصية - ترات وإرث | Personal status - estate and inheritance |
| `public/images/services/property.jpg` | قانون العقارات - ممتلكات وعقارات | Property law - real estate |
| `public/images/services/medical.jpg` | قضايا طبية - استشارات قانونية | Medical cases - legal consultation |

### Blog Article Images

Each blog article displays a header image (21:9 ultrawide) and thumbnail (16:9).

| File | Alt (AR) | Alt (EN) |
|---|---|---|
| `public/images/blog/corporate-governance-saudi.jpg` | صورة مقال حوكمة الشركات | Image for corporate governance article |
| `public/images/blog/labor-rights-2026.jpg` | صورة مقال حقوق العمال | Image for worker rights article |
| `public/images/blog/medical-liability.jpg` | صورة مقال المسؤولية الطبية | Image for medical liability article |
| `public/images/blog/real-estate-disputes.jpg` | صورة مقال النزاعات العقارية | Image for real estate disputes article |
| `public/images/blog/latest-amendments-saudi-company-law.jpg` | صورة مقال التعديلات على نظام الشركات | Image for company law amendments |
| `public/images/blog/corporate-governance-startups.jpg` | صورة مقال الحوكمة للشركات الناشئة | Image for governance for startups |
| `public/images/blog/guide-commercial-compliance-contracts.jpg` | صورة مقال عقود الامتثال التجاري | Image for compliance contracts guide |

**Style direction for blog images:**
- Professional, editorial feel
- Abstract legal/business imagery (documents, gavels, handshakes, cityscapes)
- Should work as both header (21:9) and thumbnail (16:9) crops

---

## Photography Style Guide

### Color Temperature
- **Warm tones** (golden hour, warm interior lighting) — matches navy+gold palette
- Avoid cool/blue tones — they clash with the site's warm gold accents

### Composition
- **Clean backgrounds** — no cluttered desks or busy scenes
- **Institutional feel** — this is a law firm, not a startup
- **Space for text overlay** — many images display with dark overlays; leave compositional space

### People
- **Professional attire** — thobe + bisht (traditional Saudi formal) or business suit
- **Confident, approachable** — not overly casual, not intimidating
- **Diverse team** — reflect the actual team composition
- **Model releases** — required for any identifiable individuals

### Technical
- **Minimum resolution:** 1920px on longest side for full-bleed images
- **Format:** JPEG preferred (WebP/AVIF generated automatically by Next.js)
- **Quality:** Shoot RAW, export high-quality JPEG (85-95% quality)
- **No watermarks** — the site provides its own branding

### What NOT to Use
- Stock photos with visible watermarks
- AI-generated images (will look inconsistent with real photography)
- Low-resolution images stretched to fill containers
- Images with text or logos from other brands
- Overly saturated or HDR-processed images

---

## How to Replace Placeholders

1. Copy the real photograph to the exact path listed above (overwrite the placeholder)
2. Ensure the image meets the minimum dimensions
3. Run `npm run build` to verify no errors
4. The image will automatically appear on the site with proper styling, overlays, and responsive behavior

### Example Workflow

```bash
# Copy real photo to replace placeholder
cp /path/to/real-photo.jpg public/images/hero/law-firm-office.jpg

# Verify build
npm run build
```

---

## Image Component Architecture

### Files Created

| File | Purpose |
|---|---|
| `src/components/ui/ImageAsset.tsx` | Reusable image wrapper with overlay options |
| `public/images/hero/` | Hero background images |
| `public/images/office/` | Office interior/exterior photos |
| `public/images/team/` | Team and founder portraits |
| `public/images/services/` | Service-specific hero images |
| `public/images/blog/` | Blog article header and thumbnail images |

### How Images Are Used

| Component | Image Usage | Overlay |
|---|---|---|
| Hero | Background fill, priority loading | 80% navy dark + gradient |
| CorporateSpotlight | 4:3 card, fill + object-cover | Subtle gradient overlay |
| About page hero | Background fill at 15% opacity | Navy gradient |
| About founder | 3:4 portrait card | Gradient bottom |
| About team | Full-width banner | 60% navy overlay |
| Contact hero | 21:9 ultrawide card | Gradient overlay |
| Service detail hero | Background fill at 15% opacity | Navy gradient |
| Services index hero | Background fill at 15% opacity | Navy gradient |
| BlogSection cards | 16:9 thumbnail | None (clean) |
| Blog index cards | 16:9 thumbnail | None (clean) |
| Blog article header | 21:9 ultrawide | None (clean) |

### Technical Notes

- All images use `next/image` with automatic WebP/AVIF conversion
- `fill` prop used for responsive containers, fixed `width`/`height` for card images
- `priority` loading only on Hero image (LCP element)
- `sizes` attribute optimized per layout context
- Placeholder images are minimal 1x1 PNG files — replace with real JPEGs

---

## Checklist Before Launch

- [ ] Replace all P0 images (4 files)
- [ ] Replace all P1 images (5 files)
- [ ] Replace all P2 images (13 files)
- [ ] Verify all alt text matches the actual photo content
- [ ] Run `npm run build` — should pass with 0 errors
- [ ] Test on mobile — images should load fast and look sharp
- [ ] Check RTL rendering — images should not break layout
- [ ] Verify lazy loading — non-hero images should load on scroll

---

*Generated by image asset preparation pass — July 15, 2026*

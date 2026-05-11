---
name: Nexora Labs
description: A bright cinematic brand system for a digital product and growth studio serving trust-critical businesses.
colors:
  ink: "oklch(15% 0.035 246)"
  ink-soft: "oklch(21% 0.030 246)"
  text: "oklch(19% 0.026 246)"
  text-muted: "oklch(45% 0.025 246)"
  text-inverse: "oklch(96% 0.011 246)"
  film-mist: "oklch(95% 0.012 246)"
  film-haze: "oklch(88% 0.032 232)"
  surface: "oklch(98% 0.008 246)"
  surface-quiet: "oklch(92% 0.022 236)"
  portal-black: "oklch(9% 0.025 246)"
  warm-glint: "oklch(73% 0.095 82)"
  copper: "oklch(64% 0.110 48)"
  care-teal: "oklch(62% 0.085 186)"
  hospitality-gold: "oklch(76% 0.105 88)"
  trade-clay: "oklch(58% 0.095 42)"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(4rem, 2.5rem + 7vw, 9.25rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(3rem, 1.85rem + 4.8vw, 6.2rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0"
  title:
    fontFamily: "Onest, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.12rem, 1.04rem + 0.3vw, 1.3rem)"
    fontWeight: 650
    lineHeight: 1.1
  body:
    fontFamily: "Onest, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.58
  label:
    fontFamily: "Onest, system-ui, -apple-system, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "0"
rounded:
  sm: "8px"
  md: "14px"
  lg: "24px"
  portal: "999px 999px 22px 22px"
  pill: "9999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "72px"
  4xl: "112px"
  5xl: "160px"
components:
  primary-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
  secondary-cta:
    backgroundColor: "oklch(from {colors.surface} L C H / 0.72)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
  portal:
    backgroundColor: "{colors.portal-black}"
    rounded: "{rounded.portal}"
  proof-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  section-band:
    backgroundColor: "{colors.film-mist}"
    rounded: "0"
  inquiry-form:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
---

# Design System: Nexora Labs

## 1. Creative North Star

**Pale Film Portal**

Nexora should feel bright, cinematic, premium, and controlled. The first screen uses a pale blue-gray film wash, a large cinematic serif headline, and a lower-right portal or video tunnel. The portal suggests crossing from scattered digital presence into a clear business system people can trust.

The brand is not a generic website shop and not a software dashboard startup. It is a digital product and growth studio for trust-critical businesses: cafes, restaurants, hotels, schools, hospitals, clinics, import/export businesses, suppliers, and adjacent operators with real customer journeys.

The interface should feel calm enough for hospital and school buyers, polished enough for hotels and restaurants, and rigorous enough for B2B trade clients. It can be cinematic, but the page must stay concrete. Atmosphere earns attention; proof earns belief.

The visual hierarchy is:

- A bright cinematic hero with the portal as the signature object.
- A business-specific problem section that names trust, discovery, clarity, and operations.
- A client-category section that maps industries to the actions their visitors need to take.
- A services section that shows connected capabilities, not a loose menu.
- A proof and process section that explains how Nexora turns unclear presence into handled systems.
- A compact team section that makes the studio feel real and accountable without over-explaining roles.
- A custom-scope section that explains discovery-led proposals without fixed prices.
- A direct contact section for qualified inquiries.

## 2. Color Strategy

The color strategy is **restrained cinematic with operational accents**. Most of the surface uses pale film neutrals, ink, and misted blue-gray. Warm and category accents appear as glints, tags, progress marks, or section details. They should never become a rainbow industry palette.

### Core Colors

- **Portal Black** (`oklch(9% 0.025 246)`): The lower-right tunnel, strongest text moments, deep focus states.
- **Ink** (`oklch(15% 0.035 246)`): Primary navigation, buttons, strong headings when display type is not used.
- **Ink Soft** (`oklch(21% 0.030 246)`): Secondary structural text and dark panels.
- **Film Mist** (`oklch(95% 0.012 246)`): Main hero and page canvas.
- **Film Haze** (`oklch(88% 0.032 232)`): Atmospheric panels, section transitions, portal-adjacent glow.
- **Surface** (`oklch(98% 0.008 246)`): Forms, proof panels, team surfaces, and structured content.
- **Surface Quiet** (`oklch(92% 0.022 236)`): Slightly deeper panels for process, service, and category contrast.

### Accent Colors

- **Warm Glint** (`oklch(73% 0.095 82)`): Video glow, focus detail, selected labels, short highlight strokes.
- **Copper** (`oklch(64% 0.110 48)`): Rare action accent or case-study detail.
- **Care Teal** (`oklch(62% 0.085 186)`): Small healthcare, education, or trust-system cues.
- **Hospitality Gold** (`oklch(76% 0.105 88)`): Small food, hotel, and venue cues.
- **Trade Clay** (`oklch(58% 0.095 42)`): Small B2B trade, supply, logistics, and catalog cues.

### Rules

- Do not let warm accents become the main palette.
- Do not use pure black or pure white.
- Do not use gradient text.
- Do not use a generic blue SaaS palette.
- Do not color-code every industry equally. Use accents as evidence markers, not decoration.
- The portal can be dark. The page around it should stay bright.

## 3. Typography

### Display

Use **Libre Caslon Display** for the hero and major cinematic statements. It gives Nexora a memorable, premium signal without making the brand feel like a generic tech template.

Hero type should feel large, quiet, and expensive. Use weight 400, tight line-height, and letter spacing of 0. Avoid italic display treatments, drop caps, or broadsheet layouts that push the brand into editorial-magazine cliche.

### Body

Use **Onest** for body, navigation, labels, buttons, forms, service descriptions, and practical explanation. It keeps the site readable for non-technical owners, administrators, operators, and managers.

### Hierarchy

- Hero display: 4rem to 9.25rem, line-height 0.86.
- Section headlines: 3rem to 6.2rem, line-height 0.92.
- Section kicker labels: small, weight 750, letter spacing 0.
- Panel titles: 1.12rem to 1.3rem, weight 650.
- Body: 1rem, line-height 1.58, max-width 65ch.
- Long body blocks should be broken into short paragraphs, action rows, or structured lists.

## 4. Imagery And Media

The page needs visual proof. A purely typographic page would under-serve restaurants, hotels, schools, healthcare, and trade clients because these buyers need to see that Nexora understands real-world environments.

Use imagery in three controlled forms:

1. **Portal media**: The hero signature. It may show abstract system movement, screens, structured content, or a cinematic passage effect.
2. **Operational fragments**: Cropped real-world details such as menus, reception desks, room cards, school notices, clinic appointment surfaces, product catalogs, shipping labels, or admin dashboards.
3. **Team portraits**: Real team members only, once available.

Rules:

- No generic smiling-office stock.
- No fake product screenshots that imply shipped work.
- No fake client logos, fake case studies, fake team portraits, or invented metrics.
- If using temporary imagery, keep it clearly atmospheric and avoid implying client proof.
- Real case visuals should become the strongest proof once available.
- Alt text should describe the actual business object or interface shown.

## 5. Hero System

The hero direction is **Pale Film Wash + Corner Portal**.

The full hero may use a soft film wash or generated atmospheric frame, but it must remain light. The lower-right portal contains the richer moving media. This makes the motion feel authored and ownable instead of becoming a generic full-screen video background.

Hero composition rules:

- Primary copy stays centered or slightly above center.
- The headline should state the category clearly: digital systems for businesses people need to trust.
- Supporting copy should mention the breadth: websites, web apps, SaaS platforms, Android apps, brand identity, SEO, and AI SEO.
- Primary CTA should invite a project conversation: start a project, book a strategy call, or tell us what you need built.
- Secondary CTA should lead to services or work.
- The lower-right portal is visible in the first viewport but does not compete with the headline.
- CTA and business copy remain readable without video.
- On reduced motion, replace video with a poster image or static rendered frame.
- On mobile, the portal can move below the headline or become a smaller anchored object near the CTA.

## 6. Layout

The site should use fewer sections with stronger individual purpose. Avoid stacking effects without a clear section job.

Recommended page structure:

1. **Hero**: Pale film atmosphere, cinematic headline, concise offer, CTA, lower-right portal.
2. **Problem**: The gap between the quality of the real business and the weakness of its digital presence.
3. **Client Categories**: Group industries by action: visit and order, book and stay, apply and communicate, find care and appoint, source and inquire.
4. **Services**: Web apps, UI/UX redesign, SEO and AI SEO, SaaS/backend platforms, brand identity, and Android apps.
5. **Proof**: Process, deliverables, category examples, technical capability, and real work only when available.
6. **Process**: Discover, clarify, shape, design, build, test, launch, hand over, improve.
7. **Engagement Paths**: Custom-scoped paths by need, not fixed tiers.
8. **Team**: Real people or restrained placeholders, role-only presentation, optional links or portraits.
9. **Custom Scope**: Explain why every project is estimated after discovery.
10. **Contact**: Qualified inquiry form, email or call option, clear next step.

Layout should use deliberate asymmetry, but not chaos. Prefer large quiet planes, one strong object per viewport, and proof grouped close to claims.

Do not force every section into cards. Use section bands, editorial rows, split lists, timelines, annotated fragments, and compact proof panels where they make the content easier to scan.

## 7. Section Patterns

### Client Categories

The category section should make visitors feel recognized without becoming a logo grid. Use grouped action language:

- Visit and order: cafes, restaurants, venues.
- Book and stay: hotels and hospitality.
- Apply and communicate: schools and institutes.
- Find care and appoint: hospitals, clinics, healthcare.
- Source and inquire: import/export, suppliers, distributors.

Each category should show the user action and the business trust problem. Do not use identical icon cards as the main structure.

### Services

Services should read as connected capabilities. The section should answer what each service is, when a business needs it, what Nexora delivers, and what action it helps create.

Good service treatments:

- A structured service matrix with one expanded service at a time.
- A vertical capability rail with short examples.
- A service-to-outcome map.
- A compact comparison between website, web app, SaaS platform, Android app, redesign, SEO, and brand identity.

Avoid generic icon grids, equal-height service tiles with vague copy, and decorative 3D icons.

### Proof

Until real case studies exist, proof should come from specificity and process:

- Before/after problem framing.
- Category-specific examples.
- Deliverables and technical capability.
- Search and AI SEO structure.
- Design and build process.
- Screens, mockups, or demos from 3-4 high-quality showcase projects, clearly labeled unless they become real client work.

Never fabricate testimonials, metrics, case studies, logos, or client names.

Approved showcase concepts:

- Restaurant/cafe discovery, menu, and reservation system.
- Clinic appointment and doctor/service clarity system.
- School admissions and parent inquiry portal.
- B2B supplier catalog and RFQ system.

### Team

The team section should feel real, accountable, and human. It should be visually calm and compact, not a theatrical roster.

Recommended presentation:

- Real portrait or a restrained placeholder only when the portrait is not ready.
- Name and role.
- Optional link to portfolio, LinkedIn, GitHub, or relevant public work.

Approved placeholder roles: Founder, Product Design, Full-Stack Engineering, and SEO & AI Search.

Avoid fake people, stock portraits presented as real, exaggerated titles, unverifiable claims, and long casual bios.

### Custom Scope, No Pricing

Do not design pricing cards, public price anchors, "starting at" callouts, or tiered plan blocks.

The custom-scope section should explain that Nexora estimates after understanding the business type, workflows, content, backend needs, integrations, launch requirements, SEO needs, AI search needs, mobile app needs, and timeline.

The design should make this feel intentional, not evasive. Use copy like:

- Custom proposal after discovery.
- Scoped around your business, workflow, and growth goals.
- Tell us what you need built, and we will shape the right engagement.

This section should sit near engagement paths or contact, not as a replacement for proof.

## 8. Components

### Buttons

Buttons are pill-shaped, ink-filled for primary actions and surface-filled for secondary actions. Hover states should be calm: slight lift, subtle shade shift, no bounce.

### Portal

The portal is the hero signature. It uses a rounded arch shape with dark ink framing, inner media, subtle border, and a controlled shadow. It should not become a repeated icon everywhere.

### Proof Panels

Proof panels use surface or surface-quiet backgrounds, thin ink-tinted borders, and restrained shadows. They should contain concrete claims: deliverables, decisions, before/after clarity, technical capability, or buyer objections answered.

### Category Rows

Category rows should pair business type with action and proof need. They may use small accent marks, mini timelines, or annotated fragments. They should not become a flat set of identical cards.

### Team Modules

Team modules should support real portraits or restrained placeholders, names, roles, and links. Keep dimensions stable so missing portraits or longer names do not shift the layout.

### Forms

Forms should be calm and high-trust. Use clear labels, generous spacing, visible focus, and concise validation. Ask for business type, current site/app, needed service, primary goal, timeline, scope notes, and contact details. Do not ask for a fixed budget unless Nexora later chooses to add that qualification step.

### Icons

Use `lucide-react` only for practical UI meaning, such as arrows, check marks, external links, phone, mail, map, search, upload, and form states. Do not use generic icons as the main content of service or category sections.

## 9. Motion

Motion is cinematic but quiet.

- Use Motion for React for hero entrance, portal reveal, section reveals, and small state transitions.
- Animate opacity and transforms only.
- Keep scroll-linked motion sparse.
- Do not centralize behavior in one page-wide choreography file.
- Avoid layout animation for section geometry unless it is isolated and tested.
- Respect `prefers-reduced-motion` with static alternatives.
- The portal media should loop silently, use `muted`, `playsInline`, and avoid blocking page comprehension.
- Forms, category sections, and team modules should never depend on animation to reveal essential information.

## 10. Accessibility And Trust

Accessibility is part of the trust promise, especially for schools, healthcare, hospitality, restaurants, and public-facing businesses.

Rules:

- Use semantic HTML.
- Maintain strong contrast across misted surfaces.
- Keep focus states visible and calm.
- Make buttons and links readable without icon-only guessing.
- Keep body copy within comfortable line lengths.
- Provide meaningful alt text for real imagery.
- Keep forms keyboard-friendly and error messages specific.
- Avoid hover-only content.
- Avoid hiding service or contact information inside motion.
- Respect reduced motion.

## 11. Implementation Design Rules

- Use Tailwind for layout primitives, spacing, responsive grids, and common typography utilities.
- Use CSS modules only for complex authored visuals like the portal, film wash, masks, and section-specific composition.
- Keep each section in its own component folder with its own small CSS module when needed.
- Avoid a new monolithic `page.module.css`.
- Keep route files thin and narrative content in structured content files.
- Keep team member content structured so names, roles, portraits, and links can be added without rewriting the page.
- Keep page composition mostly server-rendered. Client components should be small and limited to animation, forms, and browser-only media behavior.
- No shadcn/ui unless a future interaction genuinely needs it. This landing page should not inherit a generic component-library look.

## 12. Do And Do Not

### Do

- Do make the first viewport feel like a premium cinematic studio.
- Do keep the page bright around the portal.
- Do use the portal as a meaningful passage from scattered presence to handled system.
- Do name the business categories and the actions their customers need to take.
- Do make services feel connected into systems.
- Do make every section prove a claim.
- Do include team guidance once real team member information is ready.
- Do explain custom scoping with confidence.
- Do keep copy direct, business-specific, and understandable to non-technical buyers.
- Do keep styles modular and bounded.

### Do Not

- Do not present Nexora as only a website agency.
- Do not frame the audience as only small businesses.
- Do not make warm accents the main identity.
- Do not make the hero a dark full-screen video.
- Do not use decorative glassmorphism.
- Do not use gradient text.
- Do not build repeated icon-card grids.
- Do not design pricing cards, fixed tiers, package blocks, or public price anchors.
- Do not make schools or hospitals feel like restaurants or luxury venues.
- Do not make import/export businesses look like simple ecommerce shops.
- Do not use fake team members, fake portraits, fake metrics, fake testimonials, or fake client logos.
- Do not rely on huge CSS modules or one global scroll script to hold the page together.

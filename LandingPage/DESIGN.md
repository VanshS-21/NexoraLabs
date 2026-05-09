---
name: Nexora Labs
description: A warm, tactile, conversion-minded brand system for a boutique web agency serving local businesses and emerging brands.
colors:
  primary: "oklch(56% 0.20 45)"
  primary-hover: "oklch(52% 0.18 45)"
  canvas: "oklch(97% 0.015 45)"
  canvas-warm: "oklch(98% 0.016 88)"
  surface: "oklch(99% 0.006 45)"
  surface-tinted: "oklch(94% 0.035 82)"
  text: "oklch(25% 0.02 45)"
  text-strong: "oklch(12% 0.014 45)"
  text-muted: "oklch(50% 0.02 45)"
  text-inverse: "oklch(98% 0.01 45)"
  sage: "oklch(44% 0.16 142)"
  sky: "oklch(42% 0.11 214)"
  rose: "oklch(62% 0.20 340)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "2.46rem mobile, 5.8rem desktop, 6.6rem wide"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0"
  headline:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "2.7rem mobile, 4.7rem desktop, 5.5rem wide"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0"
  title:
    fontFamily: "Bricolage Grotesque, Arial Rounded MT Bold, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: "Onest, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  functional: "8px"
  stack-card: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "96px"
components:
  primary-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.pill}"
    shadow: "5px 5px 0 oklch(28% 0.02 45 / 0.12)"
  process-card:
    backgroundColor: "{colors.surface-tinted}"
    rounded: "{rounded.functional}"
    border: "1px solid oklch(28% 0.02 45 / 0.14)"
  testimonial-card:
    backgroundColor: "{colors.surface-tinted}"
    rounded: "{rounded.stack-card}"
    shadow: "0 22px 42px oklch(28% 0.02 45 / 0.11), 8px 8px 0 oklch(28% 0.02 45 / 0.05)"
---

# Design System: Nexora Labs

## 1. Overview

**Creative North Star: The Capable Local Studio**

Nexora Labs should feel like a small expert team that brings order, craft, and momentum to businesses that have delayed their web presence for too long. The system is warm, tactile, clear, and custom. It avoids both cold SaaS sameness and unserious agency flash.

The current site expresses this through a cream canvas, committed orange brand color, oversized confident typography, fixed navigation anchors, scroll-staged sections, tactile stacked cards, illustrated local-business mockups, and real image-led service/footer moments.

The page should feel designed enough to prove taste, but practical enough that a clinic owner, coach, restaurant, boutique, or founder can imagine working with Nexora without friction.

## 2. Register And Scene

Register: brand.

Scene sentence: A busy owner checks the site on a phone between customer messages, then later on a laptop before booking a discovery call. The interface should feel bright, reassuring, organized, and worth trusting with their business reputation.

Design is the product on this surface. The site must communicate credibility through its craft before the visitor reads every line.

## 3. Color

### Strategy

Use a **Committed** color strategy. Nexora Orange carries the brand and should be visible in hero type, CTAs, section headings, active accents, and selected tactile details. The canvas stays warm and light so the orange feels energetic rather than loud.

### Core Palette

- **Nexora Orange**: `oklch(56% 0.20 45)`. Primary brand signal for CTAs, hero emphasis, icon strokes, headings, and selected active states. This darker shipping token keeps small inverse CTA and banner text above WCAG AA contrast.
- **Deep Terracotta**: `oklch(52% 0.18 45)`. Hover and pressed state for orange controls.
- **Warm Cream Canvas**: `oklch(97% 0.015 45)`. Main page background, never pure white.
- **Warm Ivory Surface**: `oklch(99% 0.006 45)`. Elevated or framed surfaces.
- **Tactile Card Tint**: `oklch(94% 0.035 82)`. Process cards, testimonial cards, and warm content blocks.
- **Warm Charcoal Text**: `oklch(25% 0.02 45)`. Primary reading color, never pure black.
- **Muted Warm Text**: `oklch(50% 0.02 45)`. Secondary copy and navigation.

### Supporting Accents

Use secondary accents sparingly to keep the page from becoming orange and cream only:

- Sage: `oklch(44% 0.16 142)`
- Sky: `oklch(42% 0.11 214)`
- Rose: `oklch(62% 0.20 340)`
- Soft yellow: `oklch(90% 0.11 84)`

These accents are best for capability pills, work mockup frames, testimonial tints, and small illustrative marks.

## 4. Typography

Shipping pair: **Bricolage Grotesque** for display/headline/title roles and **Onest** for body, navigation, buttons, forms, pricing, and FAQ text. Both are loaded from Google Fonts as variable families with `font-display: swap`.

Bricolage gives Nexora a warmer, more handmade studio voice without turning into a novelty font. Onest keeps the buyer-facing reading experience calm, practical, and professional.

Do not request synthetic 900+ weights. Use the real 800 weight for display, headings, labels, and primary CTAs, then create hierarchy through scale, color, spacing, and measure.

### Hierarchy

- **Hero Display**: 800 weight, 2.46rem mobile, 5.8rem desktop, 6.6rem wide, 0.9 line-height. Use for first-screen brand statements and oversized landing moments.
- **Section Headline**: 800 weight, 2.7rem mobile, 4.7rem desktop, 5.5rem wide, tight line-height. Use for major content sections.
- **Panel Headline**: 800 weight, 2-3rem. Use inside service panels and showcase moments.
- **Card Title**: 800 weight, 1.05-1.3rem. Compact, sturdy, and scannable.
- **Body**: 500-650 weight, 1-1.08rem, 1.5-1.62 line-height. Keep paragraphs under 65ch.
- **Labels**: 800 weight, 0.72-0.78rem, uppercase, modest positive letter spacing.

Letter spacing should remain `0` for normal headings and body. Use tracking only for short labels. Prefer breakpoint-specific heading sizes over viewport-width font scaling so mobile, desktop, and browser zoom remain predictable. Keep Bricolage out of long paragraphs.

## 5. Layout

The page should feel paced like a guided walkthrough, not a generic stack of sections.

- First screen: brand signal first, large type, short reassurance copy, clear navigation.
- Intro: centered statement with capability pills arranged like tactile tools around the message.
- Process: cards can stack and spread through scroll, reinforcing "we organize the work."
- Services: image-led full-viewport section with a sticky service panel. This makes services feel substantial rather than like a flat list.
- Work: scattered project previews around central copy. The layout should feel like a portfolio table, not a grid template.
- Testimonials: stacked cards with controlled scroll choreography. Use them as proof and warmth, not only social decoration.
- Pricing: simple cards are acceptable here because comparison is the user need.
- Footer/contact: large email, warm image, direct availability signal.

Use full-width bands and viewport-scale sections where the narrative needs presence. Do not wrap every section in the same centered container.

## 6. Components

### Buttons And CTAs

Primary CTAs are pill-shaped, orange, high-weight, and tactile. Use a solid offset shadow rather than blurred depth. Hover may lift by `-2px` and shift to Deep Terracotta.

### Cards

Cards use 8px radius for functional repeated items and 16px for stacked testimonial cards. Avoid nested cards. Use cards only where grouping or comparison is the affordance.

### Navigation

The top navigation should feel simple and sticky. The fixed bottom section navigation is part of the site personality and helps long-scroll orientation. Keep labels short and scannable.

### Work Mockups

Work previews should look custom and local-business-specific. Illustrated SVG mockups are acceptable when they communicate actual website categories such as clinic, restaurant, fitness, salon, coach, creator, or boutique. Avoid generic colored rectangles.

### Stickers And Tactile Marks

Use solid offset shadows, hand-drawn underlines, small circular marks, and imperfect rotations to add human warmth. These should feel controlled, not childish.

## 7. Motion

Motion is part of the brand system because it shows craft and makes the agency feel capable. Use scroll-driven choreography for sections that benefit from transformation:

- Greeting text ink-in effect.
- Capability pills drifting inward or settling.
- Process cards spreading from a stack.
- Services rail moving inside a sticky frame.
- Work previews spreading around center copy.
- Testimonial deck advancing through stacked cards.

Motion rules:

- Animate transforms and opacity, not layout-heavy properties.
- Use exponential or quartic ease-out curves.
- Keep interactions calm and legible.
- Respect `prefers-reduced-motion` with static, readable alternatives.

## 8. Imagery And Assets

Brand surfaces need visual assets. Nexora should use:

- Real or high-quality generated image backgrounds for immersive sections.
- Custom SVG mockups for local-business case examples.
- Warm, practical visual metaphors rather than abstract SaaS gradients.
- Alt text that describes meaningful work previews; decorative imagery should be empty alt.

The current image-led services and footer sections are part of the brand direction and should remain more concrete than abstract.

## 9. Do

- Use OKLCH for color declarations.
- Keep the palette warm, tinted, and brand-specific.
- Make orange a committed brand signal, not a tiny accent.
- Use large type with real confidence.
- Let sections have different pacing while preserving one brand voice.
- Keep copy direct, practical, and reassuring.
- Preserve reduced-motion support for scroll choreography.

## 10. Do Not

- Do not use pure `#000` or `#fff`.
- Do not use gradient text.
- Do not use decorative glassmorphism.
- Do not use side-stripe cards.
- Do not repeat identical icon-card grids as the main structure.
- Do not make the site look like a generic SaaS landing page.
- Do not make it look like a template shop, cheap freelancer portfolio, or distant enterprise agency.
- Do not add vague filler copy where proof, process, pricing, or next steps would be clearer.

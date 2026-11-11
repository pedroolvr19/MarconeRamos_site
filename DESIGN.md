---
name: Marcone Ramos — Nutrição para a vida real
description: Warm, trustworthy one-page site for an online nutritionist; deep navy authority with apricot warmth.
colors:
  navy: "#102e40"
  navy-deep: "#0b2333"
  navy-line: "#294b5d"
  ink: "#193747"
  muted: "#5a676e"
  apricot: "#eea476"
  terracotta: "#b86538"
  terracotta-text: "#9c522b"
  focus-copper: "#c66b36"
  paper: "#faf9f6"
  cream: "#f1eee7"
  line: "#dce1e0"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(42px, 4.5vw, 69px)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(34px, 3.4vw, 49px)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.045em"
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  lead:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.14em"
  serif-accent:
    fontFamily: "Georgia, serif"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.1
rounded:
  control: "5px"
  card: "8px"
  dialog: "10px"
  review: "22px"
  pill: "30px"
  sweep-lg: "130px"
  sweep-md: "100px"
  sweep-sm: "60px"
spacing:
  section-y: "110px"
  section-x: "7%"
  section-y-tablet: "80px"
  section-y-mobile: "65px"
  gutter-mobile: "6%"
  card-pad: "35px"
  grid-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.apricot}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "17px 22px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
  header-cta:
    backgroundColor: "{colors.apricot}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "9px 14px"
  plan-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "35px"
  review-card:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.review}"
    padding: "30px"
  header:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    height: "70px"
---

# Design System: Marcone Ramos — Nutrição para a vida real

## Overview

**Creative North Star: "The Warm Consultation"**

The site should feel like sitting across from a nutritionist who takes you seriously and is also on your side. Deep navy carries the professional authority: credentials, structure, the "this is a real health service" signal. Apricot and terracotta bring the warmth: the human, been-there side of Marcone's story. Neither tips over. It never goes clinical-white and it never goes wellness-pastel.

It is a single long page in an editorial rhythm. Calm paper sections alternate with full-bleed navy bands, so the scroll reads as a sequence of consultations: who he is, what's included, how it works, which plan, what patients say, questions, contact. Typography is modern and slightly tight (Manrope, negative tracking), body text is friendly and open (DM Sans), and Georgia shows up only for small human gestures like the signature, quote marks and the footer name. Real photographs of Marcone are the only imagery, framed in shapes with one dramatically swept corner.

Density is generous: large section padding, wide gutters, few elements per row. Motion is quiet: content rises gently into view, buttons lift on hover, and the arrow glyph nudges toward its destination.

**Key Characteristics:**
- Navy and paper bands alternate down the page; cream is reserved for the plans section.
- One accent pair: apricot for actions on any ground, terracotta for emphasized words on light ground.
- Emphasis in headlines is a color shift on the final words (`<em>` without italics), never bold or underline.
- Photo frames with a single oversized rounded corner; everything else is gently squared (4–10px).
- Arrow glyphs (↗ ↓) inside CTAs and links signal direction and destination (WhatsApp vs. on-page).
- Flat at rest; shadows appear only as hover feedback.

## Colors

A two-temperature palette: cool, deep navy grounds against warm apricot and terracotta accents on a warm off-white paper.

### Primary
- **Consultation Navy** (navy): the authority color. Header (always navy), the method, reviews and contact bands, primary-button hover state, and the photo frame backdrop. Also the `theme-color`.
- **Midnight Panel** (navy-deep): review cards sitting inside the navy band; one step darker for subtle containment.
- **Harbor Rule** (navy-line): dividers, borders and hover fills on navy ground (scrolled header border, menu hover, pause button hover).

### Secondary
- **Apricot** (apricot): the action color. Primary buttons, the header CTA, emphasized headline words on navy ground, review quote marks and the nav hover underline. On light ground it is a fill only, never text.
- **Terracotta** (terracotta): the warm accent for large text on light ground: emphasized headline words (large text, passes 3:1).
- **Deep Terracotta** (terracotta-text): terracotta for small text, small-heading accents (such as the plan card h3 `<em>`, which at 21px semibold is not large text) and glyphs on paper or linen: text links, check marks, step numbers, FAQ `+`, footer tagline. Passes 4.5:1 on both grounds.
- **Copper Focus** (focus-copper): the 3px focus outline, offset 5px, on every interactive element.

### Neutral
- **Warm Paper** (paper): the default page ground, plan cards and dialog surface.
- **Linen** (cream): the plans section ground only, so the plan cards (paper) lift off it by tone.
- **Deep Ink** (ink): headings and primary text on light ground.
- **Quiet Slate** (muted): paragraphs and secondary text on light ground.
- **Hairline** (line): dividers, FAQ rules, plan list separators and section borders.

On navy ground, paragraph text uses pale blue-greys (around #adc1c9 / #b5c7cd) rather than pure white; headings stay near-white.

### Named Rules
**The Two Temperatures Rule.** Every screen holds both navy and a warm accent. A section that is all paper still carries terracotta emphasis; a navy band still carries apricot.

**The Apricot Is for Action Rule.** Apricot fills mean "this takes you somewhere" (WhatsApp, plans). Don't use apricot as a decorative background block.

**The Terracotta on Paper Rule.** Warm text on light ground is terracotta, never apricot. Below heading size, use Deep Terracotta.

## Typography

**Display Font:** Manrope (with sans-serif)
**Body Font:** DM Sans (with sans-serif)
**Accent Font:** Georgia (system serif)

**Character:** Manrope at medium weight with tight negative tracking gives the headlines a contemporary, confident voice without shouting. DM Sans keeps the body warm and readable. Georgia is the handwritten aside: signature, quote marks, footer name.

### Hierarchy
- **Display** (h1): the hero statement only. One per page.
- **Headline** (h2): section titles, usually ending in a terracotta/apricot `<em>` phrase. The contact h2 scales larger (up to 62px).
- **Title** (h3): plan names, pillar names, timeline steps (22–29px depending on context; pillars use weight 500).
- **Body**: 16px at 1.7 for section copy (15px on mobile); card and list copy 15px at 1.65. Lead text is 17px (16px on mobile), max-width about 34em. The ramp lives in CSS custom properties: `--fs-label` 12px, `--fs-meta` 13px, `--fs-ui` 14px, `--fs-card` 15px, `--fs-body` 16px, `--fs-lead` 17px.
- **Label** (12px, 600–700, 0.08–0.14em tracking, uppercase): small metadata only, such as the review author line and the footer tagline. Never a kicker above a heading.
- **Serif accent**: the italic Georgia signature (27px), footer name, and quote glyphs (52–100px).

### Named Rules
**The Colored Ending Rule.** Headline emphasis is a color change on the closing words ("…seus *resultados.*"), with `font-style: normal`. One emphasized phrase per heading.

**The Serif Whisper Rule.** Georgia appears only at human touchpoints (signature, quotes, footer name), never for headings or UI.

**The No Kicker Rule.** Headings stand alone. No uppercase label, section number or dot sits above a heading; the heading and its colored ending carry the section.

**The 12px Floor Rule.** No text renders below 12px at any width; functional text (buttons, chips, links) is 13–14px.

## Layout

A single scrolling page of full-width bands. Section padding is 110px vertical / 7% horizontal on desktop, 80px / 5% at ≤1100px and 65px / 6% at ≤760px. At ≥1600px, content centers in about a 1350px measure. The header content centers within roughly 1120px.

Recurring grids:
- **Asymmetric two-column** (hero 1.1fr/1fr, about .85fr/1fr, section intro 1.4fr/1fr, FAQ 1fr/1.2fr) with wide 7–12% gaps. Text and image rarely split evenly.
- **Four pillars** in a row, each opening on a hairline above its title. Two columns at ≤1100px.
- **Two plan cards** centered at max 1080px. They stack at ≤760px.
- **Reviews**: all four visible in a 2×2 grid (max 1080px); on phones a swipe row at 84% card width with a visible peek and a "deslize" hint. No autoplay.

Section order follows the persuasion path: hero → Sobre mim → what is included → how it works → reviews (proof) → plans (the ask) → FAQ → contact. Proof always comes before the plans.

Breakpoints: 380px (smallest phones), 760px (mobile), 900px (nav collapses to menu), 1100px (tablet), 1600px (wide). Touch targets are kept at a minimum of 44px on mobile.

**The Uneven Split Rule.** Two-column sections use unequal fractions and generous gutters; avoid 50/50 grids for copy-plus-image.

## Elevation & Depth

The system is flat at rest. Depth comes from tonal banding (paper → navy → cream) and hairline borders, not shadows. Shadows appear only as interaction feedback, and they are always navy-tinted, never grey.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 12px 25px #102e4033`): buttons on hover/focus, paired with translateY(-5px).
- **CTA lift** (`box-shadow: 0 8px 20px #102e4033`): header CTA hover.
- **Photo lift** (`box-shadow: 0 18px 38px #102e4030`): photo frames on hover, paired with a slow 1.08 image zoom.
- **Dropdown** (`box-shadow: 0 12px 20px #102e401a`): the mobile nav panel.

### Named Rules
**The Flat-By-Default Rule.** Nothing casts a shadow until the visitor touches it.

## Shapes

Two shape vocabularies coexist on purpose:

- **The Sweep:** photo frames have one oversized rounded corner and small radii elsewhere. The hero sweeps top-left (130px, 90px on mobile), and the about photo bottom-right (100px). The sweep rotates around the page so no two photos share a corner. Phones show only the hero portrait; the About photo is desktop-only so two similar portraits never stack.
- **Gentle squares** for UI: buttons 5px, plan cards 8px, dialog 10px. Review cards are the one softer exception at 22px (18px on mobile).
- **Circles** for sequence and navigation: timeline step nodes (37px) joined by a 1px vertical line. Numbers appear only where the sequence is real (the four steps).

**The One Sweep Rule.** Each photo gets exactly one large corner. Never round all four corners of a photo, and never sweep a UI element.

## Components

### Buttons
Confident and tactile, with an arrow that points where you're going.
- **Shape:** gently squared (5px).
- **Primary:** apricot fill with navy text, 14px bold (13px on phones), padding 17px 22px. Laid out as a space-between flex row with a 21px arrow glyph (↗ for WhatsApp, ↓ for on-page). Full-width inside plan cards.
- **Hover / Focus:** fill flips to navy with white text, the button lifts 5px with a navy shadow, and the arrow nudges 5px up and right (.28s ease). On navy bands the hover flips to white with navy text. Active presses back to +1px with no shadow.
- **Header CTA:** smaller apricot pill-square (9px 14px). Hover goes white.
- **Text link:** terracotta text with a softer terracotta 1px bottom border and 5px padding-bottom, used for secondary "first step" links.

### Cards / Containers
- **Plan card:** paper on linen, 1px soft border, 8px radius, 35px padding (about 25px on smaller screens). Laid out as a vertical stack: title with `<em>` modality, description, hairline-topped list, then the full-width primary button pinned to the bottom with a centered reassurance line under it. Shared items use a ✓; the item that differs uses – (missing, muted) or + (added, semibold), so the two cards compare at a glance.
- **Review card:** midnight-panel fill, 1px slate border, 22px radius. Georgia apricot quote mark, then the 16px/1.8 quote, then a small uppercase author label pushed to the bottom.

### Navigation
- **Header:** sticky, 70px (64px ≤900px, 60px ≤380px), always navy. Text identity on the left ("Marcone Ramos" in Manrope 700 with an apricot "Nutri" small-caps line), centered nav group, apricot CTA on the right.
- **Links:** 14px. On hover they turn apricot and an apricot 2px underline scales in from the left.
- **Mobile (≤900px):** a ☰ toggle with a 44px target opens a full-width navy dropdown with stacked 14px links.

### Timeline (signature)
Numbered circular nodes in terracotta numerals, connected by a hairline. Each step pairs an h3 with short copy. The section is one centered column (max 820px): heading and "primeiro passo" link on one row, steps below.

### FAQ
Native `<details>` rows separated by hairlines, with 13–14px semibold summaries. The terracotta `+` becomes `−` when the row is open.

### Pillars
Four columns on navy. Each opens on a hairline, then a 22px weight-500 title and pale copy. No numbers or icon glyphs: the pillars are not a sequence.

### Privacy dialog
Native `<dialog>` on paper with a 10px radius and 42px padding, over a navy-tinted backdrop (#071d2bc4).

## Do's and Don'ts

### Do:
- **Do** alternate paper and navy bands, keeping cream for the plans section.
- **Do** end headlines with a colored, non-italic `<em>` phrase: terracotta on paper, apricot on navy.
- **Do** put a direction glyph (↗ external/WhatsApp, ↓ on-page) in every CTA, hidden from screen readers, with "(abre o WhatsApp em nova aba)" as screen-reader text on WhatsApp links.
- **Do** ship every WhatsApp link as a complete `wa.me` URL in the HTML so contact works without JavaScript, with a prefilled message that matches the link's intent.
- **Do** frame real photos of Marcone with one swept corner and set `object-position` per breakpoint to keep his face in view.
- **Do** tint every shadow, overlay and backdrop with navy (#102e40 / #071d2b), never neutral grey or black.
- **Do** keep the 3px copper focus outline with 5px offset, and 44px touch targets on mobile.
- **Do** honor `prefers-reduced-motion`: reveals render in place, hover lifts and zooms are disabled.

### Don't:
- **Don't** put an uppercase kicker, section number or dot above a heading.
- **Don't** auto-advance content or hide testimonials behind a carousel.
- **Don't** use apricot as text on paper or cream; use terracotta.
- **Don't** introduce a third accent hue. Navy plus the apricot/terracotta pair is the whole palette.
- **Don't** add stock imagery, illustrations of food or before/after visuals; the only imagery is real photos of Marcone.
- **Don't** add resting shadows to cards or sections.
- **Don't** round all corners of a photo or apply the sweep to buttons and cards.
- **Don't** use Georgia for headings or UI text.
- **Don't** set any text below 12px.

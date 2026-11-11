# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary audience (confirmed):** adults, roughly 20 to 40, with busy routines (work, study, irregular hours) who have already tried diets and could not keep them up. Their goal is mostly weight loss or better body composition, but the real pain is **consistency**: they want a plan they can actually follow, without obsession or "neura".

Their job on the site: understand how the coaching works, choose a modality and duration, and start a WhatsApp conversation.

Out of scope for the site's messaging: high-performance sports nutrition and clinical niches (diabetes, pregnancy, pediatrics). The site does not speak to them.

## Product Purpose

Institutional site for Marcone Ramos, nutritionist (CRN 51047), presenting his online nutrition coaching ("Nutrição para a vida real"). Success is a qualified visitor opening a WhatsApp conversation about a specific modality and duration.

## Positioning

**Differentiators (confirmed, in priority order):**

1. **"I've been there":** Marcone went through being overweight himself and knows first-hand how hard changing habits and staying consistent is. The hardest point for competitors to copy.
2. **Truly close support:** he checks in, asks how it's going and adjusts the plan with the patient. Every testimonial echoes this.
3. **A plan that fits the routine:** built around schedule, preferences and difficulties; consistency over perfection.

One-line positioning: *"Um nutricionista que já viveu a dificuldade e acompanha de perto, com um plano que cabe na sua rotina."*

## Operating Context

- Entirely online. Flow: pre-consultation questionnaire → nutritional assessment (online video consultation in the teleconsulta modality) → individualized meal plan delivered within two business days → check-ins with feedback (photos when applicable) and plan adjustments.
- All contact happens on WhatsApp; each modality/duration button generates a specific prefilled message (`site/dist/script.js`).

## Capabilities and Constraints

- Two modalities: **Online** (meal plan + support, no video consultation) and **Online com teleconsulta** (adds a scheduled online consultation). Durations: mensal, trimestral, semestral, anual.
- No prices on the site; values and conditions are discussed on WhatsApp.
- No forms, data collection, analytics or tracking. The privacy policy (in the site's dialog) states this, names Vercel as host and mentions its technical access logs (IP, browser, pages requested) for security and operation. Last updated November 2026.
- Static HTML/CSS/JS with no build step (`site/dist/`); local preview via `node site/serve.cjs`.
- Language: Brazilian Portuguese.
- Hosting (decided): **Vercel**, deployed from GitHub `pedroolvr19/MarconeRamos_site`, root directory `site/dist`, no build command, custom domain. Every push to `main` redeploys. Note: Vercel's Hobby plan is for non-commercial use; for a professional site the terms call for the Pro plan (Netlify or Cloudflare Pages are free alternatives that allow commercial use).

## Brand Commitments

- Name: Marcone Ramos; tagline "Nutrição para a vida real". Professional credential "Nutricionista · CRN 51047" appears alongside his name.
- Voice: first person, warm and direct, plain Portuguese; avoids promises of results.
- Logos: `site/dist/assets/marcone-logo*.png` (blue, gold, footer variants). The footer no longer uses the logo; it shows the name "Marcone Ramos" in Georgia with the tagline below.
- WhatsApp (confirmed): +55 81 8444-5268 (`558184445268`).
- Instagram (confirmed): @marconeramosnutri — https://www.instagram.com/marconeramosnutri/ (linked in the footer).

## Evidence on Hand

- Photos of Marcone supplied by the client, in 640/1280 px versions: `site/dist/assets/marcone-{apresentacao,sobre,sobre-nova,etapas-nova,acompanhamento}-*.jpg`.
- Four real patient testimonials, anonymous, kept in their original informal wording, shown with the disclaimer "As experiências são individuais. Os resultados podem variar de pessoa para pessoa."
- No before/after photos, numeric results, patient names, prices, press or certifications beyond the CRN. Do not fabricate any of these.

## Product Principles

1. Every path ends in a WhatsApp conversation; make that step obvious and specific to what the visitor chose.
2. Credibility comes from real things only: the CRN, Marcone's own story, real testimonials. Never invented claims or results.
3. Speak to the routine, not the ideal: the promise is a plan that fits real life, not transformation.
4. Respect health-information ethics: no promises of results, no collecting health data on the site.

## Accessibility & Inclusion

Existing behavior to preserve: skip link, keyboard- and touch-navigable testimonial carousel that pauses off-screen, on hidden tabs and during interaction, and starts paused under `prefers-reduced-motion`.

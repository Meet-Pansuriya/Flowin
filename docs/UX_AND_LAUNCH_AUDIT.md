# Visitor experience and launch-readiness audit

Reviewed 2026-09-27 against the live GitHub Pages site at desktop and 390 px mobile width, then checked the updated static build. This is a heuristic visitor-journey review, not measured user research or analytics.

## Visitor journey

1. **Find a range:** the four systems were listed near the top but were not clickable; Agriculture disappeared from the narrow mobile strip. The strip now links to all four ranges and keeps all four visible. Homepage and range-page spacing has been tightened so product choices appear sooner.
2. **Find a family:** range overview cards work, but the large hero and tall cards made scanning slower than necessary. Hero/card spacing is now more compact without changing the catalogue hierarchy.
3. **Compare sizes:** family pages provide verified rate tables, but grouped pages required scrolling to find a specific printed table. The shared family-page pattern now offers direct table-jump links. Source PDF remains one click away.
4. **Enquire:** the Contact destination still has no verified email, phone, address or form endpoint. This is the clearest unfinished step in the journey and should be resolved before a public launch announcement. Do not invent an address or send enquiries to an unapproved inbox.

## Technical checks

- GitHub Pages-mode build generates 24 pages. The repeatable `site/scripts/check-site.mjs` scan validates local links and fragments, assets, one H1 per page, titles/descriptions, unique IDs and image alt attributes. Current result: 24 pages and 596 local URLs pass.
- Source PDF links and Pages base paths are valid in generated output. These are structural checks, not a full screen-reader or real-user test.
- Desktop and 390 px mobile screenshots were visually inspected before changes. After GitHub Pages deployed revision `a7524da`, the published 390 px homepage showed all four range links, and the grouped uPVC page exposed working table jumps and a horizontally scrollable table. These are representative checks, not exhaustive device coverage.
- The site deliberately retains `noindex` in `BaseLayout.astro`. Search indexing, canonical URLs and a sitemap are launch decisions, not complete. Do not remove `noindex` while enquiry and content approval remain open.
- The illustrative warehouse PNG is about 2.5 MB and appears twice on the homepage. Optimize or replace it after approved imagery is available; do not represent it as Flowin's actual facility.

## Missing inputs and recommended additions

**P0 — before customer-facing launch:** approved enquiry email/phone or form destination; confirm which product rates and commercial terms may be displayed and how updates will be owned; approve contact/company details and any certification/standard claims. The PDF contains blank discount cells and unprinted product values; keep them blank.

**P1 — improve confidence and conversion:** real Flowin product/warehouse photography with usage approval; a concise company/contact page with verified location and service area; a clear quote/enquiry path from product pages; a visible “catalogue rates are reference-only” note and update date agreed by Flowin; mobile keyboard/screen-reader testing.

**P2 — after enough traffic/content:** searchable or filterable product tables (especially size and system), related fitting links, analytics with an approved privacy approach, and further uPVC/cPVC family transcription. Do not add speculative product data or fake availability.

## Decision needed from Flowin

Provide the approved enquiry channel and confirm whether web rates should remain visible as a reviewed copy of the 2026 PDF. With those decisions, complete the contact journey, SEO/indexing setup, and final launch QA as one batch.

# Product browsing substep 4e: cPVC overview and elbows

Started: 2026-09-26

## Scope and reason

Open a second browseable range at `/products/cpvc/` and add one verified family at `/products/cpvc/elbows/`. Homepage cPVC navigation can then lead to a real page, while all other cPVC products remain in the full catalogue until checked. Reuse the established fittings table and family layout, parameterizing its range label, breadcrumb, link and printed section heading.

## Source and presentation rules

- Source is `design/assets/flowin-price-list-2026.pdf`, PDF page 6. The fittings section is printed **AS PER ASTM D-2846 SDR-11**. Treat this as a catalogue label, not an independently verified certification claim.
- Visually verify eight Elbow rows and six 45-degree Elbow rows: size, per-piece rate, bag packing and inner packing. Normalize the printed `=` rate separator to `.`; do not infer currency.
- Use the approved old-site `Old/images/cpvc/CPVC ELBOW.jpg`, labelled as a legacy product image. Do not generate images.
- The overview may describe the catalogue's pipe and fitting groups but should link only to live family routes or the PDF. No dead product pages.

## Done when

- [x] cPVC overview, homepage link and elbow page work; other ranges stay unchanged.
- [x] Both elbow tables match the printed 14 rows on PDF page 6.
- [x] Shared family layout correctly shows cPVC while existing uPVC pages still show uPVC.
- [x] Build, desktop/mobile layout and local route/asset checks pass.
- [x] Plan and action log updated without closing the product-browsing chunk.

## Result

The homepage now links to `/products/cpvc/`. The overview leads to the verified Elbows page and sends the not-yet-transcribed Pipes card to catalogue page 6, not a dead route. The elbow page has eight Elbow and six 45-degree Elbow rows checked against the printed table. `ProductFamilyPage.astro` now receives explicit range labels and source-section text; the uPVC fitting routes were kept intact. Production build, desktop/narrow browser checks, page/asset responses, and table row counts passed. No new images were generated.

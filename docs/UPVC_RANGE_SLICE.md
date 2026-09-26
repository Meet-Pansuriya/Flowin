# Product browsing substep 4b: uPVC range and tees

Started: 2026-09-26

## Scope and reason

Create a real `/products/upvc/` landing page with links to the existing elbows page and a new tees page. Turn the family-page structure into a reusable component while adding only the next two verified tables from PDF page 2: **Tee** (nine sizes) and **Cross tee** (three sizes). Reducing tee belongs to PDF page 3 and is deferred, rather than silently blending it into the tee tables.

This small slice makes the homepage's uPVC range card lead to useful navigation and proves the family-page pattern works for a second product. It does not complete all uPVC products or the other three ranges.

## Source rules

- The source is `design/assets/flowin-price-list-2026.pdf`, PDF page 2, uPVC plumbing fittings, labelled ASTM D-2467 SCH-80.
- Verify every tee and cross-tee size, rate, bag packing, and inner packing against the rendered PDF page. Normalize the printed `=` rate separator to `.` as on the elbows page. Do not add a currency symbol.
- Keep the shared row fields as strings so a blank printed cell can remain empty on future pages.
- Use the existing `Old/images/upvc/TEE.jpg` as the tee visual. No new image generation in this substep, per the user's request to generate later.
- Family and range cards should link only to pages that actually exist. Pending families can be named, but must point to the full catalogue rather than a dead detail route.

## Done when

- [x] uPVC range route and its live family links work.
- [x] Tee and cross-tee tables match PDF page 2.
- [x] Elbow and tee pages share one layout component, with working breadcrumbs back to the range.
- [x] Build, desktop/mobile layout, and local links pass checks.
- [x] This substep is logged without marking all product browsing complete.

## Result

The range page links to the live elbow and tee pages. Tee has nine rows and Cross tee has three, transcribed from the rendered catalogue page. Both family routes use `ProductFamilyPage.astro` and preserve the catalogue as the definitive source. The tee visual is copied from the old site; no new imagery was generated. Desktop and narrow-viewport browser checks confirmed the page structure, and local routes and image returned HTTP 200. Product browsing remains an open project chunk.

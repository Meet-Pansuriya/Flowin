# Product browsing substep 4g: cPVC ISI-labelled SDR pipes

Started: 2026-09-26

## Scope and reason

Add the two **CPVC PIPE ISI ASTM 2846** tables from PDF page 6 to the existing `/products/cpvc/pipes/` page: 3 m and 5 m, six rows each. Keep them visually separate from the previously transcribed NON ISI-labelled SDR tables. The larger ASTM F-441-labelled SCH-40/SCH-80 group remains linked to the PDF for a later slice.

## Source and presentation rules

- Source: `design/assets/flowin-price-list-2026.pdf`, PDF page 6. Visually verify size, bag packing, SDR-11 rate and SDR-13.5 rate for all 12 new rows.
- **ISI ASTM 2846** is a printed group heading, not independent evidence of an active certification. Describe it as labelled in the catalogue, without a new compliance claim.
- Keep all rate values as strings with their printed decimal precision. Do not add currency or compute one length from another.
- Reuse the cPVC pipe page, table component and approved old-site image. No new image generation or additional product families in this slice.

## Done when

- [x] The two ISI-labelled six-row tables match PDF page 6 and remain distinct from the NON ISI-labelled tables.
- [x] The page text correctly describes four SDR tables and leaves the F-441 group pending in the PDF.
- [x] Build, desktop/mobile layout and local route/source checks pass.
- [x] Plan and action log are updated while product browsing remains open.

## Result

The existing cPVC pipes page now displays 24 SDR rows in four clearly named groups: NON ISI 3 m/5 m and ISI 3 m/5 m. The 12 new rows were visually checked against PDF page 6 and preserve printed rate precision. The page and range-card text now describe the broader SDR coverage without claiming certification. The ASTM F-441 schedule tables remain in the linked catalogue. Production build, browser row-count/heading checks, mobile overflow check and local route/source responses passed. No new image was generated.

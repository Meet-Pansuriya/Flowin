# Product browsing substep 4h: cPVC F-441-labelled schedule pipes

Started: 2026-09-26

## Scope and reason

Complete the cPVC pipe tables from PDF page 6 by adding the two **CPVC PIPE AS PER ASTM F-441** groups (3 m and 5 m) to `/products/cpvc/pipes/`. They have three larger sizes each and SCH-40/SCH-80 rate columns, unlike the existing four SDR tables. Keep the rate systems in separately labelled visual blocks. No other product family is part of this slice.

## Source and presentation rules

- Source: `design/assets/flowin-price-list-2026.pdf`, PDF page 6. Visually check inch/mm size, bag packing, and both schedule rates for six rows.
- Preserve printed rate precision (including `2437.5`), without currency symbols or derived values. Keep the **AS PER ASTM F-441** wording as an attributed catalogue heading, not an independent compliance claim.
- Reuse the existing schedule-rate table structure from uPVC, but make its caption source page explicit so cPVC cites PDF page 6 while uPVC remains page 2. Avoid a misleading import of uPVC-specific types into cPVC data.
- Continue using the approved cPVC legacy pipe image. No generation.

## Done when

- [x] Two three-row schedule tables match PDF page 6 and show SCH-40/SCH-80, not SDR headings.
- [x] cPVC page clearly separates its four SDR and two schedule groups, with accurate source labels.
- [x] Build, desktop/mobile layout and existing uPVC pipe table checks pass.
- [x] Checklist and action log updated while the overall product-browsing chunk remains open.

## Result

The cPVC pipe page now includes all six printed page-6 tables: four SDR groups and the two F-441-labelled schedule groups, with 30 rows total. The six new rows were checked against the rendered PDF and retain source rate precision, including `2437.5`. The shared schedule table now receives a source page, so cPVC captions say page 6 and uPVC captions still say page 2. The overview no longer says pipe variants are pending. Production build, desktop/narrow browser checks, table headings/row counts and local route/asset responses passed. The overall product-browsing chunk remains open for other families and ranges; no imagery was generated.

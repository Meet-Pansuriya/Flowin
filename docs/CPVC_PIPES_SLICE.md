# Product browsing substep 4f: cPVC non-ISI pipe group

Started: 2026-09-26

## Scope and reason

Add `/products/cpvc/pipes/` with only the two **CPVC PIPE NON ISI ASTM 2846** tables on PDF page 6: 3 m and 5 m. These have six rows each and separate SDR-11 / SDR-13.5 per-piece rate columns. This makes the cPVC Pipes card lead to a useful detail page without implying that all cPVC pipe variants have been transcribed.

## Source and presentation rules

- Source is `design/assets/flowin-price-list-2026.pdf`, PDF page 6. Visually verify size in inches/mm, bag packing, and both rates for all 12 rows.
- Treat **NON ISI ASTM 2846** as the printed catalogue group label, not an independently verified standard or certification claim. Keep the ISI-labelled and ASTM F-441-labelled pipe groups in the PDF for later slices, visibly noting that they are not on this page yet.
- Preserve rate strings exactly as printed, including mixed decimal precision in the 5 m SDR-13.5 column. Do not add a currency symbol or derive a missing value.
- Use the approved `Old/images/cpvc/CPVC PIPES.jpg`, labelled as a legacy product image. No new image generation.
- The existing uPVC pipe table has SCH-40/SCH-80 columns and must not be reused with mislabeled headers; give this bounded SDR group its own typed data/table component.

## Done when

- [x] The two six-row tables match PDF page 6 and show distinct SDR rate columns.
- [x] cPVC overview Pipes card leads to this page; remaining groups link to the source PDF.
- [x] Build, desktop/mobile layout and local routes/assets pass checks without breaking uPVC pipes.
- [x] Plan and action log updated, with product browsing still open.

## Result

The cPVC Pipes card now opens a page with only the two verified NON ISI-labelled tables (12 rows), separate SDR-11 and SDR-13.5 columns, and source links to PDF page 6. The page explicitly excludes the printed ISI and ASTM F-441 groups until reviewed. Rate strings preserve the source's mixed precision. Production build, desktop/narrow browser checks, table row counts and local route/asset requests passed; the uPVC pipe route still builds. The approved old-site pipe image was reused without new generation.

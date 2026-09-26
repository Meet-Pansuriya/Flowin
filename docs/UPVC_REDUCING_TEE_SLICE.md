# Product browsing substep 4d: uPVC reducing tee

Started: 2026-09-26

## Scope and reason

Add a separate `/products/upvc/reducing-tees/` page for the 20-row **Reducing Tee** table on PDF page 3, and link it from the uPVC overview. Its source page and size notation differ from the existing Tee/Cross tee page on PDF page 2. Keeping it separate also makes the printed blank packing cells visible for client review.

## Source and presentation rules

- Visually verify every size pair, rate, bag packing and inner packing against `design/assets/flowin-price-list-2026.pdf`, PDF page 3.
- The 2 1/2 × 1 and 2 1/2 × 1 1/2 rows have no printed bag or inner packing. Store and render all four cells as empty strings; do not derive a value or put 0, N/A or a dash in the table.
- Normalize the printed `=` rate separator to `.` as on the existing fittings pages; do not infer currency.
- Reuse the fittings family layout and table component. Use the approved old-site `Old/images/upvc/REDUCING TEE.jpg` as a labelled legacy image. Do not generate an image.

## Done when

- [x] All 20 rows match the printed table, including four empty packing cells.
- [x] The page, overview link and page-3 source link work without breaking the other uPVC pages.
- [x] Build, desktop/mobile layout and local asset checks pass.
- [x] Checklist and action log are updated, while product browsing remains open.

## Result

The new reducing-tee page uses the shared fittings layout and its own page-3 source link. Twenty rows were visually checked against the rendered catalogue page. The two rows without printed packing retain empty bag and inner-packing cells. The uPVC overview now has four working family cards. Production build, browser table/blank-cell checks, narrow-screen overflow check and local route/asset responses passed. No image generation was used.

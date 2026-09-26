# Product browsing substep 4c: uPVC pipes

Started: 2026-09-26

## Scope and reason

Add one detailed `/products/upvc/pipes/` family page and a working card on the uPVC overview. Catalogue PDF page 2 prints four tables: uPVC pipe SCH-40 / 3 m, uPVC pipe SCH-40 / 6 m, and ASTM F-441-labelled 3 m and 6 m groups for larger sizes. Preserve these as four sections rather than merging lengths or standards. Each row needs size, bag packing, and separate SCH-40 and SCH-80 per-piece rates; this is not the fittings table schema.

## Source and presentation rules

- Visually verify all rows against `design/assets/flowin-price-list-2026.pdf`, PDF page 2. There are six rows in each SCH-40-titled table and three in each ASTM F-441-labelled table.
- The first two printed table titles say SCH-40 while also displaying SCH-80 rate columns. Retain this distinction in a source note instead of silently correcting the title or claiming an independent standard.
- Do not add a currency symbol; retain printed rates as strings. Keep future blank cells empty, not zero.
- Use the approved old-site `Old/images/upvc/UPVC PIPES.jpg` as an explicitly labelled legacy image. No image generation in this slice.
- Keep the shared fittings component untouched. The pipe page can reuse the site layout, typography, and product CSS but needs its own table component/type.

## Done when

- [x] Pipe table data matches the four printed tables on PDF page 2.
- [x] New family route and uPVC overview link work; fitting routes still work.
- [x] Build, desktop/mobile layout, and local image/PDF links pass checks.
- [x] Plan and action log updated while the overall product-browsing chunk remains open.

## Result

The pipe route has four separate sections with 18 verified rows total: six each for the SCH-40-titled 3 m and 6 m groups, and three each for the ASTM F-441-labelled 3 m and 6 m groups. Every table includes both schedule-rate columns. An independent pipe data type and table component keep length and schedule rates distinct from fittings. The old-site pipe image is labelled as such; no imagery was generated. Production build, desktop/narrow browser views, and local route/image/catalogue requests passed. The overall product-browsing chunk remains open.

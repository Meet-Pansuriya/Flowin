# Revised FPPL 2026 catalogue reconciliation

Reviewed: 2026-09-27

Current source: `design/assets/flowin-price-list-2026.pdf`, SHA-256 `01008650626FD13B886678BC8D2E17A6BFF8B82726A1CE31C5B6D4E49D3594AD`. The same file is served as `site/public/catalogue/flowin-price-list-2026.pdf`. The previous 14-page edition is retained as `design/assets/flowin-price-list-2026-previous.pdf`. This note supersedes page references in earlier implementation-slice notes; those notes document the source used at the time.

## Current PDF page map

| Range | Current pages | Previous pages |
| --- | --- | --- |
| uPVC | 3-6 | 2-5 |
| cPVC | 7-10 | 6-9 |
| SWR ring fit | 11 | 10 |
| SWR self fit | 12-13 | 11-12 |
| Agriculture | 14 | 13 |

The new edition also adds an About page (2) and a discount-structure grid (15). The discount cells are blank.

## Web-table changes applied

- uPVC elbow: five small-size rates and the 32 mm inner-packing entry; uPVC tee: two rates plus the 20 mm bag/inner packing entries. Cross tee now links to page 4 while Tee links to page 3.
- uPVC ASTM F-441-labelled pipes: all 12 SCH-40/SCH-80 larger-size rates across the 3 m and 6 m groups.
- cPVC: all 48 SDR rates across the four 3 m/5 m NON ISI and ISI-labelled groups; the 3-inch F-441 SCH-40 3 m rate; and the 20 mm and 25 mm elbow rates.
- SWR ring-fit coupler: 75 mm box packing changed from 180 to 175.
- SWR self-fit Nahani trap: all three rates changed to 80.00, 90.00 and 95.00.

The revised page-13 PVC solvent table changes sizes, packing and rates, and agriculture page 14 changes several printed values. Neither has a web table yet, so the new downloadable PDF is the source for those products. Page-13 Vent Cowl packing/rate cells and the page-15 discount cells remain blank in print.

## Verification

The changed values and page placement were compared with rendered pages 3, 4, 7, 11, 12 and 13 of the revised PDF. The replacement download hash matches the supplied file. Astro production builds and generated link/table checks are recorded in the implementation turn.

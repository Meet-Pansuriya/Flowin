# October catalogue update

Source: `design/assets/flowin-price-list-october-2026.pdf`, supplied 15 October 2026 as `Flowin -NEW PRICELIST OCT.pdf`. SHA-256: `c89698af206797ef4dd7b1db4b1309dd3dbcda94b095ef34fc8bd53594f5b782`. This replaces the previous 2026 rate source.

## Coverage

114 separately linked products and 534 size/variant rows: 31 uPVC, 34 cPVC, 39 SWR (Ring-fit and Self-fit separated), 10 agriculture. The PDF has 112 detected tables; the two cPVC schedule sections embedded in SDR tables are separated into their own products. All 607 printed rate values are retained, with the PDF decimal separator `=` displayed as `.` and printed precision preserved. No currency is inferred. Blank cells remain blank and five printed zero rates remain 0.00.

Every product has its own route, data table and order-list link. Range pages and the searchable product directory group pipes separately from fittings/accessories. Old family URLs remain collection pages pointing to current individual products. Enquiry suggestions use the complete current list.

## Images

Product images are extracted from their own image cells in the supplied PDF, preserving the original orientation, colour and branding. They replace the earlier edited third-party imagery in active catalogue pages and homepage range cards. Six Ring-fit pipe length tables have no product photograph in this PDF; those entries use text-based specification cards showing length, type, diameters and socket options. No table-preview images are rendered or generated. Product photograph assets are under `site/public/images/catalogue-october/`.

## Public pricing visibility

Product pages display sizes, packing and applicable length, socket or pressure-class options without price columns. Directory links and product descriptions refer to sizes and packing. The complete source data retains the printed rates for audit, and the downloadable original PDF is unchanged. Validation compares full source cells separately from the filtered public specification tables.

## Printed exceptions

- uPVC 1 1/4-inch elbow inner packing is printed as 220 despite bag packing 20 X 6; retain 220.
- Brass MTA/FTA 4-inch entries (uPVC and cPVC), and cPVC reducer bush 1 X 3/4, print 0=00. Do not infer a replacement price.
- cPVC step-over bend on PDF page 10 has a misaligned five-column heading over four-column data. Present inch, mm, rate and a neutral Packing column; do not guess whether the fourth value is inner or bag packing.
- Y-tee and vent-cowl rows with unprinted rates or packing remain blank.
- uPVC ASTM F-441 larger-size rows remain associated with the schedule column in which the catalogue places them.

## Reproduction and validation

`python scripts/import-october-catalogue.py` uses pdfplumber, Pillow and the supplied PDF to produce the active JSON and image assets. Run from repository root with the bundled PDF Python runtime. Raw table extraction is retained in `design/assets/flowin-october-extracted-tables.json` for independent comparison. The public PDF is `site/public/catalogue/flowin-price-list-october-2026.pdf`; the previous public PDF URL also serves the new document for compatibility. Historical price modules are retained only as history and are not imported by active product pages.

Checks: production build, link/structure validation, SEO/sitemap validation, source-cell and rendered-table comparison, and desktop/mobile visual review. This update is local on `catalogue/october-price-list`; it has not been deployed.

## Ring-fit pipe consolidation

The six SWR Ring-fit Type A pipe lengths share one product at `/products/swr/ring-fit-pipes/`. Its 12 specification rows retain every length and diameter pairing. Directory, range, related-product and enquiry suggestions use the single product; the six old length URLs redirect to it and are excluded from the sitemap. The underlying 114 source entries remain unchanged for PDF auditing; the public directory contains 109 products.

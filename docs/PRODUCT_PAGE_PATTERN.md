# Product-page pattern: first family

Started: 2026-09-25

## Scope of substep 4a

Build **one** reusable product-family detail pattern for uPVC elbows, using the uPVC fittings tables on PDF page 2. This is a deliberate slice of chunk 4, not completion of all four ranges.

Why this family: the approved Stitch brief names uPVC elbows as the example detail page, the legacy site contains elbow imagery, and page 2 has compact tables that exercise size, rate, bag packing, and inner packing.

## Source and translation rules

- Source: `design/assets/flowin-price-list-2026.pdf`, page 2, under “uPVC plumbing fittings (as per ASTM D-2467 SCH-80).” The PDF, not extracted text, is authoritative.
- Two printed variants: “ELBOW” and the 45-degree elbow. Normalize the latter's ambiguous printed angle mark to “45° elbow” for legibility; do not infer other specifications.
- Store size (inch), size (mm), rate per piece, packing in bag, and inner packing as strings. Display rates with a decimal point in place of the catalogue's `=` separator; do **not** add a currency symbol because the supplied table does not establish one.
- A blank printed value is represented as an empty string and rendered as an empty table cell, never zero, a dash, or “N/A.” This first family happens to have rates in all displayed rows; the component must support blanks for later families.
- Preserve apparent source inconsistencies and flag them. Specifically, the plain elbow's 1¼-inch row prints `20 X 6` bag packing and `220` inner packing. Do not silently change `220` to `120`.
- Show a direct link to the full official PDF and its source page. Do not add a cart, stock status, or unverified technical claims.

## Intended UI

Use the site's warm editorial design: product-family breadcrumb, large heading, concise description, product visual, variant headings, horizontally scrollable legible tables on narrow screens, and catalogue/contact actions. For this substep use the approved legacy elbow image from `Old/images/upvc/ELBOW.jpg`; the user asked to skip new generations for now. Until email/phone are supplied, the contact area remains a clear pending state rather than a broken enquiry control.

## Completion checks

- [x] Every displayed elbow row visually checked against PDF page 2.
- [x] Reusable typed data and table component built; empty-string cells remain empty.
- [x] Homepage links to the first real family page; all other range cards remain honest about pending pages.
- [x] Static build and browser checks pass at desktop and mobile widths, including horizontal table scrolling.
- [x] Anomaly and remaining range/family work recorded in the project plan.

Implementation: `site/src/data/productFamilies.ts`, `site/src/components/RateTable.astro`, and `site/src/pages/products/upvc/elbows.astro`. The product image is a copy of the existing old-site asset, not a generated image. A generated draft was considered, then excluded from the project at the user's request to postpone generation.

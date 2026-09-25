# 2026 catalogue inventory

Reviewed: 2026-09-25

Source: [Flowin Price list 2026.pdf](../design/assets/flowin-price-list-2026.pdf) (14 pages). The workspace copy has the same SHA-256 hash as the supplied file in `E:\Downloads`. Page numbers below are PDF page numbers, including the cover.

This is a navigation and content inventory, **not** a transcription of every SKU or price. The PDF remains the source for exact tables. Blank printed cells mean **unconfirmed**, not zero or unavailable.

## Page map

| Pages | Range / material | Product structure visible in the PDF |
| --- | --- | --- |
| 1 | Cover | Flowin branding and broad piping-solutions message. |
| 2-5 | uPVC plumbing | Pipes: 3 m and 6 m, SCH-40/SCH-80, with a separate ASTM F-441-labelled group for larger sizes. Fittings: elbows, tees, reducers, couplers, MTA/FTA, end caps, unions, tank nipples, ball valves, step-over bends, brass-threaded fittings, solvent, and end plugs. The fittings section is labelled ASTM D-2467 SCH-80. |
| 6-9 | cPVC plumbing | Pipes: 3 m and 5 m; non-ISI and ISI-labelled SDR-11/SDR-13.5 groups, plus an ASTM F-441-labelled SCH-40/SCH-80 larger-size group. Fittings: elbows, tees, couplers, reducers, unions, MTA/FTA, caps, valves, nipples, brass-threaded fittings, connector bush, solvent, and concealed valve. Fittings are labelled ASTM D-2846 SDR-11. |
| 10 | SWR drainage — ring fit | Pipes: single/double socket, 0.6 m, 0.9 m, 1.2 m, 1.8 m, 3 m, and 6 m; 75 mm and 110 mm shown. Fittings include bends, door bends, tees, couplers, shoe bends, reducers, cleansing pipe, and rubber rings. |
| 11-12 | SWR drainage — self fit | Single-socket Type A pipes in 3 m and 6 m, 75 mm and 110 mm shown. Fittings include bends, tees, couplers, nahani trap, reducers, cleansing pipe, vent cowl, door cap, P-trap, Q-trap, and PVC solvent. |
| 13 | Agriculture | Pipes: 3 m and 6 m; 6/10 kg/cm²-labelled variants and ISI-labelled Class 2/Class 3 variants. Fittings include elbows, tees, couplers, back-flow fitting, and RRC coupler. |
| 14 | Back cover | Company name, website, social names, and printed certification/standard icons. Do not publish a certification claim based on artwork alone; obtain verification and approved wording. |

## Recommended website content hierarchy

`Range → system/variant → product family → size/length/packing options`

- **Range** is the top navigation: uPVC plumbing, cPVC plumbing, SWR drainage, agriculture.
- **System/variant** distinguishes materially different tables, such as SWR ring fit vs self fit, uPVC schedules, and cPVC SDR/ISI-labelled groups. Do not collapse variants into one generic product when specifications differ.
- **Product family** is the likely detail-page level: pipe, elbow, tee, coupler, valve, etc. Related variants can share a family page if its tables remain clear.
- **Options** represent sizes, lengths, socket types, schedules/classes, and packing. Model these as structured fields only after each table is checked against the PDF image.
- **Rate** will also appear in detailed family tables at the user's request, after visual verification against each PDF table. Leave cells that are blank in print blank on the website and flag them for client review. The PDF remains authoritative; future price-list changes require a web-table update.

This hierarchy is a proposal for chunk 4, not a locked implementation or a claim that every family needs its own page.

## Data-quality and approval flags

1. Some cells are visibly blank in the supplied PDF, notably cPVC union + N.R.V. and concealed-valve rates on page 9, and some fittings/packing cells on other pages. The user confirmed these products should remain on the website with those cells empty until client review. Never interpret blanks as `0`.
2. PDF text extraction can confuse inch marks, degree signs, decimal/rate separators, and two-column table order. Any size/packing table put on the web needs visual verification against the page, not copy-paste from extracted text.
3. Some printed labels appear inconsistent or misspelled (for example “OFFCET,” “SOKET,” and angle marks rendered like quotes). Use customer-friendly labels only after checking which names Flowin wants to retain.
4. The user approved existing imagery and permits generated images for gaps. The PDF contains product cutouts; the old site has more assets. Do not present a generated warehouse scene as a real Flowin facility.
5. The PDF back cover provides the company name and website/social names. The user has not yet provided the email or phone for the new site's enquiry CTA; the demo email is not approved contact data.
6. The catalogue combines “ISI” and ASTM wording in some headings. Reproduce only verified labels and avoid adding unverified compliance statements or technical advice.

## Decisions received for implementation

- Email or phone may be used later; exact details are pending. Until then, the homepage should direct users to the catalogue and show an honest contact placeholder, not a broken mail link.
- Existing assets are approved. The user permits reuse from `Old/` and generation of missing visuals.
- Build detailed family pages with verified size/packing/rate tables, not only broad range pages.
- Old-site claims and application descriptions are permitted as source copy. Keep claims attributable to `Old/` and do not invent stronger or more current-sounding statements; certification validity should still be checked before launch.
- Keep products with empty printed table cells on the site; show those cells empty and collect details during client review.

## Outcome of this chunk

The four-range navigation in the approved demo matches the supplied catalogue. The new catalogue is substantially broader than the legacy site's uPVC/cPVC-focused content, so the production site should follow this 2026 hierarchy rather than copy the old database schema. No product data has been imported into Astro yet.

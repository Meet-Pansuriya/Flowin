# On site full website redesign

2026-10-13 · branch `redesign/onsite-full-site` · baseline `7b1d630`

The customer approved the On site direction. The primary homepage now uses that direction without a theme selector. Existing exploration URLs remain as reference pages, outside the primary navigation.

## Delivered
- Shared navy/coral design, photo-led compositions, rounded controls and accessible navigation across every existing page.
- Four new range-overview implementations and a product directory spanning 19 existing family pages. Search, range filtering, result count and an empty-result state work in the browser.
- All 19 family pages retain their product URLs and catalogue tables, with redesigned heroes, photography, table surfaces and requirement links. Existing product photographs are used where available; generic application photos remain clearly labelled where approved product photographs are missing.
- About and Applications rebuilt in the approved design, with approved company facts and clearer trade-focused copy.
- Catalogue page with complete PDF opening, download and range-section links.
- Requirement preparation with family/range prefill from product pages, add/remove items, clipboard copy and text-file download. It prepares a list for an existing contact; it does not send a message.
- Visible keyboard focus, a skip link, Escape menu dismissal, desktop menu reset, responsive form controls and horizontally scrollable tables.

## Verification
- GitHub Pages build and structural link checker pass. Query-string links are resolved correctly by the checker.
- All 70 existing product table HTML signatures match the previous build, including printed blank cells. Existing catalogue data files and PDF remain unchanged.
- Browser checks covered the homepage, product directory, family tables, range overview, About, Applications, Catalogue and requirement preparation at desktop and phone widths.
- Tested search and no-result state, cPVC range filter, mobile menu/Escape dismissal, family-to-enquiry prefill, add/remove requirement items, clipboard copy and text download.

## Remaining source input
Confirmed phone/email/WhatsApp details are needed to add direct contact actions or enquiry submission. Missing SWR/agriculture product photography uses labelled application imagery. No stock feed, dealer pricing, distribution claims or testimonials were invented.

This branch is a local review version. The deployed site remains at the earlier three-theme release until this redesign is published.

# Project plan and checklist

Last updated: 2026-09-26

## What we are building

A responsive Flowin product-showcase website with a homepage, product-range and product-family browsing, useful verified product information, a prominent download of the official 2026 catalogue, and a clear enquiry path. The website itself is not a checkout or price/stock system. Content changes are expected to be infrequent, so the planned production architecture is Astro static output with TypeScript and local, versioned content. We will add a CMS or database only if a real editing requirement emerges.

## Boundaries

- No cart, checkout, customer accounts, live stock, or fabricated testimonials, statistics, certifications, or partner logos.
- Detailed family pages will show verified size, packing, and rate tables transcribed from the supplied 2026 PDF. The PDF remains the authoritative document; the web tables are a reviewed copy, not live prices. Leave printed blank cells empty for client follow-up, never `0`.
- Keep `Old/` intact as historical reference; do not make the new site depend on PHP/MySQL.
- The user approved use of existing imagery and permits generating missing images. Generated scenes may be used as illustrations, but must not be described as photographs of Flowin's actual premises or products unless that is true.
- Record unresolved product facts as questions rather than guessing.

## Small chunks

- [x] **0. Document the foundation.** Capture scope, visual direction, source hierarchy, checklist, and decisions before setup. Why: keeps later work anchored to the user's brief and actual catalogue.
- [x] **1. Minimal project setup.** Create only the Astro/TypeScript foundation in `site/`, confirm dev/build commands, and keep the legacy site and demo separate. Why: establish a working base before migrating UI or content.
- [x] **2. Catalogue inventory.** Map the four current ranges and product families from the 2026 PDF; list missing photos, specifications, contact details, and approvals. Why: page architecture should follow real data, not old database limitations.
- [x] **3. Homepage implementation.** Rebuild the approved demo as responsive components, using reviewed copy/assets and honest image labeling. Why: establish the design system in real code.
- [ ] **4. Product browsing.** Implement range and family pages, navigation, catalogue links, and relevant specification tables from verified data. Why: customers need to find products, not just see a landing page.
- [ ] **5. Content and asset review.** Replace concept photography where possible; check product names, claims, enquiry details, and PDF version with Flowin. Why: a polished site must also be accurate.
- [ ] **6. Quality and launch preparation.** Check mobile, accessibility, performance, metadata, broken links, URL/SEO migration, and deployment plan. Why: make it dependable before publishing.

Only one chunk should be implemented and verified at a time. Do not mark a chunk complete until its result is tested and noted here.

## Completed chunk: 1 — minimal setup

`site/` has a minimal Astro 7.3.5 application with strict TypeScript configuration and static output. `npm install` completed, `npm run build` produced `site/dist/index.html`, and the local dev server returned HTTP 200 with the expected setup page at `http://127.0.0.1:4321/`. This chunk does **not** include converting the demo, importing catalogue data, or publishing.

**Completed chunk: 3 - homepage.** The approved demo is now implemented in Astro with separate layout, header, range-card, and footer components. The logo, illustrative warehouse image, and 2026 PDF are served from `site/public/`. Contact details remain visibly pending; the demo's invented email was not carried over. The page has `noindex` until launch readiness. Production build passed; desktop and mobile browser checks, mobile-menu behavior, and local asset/PDF responses passed.

**Current chunk: 4 - product browsing.** Build the four-range navigation and detailed family pages in smaller substeps. Preserve printed blank cells exactly as empty. uPVC and cPVC now have working range links; SWR and agriculture cards remain non-clickable while their pages are pending, with the full catalogue available below the cards.

**Completed substep 4a:** [uPVC elbow family pattern](PRODUCT_PAGE_PATTERN.md). It established a reusable typed table, one real family route, and a working homepage link. The whole product-browsing chunk remains open.

**Completed substep 4b:** [uPVC range and tees](UPVC_RANGE_SLICE.md). The uPVC overview links only to live family routes; Tee/Cross tee use verified PDF page-2 tables and the shared family-page layout. Product browsing remains open.

**Completed substep 4c:** [uPVC pipes](UPVC_PIPES_SLICE.md). Four PDF page-2 pipe tables retain their separate length/group headings and SCH-40/SCH-80 rate columns. The overall product-browsing chunk is still open.

**Completed substep 4d:** [uPVC reducing tee](UPVC_REDUCING_TEE_SLICE.md). Its 20-row PDF page-3 table has a separate source link and retains four printed blank packing cells. Product browsing remains open.

**Completed substep 4e:** [cPVC overview and elbows](CPVC_START_SLICE.md). The second range has one live 14-row family page and an honest catalogue link for its pending pipe tables. Product browsing remains open.

**Completed substep 4f:** [cPVC non-ISI pipes](CPVC_PIPES_SLICE.md). The two PDF page-6 SDR tables are live with their printed rate precision. The ISI and ASTM F-441 pipe groups remain in the PDF; product browsing stays open.

**Next substep 4g:** choose either the next cPVC pipe variant group or a SWR range entry point after reviewing the catalogue structure. Document one bounded slice before coding; avoid implying the partial cPVC pipe page covers all variants.

## Action and decision log

| Date | Action / decision | Why | Result |
| --- | --- | --- | --- |
| 2026-09-25 | Record the brief, checklist, design guide, and source hierarchy before scaffolding. | The design and product data need durable references as implementation grows. | Documented in `docs/` and linked from `README.md`. |
| 2026-09-25 | Save the supplied editorial screenshot in `design/`. | A temporary attachment path is not a durable design reference. | `design/reference-editorial-site.png` is now the project-local reference. |
| 2026-09-25 | Isolate the new app in `site/`; preserve `Old/` and `design/`. | Avoid mixing the PHP site, visual prototype, and production application. | Created minimal Astro 7.3.5 site; no legacy files changed. |
| 2026-09-25 | Install dependencies, build, and request the local page. | Confirm setup actually runs before beginning catalogue work. | Install and static build passed; dev page returned HTTP 200. |
| 2026-09-25 | Initialize Git at the project root on `main`; ignore `Old/`, local secrets, dependencies, and generated output. | Version the new site, approved demo, and reference documents without committing legacy DB credentials or machine-specific artifacts. | Initial local snapshot committed as `8e611c7`; no remote configured. |
| 2026-09-25 | Inventory the complete 14-page 2026 PDF into `docs/CATALOGUE_INVENTORY.md`. | Define site navigation around current products and record gaps before coding product content. | Four ranges confirmed; system variants and data-quality flags mapped. No Astro content imported. |
| 2026-09-25 | Commit the catalogue inventory locally and note the configured `origin` remote. | Keep this chunk reviewable before UI work. | Local commit `5744796`; the branch is ahead of `origin/main` and has not been pushed by this task. |
| 2026-09-25 | Record the user's content decisions before homepage coding. | Avoid re-asking settled questions or silently following the earlier PDF-only price assumption. | Email/phone pending; approved existing/generated imagery; detailed pages requested; old-site claims permitted; blank catalogue cells stay blank for client review. |
| 2026-09-25 | Rebuild the approved demo in Astro components and serve the logo, illustrative image, and PDF locally. | Turn the visual north star into a maintainable homepage without inventing contact details or product destinations. | Build passed; desktop/mobile and menu checked in browser; homepage and assets returned HTTP 200. |
| 2026-09-25 | Build a first uPVC elbow detail page from PDF page 2, using an existing old-site product photo. | Validate the product-page and table pattern before repeating it across many families. | Two nine-row tables verified visually; anomaly retained and documented; desktop/mobile layouts and horizontal table scrolling checked. New image generation postponed. |
| 2026-09-26 | Add the uPVC range page and Tee/Cross tee detail page, reusing a family layout component. | Make range browsing functional while limiting data entry to a second verified PDF section. | Nine Tee and three Cross tee rows checked against PDF page 2; desktop/mobile and local route/asset checks passed. No new imagery generated. |
| 2026-09-26 | Add uPVC pipes with four distinct printed tables and a pipe-specific data shape. | Preserve separate 3 m/6 m lengths and SCH-40/SCH-80 rate columns without forcing them into the fittings schema. | Eighteen rows checked on PDF page 2; build, desktop/narrow layout and local route/asset checks passed. No image generation. |
| 2026-09-26 | Add a separate reducing-tee page from PDF page 3. | Preserve its longer paired-size table and make unprinted packing values visible for client review. | All 20 rows checked; four blank cells retained; build, desktop/mobile and local link/asset checks passed. No image generation. |
| 2026-09-26 | Open the cPVC range with a verified elbow family and parameterize the shared fittings layout. | Make a second homepage range navigable without publishing unchecked pipe and fitting tables. | Fourteen page-6 rows checked; production build, desktop/mobile and local page/asset checks passed. No image generation. |
| 2026-09-26 | Add the two cPVC non-ISI-labelled pipe tables from page 6. | Make the pipe card useful while keeping the different SDR, ISI and F-441 groups distinct. | Twelve rows checked; mixed rate precision preserved; build, desktop/mobile and route/asset checks passed. No image generation. |

## Open decisions for later chunks

- Add the final email and/or phone when supplied; neither is available yet. Do not infer them from the old site or the demo.
- Keep a distinction between real Flowin photographs/product cutouts and generated illustrative imagery.
- Pause new image generation for now at the user's request; use approved existing assets while building product pages.
- Agree on a review/update process for web rate tables whenever a new price list arrives.
- Choose hosting and URL redirects after the new page structure is known.
- Decide whether the legacy site needs a separate archival repository. It stays on disk but is excluded from the new repository because it contains database connection details.

# Project plan and checklist

Last updated: 2026-09-25

## What we are building

A responsive Flowin product-showcase website with a homepage, product-range and product-family browsing, useful verified product information, a prominent download of the official 2026 catalogue, and a clear enquiry path. The website itself is not a checkout or price/stock system. Content changes are expected to be infrequent, so the planned production architecture is Astro static output with TypeScript and local, versioned content. We will add a CMS or database only if a real editing requirement emerges.

## Boundaries

- No cart, checkout, customer accounts, live stock, or fabricated testimonials, statistics, certifications, or partner logos.
- Do not silently convert the PDF price list into web prices; the PDF remains the authoritative price document unless Flowin approves another source and update process.
- Keep `Old/` intact as historical reference; do not make the new site depend on PHP/MySQL.
- Treat the design-demo copy and generated image as concepts until reviewed.
- Record unresolved product facts as questions rather than guessing.

## Small chunks

- [x] **0. Document the foundation.** Capture scope, visual direction, source hierarchy, checklist, and decisions before setup. Why: keeps later work anchored to the user's brief and actual catalogue.
- [x] **1. Minimal project setup.** Create only the Astro/TypeScript foundation in `site/`, confirm dev/build commands, and keep the legacy site and demo separate. Why: establish a working base before migrating UI or content.
- [ ] **2. Catalogue inventory.** Map the four current ranges and product families from the 2026 PDF; list missing photos, specifications, contact details, and approvals. Why: page architecture should follow real data, not old database limitations.
- [ ] **3. Homepage implementation.** Rebuild the approved demo as responsive components, using reviewed copy/assets and honest image labeling. Why: establish the design system in real code.
- [ ] **4. Product browsing.** Implement range and family pages, navigation, catalogue links, and relevant specification tables from verified data. Why: customers need to find products, not just see a landing page.
- [ ] **5. Content and asset review.** Replace concept photography where possible; check product names, claims, enquiry details, and PDF version with Flowin. Why: a polished site must also be accurate.
- [ ] **6. Quality and launch preparation.** Check mobile, accessibility, performance, metadata, broken links, URL/SEO migration, and deployment plan. Why: make it dependable before publishing.

Only one chunk should be implemented and verified at a time. Do not mark a chunk complete until its result is tested and noted here.

## Completed chunk: 1 — minimal setup

`site/` has a minimal Astro 7.3.5 application with strict TypeScript configuration and static output. `npm install` completed, `npm run build` produced `site/dist/index.html`, and the local dev server returned HTTP 200 with the expected setup page at `http://127.0.0.1:4321/`. This chunk does **not** include converting the demo, importing catalogue data, or publishing.

**Next chunk:** catalogue inventory and content questions. Do this separately; do not build product pages from guessed entries.

## Action and decision log

| Date | Action / decision | Why | Result |
| --- | --- | --- | --- |
| 2026-09-25 | Record the brief, checklist, design guide, and source hierarchy before scaffolding. | The design and product data need durable references as implementation grows. | Documented in `docs/` and linked from `README.md`. |
| 2026-09-25 | Save the supplied editorial screenshot in `design/`. | A temporary attachment path is not a durable design reference. | `design/reference-editorial-site.png` is now the project-local reference. |
| 2026-09-25 | Isolate the new app in `site/`; preserve `Old/` and `design/`. | Avoid mixing the PHP site, visual prototype, and production application. | Created minimal Astro 7.3.5 site; no legacy files changed. |
| 2026-09-25 | Install dependencies, build, and request the local page. | Confirm setup actually runs before beginning catalogue work. | Install and static build passed; dev page returned HTTP 200. |
| 2026-09-25 | Initialize Git at the project root on `main`; ignore `Old/`, local secrets, dependencies, and generated output. | Version the new site, approved demo, and reference documents without committing legacy DB credentials or machine-specific artifacts. | Initial local snapshot staged for commit; no remote configured. |

## Open decisions for later chunks

- Confirm final contact email, phone/WhatsApp, address, and enquiry method before launch.
- Obtain approved product and facility photographs; generated imagery is currently illustrative only.
- Decide which product specifications should appear on web pages versus only in the PDF.
- Choose hosting and URL redirects after the new page structure is known.
- Decide whether the legacy site needs a separate archival repository. It stays on disk but is excluded from the new repository because it contains database connection details.

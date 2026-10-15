# Product imagery

Prepared 15 October 2026 at the user request using Kalson product photographs as edit targets. These are digitally edited illustrative assets, not original photographs of Flowin products. Catalogue data remains unchanged.

Source pages: https://www.kalsonplast.com/product/upvc, /product/cpvc, /product/swr, /product/swr-selfit, /product/agri.

Source assets under https://www.kalsonplast.com/assets/images/products/: fitting/uf1.jpg, fitting/cf1.jpg, fitting/sf1.jpg, fitting/sfselfr1.jpg, pipes/agrimain1.jpg. Originals retained under tmp/kalson-source for review.

Built-in imagegen edits: remove embossed Kalson markings from four fittings, preserve geometry and joint styles, center on pale cool gray background. No logos added to fittings. Agriculture pipes: replace printed Kalson marks with supplied Flowin logo, preserving pipes and sockets. User specifically requested logos on pipes only.

Outputs: site/public/images/upvc-elbow-clean.png, cpvc-elbow-clean.png, swr-ring-fit-clean.png, swr-self-fit-clean.png, agriculture-pipes-flowin.png. Homepage uses responsive WebP variants via Astro Image.

## Extended catalogue coverage

The same treatment is applied to all 19 product families and four range overview heroes. Individual family pages and directory cards share matching images. Pipe images carry Flowin branding; fitting images carry no branding. Generic radiator and irrigation photos are removed from product catalogue visuals. Application photography elsewhere remains unchanged.

Additional source filenames are recorded in `tmp/kalson-source/expanded-manifest.json`; the source prefix is `https://www.kalsonplast.com/assets/images/products/`. Imagegen prompts preserve the product geometry and joint type, remove Kalson branding and other printed markings, and center the object on a pale gray background. Pipe edits include the supplied Flowin logo as a separate reference. Published assets are optimized WebP files under `site/public/images/products/`. These remain digitally edited product illustrations rather than verified documentary photographs of Flowin stock.

## uPVC background refinement

User approved the darker warm-gray sample for uPVC only. Five uPVC assets use a warm stone-gray backdrop around #B7B5B0; pipe Flowin marks and blue stripes are retained, fittings stay unbranded and white. Built-in imagegen prompt: change only the background and ground to the approved sample, preserve product shape, angle, scale and neutral white material, with natural soft shadow. The approved elbow sample is reused directly. Other range image files remain unchanged.


## Applications imagery refresh — 15 October 2026

Applications now uses three generated illustrative scenes under `site/public/images/applications/`: plumbing.webp, drainage.webp and agriculture.webp. They portray Indian residential plumbing, exterior drainage and agricultural irrigation with a coordinated warm natural-light style. These are generic application scenes, not documentary photographs of Flowin installations or claims about specific product performance. Alt text identifies them as illustrative. Product catalogue photographs remain unchanged. Original generated PNGs are retained in the Codex generated-images directory; the site serves optimized 1400-pixel WebP copies (approximately 125, 166 and 256 KB).

Page improvements include direct application anchors, separate Ring-fit/Self-fit links, relevant product-range links and a short order-preparation guide. Verified with the Cloudflare production build, link/SEO/catalogue validation and desktop/mobile visual inspection. Local only.


## Homepage standards marks — 15 October 2026

User supplied ISI mark images for IS 15778 (CM/L 7600240611) and IS 4985 (CM/L 7600240712). WebP copies in `site/public/images/standards/` preserve the complete supplied artwork, proportions and numbers; no generative redraw or logo alteration. Homepage places the marks after the range grid, before order preparation. Scope labels follow BIS standard titles: cPVC pipes and PVC-U water-supply pipes. This does not extend certification to fittings, SWR or all product variants. Standard scope reference: https://www.bis.gov.in/wp-content/uploads/2021/04/lead-ban-notification.pdf . Licence numbers are user-supplied; active licence status has not been independently checked.


## Supplied CorelDRAW logo — 15 October 2026

Source: user-supplied `E:/Downloads/Flowin.cdr.zip`, a ZIP-based CorelDRAW document. Preserved as `design/assets/flowin-logo-supplied/Flowin.cdr`. Inkscape 1.4.2 portable CLI imported the actual vector paths and exported plain SVG, with drawing bounds and transparent background. No tracing, generative recreation or preview enlargement was used. The original wordmark, red/black colours and registration/copyright symbols are retained. Public assets: `flowin-logo.svg` for homepage hero, header and footer; `flowin-logo.png` (1200 pixels wide, transparent) for Organization structured data. Homepage header remains without a logo as previously requested. Source has no Pipes & Fittings subline. Previous `logo.png` retained for compatibility/history.

# Search visibility and reach

Updated 14 October 2026. Audience: plumbers and dealers across India. Primary website: https://flowinpipeandfitting.com/.

## Audit and implementation

The live site initially returned `noindex` on every page, had no canonical links, no XML sitemap and no JSON-LD. These were blocking or missing search foundations, not evidence of a measured ranking problem.

Production now permits indexing on 29 pages; 404 and Cloudflare branch previews stay noindex. Every public page points to its clean primary-domain canonical URL. Builds create `/sitemap.xml` and `/robots.txt`. Company, website and webpage structured data uses only approved company facts. Titles identify the four catalogue ranges; social previews use the original Flowin product photograph. No live offers, reviews or stock claims are marked up.

The hero is served as responsive WebP (640, 960, 1440 and 1774 px). Largest generated variant is approximately 62 KB, compared with approximately 1.7 MB for the original PNG. This reduces image transfer size; it is not a measured Core Web Vitals result.

`npm run build:cloudflare` checks page structure, local links, indexing directives, canonical uniqueness, JSON-LD and sitemap coverage. GitHub Pages compatibility and preview noindex behavior were also checked.

Google Search Console domain ownership was verified using a DNS TXT record. The HTTPS sitemap was successfully processed and Google discovered 29 pages. Google's live homepage test reported that the page can be indexed; the homepage indexing request was accepted into the priority crawl queue. These signals do not mean all pages are already indexed. Historical HTTP sitemap entries remain in the property; the current submitted sitemap is `https://flowinpipeandfitting.com/sitemap.xml`.

## Contact evidence

The 16-page 2026 catalogue contains no phone, email or WhatsApp number. Its back cover supplies the website, Instagram `flowinpipeandfittings`, and Facebook display name `Flowin Pipe Fittings`. The Instagram profile link is exposed in the footer. Direct call/WhatsApp and local-business address markup await real business contact details. The catalogue's blank dealer panel is not a contact address.

## Search targets and destinations

These are content priorities, not measured keyword-volume claims.

| Search intent | Destination |
| --- | --- |
| Flowin pipes and fittings, Flowin catalogue 2026 | Homepage and catalogue |
| uPVC pipes and fittings, uPVC pipe sizes | uPVC range and pipes |
| cPVC pipes and fittings, cPVC SDR pipe sizes | cPVC range and pipes |
| SWR pipes and fittings, ring-fit vs self-fit catalogue | SWR range and separate families |
| agricultural pipe sizes, agricultural fittings | Agriculture range and families |
| fitting family + size/packing/rate | Existing family tables |

## Practical reach plan

1. **First week:** Submit the primary-domain sitemap in verified Google Search Console. Request homepage indexing. Check indexing reports and query impressions as data arrives. Obtain the official sales contact so discovery can lead to a useful enquiry.
2. **Weekly product posts:** Publish one accurate product-family reference and one catalogue/how-to-list post on the existing company Instagram account. Link to the matching family page, rather than always to the homepage. Use original product photographs and catalogue dimensions; avoid claims about performance, certification or stock beyond verified scope.
3. **Trade distribution:** Ask existing dealers to link to Flowin's range/catalogue pages from their own business sites and share product references with their own customers. Prepare outreach first; do not mass-message or purchase backlinks. No outreach has been sent by this implementation.
4. **After real search data arrives:** Improve pages receiving impressions but few clicks, using their actual query language. Publish detailed guides only where they answer a distinct customer question, with appropriate technical review. Avoid duplicate city pages that suggest nonexistent offices or dealers.
5. **Review after 30 days:** Compare indexed pages, non-brand impressions, clicks, click-through rate and the queries/landing pages that are gaining visibility. Record catalogue and enquiry usage once event measurement is configured. Enquiry-list preparation alone is not a completed sales lead.

## Ready-to-use post drafts

**Catalogue launch:** “Four Flowin ranges. One product reference. Browse uPVC, cPVC, SWR and agricultural pipes and fittings, then check sizes and packing in the 2026 catalogue. Open the catalogue: https://flowinpipeandfitting.com/catalogue/?utm_source=instagram&utm_medium=organic_social&utm_campaign=catalogue_2026”

**Dealer reference:** “A product enquiry starts with the details: range, family, size and quantity. Explore Flowin's family pages and keep the catalogue close while preparing your next requirement. Browse products: https://flowinpipeandfitting.com/products/?utm_source=instagram&utm_medium=organic_social&utm_campaign=product_reference”

**SWR reference:** “Working with an SWR product list? Browse ring-fit and self-fit separately. Compare the pipe and fitting families, sizes and packing before recording the requirement. Explore SWR: https://flowinpipeandfitting.com/products/swr/?utm_source=instagram&utm_medium=organic_social&utm_campaign=swr_reference”

Organic search growth needs crawling and accumulated performance data. Indexability, structured data and sitemap submission do not guarantee rankings or rich-result placement. No baseline organic traffic or search volume has yet been measured.

# Sources of truth and anti-guessing rules

Last updated: 2026-09-25

| Need to verify | Check first | Important limitation |
| --- | --- | --- |
| Site purpose and non-goals | The user's decisions summarized in [the project plan](PROJECT_PLAN.md) | Ask if a new feature changes this scope. |
| Current ranges, names, sizes, packing, prices | [The copied 2026 price list](../design/assets/flowin-price-list-2026.pdf); original: `E:\Downloads\Flowin Price list 2026.pdf` | The PDF is the current supplied commercial source. Transcription needs checking; do not invent missing specifications. |
| Visual direction and layout | [Approved HTML demo](../design/flowin-demo.html), [design guide](DESIGN_GUIDE.md), [Stitch brief](../design/stitch-brief.md), [reference screenshot](../design/reference-editorial-site.png) | Demo copy and concept imagery are not verified company facts. |
| Flowin logo and previously published content | `Old/images/logo.png` and `Old/` | Legacy content and its MySQL dump may be outdated; never override the 2026 PDF with it. |
| Company identity, contact details, claims, photos | Flowin approval / authentic supplied assets | If unconfirmed, mark as pending; do not fill gaps with plausible-sounding claims. |
| Build and framework behavior | Astro's official documentation and actual local build/test results | Verify version-sensitive behavior against installed dependencies. |

When sources conflict: pause that claim, record the conflict, and request confirmation. Do not silently pick whichever source makes the design easier. Keep a traceable link from each published product fact to the catalogue or approval. The generated `design/assets/flowin-warehouse-concept.png` is a visual placeholder, not evidence of Flowin's premises.


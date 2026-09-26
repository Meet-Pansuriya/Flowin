# Flowin Astro site

This is the isolated Astro production-site project. The homepage implements the approved editorial design. The uPVC overview is at `/products/upvc/`, with detailed pipe, elbow, tee and reducing-tee pages. The cPVC overview is at `/products/cpvc/`, with elbow and pipe pages; all six pipe tables printed on PDF page 6 are now live. The SWR overview at `/products/swr/` keeps ring-fit and self-fit pipes separate, with their page-10 and page-11 tables respectively. The fittings table pattern is documented in [the product-page pattern](../docs/PRODUCT_PAGE_PATTERN.md), and the pipe slices in [uPVC](../docs/UPVC_PIPES_SLICE.md), [cPVC non-ISI](../docs/CPVC_PIPES_SLICE.md), [cPVC ISI](../docs/CPVC_ISI_PIPES_SLICE.md), [cPVC schedule](../docs/CPVC_SCHEDULE_PIPES_SLICE.md), [SWR ring-fit](../docs/SWR_RING_FIT_SLICE.md), and [SWR self-fit](../docs/SWR_SELF_FIT_PIPES_SLICE.md). Other families remain to be built. Email and phone are intentionally pending, and pages are `noindex` until launch readiness.

Requires Node.js 22.12.0 or newer (even-numbered release). From this directory:

```sh
npm install
npm run dev
npm run build
npm run preview
```

See [the project plan](../docs/PROJECT_PLAN.md) before adding pages or content. Product information comes from [the source hierarchy](../docs/SOURCES_OF_TRUTH.md); visual direction comes from [the design guide](../docs/DESIGN_GUIDE.md).

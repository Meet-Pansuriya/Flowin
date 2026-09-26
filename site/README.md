# Flowin Astro site

This is the isolated Astro production-site project. The homepage implements the approved editorial design. The uPVC overview is at `/products/upvc/`, with detailed elbow and tee pages; the table pattern is documented in [the product-page pattern](../docs/PRODUCT_PAGE_PATTERN.md). Other families remain to be built. Email and phone are intentionally pending, and pages are `noindex` until launch readiness.

Requires Node.js 22.12.0 or newer (even-numbered release). From this directory:

```sh
npm install
npm run dev
npm run build
npm run preview
```

See [the project plan](../docs/PROJECT_PLAN.md) before adding pages or content. Product information comes from [the source hierarchy](../docs/SOURCES_OF_TRUTH.md); visual direction comes from [the design guide](../docs/DESIGN_GUIDE.md).

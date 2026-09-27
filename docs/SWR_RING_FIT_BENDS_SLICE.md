# SWR ring-fit bends - substep 4k

## Decision before implementation

Source: `design/assets/flowin-price-list-2026.pdf`, PDF page 10, `SWR FITTING (RING FIT)` section. Publish a dedicated `/products/swr/ring-fit-bends/` page with exactly two variants: `BEND 87.5°` and `DOOR BEND 87.5°`. Each has 75 mm / 2 1/2 inch and 110 mm / 4 inch rows, with `Packing In Box` and `Rate Per Pc.`. Use a distinct box-packing table component; the existing plumbing fitting component says bag packing and is not valid here.

Why: this is one complete, narrow SWR fitting family. The 45° shoe bend, tees, reducers, rubber rings and self-fit fittings remain catalogue-only. Use a labelled code-native illustration, not a generated or unverified product photograph.

## Verification checklist

- [x] Compare all four size rows, four box-packing values, and four rates with rendered PDF page 10.
- [x] Check the SWR overview link and the PDF page-10 link in generated HTML.
- [x] Run the production build and check the working tree.
- [x] Visually check desktop/mobile in the browser.

## Result

`/products/swr/ring-fit-bends/` now shows separate 87.5-degree Bend and Door Bend tables, with the printed 75 mm / 2 1/2-inch and 110 mm / 4-inch rows, box packing, and normalized decimal rates. The SWR overview links to the page and now distinguishes this completed fitting family from the remaining catalogue-only fittings. The values were visually checked against rendered PDF page 10; the production build, generated route, desktop layout, and 390 px mobile layout passed. The prior mobile QA follow-ups for the ring-fit and self-fit pipe pages were completed in substep 4l.

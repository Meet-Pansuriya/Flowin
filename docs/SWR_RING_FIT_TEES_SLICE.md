# SWR ring-fit tees - substep 4l

## Scope and source rules

Source: `design/assets/flowin-price-list-2026.pdf`, PDF page 10, `SWR FITTING (RING FIT)` section. Publish `/products/swr/ring-fit-tees/` with exactly two variants: `SINGLE TEE` and `DOOR TEE`. Each has 75 mm / 2 1/2 inch and 110 mm / 4 inch rows, with `Packing In Box` and `Rate Per Pc.`.

Treat all printed labels as catalogue labels, not independent certification claims. Preserve the two tables separately, use the box-packing component, normalize the PDF's `=` rate separator to `.`, and do not infer currency or any missing value. Other ring-fit and self-fit fittings remain catalogue-only.

## Verification checklist

- [x] Compare all four size rows, four box-packing values, and four rates with rendered PDF page 10.
- [x] Check the SWR overview link and PDF page-10 links in generated HTML.
- [x] Run the production build and check the working tree.
- [x] Visually check desktop/mobile in the browser.

## Result

The new page keeps Single Tee and Door Tee distinct, with four verified rows and box-packing terminology matching the source. The page is linked from the SWR overview, and prior mobile browser QA for ring-fit and self-fit pipe pages was also completed in this pass.

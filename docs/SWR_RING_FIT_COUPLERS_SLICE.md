# SWR ring-fit couplers - substep 4m

## Scope and source rules

Source: `design/assets/flowin-price-list-2026.pdf`, PDF page 10, `SWR FITTING (RING FIT)` section. Publish `/products/swr/ring-fit-couplers/` with the single `COUPLER` table: 75 mm / 2 1/2 inch and 110 mm / 4 inch, with `Packing In Box` and `Rate Per Pc.`.

Treat the printed heading as a catalogue label, not an independent certification claim. Use the box-packing component, normalize the PDF's `=` rate separator to `.`, and do not infer currency or any missing value. Other ring-fit and self-fit fittings remain catalogue-only.

## Verification checklist

- [x] Compare both size rows, both box-packing values, and both rates with rendered PDF page 10.
- [x] Check the SWR overview link and PDF page-10 links in generated HTML.
- [x] Run the production build and check the working tree.
- [x] Visually check desktop/mobile in the browser.

## Result

The new coupler page preserves the single printed table, with two verified rows and box-packing terminology matching the source. It is linked from the SWR overview and uses a labelled code-native illustration rather than an unverified product photo.

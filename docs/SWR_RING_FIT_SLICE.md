# SWR ring-fit start — substep 4i

## Decision before implementation

Source: `design/assets/flowin-price-list-2026.pdf`, PDF page 10. Open the SWR drainage range with separate ring-fit and self-fit navigation. In this slice, publish only the six ring-fit pipe length tables (6, 3, 1.8, 1.2, 0.9 and 0.6 m), each with 75/110 mm sizes and separate single-/double-socket rates. The fitting tables on page 10 and self-fit system on pages 11–12 remain catalogue links until checked in later slices.

Why: the two joint systems and their rate tables are different; one generic SWR pipe table would misrepresent the printed catalogue. No new imagery is generated. A code-native pipe illustration may be used in place of an unverified product photograph.

## Verification checklist

- [x] Compare all 12 size rows and 24 rates with the rendered source page.
- [x] Check homepage to SWR to ring-fit pipes links and catalogue anchors in generated HTML.
- [x] Run production build and inspect desktop layout.
- [ ] Recheck mobile table layout in browser. Browser access was blocked after the power cut; this remains a QA follow-up.
- [x] Record results in the project plan; leave remaining SWR families pending.

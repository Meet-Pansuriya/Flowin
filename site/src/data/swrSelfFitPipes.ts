// Source: Flowin Price list 2026.pdf, PDF page 11, SWR PIPE (SELF FIT).
// Only the printed SINGLE SOCKET TYPE - A pipe tables are represented.
// Rates are per piece as printed; no currency or packing has been inferred.
export interface SwrSelfFitPipeGroup {
  id: string;
  length: string;
  feet: string;
  rows: { inch: string; mm: string; rate: string }[];
}

export const swrSelfFitPipes: SwrSelfFitPipeGroup[] = [
  { id: 'six-metre', length: '6 m', feet: '20 feet', rows: [
    { inch: '2 1/2″', mm: '75', rate: '590.50' },
    { inch: '4″', mm: '110', rate: '1082.70' },
  ] },
  { id: 'three-metre', length: '3 m', feet: '10 feet', rows: [
    { inch: '2 1/2″', mm: '75', rate: '298.00' },
    { inch: '4″', mm: '110', rate: '544.00' },
  ] },
];

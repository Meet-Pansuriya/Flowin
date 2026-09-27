export interface SwrRingFitBendRow {
  inch: string;
  mm: string;
  boxPacking: string;
  rate: string;
}

export interface SwrRingFitBendVariant {
  id: string;
  name: string;
  rows: SwrRingFitBendRow[];
}

// Source: revised Flowin FPPL Price List 2026, PDF page 11, SWR FITTING (RING FIT).
// The source prints rates with "=" as the decimal separator. These verified
// values use "."; no currency or packing value has been inferred.
export const swrRingFitBends: SwrRingFitBendVariant[] = [
  {
    id: 'bend-87-5',
    name: 'Bend 87.5°',
    rows: [
      { inch: '2 1/2″', mm: '75', boxPacking: '96', rate: '42.20' },
      { inch: '4″', mm: '110', boxPacking: '36', rate: '83.30' },
    ],
  },
  {
    id: 'door-bend-87-5',
    name: 'Door bend 87.5°',
    rows: [
      { inch: '2 1/2″', mm: '75', boxPacking: '80', rate: '54.20' },
      { inch: '4″', mm: '110', boxPacking: '30', rate: '107.30' },
    ],
  },
];

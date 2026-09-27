export interface SwrRingFitTeeRow {
  inch: string;
  mm: string;
  boxPacking: string;
  rate: string;
}

export interface SwrRingFitTeeVariant {
  id: string;
  name: string;
  rows: SwrRingFitTeeRow[];
}

// Source: revised Flowin FPPL Price List 2026, PDF page 11, SWR FITTING (RING FIT).
// The source prints rates with "=" as the decimal separator. These verified
// values use "."; no currency or packing value has been inferred.
export const swrRingFitTees: SwrRingFitTeeVariant[] = [
  {
    id: 'single-tee',
    name: 'Single tee',
    rows: [
      { inch: '2 1/2″', mm: '75', boxPacking: '65', rate: '57.30' },
      { inch: '4″', mm: '110', boxPacking: '26', rate: '108.30' },
    ],
  },
  {
    id: 'door-tee',
    name: 'Door tee',
    rows: [
      { inch: '2 1/2″', mm: '75', boxPacking: '52', rate: '70.80' },
      { inch: '4″', mm: '110', boxPacking: '20', rate: '135.40' },
    ],
  },
];

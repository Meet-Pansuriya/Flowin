export interface SwrRingFitCouplerRow {
  inch: string;
  mm: string;
  boxPacking: string;
  rate: string;
}

export interface SwrRingFitCouplerVariant {
  id: string;
  name: string;
  rows: SwrRingFitCouplerRow[];
}

// Source: revised Flowin FPPL Price List 2026, PDF page 11, SWR FITTING (RING FIT).
// The source prints rates with "=" as the decimal separator. These verified
// values use "."; no currency or packing value has been inferred.
export const swrRingFitCouplers: SwrRingFitCouplerVariant[] = [
  {
    id: 'coupler',
    name: 'Coupler',
    rows: [
      { inch: '2 1/2″', mm: '75', boxPacking: '175', rate: '30.20' },
      { inch: '4″', mm: '110', boxPacking: '72', rate: '56.30' },
    ],
  },
];

export interface SwrRingFitShoeBendRow { inch: string; mm: string; boxPacking: string; rate: string; }
export interface SwrRingFitShoeBendVariant { id: string; name: string; rows: SwrRingFitShoeBendRow[]; }

// Source: revised Flowin FPPL Price List 2026, PDF page 11, SWR FITTING (RING FIT).
// The source prints rates with "=" as the decimal separator; verified values use ".".
export const swrRingFitShoeBends: SwrRingFitShoeBendVariant[] = [{
  id: 'shoe-bend-45', name: 'Shoe bend 45°', rows: [
    { inch: '2 1/2″', mm: '75', boxPacking: '125', rate: '36.70' },
    { inch: '4″', mm: '110', boxPacking: '48', rate: '67.20' },
  ],
}];

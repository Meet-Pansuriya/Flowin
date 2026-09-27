export interface SwrRingFitRemainingFittingRow { inch: string; mm: string; boxPacking: string; rate: string; }
export interface SwrRingFitRemainingFittingVariant { id: string; name: string; rows: SwrRingFitRemainingFittingRow[]; }

// Source: revised Flowin FPPL Price List 2026, PDF page 11, SWR FITTING (RING FIT).
// The source prints rates with "=" as the decimal separator; verified values use ".".
export const swrRingFitRemainingFittings: SwrRingFitRemainingFittingVariant[] = [
  { id: 'double-tee', name: 'Double tee', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '44', rate: '68.80' }, { inch: '4″', mm: '110', boxPacking: '16', rate: '129.20' }] },
  { id: 'reducer-tee', name: 'Reducer tee', rows: [{ inch: '4″ × 2 1/2″', mm: '110 × 75', boxPacking: '26', rate: '100.00' }] },
  { id: 'reducer-tee-door', name: 'Reducer tee door', rows: [{ inch: '4″ × 2 1/2″', mm: '110 × 75', boxPacking: '20', rate: '117.70' }] },
  { id: 'offset-reducer', name: 'Offset reducer', rows: [{ inch: '4″ × 2 1/2″', mm: '110 × 75', boxPacking: '112', rate: '53.10' }] },
  { id: 'cleansing-pipe', name: 'Cleansing pipe', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '96', rate: '59.40' }, { inch: '4″', mm: '110', boxPacking: '30', rate: '114.60' }] },
  { id: 'rubber-ring', name: 'Rubber ring', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '10', rate: '8.00' }, { inch: '4″', mm: '110', boxPacking: '10', rate: '11.00' }] },
];

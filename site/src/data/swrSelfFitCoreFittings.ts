export interface SwrSelfFitCoreFittingRow { inch: string; mm: string; boxPacking: string; rate: string; }
export interface SwrSelfFitCoreFittingVariant { id: string; name: string; rows: SwrSelfFitCoreFittingRow[]; }

// Source: revised Flowin FPPL Price List 2026, PDF page 12, SWR FITTING (SELF FIT).
// The source prints rates with "=" as the decimal separator; verified values use ".".
export const swrSelfFitCoreFittings: SwrSelfFitCoreFittingVariant[] = [
  { id: 'bend-87-5', name: 'Bend 87.5°', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '120', rate: '33.90' }, { inch: '4″', mm: '110', boxPacking: '40', rate: '72.90' }] },
  { id: 'door-bend-87-5', name: 'Door bend 87.5°', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '112', rate: '45.80' }, { inch: '4″', mm: '110', boxPacking: '34', rate: '96.90' }] },
  { id: 'single-tee', name: 'Single tee', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '72', rate: '49.00' }, { inch: '4″', mm: '110', boxPacking: '26', rate: '97.90' }] },
  { id: 'door-tee', name: 'Door tee', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '63', rate: '62.50' }, { inch: '4″', mm: '110', boxPacking: '20', rate: '125.00' }] },
  { id: 'coupler', name: 'Coupler', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '208', rate: '21.90' }, { inch: '4″', mm: '110', boxPacking: '72', rate: '45.80' }] },
  { id: 'shoe-bend-45', name: 'Shoe bend 45°', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '132', rate: '28.30' }, { inch: '4″', mm: '110', boxPacking: '50', rate: '56.80' }] },
  { id: 'double-tee', name: 'Double tee', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '51', rate: '60.40' }, { inch: '4″', mm: '110', boxPacking: '20', rate: '118.80' }] },
  { id: 'nahani-trap', name: 'Nahani trap', rows: [{ inch: '4″ × 2 1/2″', mm: '110 × 75', boxPacking: '60', rate: '80.00' }, { inch: '4″ × 3″', mm: '110 × 90', boxPacking: '50', rate: '90.00' }, { inch: '4″ × 4″', mm: '110 × 110', boxPacking: '48', rate: '95.00' }] },
  { id: 'reducer-door-tee', name: 'Reducer door tee', rows: [{ inch: '4″ × 2 1/2″', mm: '110 × 75', boxPacking: '20', rate: '107.30' }] },
  { id: 'reducer-tee', name: 'Reducer tee', rows: [{ inch: '4″ × 2 1/2″', mm: '110 × 75', boxPacking: '26', rate: '89.60' }] },
];

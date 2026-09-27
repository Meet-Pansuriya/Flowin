import type { SwrSelfFitCoreFittingVariant } from './swrSelfFitCoreFittings';

// Revised FPPL 2026, PDF page 13. Empty strings reproduce unprinted cells.
export const swrSelfFitAccessories: SwrSelfFitCoreFittingVariant[] = [
  { id: 'cleansing-pipe', name: 'Cleansing pipe', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '84', rate: '51.00' }, { inch: '4″', mm: '110', boxPacking: '32', rate: '104.20' }] },
  { id: 'offset-reducer', name: 'Offset reducer', rows: [{ inch: '4″ × 2 1/2″', mm: '110 × 75', boxPacking: '100', rate: '42.70' }] },
  { id: 'vent-cowl', name: 'Vent cowl', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '', rate: '' }, { inch: '3″', mm: '90', boxPacking: '', rate: '' }, { inch: '4″', mm: '110', boxPacking: '', rate: '' }] },
  { id: 'door-cap', name: 'Door cap', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '400', rate: '15.00' }, { inch: '4″', mm: '110', boxPacking: '300', rate: '25.00' }] },
  { id: 'p-trap', name: 'P-Trap', rows: [{ inch: '4″ × 4″', mm: '110 × 110', boxPacking: '20', rate: '180.00' }] },
  { id: 'q-trap', name: 'Q-Trap', rows: [{ inch: '4″ × 4″', mm: '110 × 110', boxPacking: '17', rate: '193.00' }] },
];

export const pvcSolvent = [
  { quantity: '59 ML', packing: '30 × 16', masterPacking: '480', rate: '48' },
  { quantity: '118 ML', packing: '24 × 10', masterPacking: '240', rate: '75' },
  { quantity: '237 ML', packing: '15 × 10', masterPacking: '150', rate: '130' },
  { quantity: '500 ML', packing: '12 × 4', masterPacking: '48', rate: '238' },
  { quantity: '1 LTR', packing: '6 × 4', masterPacking: '24', rate: '432' },
];

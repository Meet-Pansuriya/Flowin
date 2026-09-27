// Revised FPPL 2026, PDF page 14. Blank rates are unprinted in the source.
export interface AgriculturePipeRow { inch: string; mm: string; firstRate: string; secondRate: string; }
export interface AgriculturePipeGroup { id: string; name: string; firstLabel: string; secondLabel: string; rows: AgriculturePipeRow[]; }
export interface AgricultureFittingRow { inch: string; mm: string; boxPacking: string; rate: string; }
export interface AgricultureFittingVariant { id: string; name: string; rows: AgricultureFittingRow[]; }

export const agriculturePipes: AgriculturePipeGroup[] = [
  { id: 'pipes-6m', name: 'Agriculture pipes — 6 m', firstLabel: '6 KG/CM² rate / pc.', secondLabel: '10 KG/CM² rate / pc.', rows: [
    { inch: '1″', mm: '32', firstRate: '', secondRate: '333.30' }, { inch: '1 1/4″', mm: '40', firstRate: '', secondRate: '406.50' }, { inch: '1 1/2″', mm: '50', firstRate: '341.70', secondRate: '520.80' }, { inch: '2″', mm: '63', firstRate: '495.80', secondRate: '666.70' }, { inch: '2 1/2″', mm: '75', firstRate: '690.70', secondRate: '926.30' }, { inch: '3″', mm: '90', firstRate: '910.40', secondRate: '1325.00' }, { inch: '4″', mm: '110', firstRate: '1136.00', secondRate: '1462.50' },
  ] },
  { id: 'pipes-3m', name: 'Agriculture pipes — 3 m', firstLabel: '6 KG/CM² rate / pc.', secondLabel: '10 KG/CM² rate / pc.', rows: [
    { inch: '1″', mm: '32', firstRate: '', secondRate: '166.70' }, { inch: '1 1/4″', mm: '40', firstRate: '', secondRate: '203.00' }, { inch: '1 1/2″', mm: '50', firstRate: '170.80', secondRate: '260.40' }, { inch: '2″', mm: '63', firstRate: '247.90', secondRate: '333.30' }, { inch: '2 1/2″', mm: '75', firstRate: '345.30', secondRate: '463.10' }, { inch: '3″', mm: '90', firstRate: '455.20', secondRate: '662.50' }, { inch: '4″', mm: '110', firstRate: '568.00', secondRate: '731.30' },
  ] },
  { id: 'isi-pipes-6m', name: 'Agriculture pipes ISI — 6 m', firstLabel: 'Class-2 4 KG/CM² rate / pc.', secondLabel: 'Class-3 6 KG/CM² rate / pc.', rows: [
    { inch: '1 1/4″', mm: '40', firstRate: '', secondRate: '392.00' }, { inch: '1 1/2″', mm: '50', firstRate: '', secondRate: '502.10' }, { inch: '2″', mm: '63', firstRate: '587.50', secondRate: '802.10' }, { inch: '2 1/2″', mm: '75', firstRate: '822.90', secondRate: '1135.40' }, { inch: '3″', mm: '90', firstRate: '1145.80', secondRate: '1625.00' }, { inch: '4″', mm: '110', firstRate: '1666.70', secondRate: '2354.20' },
  ] },
  { id: 'isi-pipes-3m', name: 'Agriculture pipes ISI — 3 m', firstLabel: 'Class-2 4 KG/CM² rate / pc.', secondLabel: 'Class-3 6 KG/CM² rate / pc.', rows: [
    { inch: '1 1/4″', mm: '40', firstRate: '', secondRate: '196.00' }, { inch: '1 1/2″', mm: '50', firstRate: '', secondRate: '251.00' }, { inch: '2″', mm: '63', firstRate: '293.80', secondRate: '401.00' }, { inch: '2 1/2″', mm: '75', firstRate: '411.50', secondRate: '567.70' }, { inch: '3″', mm: '90', firstRate: '572.90', secondRate: '812.50' }, { inch: '4″', mm: '110', firstRate: '833.30', secondRate: '1177.00' },
  ] },
];

export const agricultureFittings: AgricultureFittingVariant[] = [
  { id: 'elbow', name: 'Elbow', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '150', rate: '25.00' }, { inch: '3″', mm: '90', boxPacking: '88', rate: '36.00' }, { inch: '4″', mm: '110', boxPacking: '45', rate: '60.00' }] },
  { id: 'tee', name: 'Tee', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '102', rate: '34.40' }, { inch: '3″', mm: '90', boxPacking: '66', rate: '51.00' }, { inch: '4″', mm: '110', boxPacking: '32', rate: '90.60' }] },
  { id: 'coupler', name: 'Coupler', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '208', rate: '22.00' }, { inch: '3″', mm: '90', boxPacking: '150', rate: '27.00' }, { inch: '4″', mm: '110', boxPacking: '72', rate: '46.00' }] },
  { id: 'elbow-45', name: 'Elbow 45°', rows: [{ inch: '2 1/2″', mm: '75', boxPacking: '170', rate: '24.00' }, { inch: '3″', mm: '90', boxPacking: '110', rate: '32.30' }, { inch: '4″', mm: '110', boxPacking: '52', rate: '52.00' }] },
  { id: 'back-flow', name: 'Back Flow', rows: [{ inch: '2″', mm: '63', boxPacking: '369', rate: '33.00' }, { inch: '2 1/2″', mm: '75', boxPacking: '378', rate: '38.00' }, { inch: '3″', mm: '90', boxPacking: '240', rate: '48.00' }, { inch: '4″', mm: '110', boxPacking: '140', rate: '55.00' }, { inch: '5″', mm: '140', boxPacking: '84', rate: '92.00' }, { inch: '6″', mm: '160', boxPacking: '60', rate: '130.00' }] },
  { id: 'rrc-coupler-4kg', name: 'RRC Coupler — 4 KG', rows: [{ inch: '2″', mm: '63', boxPacking: '140', rate: '101.30' }, { inch: '2 1/2″', mm: '75', boxPacking: '95', rate: '141.70' }, { inch: '3″', mm: '90', boxPacking: '60', rate: '204.20' }, { inch: '4″', mm: '110', boxPacking: '35', rate: '310.40' }, { inch: '5″', mm: '140', boxPacking: '20', rate: '535.40' }, { inch: '6″', mm: '160', boxPacking: '15', rate: '758.30' }] },
];

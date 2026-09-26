export interface ProductRow {
  inch: string;
  mm: string;
  rate: string;
  bagPacking: string;
  innerPacking: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  rows: ProductRow[];
}

// Source: Flowin Price list 2026.pdf, PDF page 2, uPVC plumbing fittings.
// The PDF prints rates with "=" as a decimal separator; these verified strings use ".".
// Keep printed blank cells as empty strings. Do not derive packing or rate values.
export const upvcElbows: ProductVariant[] = [
  {
    id: 'elbow',
    name: 'Elbow',
    rows: [
      { inch: '1/2″', mm: '15', rate: '7.50', bagPacking: '100 × 6', innerPacking: '600' },
      { inch: '3/4″', mm: '20', rate: '13.20', bagPacking: '50 × 7', innerPacking: '350' },
      { inch: '1″', mm: '25', rate: '17.80', bagPacking: '40 × 5', innerPacking: '200' },
      // The source prints 20 × 6 and 220; preserve both pending client review.
      { inch: '1 1/4″', mm: '32', rate: '29.00', bagPacking: '20 × 6', innerPacking: '220' },
      { inch: '1 1/2″', mm: '40', rate: '45.00', bagPacking: '20 × 4', innerPacking: '80' },
      { inch: '2″', mm: '50', rate: '68.00', bagPacking: '10 × 5', innerPacking: '50' },
      { inch: '2 1/2″', mm: '65', rate: '137.50', bagPacking: '3 × 8', innerPacking: '24' },
      { inch: '3″', mm: '80', rate: '260.00', bagPacking: '2 × 5', innerPacking: '10' },
      { inch: '4″', mm: '100', rate: '358.00', bagPacking: '2 × 5', innerPacking: '10' },
    ],
  },
  {
    id: '45-degree-elbow',
    name: '45° elbow',
    rows: [
      { inch: '1/2″', mm: '15', rate: '7.00', bagPacking: '100 × 6', innerPacking: '600' },
      { inch: '3/4″', mm: '20', rate: '13.00', bagPacking: '50 × 8', innerPacking: '400' },
      { inch: '1″', mm: '25', rate: '17.00', bagPacking: '40 × 6', innerPacking: '240' },
      { inch: '1 1/4″', mm: '32', rate: '27.00', bagPacking: '25 × 6', innerPacking: '150' },
      { inch: '1 1/2″', mm: '40', rate: '36.00', bagPacking: '20 × 5', innerPacking: '100' },
      { inch: '2″', mm: '50', rate: '58.00', bagPacking: '10 × 6', innerPacking: '60' },
      { inch: '2 1/2″', mm: '65', rate: '150.00', bagPacking: '5 × 5', innerPacking: '25' },
      { inch: '3″', mm: '80', rate: '212.00', bagPacking: '4 × 5', innerPacking: '20' },
      { inch: '4″', mm: '100', rate: '364.00', bagPacking: '2 × 5', innerPacking: '10' },
    ],
  },
];

// Source: Flowin Price list 2026.pdf, PDF page 2, uPVC plumbing fittings.
// Reducing tee is printed on page 3 and is intentionally not included here.
export const upvcTees: ProductVariant[] = [
  {
    id: 'tee',
    name: 'Tee',
    rows: [
      { inch: '1/2″', mm: '15', rate: '12.00', bagPacking: '50 × 8', innerPacking: '400' },
      { inch: '3/4″', mm: '20', rate: '16.80', bagPacking: '25 × 10', innerPacking: '250' },
      { inch: '1″', mm: '25', rate: '28.00', bagPacking: '25 × 5', innerPacking: '125' },
      { inch: '1 1/4″', mm: '32', rate: '37.00', bagPacking: '10 × 8', innerPacking: '80' },
      { inch: '1 1/2″', mm: '40', rate: '47.00', bagPacking: '10 × 6', innerPacking: '60' },
      { inch: '2″', mm: '50', rate: '78.00', bagPacking: '6 × 5', innerPacking: '30' },
      { inch: '2 1/2″', mm: '65', rate: '256.00', bagPacking: '2 × 7', innerPacking: '14' },
      { inch: '3″', mm: '80', rate: '354.00', bagPacking: '1 × 10', innerPacking: '10' },
      { inch: '4″', mm: '100', rate: '514.00', bagPacking: '1 × 5', innerPacking: '5' },
    ],
  },
  {
    id: 'cross-tee',
    name: 'Cross tee',
    rows: [
      { inch: '1/2″', mm: '15', rate: '16.00', bagPacking: '25 × 10', innerPacking: '250' },
      { inch: '3/4″', mm: '20', rate: '20.00', bagPacking: '25 × 6', innerPacking: '150' },
      { inch: '1″', mm: '25', rate: '38.00', bagPacking: '25 × 4', innerPacking: '100' },
    ],
  },
];

// Source: Flowin Price list 2026.pdf, PDF page 3, uPVC reducing tee.
// Two 2 1/2-inch rows have blank bag and inner packing cells in print.
export const upvcReducingTees: ProductVariant[] = [
  {
    id: 'reducing-tee',
    name: 'Reducing tee',
    rows: [
      { inch: '1″ × 3/4″', mm: '25 × 20', rate: '26.80', bagPacking: '25 × 6', innerPacking: '150' },
      { inch: '1″ × 1/2″', mm: '25 × 15', rate: '28.00', bagPacking: '25 × 6', innerPacking: '150' },
      { inch: '3/4″ × 1/2″', mm: '20 × 15', rate: '15.30', bagPacking: '25 × 10', innerPacking: '250' },
      { inch: '1 1/4″ × 3/4″', mm: '32 × 20', rate: '36.00', bagPacking: '10 × 6', innerPacking: '60' },
      { inch: '1 1/4″ × 1″', mm: '32 × 25', rate: '37.00', bagPacking: '10 × 8', innerPacking: '80' },
      { inch: '1 1/2″ × 1/2″', mm: '40 × 15', rate: '40.00', bagPacking: '10 × 7', innerPacking: '70' },
      { inch: '1 1/2″ × 3/4″', mm: '40 × 20', rate: '42.00', bagPacking: '10 × 7', innerPacking: '70' },
      { inch: '1 1/2″ × 1″', mm: '40 × 25', rate: '43.00', bagPacking: '10 × 6', innerPacking: '60' },
      { inch: '1 1/2″ × 1 1/4″', mm: '40 × 32', rate: '44.00', bagPacking: '10 × 6', innerPacking: '60' },
      { inch: '2″ × 1/2″', mm: '50 × 15', rate: '87.00', bagPacking: '6 × 5', innerPacking: '30' },
      { inch: '2″ × 3/4″', mm: '50 × 20', rate: '87.80', bagPacking: '6 × 5', innerPacking: '30' },
      { inch: '2″ × 1″', mm: '50 × 25', rate: '91.50', bagPacking: '6 × 5', innerPacking: '30' },
      { inch: '2″ × 1 1/4″', mm: '50 × 32', rate: '93.80', bagPacking: '6 × 5', innerPacking: '30' },
      { inch: '2″ × 1 1/2″', mm: '50 × 40', rate: '95.60', bagPacking: '6 × 5', innerPacking: '30' },
      { inch: '2 1/2″ × 1″', mm: '65 × 25', rate: '216.00', bagPacking: '', innerPacking: '' },
      { inch: '2 1/2″ × 1 1/2″', mm: '65 × 40', rate: '229.00', bagPacking: '', innerPacking: '' },
      { inch: '2 1/2″ × 2″', mm: '65 × 50', rate: '237.00', bagPacking: '4 × 5', innerPacking: '20' },
      { inch: '3″ × 2″', mm: '80 × 50', rate: '327.00', bagPacking: '2 × 5', innerPacking: '10' },
      { inch: '4″ × 2″', mm: '100 × 50', rate: '481.00', bagPacking: '1 × 5', innerPacking: '5' },
      { inch: '4″ × 3″', mm: '100 × 80', rate: '500.00', bagPacking: '1 × 5', innerPacking: '5' },
    ],
  },
];

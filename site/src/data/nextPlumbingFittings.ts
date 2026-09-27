import type { ProductVariant } from './productFamilies';

// Revised FPPL 2026, PDF page 4. Values checked against the rendered page.
export const upvcAdditionalFittings: ProductVariant[] = [
  { id: 'reducer-coupler', name: 'Reducer coupler', rows: [
    { inch: '1″ × 1/2″', mm: '25 × 15', rate: '12.00', bagPacking: '50 × 7', innerPacking: '350' },
    { inch: '1″ × 3/4″', mm: '25 × 20', rate: '14.00', bagPacking: '50 × 7', innerPacking: '350' },
    { inch: '3/4″ × 1/2″', mm: '20 × 15', rate: '8.80', bagPacking: '50 × 10', innerPacking: '500' },
    { inch: '2″ × 1″', mm: '50 × 25', rate: '29.30', bagPacking: '20 × 5', innerPacking: '100' },
    { inch: '2″ × 1 1/2″', mm: '50 × 40', rate: '33.80', bagPacking: '15 × 5', innerPacking: '75' },
    { inch: '2″ × 3/4″', mm: '50 × 20', rate: '30.40', bagPacking: '20 × 5', innerPacking: '100' },
    { inch: '2″ × 1/2″', mm: '50 × 15', rate: '31.50', bagPacking: '20 × 5', innerPacking: '100' },
    { inch: '1 1/4″ × 1/2″', mm: '32 × 15', rate: '16.00', bagPacking: '32 × 8', innerPacking: '256' },
    { inch: '1 1/4″ × 3/4″', mm: '32 × 20', rate: '19.00', bagPacking: '32 × 8', innerPacking: '256' },
    { inch: '1 1/4″ × 1″', mm: '32 × 25', rate: '20.00', bagPacking: '25 × 6', innerPacking: '150' },
    { inch: '1 1/2″ × 1/2″', mm: '40 × 15', rate: '21.00', bagPacking: '30 × 7', innerPacking: '210' },
    { inch: '1 1/2″ × 3/4″', mm: '40 × 20', rate: '22.00', bagPacking: '30 × 7', innerPacking: '210' },
    { inch: '1 1/2″ × 1″', mm: '40 × 25', rate: '24.00', bagPacking: '25 × 5', innerPacking: '125' },
    { inch: '1 1/2″ × 1 1/4″', mm: '40 × 32', rate: '25.00', bagPacking: '25 × 7', innerPacking: '175' },
    { inch: '3″ × 2″', mm: '80 × 50', rate: '140.00', bagPacking: '6 × 6', innerPacking: '36' },
    { inch: '3″ × 2 1/2″', mm: '80 × 65', rate: '152.00', bagPacking: '8 × 5', innerPacking: '40' },
  ] },
  { id: 'endcap', name: 'End cap', rows: [
    { inch: '1/2″', mm: '15', rate: '4.00', bagPacking: '100 × 12', innerPacking: '1200' },
    { inch: '3/4″', mm: '20', rate: '7.00', bagPacking: '50 × 14', innerPacking: '700' },
    { inch: '1″', mm: '25', rate: '8.50', bagPacking: '50 × 10', innerPacking: '500' },
    { inch: '1 1/4″', mm: '32', rate: '17.00', bagPacking: '40 × 7', innerPacking: '280' },
    { inch: '1 1/2″', mm: '40', rate: '21.00', bagPacking: '25 × 8', innerPacking: '200' },
    { inch: '2″', mm: '50', rate: '29.00', bagPacking: '20 × 7', innerPacking: '140' },
    { inch: '2 1/2″', mm: '65', rate: '108.00', bagPacking: '10 × 5', innerPacking: '50' },
    { inch: '3″', mm: '80', rate: '125.00', bagPacking: '8 × 5', innerPacking: '40' },
    { inch: '4″', mm: '100', rate: '262.00', bagPacking: '3 × 7', innerPacking: '21' },
  ] },
  { id: 'reducer-bush', name: 'Reducer bush', rows: [
    { inch: '3/4″ × 1/2″', mm: '20 × 15', rate: '3.00', bagPacking: '150 × 7', innerPacking: '1050' },
    { inch: '1″ × 1/2″', mm: '25 × 15', rate: '6.80', bagPacking: '100 × 7', innerPacking: '700' },
    { inch: '1″ × 3/4″', mm: '25 × 20', rate: '5.00', bagPacking: '100 × 7', innerPacking: '700' },
    { inch: '1 1/4″ × 3/4″', mm: '32 × 20', rate: '15.00', bagPacking: '50 × 7', innerPacking: '350' },
    { inch: '1 1/4″ × 1″', mm: '32 × 25', rate: '10.10', bagPacking: '50 × 7', innerPacking: '350' },
    { inch: '1 1/2″ × 3/4″', mm: '40 × 20', rate: '18.40', bagPacking: '40 × 6', innerPacking: '240' },
    { inch: '1 1/2″ × 1″', mm: '40 × 25', rate: '19.10', bagPacking: '40 × 7', innerPacking: '280' },
  ] },
];

// Revised FPPL 2026, PDF pages 7-8. The tee/coupler and reducing elbow
// are deliberately separate printed tables despite sharing this route.
export const cpvcAdditionalFittings: ProductVariant[] = [
  { id: 'tee', name: 'Tee', sourcePage: 7, rows: [
    { inch: '3/4″', mm: '20', rate: '10.80', bagPacking: '30 × 10', innerPacking: '300' },
    { inch: '1″', mm: '25', rate: '20.00', bagPacking: '20 × 7', innerPacking: '140' },
    { inch: '1 1/4″', mm: '32', rate: '40.00', bagPacking: '10 × 8', innerPacking: '80' },
    { inch: '1 1/2″', mm: '40', rate: '56.00', bagPacking: '5 × 10', innerPacking: '50' },
    { inch: '2″', mm: '50', rate: '128.30', bagPacking: '3 × 8', innerPacking: '24' },
    { inch: '2 1/2″', mm: '65', rate: '422.00', bagPacking: '1 × 8', innerPacking: '8' },
    { inch: '3″', mm: '80', rate: '582.00', bagPacking: '1 × 5', innerPacking: '5' },
    { inch: '4″', mm: '100', rate: '845.00', bagPacking: '1 × 3', innerPacking: '3' },
  ] },
  { id: 'coupler', name: 'Coupler', sourcePage: 7, rows: [
    { inch: '3/4″', mm: '20', rate: '5.50', bagPacking: '60 × 10', innerPacking: '600' },
    { inch: '1″', mm: '25', rate: '10.50', bagPacking: '30 × 10', innerPacking: '300' },
    { inch: '1 1/4″', mm: '32', rate: '18.00', bagPacking: '20 × 9', innerPacking: '180' },
    { inch: '1 1/2″', mm: '40', rate: '26.00', bagPacking: '10 × 11', innerPacking: '110' },
    { inch: '2″', mm: '50', rate: '60.80', bagPacking: '5 × 10', innerPacking: '50' },
    { inch: '2 1/2″', mm: '65', rate: '189.00', bagPacking: '5 × 6', innerPacking: '30' },
    { inch: '3″', mm: '80', rate: '253.00', bagPacking: '2 × 10', innerPacking: '20' },
    { inch: '4″', mm: '100', rate: '533.00', bagPacking: '1 × 6', innerPacking: '6' },
  ] },
  { id: 'reducing-elbow', name: 'Reducing elbow', sourcePage: 7, rows: [
    { inch: '1″ × 3/4″', mm: '25 × 20', rate: '16.00', bagPacking: '30 × 9', innerPacking: '270' },
    { inch: '1 1/4″ × 3/4″', mm: '32 × 20', rate: '23.60', bagPacking: '15 × 10', innerPacking: '150' },
    { inch: '1 1/4″ × 1″', mm: '32 × 25', rate: '25.00', bagPacking: '15 × 9', innerPacking: '135' },
    { inch: '1 1/2″ × 3/4″', mm: '40 × 20', rate: '40.00', bagPacking: '10 × 10', innerPacking: '100' },
    { inch: '1 1/2″ × 1″', mm: '40 × 25', rate: '35.00', bagPacking: '10 × 9', innerPacking: '90' },
    { inch: '1 1/2″ × 1 1/4″', mm: '40 × 32', rate: '40.00', bagPacking: '8 × 10', innerPacking: '80' },
  ] },
];

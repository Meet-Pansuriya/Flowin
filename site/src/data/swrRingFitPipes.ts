// Source: revised Flowin FPPL Price List 2026, PDF page 11, SWR PIPE (RING FIT).
// The PDF prints some decimal separators as '='; values below preserve the
// printed digits while presenting that mark as a decimal point for readability.
// No currency or packing quantity is inferred from these pipe tables.
export interface SwrRingFitPipeGroup {
  id: string;
  length: string;
  feet: string;
  rows: { inch: string; mm: string; singleSocketRate: string; doubleSocketRate: string }[];
}

export const swrRingFitPipes: SwrRingFitPipeGroup[] = [
  { id: 'six-metre', length: '6 m', feet: '20 feet', rows: [
    { inch: '2 1/2″', mm: '75', singleSocketRate: '594.20', doubleSocketRate: '603.80' },
    { inch: '4″', mm: '110', singleSocketRate: '1090.40', doubleSocketRate: '1103.80' },
  ] },
  { id: 'three-metre', length: '3 m', feet: '10 feet', rows: [
    { inch: '2 1/2″', mm: '75', singleSocketRate: '301.90', doubleSocketRate: '311.50' },
    { inch: '4″', mm: '110', singleSocketRate: '551.90', doubleSocketRate: '565.40' },
  ] },
  { id: 'one-point-eight-metre', length: '1.8 m', feet: '6 feet', rows: [
    { inch: '2 1/2″', mm: '75', singleSocketRate: '184.60', doubleSocketRate: '194.20' },
    { inch: '4″', mm: '110', singleSocketRate: '336.50', doubleSocketRate: '350.00' },
  ] },
  { id: 'one-point-two-metre', length: '1.2 m', feet: '4 feet', rows: [
    { inch: '2 1/2″', mm: '75', singleSocketRate: '126.90', doubleSocketRate: '136.50' },
    { inch: '4″', mm: '110', singleSocketRate: '228.90', doubleSocketRate: '242.31' },
  ] },
  { id: 'zero-point-nine-metre', length: '0.9 m', feet: '3 feet', rows: [
    { inch: '2 1/2″', mm: '75', singleSocketRate: '98.10', doubleSocketRate: '107.70' },
    { inch: '4″', mm: '110', singleSocketRate: '175.00', doubleSocketRate: '188.50' },
  ] },
  { id: 'zero-point-six-metre', length: '0.6 m', feet: '2 feet', rows: [
    { inch: '2 1/2″', mm: '75', singleSocketRate: '69.20', doubleSocketRate: '79.00' },
    { inch: '4″', mm: '110', singleSocketRate: '121.10', doubleSocketRate: '134.60' },
  ] },
];

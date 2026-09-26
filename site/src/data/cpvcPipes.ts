export interface CpvcPipeRow {
  inch: string;
  mm: string;
  bagPacking: string;
  sdr11Rate: string;
  sdr135Rate: string;
}

export interface CpvcPipeGroup {
  id: string;
  title: string;
  length: string;
  note: string;
  rows: CpvcPipeRow[];
}

// Source: Flowin Price list 2026.pdf, PDF page 6, two NON ISI ASTM 2846 tables.
// Printed rate precision is kept verbatim. The ISI and F-441 groups are not included.
export const cpvcNonIsiPipes: CpvcPipeGroup[] = [
  {
    id: 'non-isi-three-metre',
    title: 'Non-ISI-labelled / 3 m',
    length: '3 m',
    note: 'Printed heading: CPVC PIPE NON ISI ASTM 2846 / 3 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '75', sdr11Rate: '91.70', sdr135Rate: '73.30' },
      { inch: '3/4″', mm: '20', bagPacking: '50', sdr11Rate: '142.10', sdr135Rate: '121.50' },
      { inch: '1″', mm: '25', bagPacking: '30', sdr11Rate: '229.20', sdr135Rate: '199.40' },
      { inch: '1 1/4″', mm: '32', bagPacking: '20', sdr11Rate: '343.80', sdr135Rate: '293.30' },
      { inch: '1 1/2″', mm: '40', bagPacking: '15', sdr11Rate: '501.00', sdr135Rate: '410.00' },
      { inch: '2″', mm: '50', bagPacking: '10', sdr11Rate: '900.00', sdr135Rate: '750.00' },
    ],
  },
  {
    id: 'non-isi-five-metre',
    title: 'Non-ISI-labelled / 5 m',
    length: '5 m',
    note: 'Printed heading: CPVC PIPE NON ISI ASTM 2846 / 5 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '50', sdr11Rate: '153.50', sdr135Rate: '121.5' },
      { inch: '3/4″', mm: '20', bagPacking: '40', sdr11Rate: '229.20', sdr135Rate: '201.7' },
      { inch: '1″', mm: '25', bagPacking: '25', sdr11Rate: '382.70', sdr135Rate: '332.3' },
      { inch: '1 1/4″', mm: '32', bagPacking: '15', sdr11Rate: '572.90', sdr135Rate: '448.1' },
      { inch: '1 1/2″', mm: '40', bagPacking: '10', sdr11Rate: '840', sdr135Rate: '688' },
      { inch: '2″', mm: '50', bagPacking: '8', sdr11Rate: '1500', sdr135Rate: '1250' },
    ],
  },
];

import type { SchedulePipeGroup } from './schedulePipes';

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
// Printed rate precision is kept verbatim. The F-441 group is not included here.
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

// Source: Flowin Price list 2026.pdf, PDF page 6, two ISI ASTM 2846 tables.
// "ISI" is the catalogue's printed label, not a verified certification claim.
export const cpvcIsiPipes: CpvcPipeGroup[] = [
  {
    id: 'isi-three-metre',
    title: 'ISI-labelled / 3 m',
    length: '3 m',
    note: 'Printed heading: CPVC PIPE ISI ASTM 2846 / 3 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '75', sdr11Rate: '104.20', sdr135Rate: '83.30' },
      { inch: '3/4″', mm: '20', bagPacking: '50', sdr11Rate: '161.50', sdr135Rate: '138.00' },
      { inch: '1″', mm: '25', bagPacking: '30', sdr11Rate: '260.40', sdr135Rate: '226.60' },
      { inch: '1 1/4″', mm: '32', bagPacking: '20', sdr11Rate: '390.60', sdr135Rate: '333.30' },
      { inch: '1 1/2″', mm: '40', bagPacking: '15', sdr11Rate: '569.00', sdr135Rate: '460.00' },
      { inch: '2″', mm: '50', bagPacking: '10', sdr11Rate: '1013.00', sdr135Rate: '844.00' },
    ],
  },
  {
    id: 'isi-five-metre',
    title: 'ISI-labelled / 5 m',
    length: '5 m',
    note: 'Printed heading: CPVC PIPE ISI ASTM 2846 / 5 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '50', sdr11Rate: '173.60', sdr135Rate: '138.90' },
      { inch: '3/4″', mm: '20', bagPacking: '40', sdr11Rate: '269.10', sdr135Rate: '230.00' },
      { inch: '1″', mm: '25', bagPacking: '25', sdr11Rate: '434.00', sdr135Rate: '377.60' },
      { inch: '1 1/4″', mm: '32', bagPacking: '15', sdr11Rate: '651.00', sdr135Rate: '555.60' },
      { inch: '1 1/2″', mm: '40', bagPacking: '10', sdr11Rate: '948.00', sdr135Rate: '767.00' },
      { inch: '2″', mm: '50', bagPacking: '8', sdr11Rate: '1688.00', sdr135Rate: '1406.00' },
    ],
  },
];

// Source: Flowin Price list 2026.pdf, PDF page 6, two ASTM F-441-labelled tables.
// These larger-size SCH-40/SCH-80 rates are separate from the SDR groups above.
export const cpvcSchedulePipes: SchedulePipeGroup[] = [
  {
    id: 'f441-three-metre',
    title: 'ASTM F-441-labelled / 3 m',
    length: '3 m',
    note: 'Printed heading: CPVC PIPE AS PER ASTM F-441 / 3 MTR.',
    rows: [
      { inch: '2 1/2″', mm: '65', bagPacking: '5', sch40Rate: '1875', sch80Rate: '2400' },
      { inch: '3″', mm: '80', bagPacking: '3', sch40Rate: '2437.5', sch80Rate: '3188' },
      { inch: '4″', mm: '100', bagPacking: '2', sch40Rate: '3375', sch80Rate: '4688' },
    ],
  },
  {
    id: 'f441-five-metre',
    title: 'ASTM F-441-labelled / 5 m',
    length: '5 m',
    note: 'Printed heading: CPVC PIPE AS PER ASTM F-441 / 5 MTR.',
    rows: [
      { inch: '2 1/2″', mm: '65', bagPacking: '5', sch40Rate: '3125', sch80Rate: '4000' },
      { inch: '3″', mm: '80', bagPacking: '3', sch40Rate: '4063', sch80Rate: '5314' },
      { inch: '4″', mm: '100', bagPacking: '2', sch40Rate: '5625', sch80Rate: '7814' },
    ],
  },
];

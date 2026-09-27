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

// Source: revised Flowin FPPL Price List 2026, PDF page 7, two NON ISI ASTM 2846 tables.
// Printed rate precision is kept verbatim. The F-441 group is not included here.
export const cpvcNonIsiPipes: CpvcPipeGroup[] = [
  {
    id: 'non-isi-three-metre',
    title: 'Non-ISI-labelled / 3 m',
    length: '3 m',
    note: 'Printed heading: CPVC PIPE NON ISI ASTM 2846 / 3 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '75', sdr11Rate: '100.00', sdr135Rate: '80.00' },
      { inch: '3/4″', mm: '20', bagPacking: '50', sdr11Rate: '155.00', sdr135Rate: '132.00' },
      { inch: '1″', mm: '25', bagPacking: '30', sdr11Rate: '250.00', sdr135Rate: '218.00' },
      { inch: '1 1/4″', mm: '32', bagPacking: '20', sdr11Rate: '375.00', sdr135Rate: '320.00' },
      { inch: '1 1/2″', mm: '40', bagPacking: '15', sdr11Rate: '546.00', sdr135Rate: '442.00' },
      { inch: '2″', mm: '50', bagPacking: '10', sdr11Rate: '972.00', sdr135Rate: '810.00' },
    ],
  },
  {
    id: 'non-isi-five-metre',
    title: 'Non-ISI-labelled / 5 m',
    length: '5 m',
    note: 'Printed heading: CPVC PIPE NON ISI ASTM 2846 / 5 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '50', sdr11Rate: '166.70', sdr135Rate: '133.30' },
      { inch: '3/4″', mm: '20', bagPacking: '40', sdr11Rate: '258.00', sdr135Rate: '220.80' },
      { inch: '1″', mm: '25', bagPacking: '25', sdr11Rate: '416.00', sdr135Rate: '362.00' },
      { inch: '1 1/4″', mm: '32', bagPacking: '15', sdr11Rate: '625.00', sdr135Rate: '533.00' },
      { inch: '1 1/2″', mm: '40', bagPacking: '10', sdr11Rate: '910.00', sdr135Rate: '736.00' },
      { inch: '2″', mm: '50', bagPacking: '8', sdr11Rate: '1620.00', sdr135Rate: '1350.00' },
    ],
  },
];

// Source: revised Flowin FPPL Price List 2026, PDF page 7, two ISI ASTM 2846 tables.
// "ISI" is the catalogue's printed label, not a verified certification claim.
export const cpvcIsiPipes: CpvcPipeGroup[] = [
  {
    id: 'isi-three-metre',
    title: 'ISI-labelled / 3 m',
    length: '3 m',
    note: 'Printed heading: CPVC PIPE ISI ASTM 2846 / 3 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '75', sdr11Rate: '108.00', sdr135Rate: '86.40' },
      { inch: '3/4″', mm: '20', bagPacking: '50', sdr11Rate: '168.00', sdr135Rate: '143.00' },
      { inch: '1″', mm: '25', bagPacking: '30', sdr11Rate: '270.00', sdr135Rate: '235.00' },
      { inch: '1 1/4″', mm: '32', bagPacking: '20', sdr11Rate: '405.00', sdr135Rate: '346.00' },
      { inch: '1 1/2″', mm: '40', bagPacking: '15', sdr11Rate: '588.00', sdr135Rate: '476.00' },
      { inch: '2″', mm: '50', bagPacking: '10', sdr11Rate: '1044.00', sdr135Rate: '870.00' },
    ],
  },
  {
    id: 'isi-five-metre',
    title: 'ISI-labelled / 5 m',
    length: '5 m',
    note: 'Printed heading: CPVC PIPE ISI ASTM 2846 / 5 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '50', sdr11Rate: '180.00', sdr135Rate: '144.00' },
      { inch: '3/4″', mm: '20', bagPacking: '40', sdr11Rate: '279.00', sdr135Rate: '225.00' },
      { inch: '1″', mm: '25', bagPacking: '25', sdr11Rate: '450.00', sdr135Rate: '392.00' },
      { inch: '1 1/4″', mm: '32', bagPacking: '15', sdr11Rate: '675.00', sdr135Rate: '575.00' },
      { inch: '1 1/2″', mm: '40', bagPacking: '10', sdr11Rate: '980.00', sdr135Rate: '792.00' },
      { inch: '2″', mm: '50', bagPacking: '8', sdr11Rate: '1740.00', sdr135Rate: '1450.00' },
    ],
  },
];

// Source: revised Flowin FPPL Price List 2026, PDF page 7, two ASTM F-441-labelled tables.
// These larger-size SCH-40/SCH-80 rates are separate from the SDR groups above.
export const cpvcSchedulePipes: SchedulePipeGroup[] = [
  {
    id: 'f441-three-metre',
    title: 'ASTM F-441-labelled / 3 m',
    length: '3 m',
    note: 'Printed heading: CPVC PIPE AS PER ASTM F-441 / 3 MTR.',
    rows: [
      { inch: '2 1/2″', mm: '65', bagPacking: '5', sch40Rate: '1875', sch80Rate: '2400' },
      { inch: '3″', mm: '80', bagPacking: '3', sch40Rate: '2437', sch80Rate: '3188' },
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

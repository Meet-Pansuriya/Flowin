import type { SchedulePipeGroup } from './schedulePipes';

// Source: revised Flowin FPPL Price List 2026, PDF page 3, uPVC plumbing pipes.
// The first two printed headings say SCH-40, but both tables have SCH-40 and SCH-80 rates.
// Rates are copied as strings, without an inferred currency. Empty source cells stay empty.
export const upvcPipeGroups: SchedulePipeGroup[] = [
  {
    id: 'three-metre',
    title: 'uPVC pipe SCH-40 / 3 m',
    length: '3 m',
    note: 'Printed catalogue heading: UPVC PIPE SCH-40 / 3 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '50', sch40Rate: '115.60', sch80Rate: '138.80' },
      { inch: '3/4″', mm: '20', bagPacking: '35', sch40Rate: '146.50', sch80Rate: '192.70' },
      { inch: '1″', mm: '25', bagPacking: '25', sch40Rate: '215.80', sch80Rate: '269.80' },
      { inch: '1 1/4″', mm: '32', bagPacking: '15', sch40Rate: '308.30', sch80Rate: '385.40' },
      { inch: '1 1/2″', mm: '40', bagPacking: '15', sch40Rate: '362.30', sch80Rate: '462.50' },
      { inch: '2″', mm: '50', bagPacking: '10', sch40Rate: '462.50', sch80Rate: '616.70' },
    ],
  },
  {
    id: 'six-metre',
    title: 'uPVC pipe SCH-40 / 6 m',
    length: '6 m',
    note: 'Printed catalogue heading: UPVC PIPE SCH-40 / 6 MTR.',
    rows: [
      { inch: '1/2″', mm: '15', bagPacking: '30', sch40Rate: '231.20', sch80Rate: '277.60' },
      { inch: '3/4″', mm: '20', bagPacking: '25', sch40Rate: '293.00', sch80Rate: '385.40' },
      { inch: '1″', mm: '25', bagPacking: '15', sch40Rate: '431.60', sch80Rate: '539.60' },
      { inch: '1 1/4″', mm: '32', bagPacking: '10', sch40Rate: '616.60', sch80Rate: '770.80' },
      { inch: '1 1/2″', mm: '40', bagPacking: '10', sch40Rate: '724.60', sch80Rate: '925.00' },
      { inch: '2″', mm: '50', bagPacking: '8', sch40Rate: '925.00', sch80Rate: '1233.40' },
    ],
  },
  {
    id: 'astm-three-metre',
    title: 'ASTM F-441-labelled / 3 m',
    length: '3 m',
    note: 'Printed catalogue heading: UPVC PIPE AS PER ASTM F-441 / 3 MTR.',
    rows: [
      { inch: '2 1/2″', mm: '65', bagPacking: '5', sch40Rate: '1100', sch80Rate: '1408' },
      { inch: '3″', mm: '80', bagPacking: '3', sch40Rate: '1430', sch80Rate: '1870' },
      { inch: '4″', mm: '100', bagPacking: '2', sch40Rate: '1980', sch80Rate: '2750' },
    ],
  },
  {
    id: 'astm-six-metre',
    title: 'ASTM F-441-labelled / 6 m',
    length: '6 m',
    note: 'Printed catalogue heading: UPVC PIPE AS PER ASTM F-441 / 6 MTR.',
    rows: [
      { inch: '2 1/2″', mm: '65', bagPacking: '5', sch40Rate: '2200', sch80Rate: '2816' },
      { inch: '3″', mm: '80', bagPacking: '3', sch40Rate: '2860', sch80Rate: '3740' },
      { inch: '4″', mm: '100', bagPacking: '2', sch40Rate: '3960', sch80Rate: '5500' },
    ],
  },
];

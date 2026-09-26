// Shared shape for catalogue pipe tables with separate SCH-40/SCH-80 rates.
// All fields are strings to preserve printed precision and blank cells.
export interface SchedulePipeRow {
  inch: string;
  mm: string;
  bagPacking: string;
  sch40Rate: string;
  sch80Rate: string;
}

export interface SchedulePipeGroup {
  id: string;
  title: string;
  length: string;
  note: string;
  rows: SchedulePipeRow[];
}

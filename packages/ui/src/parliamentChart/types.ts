export interface ParliamentChartOpts {
  innerR: number;
  seatR: number;
}

export interface ParliamentChartParty {
  fill: string;
  seats: number;
}

export interface ParliamentChartInput {
  seats: ParliamentChartParty[];
  opts: ParliamentChartOpts;
  totalSeats: number;
}

export interface ParliamentChartRow {
  x: number;
  y: number;
  r: number;
  fill: string;
}

export type ParliamentChartRows = ParliamentChartRow[][];

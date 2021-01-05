export interface ParliamentChartOpts {
  /**
   * Radius of inner circle. It constitutes an offset from the center.
   */
  innerR?: number;
  /**
   * Radius of a seat circle.
   */
  seatR?: number;
}

export interface ParliamentChartParty {
  /**
   * Fill color of party's seats.
   */
  fill: string;
  /**
   * Number of party's seats.
   */
  seats: number;
  /**
   * Party label.
   */
  label: string;
}

export interface ParliamentChartInput {
  /**
   * List of parties.
   */
  parties: ParliamentChartParty[];
  /**
   * Total number of seats.
   */
  totalSeats: number;
  /**
   * Chart config.
   */
  opts?: ParliamentChartOpts;
}

export interface ParliamentChartSeat {
  /**
   * Seat's x-axis coordinate.
   */
  x: number;
  /**
   * Seat's y-axis coordinate.
   */
  y: number;
  /**
   * Seat's radius.
   */
  r: number;
  /**
   * Seat's fill.
   */
  fill: string;
}

export interface ParliamentChart {
  /**
   * List of seats.
   */
  rows: ParliamentChartSeat[][];
  /**
   * Max value of x coordinate among seats.
   */
  maxX: number;
}

export interface ParliamentChartOpts {
  /**
   * Radius of inner circle. It constitutes an offset from the center.
   */
  innerR?: number;
  /**
   * Radius of a seat circle.
   */
  seatR?: number;
  /**
   * Translates seat by a given value (x axis).
   */
  translateX?: number;
  /*
   * Translates seat by a given value (y axis).
   */
  translateY?: number;
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

export type ParliamentChartRows = ParliamentChartSeat[][];

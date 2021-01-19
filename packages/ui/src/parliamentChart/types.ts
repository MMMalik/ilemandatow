import { ChartValue } from "../chart";

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
   * Distance between two seats.
   */
  dist?: number;
}

export interface ParliamentChartInput {
  /**
   * List of parties.
   */
  parties: ChartValue[];
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
   * Party's unique id.
   */
  id: string;
}

export interface ParliamentGroupedParty {
  seats: ParliamentChartSeat[];
  party: ChartValue;
}

export interface ParliamentChart {
  /**
   * List of parties seats coords.
   */
  groupedParties: ParliamentGroupedParty[];
  /**
   * Max value of x coordinate among seats.
   */
  maxX: number;
}

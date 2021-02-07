import { ElectionResult, ParliamentSeat } from "../types";

export interface DhondtElection {
  /**
   * Election results.
   */
  results: ElectionResult[];
  /**
   * Total number of seats in the parliament.
   */
  totalSeats: number;
  /**
   * Percentage below which parties are excluded from seats assignment.
   */
  threshold?: number;
}

export interface DhondtElectionByDistrict {
  /**
   * Results in each district.
   */
  resultsByDistrict: DhondtElection[];
  /**
   * Percentage below which parties are excluded from seats assignment.
   */
  globalThreshold?: number;
}

export type DhondtQuotient = {
  /**
   * Party identifier.
   */
  party: string;
  /**
   * Quotient - result of dividing number of votes by subsequent natural number.
   */
  quotient: number;
};

export type DhondtGroupedQuotient = {
  [key: string]: {
    /**
     * Number of seats won by the party.
     */
    seats: number;
  };
};

/* eslint-disable-next-line */
export interface DhondtParliamentSeat extends ParliamentSeat {}

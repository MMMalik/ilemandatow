export interface Election {
  /**
   * Election results.
   */
  results: Array<{
    /**
     * Party identifier.
     */
    party: string;
    /**
     * Number of votes party received.
     */
    votes: number;
  }>;
  /**
   * Total number of seats in the parliament.
   */
  totalSeats: number;
}

export type Quotient = {
  /**
   * Party identifier.
   */
  party: string;
  /**
   * Quotient - result of dividing number of votes by subsequent natural number.
   */
  quotient: number;
};

export type GroupedQuotient = {
  [key: string]: {
    /**
     * Number of seats won by the party.
     */
    seats: number;
  };
};

export type ParliamentSeat = {
  /**
   * Party identifier.
   */
  party: string;
  /**
   * Number of seats won by the party.
   */
  seats: number;
};

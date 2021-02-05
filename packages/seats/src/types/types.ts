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

export interface ElectionResult {
  /**
   * Party identifier.
   */
  party: string;
  /**
   * Number of votes party received.
   */
  votes: number;
  /**
   * Any election thresholds will not be applied for this party.
   */
  disableThreshold?: boolean;
}

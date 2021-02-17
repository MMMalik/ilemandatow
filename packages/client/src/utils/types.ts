export interface PartyResult {
  /**
   * Party's identifier.
   */
  id?: string;
  /**
   * Party's result in %.
   */
  result?: number;
  /**
   * Indicates if party's type is `undecided` (placeholder for undecided voters)
   */
  isUndecided?: boolean;
}

export interface PartyWithResult {
  /**
   * Party's identifier.
   */
  id?: string;
  /**
   * Party's name.
   */
  name?: string;
  /**
   * Party's abbreviation.
   */
  abbr?: string;
  /**
   * Party's result.
   */
  result?: number;
  /**
   * Party's color within context of provided theme.
   */
  color?: string;
  /**
   * Party's order in parliament.
   */
  parliamentOrder?: number;
}

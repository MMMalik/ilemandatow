import { DataType } from "../../generated";

export interface SearchConfig {
  /**
   * Limit of results to return.
   */
  limit?: number;
  /**
   * Min length of search phrase to attempt search.
   */
  minLength?: number;
}

export interface SearchResults {
  /**
   * Search phrase.
   */
  phrase?: string;
  /**
   * List of returned polls.
   */
  polls: DataType.PollFragment[];
  /**
   * Total number of polls.
   */
  totalPolls: number;
  /**
   * Indicates that no polls were found.
   */
  noPolls: boolean;
  /**
   * Indicates that search callback was called but search was not made.
   * E.g. search phrase is too short, etc.
   */
  noSearch: boolean;
}

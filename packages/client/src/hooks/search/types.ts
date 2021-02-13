import { DataType } from "../../generated";

export interface SearchResults {
  phrase?: string;
  polls: DataType.PollFragment[];
}

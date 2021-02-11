import { DataType } from "../generated";
import { filterList } from "./filterList";

export const filterNonRegularParties = (
  results: DataType.PollFragment["results"]
) => {
  return filterList(results).filter((r) => r.party?.type === "regular");
};

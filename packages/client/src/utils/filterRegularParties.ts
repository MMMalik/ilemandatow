import { DataType } from "../generated";
import { filterList } from "./filterList";

export const filterRegularParties = (
  results: DataType.PollFragment["results"]
) => {
  return filterList(results).filter(
    (r) =>
      r.party?.type === "other_party_voters" ||
      r.party?.type == "undecided_voters"
  );
};

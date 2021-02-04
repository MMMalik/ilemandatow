import { PollFragment } from "../../types";
import { filterList } from "./filterList";

export const filterRegularParties = (results: PollFragment["results"]) => {
  return filterList(results).filter(
    (r) =>
      r.party?.type === "other_party_voters" ||
      r.party?.type == "undecided_voters"
  );
};

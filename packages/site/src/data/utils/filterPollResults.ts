import { UNDECIDED_PARTY_ID } from "../../constants";
import { PollInfoFragment } from "../../types";
import { filterList } from "./filterList";

export const filterPollResults = (results: PollInfoFragment["results"]) => {
  return filterList(results).filter(
    ({ party }) => party?.id !== UNDECIDED_PARTY_ID
  );
};

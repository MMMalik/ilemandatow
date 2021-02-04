import { PollFragment } from "../../types";
import { filterList } from "./filterList";

export const filterNonRegularParties = (results: PollFragment["results"]) => {
  return filterList(results).filter((r) => r.party?.type === "regular");
};
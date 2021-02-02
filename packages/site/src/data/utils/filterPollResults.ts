import { PollFragment } from "../../types";
import { filterList } from "./filterList";

export const filterPollResults = (results: PollFragment["results"]) => {
  return filterList(results);
};

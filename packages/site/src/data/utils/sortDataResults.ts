import { PollResultFragment } from "../../types";

export const sortDataResults = (
  { result: result1 }: PollResultFragment,
  { result: result2 }: PollResultFragment
) => {
  return (result2 ?? 0) - (result1 ?? 0);
};

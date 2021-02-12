import { DataType } from "../generated";
import { PollResultFragment } from "../generated/operations";

export const sortPollResults = (results: PollResultFragment[]) => {
  return [...results].sort(
    (
      { result: result1 }: DataType.PollResultFragment,
      { result: result2 }: DataType.PollResultFragment
    ) => {
      return (result2 ?? 0) - (result1 ?? 0);
    }
  );
};

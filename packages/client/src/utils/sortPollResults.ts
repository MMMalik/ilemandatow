import { DataType } from "../generated";

export const sortPollResults = (
  { result: result1 }: DataType.PollResultFragment,
  { result: result2 }: DataType.PollResultFragment
) => {
  return (result2 ?? 0) - (result1 ?? 0);
};

import { PollResultFragment } from "@ilemandatow/client";

export const sortPollResults = (
  { result: result1 }: PollResultFragment,
  { result: result2 }: PollResultFragment
) => {
  return (result2 ?? 0) - (result1 ?? 0);
};

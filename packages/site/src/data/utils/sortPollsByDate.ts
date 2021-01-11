import { compareDesc } from "date-fns";
import { PollInfoFragment } from "../../types";

export const sortPollsByDate = (
  { publishedAt: publishedAt1 }: PollInfoFragment,
  { publishedAt: publishedAt2 }: PollInfoFragment
) => {
  return compareDesc(new Date(publishedAt1), new Date(publishedAt2));
};

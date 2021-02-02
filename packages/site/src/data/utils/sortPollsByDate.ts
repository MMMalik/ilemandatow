import { compareDesc } from "date-fns";
import { PollFragment } from "../../types";

export const sortPollsByDate = (
  { publishedAt: publishedAt1 }: PollFragment,
  { publishedAt: publishedAt2 }: PollFragment
) => {
  const date1 = publishedAt1 ? new Date(publishedAt1) : new Date();
  const date2 = publishedAt2 ? new Date(publishedAt2) : new Date();
  return compareDesc(date1, date2);
};

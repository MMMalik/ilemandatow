import { PollFragment } from "../fragments";

export const getPolls = /* GraphQL */ `
  query getPolls($sortBy: [SortPollsBy!], $first: Int, $skip: Int) {
    allPolls(sortBy: $sortBy, first: $first, skip: $skip) {
      ...Poll
    }
    _allPollsMeta {
      count
    }
  }
  ${PollFragment}
`;

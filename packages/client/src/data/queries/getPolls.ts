import { PollFragment } from "../fragments";

export const getPolls = /* GraphQL */ `
  query getPolls(
    $sortBy: [SortPollsBy!]
    $first: Int
    $skip: Int
    $where: PollWhereInput
  ) {
    allPolls(sortBy: $sortBy, first: $first, skip: $skip, where: $where) {
      ...Poll
    }
    _allPollsMeta(where: $where) {
      count
    }
  }
  ${PollFragment}
`;

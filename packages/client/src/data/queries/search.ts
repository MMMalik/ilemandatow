import { PollFragment } from "../fragments";

export const searchQuery = /* GraphQL */ `
  query search($sortBy: [SortPollsBy!], $first: Int, $where: PollWhereInput) {
    allPolls(sortBy: $sortBy, first: $first, where: $where) {
      ...Poll
    }
    _allPollsMeta(where: $where) {
      count
    }
  }
  ${PollFragment}
`;

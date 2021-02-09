export const getAllPolls = /* GraphQL */ `
  query getAllPolls($sortBy: [SortPollsBy!]) {
    allPolls(sortBy: $sortBy) {
      ...Poll
    }
    _allPollsMeta {
      count
    }
  }
`;

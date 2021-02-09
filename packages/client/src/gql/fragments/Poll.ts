export const PollFragment = /* GraphQL */ `
  fragment Poll on Poll {
    id
    publishedAt
    publishedBy {
      ...Publisher
    }
    polledBy {
      ...PollCompany
    }
    source
    results {
      ...PollResult
    }
    pollEndedAt
    pollStartedAt
    participantsCount
    method {
      ...PollMethod
    }
  }
`;

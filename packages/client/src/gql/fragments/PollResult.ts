export const PollResultFragment = /* GraphQL */ `
  fragment PollResult on PollResult {
    result
    party {
      ...Party
    }
  }
`;

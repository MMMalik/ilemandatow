import { PartyFragment } from "./Party";

export const PollResultFragment = /* GraphQL */ `
  fragment PollResult on PollResult {
    result
    party {
      ...Party
    }
  }
  ${PartyFragment}
`;

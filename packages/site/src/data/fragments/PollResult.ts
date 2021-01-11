import { graphql } from "gatsby";

export const PollResult = graphql`
  fragment PollResult on PollsJsonResults {
    result
    party {
      ...PartyInfo
    }
  }
`;

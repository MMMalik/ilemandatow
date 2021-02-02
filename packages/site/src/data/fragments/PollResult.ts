import { graphql } from "gatsby";

export const PollResult = graphql`
  fragment PollResult on IleMandatow_PollResult {
    result
    party {
      ...Party
    }
  }
`;

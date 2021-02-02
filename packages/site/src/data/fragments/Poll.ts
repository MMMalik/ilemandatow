import { graphql } from "gatsby";

export const Poll = graphql`
  fragment Poll on IleMandatow_Poll {
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

import { graphql } from "gatsby";

export const PollResult = graphql`
  fragment PollResult on PollsJsonResults {
    result
    party {
      ...PartyInfo
    }
  }
`;

export const PollInfo = graphql`
  fragment PollInfo on PollsJson {
    id
    publishedAt
    publishedBy {
      ...PublisherInfo
    }
    polledBy {
      ...PollCompanyInfo
    }
    source
    results {
      ...PollResult
    }
    pollEndedAt
    pollStartedAt
    participantsCount
    method
  }
`;

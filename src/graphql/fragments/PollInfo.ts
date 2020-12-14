import { graphql } from "gatsby";

export const PollInfo = graphql`
  fragment PollInfo on PollsJson {
    id
    publishedAt
    publishedBy
    polledBy
    pollStartedAt
    pollEndedAt
    results {
      result
      party {
        ...PartyInfo
      }
    }
  }
`;

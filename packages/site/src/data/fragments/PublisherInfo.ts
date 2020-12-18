import { graphql } from "gatsby";

export const PublisherInfo = graphql`
  fragment PublisherInfo on PublishersJson {
    id
    name
    abbr
  }
`;

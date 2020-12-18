import { graphql } from "gatsby";

export const PartyInfo = graphql`
  fragment PartyInfo on PartiesJson {
    id
    name
    abbr
  }
`;

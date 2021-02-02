import { graphql } from "gatsby";

export const Publisher = graphql`
  fragment Publisher on IleMandatow_Publisher {
    id
    name
    abbr
  }
`;

import { graphql } from "gatsby";

export const DocShort = graphql`
  fragment DocShort on IleMandatow_Doc {
    id
    title
    order
    slug
  }
`;

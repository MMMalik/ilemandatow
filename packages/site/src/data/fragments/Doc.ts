import { graphql } from "gatsby";

export const Doc = graphql`
  fragment Doc on IleMandatow_Doc {
    id
    title
    order
    body
    slug
  }
`;

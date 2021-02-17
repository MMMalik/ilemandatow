import { graphql } from "gatsby";

export const DocSection = graphql`
  fragment DocSection on IleMandatow_DocSection {
    id
    title
    order
    language
    docs(sortBy: order_ASC) {
      ...DocShort
    }
  }
`;

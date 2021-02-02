import { graphql } from "gatsby";

export const PollMethod = graphql`
  fragment PollMethod on IleMandatow_PollMethod {
    id
    name
  }
`;

import { graphql } from "gatsby";

export const PollCompany = graphql`
  fragment PollCompany on IleMandatow_PollCompany {
    id
    name
    abbr
  }
`;

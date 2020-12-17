import { graphql } from "gatsby";

export const PollCompanyInfo = graphql`
  fragment PollCompanyInfo on PollCompaniesJson {
    id
    name
    abbr
  }
`;

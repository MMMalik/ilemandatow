import { graphql } from "gatsby";

export const ElectoralDistrict = graphql`
  fragment ElectoralDistrict on IleMandatow_ElectoralDistrict {
    id
    district
    name
    totalSeats
  }
`;

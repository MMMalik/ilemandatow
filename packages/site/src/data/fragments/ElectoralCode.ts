import { graphql } from "gatsby";

export const ElectoralCode = graphql`
  fragment ElectoralCode on IleMandatow_ElectoralCode {
    id
    inEffectSince
    inEffectTo
    threshold
    totalSeats
    districts {
      ...ElectoralDistrict
    }
  }
`;

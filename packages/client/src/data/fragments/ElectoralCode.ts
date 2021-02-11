export const ElectoralCode = /* GraphQL */ `
  fragment ElectoralCode on ElectoralCode {
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

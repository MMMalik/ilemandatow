export const DocSection = /* GraphQL */ `
  fragment DocSection on DocSection {
    id
    title
    order
    language
    docs(sortBy: order_ASC) {
      ...DocShort
    }
  }
`;

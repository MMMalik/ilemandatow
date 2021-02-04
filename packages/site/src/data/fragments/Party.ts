import { graphql } from "gatsby";

export const Party = graphql`
  fragment Party on IleMandatow_Party {
    id
    name
    abbr
    color
    colorDarkTheme
    type
  }
`;

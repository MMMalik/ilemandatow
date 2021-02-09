import { GraphQLClient } from "graphql-hooks";

export const searchClient = (url: string) =>
  new GraphQLClient({
    url,
  });

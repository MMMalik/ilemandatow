import { GraphQLClient } from "graphql-hooks";
import memCache from "graphql-hooks-memcache";

export const apiClient = (url: string) =>
  new GraphQLClient({
    url,
    cache: memCache(),
  });

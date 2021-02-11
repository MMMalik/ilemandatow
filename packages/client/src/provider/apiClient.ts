import { GraphQLClient } from "graphql-hooks";
import memCache from "graphql-hooks-memcache";

// For SSR use fake `fetch` object to bypass `graphql-hooks` checks
const fetch =
  typeof window !== "undefined"
    ? window.fetch.bind(window)
    : () => Promise.resolve({});

export const apiClient = (url: string) =>
  new GraphQLClient({
    url,
    cache: memCache(),
    fetch,
  });

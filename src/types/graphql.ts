// Generating types directly inside <root>/src triggers infinite loop.
// Therefore, types are generated in <root>/generated and re-exported from here.
export * from "../../generated/graphql";

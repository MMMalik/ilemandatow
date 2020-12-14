module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-tsconfig-paths",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "./types/generated/gatsby-graphql.ts",
        documentPaths: ["./src/**/*.{ts,tsx}"],
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content/",
      },
    },
  ],
};

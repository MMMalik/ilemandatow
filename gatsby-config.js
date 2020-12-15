module.exports = {
  siteMetadata: {
    title: "ilemandatow",
    siteUrl: "https://www.ilemandatow.pl",
    description: "Sondaże parlamentarne i nie tylko",
  },
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
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: "./src/cms/cms.ts",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content/",
      },
    },
  ],
};

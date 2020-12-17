module.exports = {
  siteMetadata: {
    title: "ilemandatow",
    siteUrl: "https://www.ilemandatow.pl",
    description: "Polskie sondaże parlamentarne i nie tylko",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-tsconfig-paths",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "./generated/graphql.ts",
        documentPaths: ["./src/**/*.{ts,tsx}"],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: "./src/cms/cms.ts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content",
        name: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./locales/translations",
        name: "translations",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*.(woff|woff2)": ["Cache-Control: public, max-age=31536000"],
        },
      },
    },
  ],
};

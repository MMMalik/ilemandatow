const pkg = require("./package.json");

module.exports = {
  siteMetadata: {
    title: "ilemandatow",
    siteUrl: "https://www.ilemandatow.pl",
    repoUrl: "https://github.com/mmmalik/ilemandatow",
    description: "Polskie sondaże parlamentarne i nie tylko",
    appVersion: pkg.version,
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `./generated/graphql.ts`,
        documentPaths: [`./src/**/*.{ts,tsx}`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "../content",
        name: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `../locales/translations`,
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

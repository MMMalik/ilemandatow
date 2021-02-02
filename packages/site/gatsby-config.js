const pkg = require("./package.json");
const meta = require("./gatsby/envInfo");

module.exports = {
  siteMetadata: {
    title: "ilemandatow",
    siteUrl: meta.siteUrl,
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
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: meta.host,
        sitemap: meta.siteMap,
        resolveEnv: () => meta.activeEnv,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "IleMandatow",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "ilemandatow",
        // Url to query from
        url: "http://localhost:3000/admin/api",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: "../content",
    //     name: "content",
    //   },
    // },
    // "gatsby-transformer-json",
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

const introspection = require("@ilemandatow/api/generated/introspection.json");
const pkg = require("./package.json");
const meta = require("./gatsby/envInfo");
const { buildClientSchema } = require("graphql");

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
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: meta.host,
        sitemap: meta.siteMap,
        resolveEnv: () => meta.robots,
        env: {
          disallow: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          allow: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "IleMandatow",
        fieldName: "ilemandatow",
        url: meta.apiUrl,
        createSchema: async () => {
          return buildClientSchema(introspection);
        },
      },
    },
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

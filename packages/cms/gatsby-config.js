module.exports = {
  siteMetadata: {
    title: "ilemandatow - cms",
    siteUrl: "https://cms.ilemandatow.pl",
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: "./src/cms/cms.ts",
        publicPath: "",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: null,
        host: null,
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
  ],
};

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
      },
    },
  ],
};

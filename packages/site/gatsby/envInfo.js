const isProd = process.env.ILEMANDATOW_ACTIVE_ENV === "production";
const activeEnv = isProd ? "production" : "development";
const siteUrl = isProd ? "https://www.ilemandatow.pl" : null;
const siteMap = isProd ? `${meta.siteUrl}/sitemap.xml` : null;

module.exports = {
  siteUrl,
  siteMap,
  activeEnv,
};

const isProd = process.env.ILEMANDATOW_ACTIVE_ENV === "production";
const activeEnv = isProd ? "production" : "development";
const siteUrl = isProd
  ? "https://www.ilemandatow.pl"
  : "https://dev.ilemandatow.pl";
const host = isProd ? siteUrl : null;
const siteMap = isProd ? `${host}/sitemap.xml` : null;

module.exports = {
  host,
  siteUrl,
  siteMap,
  activeEnv,
};

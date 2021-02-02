require("dotenv").config();
if (process.env.NODE_ENV === "development") {
}

const allowRobots = process.env.ILEMANDATOW_ALLOW_ROBOTS === "true";
const apiUrl = process.env.ILEMANDATOW_API_URL;
const siteUrl = process.env.ILEMANDATOW_SITE_URL;

module.exports = {
  host: allowRobots ? siteUrl : null,
  siteMap: allowRobots ? `${siteUrl}/sitemap.xml` : null,
  siteUrl,
  apiUrl,
  robots: allowRobots ? "allow" : "disallow",
};

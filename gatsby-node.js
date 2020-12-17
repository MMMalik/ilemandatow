const { onCreatePage } = require("./gatsby/onCreatePage");
const { onCreateWebpackConfig } = require("./gatsby/onCreateWebpackConfig");
const { createPages } = require("./gatsby/createPages");

exports.onCreateWebpackConfig = onCreateWebpackConfig;
exports.onCreatePage = onCreatePage;
exports.createPages = createPages;

const setupEnv = require("./build/config/env").setupEnv;
const keystone = require("./build").default;

setupEnv();

module.exports = keystone;

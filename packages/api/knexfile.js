const setupEnv = require("./build/config/env").setupEnv;
const config = require("./build/config").config;

setupEnv();

module.exports = config.db;

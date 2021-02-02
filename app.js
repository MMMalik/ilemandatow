const path = require("path");

process.env.NODE_ENV = "production";
process.env.API_ENV_PATH = path.join(__dirname, "../.env");
process.argv[2] = "start";
process.argv[3] = "./packages/api/dist";
process.argv[4] = "--entry=./packages/api/index.js";
require("@keystonejs/keystone/bin/cli");

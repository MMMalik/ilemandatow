process.argv[2] = "start";
process.argv[3] = "./packages/api/dist";
process.argv[4] = "--entry=./packages/api/index.js";
require("@keystonejs/keystone/bin/cli");

const path = require("path");

process.argv[2] = "start";
process.argv[3] = path.join(__dirname, "./dist");
process.argv[4] = `--entry=${path.join(__dirname, "./index.js")}`;

require("@keystonejs/keystone/bin/cli");

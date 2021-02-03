const path = require("path");

process.env.NODE_ENV = "production";
process.env.API_ENV_PATH = path.join(__dirname, "../.env");

require("./packages/api/app");

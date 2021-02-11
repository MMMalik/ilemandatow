const { exec, test } = require("shelljs");

const huskyBinExists = test("-f", "node_modules/.bin/husky");

if (huskyBinExists) {
  exec("yarn husky install");
} else {
  // This block is evaluated if `yarn install --production` was run.
  /* eslint-disable-next-line */
  console.warn(
    "`husky` command could not be run. Most likely `husky` is not installed."
  );
}

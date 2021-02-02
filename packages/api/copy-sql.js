const { join } = require("path");
const { cp, mkdir } = require("shelljs");

const src = `${join(__dirname, "./src/scripts/db/raw/*.sql")}`;
const dest = `${join(__dirname, "./build/scripts/db/raw")}`;

// Create dest directory
mkdir("-p", dest);

// Copy SQL files
cp(src, dest);

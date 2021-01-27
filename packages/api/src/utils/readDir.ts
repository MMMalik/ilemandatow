import * as path from "path";
import * as fs from "fs";
import * as util from "util";

const readFileP = util.promisify(fs.readFile);
const readDirP = util.promisify(fs.readdir);

export const readDir = async (dir: string) => {
  const files = await readDirP(dir);
  return Promise.all(
    files.map((fileName) => {
      return readFileP(path.join(dir, fileName), "utf8");
    })
  );
};

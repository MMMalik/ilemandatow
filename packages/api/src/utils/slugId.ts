import slugify from "slugify";
import { customAlphabet } from "nanoid";

const rndSuffix = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, 5);
  return nanoid();
};

const resolvePath = (obj: any, path: string): any => {
  const split = path.split(".");
  const first: string = split[0];

  if (!first || !obj[first]) {
    return "";
  }

  if (split.length === 1) {
    return obj[first];
  }

  return resolvePath(obj[first], split.slice(1).join("."));
};

export const slugId = (fields: string[]) => ({ resolvedData }: any) => {
  const slugBase = fields
    .map((f) => {
      return slugify(resolvePath(resolvedData, f), {
        lower: true,
        strict: true,
      });
    })
    .concat(rndSuffix());
  return slugBase.join("-");
};

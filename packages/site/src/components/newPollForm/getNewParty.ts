import { nanoid } from "nanoid";

export const getNewParty = (name?: string, result?: string, color?: string) => {
  return {
    id: nanoid(10),
    name: name ?? "",
    result: result ?? "0",
    color: color ?? "#000000",
  };
};

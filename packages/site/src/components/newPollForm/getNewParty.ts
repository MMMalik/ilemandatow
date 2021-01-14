import { nanoid } from "nanoid";

export const getNewParty = () => {
  return {
    id: nanoid(),
    name: "",
    result: "0",
    color: "#000000",
  };
};

import { PartyFragment } from "@ilemandatow/client";

export const getPartyColor = (theme: string, party?: PartyFragment) => {
  return (theme === "dark" ? party?.colorDarkTheme : party?.color) ?? "black";
};

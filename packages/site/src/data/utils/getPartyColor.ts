import { PartyInfoFragment } from "../../types";

export const getPartyColor = (theme: string, party?: PartyInfoFragment) => {
  return (theme === "dark" ? party?.colorDarkTheme : party?.color) ?? "black";
};

import { DataType } from "../generated";

export const getPartyColor = (
  theme: string,
  party?: DataType.PartyFragment
) => {
  return (theme === "dark" ? party?.colorDarkTheme : party?.color) ?? "black";
};

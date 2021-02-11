import { SelectOption as SelectOptionType } from "./types";

export const isSelected = (
  opt: SelectOptionType,
  selected: SelectOptionType[]
) => {
  return selected.some((o) => o.value === opt.value);
};

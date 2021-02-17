import { DataType } from "../generated";
import { getPartyColor } from "./getPartyColor";
import { PartyWithResult } from "./types";

export const getPartiesWithResults = (
  results: DataType.PollResultFragment[],
  theme: string
): PartyWithResult[] => {
  return results.map(({ party, result }) => ({
    id: party?.id ?? undefined,
    name: party?.name ?? undefined,
    abbr: party?.abbr ?? undefined,
    result: result ?? undefined,
    parliamentOrder: party?.parliamentOrder ?? 5,
    color: getPartyColor(theme, party ?? undefined),
  }));
};

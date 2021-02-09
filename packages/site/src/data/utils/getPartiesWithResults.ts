import { PollResultFragment } from "@ilemandatow/client";
import { getPartyColor } from "./getPartyColor";

export interface PartyWithResult {
  id?: string;
  name?: string;
  abbr?: string;
  result?: number;
  color?: string;
  parliamentOrder?: number;
}

export const getPartiesWithResults = (
  results: PollResultFragment[],
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

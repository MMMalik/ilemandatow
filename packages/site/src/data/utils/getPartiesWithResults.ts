import { PollResultFragment } from "../../types";
import { getPartyColor } from "./getPartyColor";

export interface PartyWithResult {
  id?: string;
  name?: string;
  abbr?: string;
  result?: number;
  color?: string;
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
    color: getPartyColor(theme, party ?? undefined),
  }));
};

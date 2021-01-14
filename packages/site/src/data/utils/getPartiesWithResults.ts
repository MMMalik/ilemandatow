import { PollResultFragment } from "../../types";
import { getPartyColor } from "./getPartyColor";

export interface PartyWithResult {
  id?: string;
  name?: string;
  result?: number;
  color?: string;
}

export const getPartiesWithResults = (
  results: PollResultFragment[],
  theme: string
): PartyWithResult[] => {
  return results.map(({ party, result }) => ({
    id: party?.id ?? "",
    name: party?.name ?? "",
    result: result ?? 0,
    color: getPartyColor(theme, party ?? undefined),
  }));
};

import { PollResultFragment } from "../../types";

export const getPartyFromResult = (
  results: PollResultFragment[],
  partyId: string
): PollResultFragment | undefined => {
  const result = results.find((r) => partyId === r.party?.id);
  return result;
};

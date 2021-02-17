import { PartyWithResult } from "./types";

export const sortByParliamentOrder = <T extends PartyWithResult>(
  parties: T[]
) => {
  return [...parties].sort(
    (p1, p2) => (p1.parliamentOrder ?? 5) - (p2.parliamentOrder ?? 5)
  );
};

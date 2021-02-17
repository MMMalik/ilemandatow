import { ElectionResult } from "../types";

export const sumVotes = (results: ElectionResult[]) =>
  results.reduce((acc, r) => acc + r.votes, 0);

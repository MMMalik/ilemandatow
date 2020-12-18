export interface Election {
  results: Array<{
    party: string;
    result: number;
  }>;
  threshold: number;
  regions?: string;
}

export type ParliamentSeats = Array<{
  party: string;
  seats: number;
}>;

export const dhondt = (election: Election): ParliamentSeats => {
  return [];
};

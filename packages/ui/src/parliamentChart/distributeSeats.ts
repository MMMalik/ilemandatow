import { ParliamentChartParty } from "./types";

/**
 * Iterates over list of parties and proportionately assigns seats to party for each row.
 *
 * @param parties list of parties' seats
 * @param seatsPerRow list of seats per row
 * @param totalSeats total number of seats
 */
export const distributeSeats = (
  parties: ParliamentChartParty[],
  seatsPerRow: number[],
  totalSeats: number
): string[][] => {
  const seatsTracker = parties.reduce(
    (acc, p) => ({ ...acc, [p.label]: { ...p } }),
    {} as { [key: string]: ParliamentChartParty }
  );
  const rowsTracker = [...seatsPerRow];

  const result = parties.map(({ seats, label, fill }) => {
    const partyResult = seatsPerRow.map((numberOfSeats, i) => {
      const seatsLeft = seatsTracker[label].seats;
      const rowSeatsLeft = rowsTracker[i];
      const baseSeats = Math.round((seats * numberOfSeats) / totalSeats);
      const minSeats = baseSeats < 1 && seatsLeft > 0 ? 1 : baseSeats;
      const partySeats = minSeats > seatsLeft ? seatsLeft : minSeats;
      const rowSeats = partySeats > rowSeatsLeft ? rowSeatsLeft : partySeats;

      // Side-effects: keep track of assigned seats
      seatsTracker[label].seats -= rowSeats;
      rowsTracker[i] -= rowSeats;

      return {
        rowSeats,
        fill,
      };
    });

    // Due to rounding, some seats might be not assigned.
    // Assign them to each row, starting from the lowest.
    while (seatsTracker[label].seats > 0) {
      for (let i = rowsTracker.length - 1; i >= 0; i--) {
        if (rowsTracker[i] > 0 && seatsTracker[label].seats > 0) {
          // Side-effects: keep track of assigned seats
          partyResult[i].rowSeats += 1;
          seatsTracker[label].seats -= 1;
          rowsTracker[i] -= 1;
        }
      }
    }

    return partyResult;
  });

  return seatsPerRow.map((_, i) => {
    return result.reduce((acc, r) => {
      const row = r[i];
      return acc.concat(
        Array.from({ length: row.rowSeats }).map(() => row.fill)
      );
    }, [] as string[]);
  });
};

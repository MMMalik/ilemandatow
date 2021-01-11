import { ParliamentSeat } from "../types";

export const sortBySeats = (
  results: ParliamentSeat[],
  dir: "asc" | "desc" = "desc"
) => {
  return [...results].sort((r1, r2) => {
    const seatsA = r1.seats;
    const seatsB = r2.seats;
    return dir === "desc" ? seatsB - seatsA : seatsA - seatsB;
  });
};

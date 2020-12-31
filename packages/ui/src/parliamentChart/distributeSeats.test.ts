import { distributeSeats } from "./distributeSeats";

describe("distributeSeats", () => {
  it("distributes seats evenly", () => {
    const result = distributeSeats({
      seats: [],
      totalSeats: 100,
      opts: {
        innerR: 20,
        seatR: 5,
      },
    });
    expect(result).toEqual([]);
  });
});

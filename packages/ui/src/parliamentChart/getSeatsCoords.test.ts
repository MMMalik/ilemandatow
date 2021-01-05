import { getSeatsCoords } from "./getSeatsCoords";

describe("getSeatsCoords", () => {
  it("distributes seats evenly", () => {
    const result = getSeatsCoords({
      parties: [],
      totalSeats: 100,
    });
    expect(result.length).toEqual(7);
  });
});

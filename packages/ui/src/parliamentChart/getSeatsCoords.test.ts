import { getSeatsCoords } from "./getSeatsCoords";

describe("getSeatsCoords", () => {
  it("distributes seats evenly", () => {
    const { groupedParties } = getSeatsCoords({
      parties: [
        { id: "P1", fill: "blue", value: 150 },
        { id: "P2", fill: "red", value: 50 },
      ],
      totalSeats: 100,
    });
    expect(groupedParties.length).toEqual(2);
  });
});
